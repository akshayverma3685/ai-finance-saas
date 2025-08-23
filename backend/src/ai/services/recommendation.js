// src/ai/services/recommendation.js

/**
 * Recommends budgeting and saving strategies
 * based on user expenses and categories.
 */
export const generateRecommendations = (expenses = []) => {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const food = expenses.filter(e => e.category === "Food").reduce((s, e) => s + e.amount, 0);
  const travel = expenses.filter(e => e.category === "Travel").reduce((s, e) => s + e.amount, 0);

  const recs = [];

  if (food / total > 0.3) {
    recs.push("You're spending over 30% on Food 🍔. Try reducing dining out.");
  }
  if (travel / total > 0.25) {
    recs.push("Travel costs are high ✈️. Consider cheaper commute options.");
  }
  if (total > 10000) {
    recs.push("Big expenses this month. Save at least 10% for emergency funds.");
  }
  if (recs.length === 0) {
    recs.push("Good job 🎉! Your spending pattern looks balanced.");
  }

  return { total, recs };
};
