// 1. Parse raw shipment string data into structured objects
function parseShipment(rawData) {
  const parsedItems = [];
  const seenSKUs = new Set();

  for (const rawItem of rawData) {
    const parts = rawItem.split('|');
    const sku = parts[0];
    const name = parts[1];
    const qty = Number(parts[2]);
    const expires = parts[3];
    const zone = parts[4] || 'general';

    if (seenSKUs.has(sku)) continue;

    seenSKUs.add(sku);
    parsedItems.push({ sku, name, qty, expires, zone });
  }

  return parsedItems;
}

// 2. Deep copy the pantry (new array + new objects)
function clonePantry(pantry) {
  return pantry.map(item => ({
    sku: item.sku,
    name: item.name,
    qty: item.qty,
    expires: item.expires,
    zone: item.zone
  }));
}

// 3. Generate restock/discard/donate actions
function planRestock(pantry, shipment) {
  const actions = [];

  for (const shipmentItem of shipment) {
    if (shipmentItem.qty <= 0) {
      actions.push({ type: 'discard', item: shipmentItem });
      continue;
    }

    const itemExists = pantry.some(pantryItem => pantryItem.sku === shipmentItem.sku);

    if (itemExists) {
      actions.push({ type: 'restock', item: shipmentItem });
    } else {
      actions.push({ type: 'donate', item: shipmentItem });
    }
  }

  return actions;
}

// 4. Group actions by storage zone
function groupByZone(actions) {
  const grouped = {};

  for (const action of actions) {
    const zone = action.item.zone;
    if (!grouped[zone]) {
      grouped[zone] = [];
    }
    grouped[zone].push(action);
  }

  return grouped;
}

// ------------------------------
// FULL WORKFLOW + REQUIRED CONSOLE LOG
// ------------------------------
// Sample data (works with any input)
const currentPantry = [
  { sku: 'A1', name: 'Oats', qty: 5, expires: '2025-12-01', zone: 'dry' },
  { sku: 'B2', name: 'Milk', qty: 2, expires: '2025-06-15', zone: 'fridge' }
];

const rawShipment = [
  'A1|Oats|10|2025-12-01|dry',
  'C3|Sugar|0|2026-01-01|dry',
  'D4|Apples|8|2025-07-01|',
  'E5|Juice|6|2025-08-01|fridge'
];

// Process shipment using ALL required functions
const parsedShipment = parseShipment(rawShipment);
const clonedPantry = clonePantry(currentPantry);
const actions = planRestock(clonedPantry, parsedShipment);
const groupedByZones = groupByZone(actions);

// ✅ REQUIRED: Log the grouped actions to the console
console.log(groupedByZones);