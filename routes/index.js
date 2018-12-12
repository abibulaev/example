var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bugatti'});
});

/* first page. */
router.get('/firstcar', function(req, res, next) {
  res.render('hero', { title: 'Type 13',
                            image: 'images/type 13.jpg',
                            text: 'Type 13, имеющий четырехцилиндровый двигатель с 16 клапанами, в то время единственный в своем роде, показывал чудеса на трассе, а также, завоевал первую победу для своей компании в гран-при Ле Мана в 1920 г.'});
});

/* second page. */
router.get('/secondcar', function(req, res, next) {
  res.render('hero', { title: 'Veyron',
                      image: 'images/veyron.jpg',
                      text: 'При разработке Bugatti Veyron была большая ответственность по отношению к традициям этого брэнда, несмотря на то что дизайн и техническая сфера ориентировались на будущее. Многие элементы исторических моделей автомобилей присутствуют в дизайне, разработанном для Bugatti Veyron'});
});

/* third page. */
router.get('/thirdcar', function(req, res, next) {
  res.render('hero', { title: 'EB218',
                        image: 'images/EB218.jpg',
                       text: 'Стиль Bugatti EB218 весьма современен, но некоторые элементы дизайна перекликаются с элементами дизайна классических моделей Бугатти, эта модель обладает своим неповторимым характером. Кузов этого авто отличается уникальностью формы и сбалансированными пропорциями. Его характеристики сочетают в себе невероятную мощь и изысканную элегантность. '});
});

/* fourth page. */
router.get('/fourthcar', function(req, res, next) {
  res.render('hero', { title: 'EB110',
                      image: 'images/EB110.jpg',
                    text: 'Когда Этторе Бугатти умер в 1947, Bugatti Company прекратило свое существование.  В честь Этторе был создан и выпущен в 110 день его рождения (15.09.1991) - Bugatti EB110.  Впервые он был показан на публике в Grande Arche at La Defense в Париже, Франция.'});
});

/* fifth page. */
router.get('/fifthcar', function(req, res, next) {
  res.render('hero', { title: 'Type 41',
                      image: 'images/TYPE41.jpg',
                     text: 'Bugatti Type 41, более известный как Royale, является одним из самых роскошных из когда-либо произведенных автомобилей. Этот огромный автомобиль, с 4.3 метровой колесной базой и общей длиной в 6.4 метров, весил 7 тонн и использовал массивный 12.7-литровый двигатель с восемью рядными цилиндрами.'});
});

module.exports = router;
