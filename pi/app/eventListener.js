const firebase = require('./firebase').getFirebaseClient();
const DisplayService = require('./cast');
const logger = require('./logger');

const service = new DisplayService();

const eventRef = firebase.database().ref().child('content');

const homeImage = 'https://i.imgur.com/wTOdCg3.png';


eventRef.on('child_changed', (snapshot, previous) => {
  service.connect(process.argv[2])
    .then(() => {
      eventRef.once('value', content => {
        service.playContent(content.child('url').val(), content.child('type').val())
      })
    })
});

const disconnectService = () => {
  logger.debug(`Disconnecting Cast`)
  service.disconnect()
  process.exit()
}

service.connect(process.argv[2]).then(() => {
  service.playContent(homeImage, 'image/png');
})

process.on('SIGTERM', disconnectService);
process.on('SIGINT', disconnectService);
