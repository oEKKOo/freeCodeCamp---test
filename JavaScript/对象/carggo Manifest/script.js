// 1. 单位规范化函数：lb 转 kg，返回新对象，不修改原对象
function normalizeUnits(manifest) {
  const newManifest = { ...manifest };
  if (newManifest.unit === "lb") {
    newManifest.weight = newManifest.weight * 0.45;
    newManifest.unit = "kg";
  }
  return newManifest;
}

// 2. 验证清单函数：返回错误对象 / 空对象，不修改原对象
function validateManifest(manifest) {
  const errors = {};

  // 验证 containerId：必须是正整数
  if (!("containerId" in manifest)) {
    errors.containerId = "Missing";
  } else {
    if (
      typeof manifest.containerId !== "number" ||
      !Number.isInteger(manifest.containerId) ||
      manifest.containerId <= 0
    ) {
      errors.containerId = "Invalid";
    }
  }

  // 验证 destination：必须是非空字符串（去空格后）
  if (!("destination" in manifest)) {
    errors.destination = "Missing";
  } else {
    if (
      typeof manifest.destination !== "string" ||
      manifest.destination.trim() === ""
    ) {
      errors.destination = "Invalid";
    }
  }

  // 验证 weight：必须是正数
  if (!("weight" in manifest)) {
    errors.weight = "Missing";
  } else {
    if (
      typeof manifest.weight !== "number" ||
      Number.isNaN(manifest.weight) ||
      manifest.weight <= 0
    ) {
      errors.weight = "Invalid";
    }
  }

  // 验证 unit：必须是 kg 或 lb
  if (!("unit" in manifest)) {
    errors.unit = "Missing";
  } else {
    if (manifest.unit !== "kg" && manifest.unit !== "lb") {
      errors.unit = "Invalid";
    }
  }

  // 验证 hazmat：必须是布尔值
  if (!("hazmat" in manifest)) {
    errors.hazmat = "Missing";
  } else {
    if (typeof manifest.hazmat !== "boolean") {
      errors.hazmat = "Invalid";
    }
  }

  return errors;
}

// 3. 处理清单：验证 + 打印日志
function processManifest(manifest) {
  const validation = validateManifest(manifest);

  if (Object.keys(validation).length === 0) {
    // 有效
    console.log(`Validation success: ${manifest.containerId}`);
    const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    // 无效
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validation);
  }
}