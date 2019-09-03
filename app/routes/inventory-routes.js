const inventoryHandler = require('../handlers/inventory/inventory-handler');

module.exports = [{
    method: 'GET',
    path:'/pills',
    handler: inventoryHandler.getPillsInventory
}];
