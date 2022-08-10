const app = require('./app');
const config = require('./config');

app.listen(config.app.PORT, () => {
  console.log('Express server running on port ' + config.app.PORT);
});
