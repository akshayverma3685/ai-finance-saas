// backend/tests/currencyConverter.test.js
import axios from 'axios';
import { convertCurrency } from '../src/utils/currencyConverter.js';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: { result: 82.5 } })),
}));

describe('convertCurrency', () => {
  it('returns converted amount from API', async () => {
    const result = await convertCurrency(1, 'USD', 'INR');
    expect(result).toBe(82.5);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
