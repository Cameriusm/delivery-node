const axios = require("axios");

exports.getorders = async (req, res) => {
  res.send({
    collection: [
      {
        restaurant: {
          id: 1,
          owner: {
            name: "Daniel",
            phone: "8989898",
          },
          menu: [
            {
              desc: "Легендарный Воппер со 100% говядиной, хрустящая Ки...",
              img: "https://www.delivery-club.ru/media/cms/relation_product/32325/321126180_m650.jpg?resize=fit&width=1300&height=544&gravity=ce&out=webp",
              price: "359 ₽",
              title: "Комбо с Воппером",
            },
            {
              desc: "Бургер с бифштексом из 100% говядины на булочке, п...",
              img: "https://www.delivery-club.ru/media/cms/relation_product/32325/312353856_m650.jpg?resize=fit&width=1300&height=544&gravity=ce&out=webp",
              price: "269 ₽",
              title: "Стейкхаус",
            },
            {
              desc: "Легендарный бургер с бифштексом из 100% говядины н...",
              img: "https://www.delivery-club.ru/media/cms/relation_product/32325/312353764_m650.jpg?resize=fit&width=1300&height=544&gravity=ce&out=webp",
              price: "199 ₽",
              title: "Воппер",
            },
            {
              desc: "Хрустящий золотистый картофель Кинг Фри",
              img: "https://www.delivery-club.ru/media/cms/relation_product/32325/312353842_m650.jpg?resize=fit&width=1300&height=544&gravity=ce&out=webp",
              price: "109 ₽",
              title: "Кинг Фри бол",
            },
          ],
          name: "Макдональдс",
          orders: [
            {
              positions: [
                {
                  desc: "Легендарный Воппер со 100% говядиной, хрустящая Ки...",
                  img: "https://www.delivery-club.ru/media/cms/relation_product/32325/321126180_m650.jpg?resize=fit&width=1300&height=544&gravity=ce&out=webp",
                  price: "359 ₽",
                  quantity: 1,
                  title: "Комбо с Воппером",
                },
                {
                  desc: "Легендарный Воппер со 100% говядиной, хрустящая Ки...",
                  img: "https://www.delivery-club.ru/media/cms/relation_product/32325/321126180_m650.jpg?resize=fit&width=1300&height=544&gravity=ce&out=webp",
                  price: "359 ₽",
                  quantity: 1,
                  title: "Комбо с Воппером",
                },
                {
                  desc: "Легендарный бургер с бифштексом из 100% говядины н...",
                  img: "https://www.delivery-club.ru/media/cms/relation_product/32325/312353764_m650.jpg?resize=fit&width=1300&height=544&gravity=ce&out=webp",
                  price: "199 ₽",
                  quantity: 2,
                  title: "Воппер",
                },
                {
                  desc: "Бургер с бифштексом из 100% говядины на булочке, п...",
                  img: "https://www.delivery-club.ru/media/cms/relation_product/32325/312353856_m650.jpg?resize=fit&width=1300&height=544&gravity=ce&out=webp",
                  price: "269 ₽",
                  quantity: 1,
                  title: "Стейкхаус",
                },
              ],
              price: 1026,
              owner: {
                name: "Daniel",
                phone: "89842728524",
              },
            },
            {
              positions: [
                {
                  desc: "Легендарный Воппер со 100% говядиной, хрустящая Ки...",
                  img: "https://www.delivery-club.ru/media/cms/relation_product/32325/321126180_m650.jpg?resize=fit&width=1300&height=544&gravity=ce&out=webp",
                  price: "359 ₽",
                  quantity: 2,
                  title: "Комбо с Воппером",
                },
                {
                  desc: "Легендарный Воппер со 100% говядиной, хрустящая Ки...",
                  img: "https://www.delivery-club.ru/media/cms/relation_product/32325/321126180_m650.jpg?resize=fit&width=1300&height=544&gravity=ce&out=webp",
                  price: "359 ₽",
                  quantity: 4,
                  title: "Комбо с Воппером",
                },
                {
                  desc: "Легендарный бургер с бифштексом из 100% говядины н...",
                  img: "https://www.delivery-club.ru/media/cms/relation_product/32325/312353764_m650.jpg?resize=fit&width=1300&height=544&gravity=ce&out=webp",
                  price: "199 ₽",
                  quantity: 1,
                  title: "Воппер",
                },
                {
                  desc: "Бургер с бифштексом из 100% говядины на булочке, п...",
                  img: "https://www.delivery-club.ru/media/cms/relation_product/32325/312353856_m650.jpg?resize=fit&width=1300&height=544&gravity=ce&out=webp",
                  price: "269 ₽",
                  quantity: 3,
                  title: "Стейкхаус",
                },
              ],
              price: 924,
              owner: {
                name: "Sarah",
                phone: "82958784238",
              },
            },
          ],
        },
      },
      {
        restaurant: {
          id: 2,
          owner: {
            name: "Morales",
            phone: "12121212",
          },
          menu: [
            {
              desc: "Ола, амиго! Вот он, шикарный флагман нашей новой «Коллекции Начос». Мексиканская булочка с томатами и паприкой, 100% говядина на огне, много сочных овощей, пикантный соус Сальса и — внимание — хрустящие чипсы Начос! Такого еще не было!",
              img: "https://upload.wikimedia.org/wikipedia/commons/c/ca/%D0%98%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0_%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.%D0%95%D0%B4%D1%8B.png",
              price: "279 ₽",
              title: "Начос Кинг",
            },
            {
              desc: "Ола! Это новая версия любимого Биг Кинга — теперь в мексиканском стиле: пикантный соус Сальса, два бифштекса из 100% говядины на огне, сыр Чеддер и овощи на тройной булочке с кунжутом. Только у нас!",
              img: "https://upload.wikimedia.org/wikipedia/commons/c/ca/%D0%98%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0_%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.%D0%95%D0%B4%D1%8B.png",
              price: "199 ₽",
              title: "Биг Кинг Сальса",
            },
            {
              desc: "Ола, амиго! Для любителей курочки мы приготовили настоящее мексиканское приключение: яркая булочка с томатами и паприкой, сочные куриные стрипсы с сыром Чеддер, много овощей, пикантный соус Сальса и — барабанная дробь — хрустящие чипсы Начос! Шедевр нашей новой коллекции",
              img: "https://upload.wikimedia.org/wikipedia/commons/c/ca/%D0%98%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0_%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.%D0%95%D0%B4%D1%8B.png",
              price: "279 ₽",
              title: "Начос Чикен",
            },
            {
              desc: "Ола, амиго! Этот карнавал вкусов — из нашей новой «Коллекции Начос»! Золотистые королевские креветки, сочные овощи, сыр Чеддер и изюминка коллекции — хрустящие чипсы Начос. Все это на яркой булочке с томатами и паприкой в мексиканском стиле. Такого еще не было!",
              img: "https://upload.wikimedia.org/wikipedia/commons/c/ca/%D0%98%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0_%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.%D0%95%D0%B4%D1%8B.png",
              price: "299 ₽",
              title: "Начос Шримп",
            },
          ],
          name: "Бургер Кинг",
          orders: [
            {
              positions: [
                {
                  desc: "Легендарный Воппер со 100% говядиной, хрустящая Ки...",
                  img: "https://www.delivery-club.ru/media/cms/relation_product/32325/321126180_m650.jpg?resize=fit&width=1300&height=544&gravity=ce&out=webp",
                  price: "359 ₽",
                  quantity: 1,
                  title: "Комбо с Воппером",
                },
                {
                  desc: "Легендарный Воппер со 100% говядиной, хрустящая Ки...",
                  img: "https://www.delivery-club.ru/media/cms/relation_product/32325/321126180_m650.jpg?resize=fit&width=1300&height=544&gravity=ce&out=webp",
                  price: "359 ₽",
                  quantity: 1,
                  title: "Комбо с Воппером",
                },
                {
                  desc: "Легендарный бургер с бифштексом из 100% говядины н...",
                  img: "https://www.delivery-club.ru/media/cms/relation_product/32325/312353764_m650.jpg?resize=fit&width=1300&height=544&gravity=ce&out=webp",
                  price: "199 ₽",
                  quantity: 2,
                  title: "Воппер",
                },
                {
                  desc: "Бургер с бифштексом из 100% говядины на булочке, п...",
                  img: "https://www.delivery-club.ru/media/cms/relation_product/32325/312353856_m650.jpg?resize=fit&width=1300&height=544&gravity=ce&out=webp",
                  price: "269 ₽",
                  quantity: 1,
                  title: "Стейкхаус",
                },
              ],
              price: 1026,
              owner: {
                name: "Morales",
                phone: "89842728524",
              },
            },
          ],
        },
      },
    ],
  });
};
