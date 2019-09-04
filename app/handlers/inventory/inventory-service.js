const MongoService = require('../../database/connect-mongo');
const ObjectId = require('mongodb').ObjectID;
const inventoryCollection = 'inventory';

const getPillsInventory = async function getPillsInventory() {
  try {
    const db = await MongoService.connectMongoDb(); 
    return new Promise((resolve, reject) => {
      db.collection(inventoryCollection).find({})
			.toArray((err, result) => {
				if (err) {
					return reject(err);
				}
				resolve(result[0]);
			});
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getPillsInventory
}
