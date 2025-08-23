// src/ai/services/fraudDetection.js
/**
 * Fraud detection based on rule-engine + anomaly detection.
 * In real-world: integrate ML model.
 */
export const detectFraud = (transactions) => {
  const alerts = [];

  transactions.forEach((tx) => {
    if (tx.amount > 5000) {
      alerts.push({ ...tx, reason: "High value transaction" });
    }
    if (tx.location && tx.location !== "IN") {
      alerts.push({ ...tx, reason: "Foreign transaction" });
    }
    if (tx.repeated) {
      alerts.push({ ...tx, reason: "Multiple quick repeats" });
    }
  });

  return {
    total: transactions.length,
    flagged: alerts.length,
    alerts
  };
};
