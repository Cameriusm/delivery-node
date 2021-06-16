const cheerio = require('cheerio');

module.exports.parseDelivery = async (response) => {
  console.log('Done parsing');

  const html = response.data;
  const $ = cheerio.load(html);
  const links = $('.menu-product');
  const parsedInfo = [];
  const menu = [];
  const restaurantTitle = $('.vendor-headline__title').text();

  links.each(function () {
    const title = $(this).find('.menu-product__title').first().text();
    let price = $(this).find('.menu-product__price').first().text();

    // .rstrip('\n');
    const desc = $(this).find('.menu-product__description').first().text();
    const img = $(this)
      .find('.menu-product__img')
      .first()
      .find('img')
      .attr('src');
    menu.push({
      title,
      desc,
      img,
      // price,
      price: price.replace(/\r?\n|\r/gm, '').trim(),
    });
  });

  return { menu: menu, name: restaurantTitle };
};

module.exports.parseYandex = async (response) => {
  const html = response.data;
  const $ = cheerio.load(html);
  const links = $('.RestaurantPageMenuItem_root');

  const menu = [];
  const restaurantTitle = $('.RestaurantPageHeader_name').text();
  //   console.log(restaurantTitle);
  links.each(function () {
    const title = $(this).find('.RestaurantPageMenuItem_title').first().text();
    const price = $(this).find('.Price_root').first().text();
    const desc = $(this)
      .find('.RestaurantPageMenuItem_description')
      .first()
      .text();
    // const img = $(this)
    //   .find('.RestaurantPageMenuItem_pictureImage')
    //   .css('background-image');
    // .text();
    // console.log($('RestaurantPageMenuItem_pictureImage').attr('style'));
    // .text();
    const img =
      'https://upload.wikimedia.org/wikipedia/commons/c/ca/%D0%98%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0_%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.%D0%95%D0%B4%D1%8B.png';

    menu.push({
      title,
      desc,
      img,
      price,
    });
  });

  return { menu: menu, name: restaurantTitle };
};
