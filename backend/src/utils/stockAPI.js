import axios from "axios";

const API_URL = "https://finnhub.io/api/v1/quote";
const API_KEY = process.env.STOCK_API_KEY;

export const getStockPrice = async (symbol) => {
  try {
    const res = await axios.get(`${API_URL}?symbol=${symbol}&token=${API_KEY}`);
    return res.data.c;
  } catch (err) {
    console.error("Stock API error", err);
    return null;
  }
};
