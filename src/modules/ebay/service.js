const axios = require('../../helpers/axios');
const { EBAY_APP_NAME, EBAY_GLOBAL_ID } = require('../../config');
const { mountQuery } = require('../../helpers/string');
const { formatResult } = require('./helper');

const ebayInstance = axios('http://svcs.ebay.com/');

/**
 * @description Search anything in eBay API.
 * @param {String} keywords
 */
const search = async (keywords = '') => {
  const queryEbay = {
    'OPERATION-NAME': 'findItemsByKeywords',
    'SERVICE-VERSION': '1.0.0',
    'SECURITY-APPNAME': EBAY_APP_NAME,
    'GLOBAL-ID': EBAY_GLOBAL_ID,
    'RESPONSE-DATA-FORMAT': 'JSON',
    keywords,
    'paginationInput.entriesPerPage': 3,
    sortOrder: 'PricePlusShippingLowest',
  };

  try {
    const { data } = await ebayInstance.get(`services/search/FindingService/v1${mountQuery(queryEbay)}`);

    return formatResult(data);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  search,
};
