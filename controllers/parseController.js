const axios = require('axios');
const { parseYandex, parseDelivery } = require('../modules/parseRestaurant');

const checkHref = (href) => {
  if (href.includes('www.delivery-club.ru/srv')) {
    return [href, 'delivery'];
  } else if (href.includes('https://eda.yandex.ru/restaurant')) {
    return [href, 'yandex'];
  }
  return [false, ''];
};

exports.parse = async (req, res) => {
  // TODO
  // if (url)
  // console.log(req);
  const url = checkHref(req.body.href);
  // console.log(req);
  console.log(url);

  if (url[0]) {
    console.log('done');
    if (url[1] === 'delivery') {
      let response = await axios(url[0]).catch(console.error);
      // console.log(response);
      let menu = await parseDelivery(response);
      // console.log(menu);

      res.send(menu);
    } else if (url[1] === 'yandex') {
      let response = await axios(url[0]).catch(console.error);

      let menu = await parseYandex(response);

      res.send(menu);
    }
    // res.send(url);
    // res.send(`The href is about ${result}`);
  } else {
    res.status(400).send('The href is not valid.');
  }
};
