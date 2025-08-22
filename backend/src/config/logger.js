// backend/src/utils/logger.js
export const logInfo = (msg) => console.log(`ℹ️ [INFO]: ${msg}`);
export const logError = (msg, err) => console.error(`❌ [ERROR]: ${msg}`, err);
export const logWarn = (msg) => console.warn(`⚠️ [WARN]: ${msg}`);
