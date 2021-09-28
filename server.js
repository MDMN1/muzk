const app = require('express')();

app.get('/', (req, res) => res.send('MusicBot - 1'));

module.exports = () => {
  app.listen(3000);
}