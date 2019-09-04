const PillsInventoryService = require('./inventory-service');

const getPillsInventory = async function getPillsInventory(req, h) {
	try {
		const pillsInventory = await PillsInventoryService.getPillsInventory();
		const pillsList = Object.entries(pillsInventory).map((p) => { 
			return { name: p[0], count: p[1] };
		}).filter((pill) => pill.name !== '_id');
		return pillsList;
	} catch (err) {
		return err;
	}
};

module.exports = {
  getPillsInventory
}
