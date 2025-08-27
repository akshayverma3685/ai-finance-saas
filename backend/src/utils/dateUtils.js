const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);

module.exports = {
  formatDate: (date, format = 'YYYY-MM-DD') => {
    return dayjs(date).format(format);
  },

  formatDateTime: (date, format = 'YYYY-MM-DD HH:mm:ss') => {
    return dayjs(date).format(format);
  },

  toUTC: (date) => {
    return dayjs(date).utc().toDate();
  },

  fromUTC: (date, tz = 'UTC') => {
    return dayjs(date).tz(tz).format();
  },

  addDays: (date, days) => {
    return dayjs(date).add(days, 'day').toDate();
  },

  subtractDays: (date, days) => {
    return dayjs(date).subtract(days, 'day').toDate();
  }
};
