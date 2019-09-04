const MongoClient = require('mongodb').MongoClient;
const dbUrl = require('./db-config').url;

const connectMongoDb =  () => new Promise((resolve, reject) => { 
  const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
  MongoClient.connect(dbUrl, config, (err, client) => {
    if (err) reject(err);
    resolve(client.db('pills'));
  });
});

module.exports = {
  connectMongoDb
}
