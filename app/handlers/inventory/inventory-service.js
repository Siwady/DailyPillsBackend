const MongoService = require('../../database/connect-mongo');
const ObjectId = require('mongodb').ObjectID;
const inventoryCollection = 'inventory';

const getPillsInventory = async function getPillsInventory() {
  try {
    const db = await MongoService.connectMongoDb(); 
    return new Promise((resolve, reject) => {
      db.collection(inventoryCollection).findOne({
        _id: new ObjectId('5c983b93e7179a0e408c2582'),
      }, (err, result) => {
				if (err) {
					return reject(err);
				}
				resolve(result);
			});
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getPillsInventory
}
