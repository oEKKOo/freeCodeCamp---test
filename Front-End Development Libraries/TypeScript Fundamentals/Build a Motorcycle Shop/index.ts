type Category =
  | "Sport"
  | "Cruiser"
  | "Touring"
  | "Dirt"
  | "Adventure"
  | "Naked"
  | "Electric";

interface Motorcycle {
  id: string;
  name: string;
  manufacturer: string;
  category: Category;
  price: number;
  image_url: string;
  created_at: Date;
  description: string;
  year: number;
  engine: string;
}

async function fetchMotorcycles(): Promise<Motorcycle[]> {
  const response = await fetch(
    "https://cdn.freecodecamp.org/curriculum/labs/data/motorcycles.json"
  );

  const data = await response.json();

  return data.map((motorcycle: Motorcycle) => ({
    ...motorcycle,
    created_at: new Date(motorcycle.created_at),
  }));
}

function renderMotorcycleCard(motorcycle: Motorcycle): string {
  return `
    <div class="motorcycle-card">
      <div class="motorcycle-card-image-container">
        <img
          src="${motorcycle.image_url}"
          alt="${motorcycle.name}"
          class="motorcycle-card-image"
        />
        <div class="motorcycle-card-year-badge">${motorcycle.year}</div>
      </div>

      <div class="motorcycle-card-content">
        <div class="motorcycle-card-header">
          <div>
            <h3 class="motorcycle-card-title">${motorcycle.name}</h3>
            <p class="motorcycle-card-manufacturer">${motorcycle.manufacturer}</p>
          </div>
          <span class="motorcycle-card-category">${motorcycle.category}</span>
        </div>

        <p class="motorcycle-card-description">${motorcycle.description}</p>

        <div class="motorcycle-card-footer">
          <div>
            <p class="motorcycle-card-price">$${motorcycle.price.toLocaleString()}</p>
            <p class="motorcycle-card-engine">${motorcycle.engine}</p>
          </div>
          <button class="motorcycle-card-button">View Details</button>
        </div>
      </div>
    </div>
  `;
}

class MotorcycleGalleryApp {
  private allMotorcycles: Motorcycle[] = [];

  constructor() {
    this.init();
  }

  private async init(): Promise<void> {
    this.allMotorcycles = await fetchMotorcycles();
    this.renderMotorcycles();
    this.setupFilter();
  }

  public renderMotorcycles(motorcycles: Motorcycle[] = this.allMotorcycles): void {
    const motorcycleGrid = document.getElementById("allMotorcycles");
    const resultsNumber = document.getElementById("results-number");
    const noResults = document.getElementById("no-results");

    if (!motorcycleGrid) {
      return;
    }

    motorcycleGrid.innerHTML = motorcycles
      .map((motorcycle) => renderMotorcycleCard(motorcycle))
      .join("");

    if (resultsNumber) {
      resultsNumber.textContent = motorcycles.length.toString();
    }

    if (noResults) {
      noResults.style.display = motorcycles.length === 0 ? "block" : "none";
    }
  }

  private setupFilter(): void {
    const input = document.getElementById(
      "name-filter-input"
    ) as HTMLInputElement | null;

    if (!input) {
      return;
    }

    input.addEventListener("input", () => {
      const keyword = input.value.toLowerCase().trim();

      const filteredMotorcycles = this.allMotorcycles.filter((motorcycle) =>
        motorcycle.name.toLowerCase().includes(keyword)
      );

      this.renderMotorcycles(filteredMotorcycles);
    });
  }
}

new MotorcycleGalleryApp();