// frontend/src/utils/chartHelper.js
export const prepareExpenseChartData = (expenses) => {
  const grouped = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});

  return Object.entries(grouped).map(([category, amount]) => ({
    name: category,
    value: amount
  }));
};
