const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://adminap:admin123@ds237967.mlab.com:37967/pills";

const connectMongoDb =  () => new Promise((resolve, reject) => { 
  const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
  MongoClient.connect(url, config, (err, client) => {
    if (err) reject(err);
    resolve(client.db('pills'));
  });
});

module.exports = {
  connectMongoDb
}
