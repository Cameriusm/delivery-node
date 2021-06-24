module.exports.checkHref = (href, res) => {
  if (href.includes('www.delivery-club.ru/srv')) {
    return 'delivery';
  } else if (href.includes('eda.yandex.ru/restaurant')) {
    return 'yandex';
  }
  return res.status(400).send('The href is not valid.');
};
