process.env.NODE_ENV = 'test';

const DisplayService = require('../app/cast');

const service = new DisplayService();

//const media = 'http://blog.xebia.fr/wp-content/themes/wp-xebiafr-2016/images/sidebar-xebia-logo.png';
const media = "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Led%20Zeppelin/Led%20Zeppelin%20'Black%20dog'.mp3"
service.connect()
  .then(() => service.playContent(media, 'audio/mp3'))
