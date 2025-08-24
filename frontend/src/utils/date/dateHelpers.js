// frontend/src/utils/dateHelper.js
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const getCurrentMonth = () => {
  return new Date().toLocaleString("en-US", { month: "long" });
};
