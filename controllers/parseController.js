const axios = require('axios');
const { parseYandex, parseDelivery } = require('../modules/parseRestaurant');
const { checkHref } = require('../modules/checkHref');

exports.parse = async (req, res) => {
  const href = req.body.href;
  const restaurant = await checkHref(href, res);
  console.log(href + ' recieved ' + restaurant);

  if (restaurant === 'delivery') {
    let response = await axios(href).catch(console.error);
    let menu = await parseDelivery(response);
    res.send(menu);
  } else if (restaurant === 'yandex') {
    let response = await axios(href).catch(console.error);
    let menu = await parseYandex(response);
    res.send(menu);
  }
};
