const { toMoney } = require('../../helpers/number');

const mapItem = ({ title, location, sellingStatus }) => {
  const [titleStr] = title;
  const [locationStr] = location;
  const [sellingStatusObj] = sellingStatus;
  const { currentPrice } = sellingStatusObj;
  const [{ __value__ }] = currentPrice;

  return ({
    title: titleStr,
    locale: locationStr,
    value: toMoney(__value__),
  });
};

module.exports.formatResult = (result = {}) => {
  if (result.findItemsByKeywordsResponse) {
    const [{ searchResult: [{ item = [] }] }] = result.findItemsByKeywordsResponse;

    return item.map(mapItem);
  }
  return [];
};
