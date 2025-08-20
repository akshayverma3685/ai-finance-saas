// backend/src/utils/currencyConverter.js
import axios from "axios";

export const convertCurrency = async (amount, from, to) => {
  try {
    const res = await axios.get(
      `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`
    );
    return res.data.result;
  } catch (err) {
    console.error("Currency conversion failed", err);
    return null;
  }
};
