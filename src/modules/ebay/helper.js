const { toMoney } = require('../../helpers/number');

const mapItem = ({
  title, location, sellingStatus, galleryURL,
}) => {
  const [titleStr] = title;
  const [locationStr] = location;
  const [sellingStatusObj] = sellingStatus;
  const { currentPrice } = sellingStatusObj;
  const [{ __value__ }] = currentPrice;
  const [galleryURLstr] = galleryURL;

  return ({
    title: titleStr,
    locale: locationStr,
    value: toMoney(__value__),
    image: galleryURLstr,
  });
};

module.exports.formatResult = (result = {}) => {
  if (result.findItemsByKeywordsResponse) {
    const [{ searchResult: [{ item = [] }] }] = result.findItemsByKeywordsResponse;

    return item.map(mapItem);
  }
  return [];
};
