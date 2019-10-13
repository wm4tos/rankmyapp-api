
/**
 * @description Transform a simple number in currency number.
 * @param {Number} number Number to format.
 * @param {String} code Country code. You can see all codes in https://en.wikipedia.org/wiki/ISO_4217.
 */
const toMoney = (number = 0, code = 'USD') => {
  const { format } = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: code,
  });

  return format(number);
};

module.exports = {
  toMoney,
};
