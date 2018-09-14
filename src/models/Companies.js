const ODM = require('mongoose');

/**
 * Schema
 *
 * Create the actual Schema that will help us to control
 * each record. Like a `table` in a Relational world.
 *
 * Content:
 *     _id: Primary Key
 *     name: Company name
 */
const Schema = ODM.Schema({
  _id: ODM.Schema.Types.ObjectId,
  name: String
});

/**
 * Exports the module and register it with Mongoose.
 */
module.exports = ODM.model('Companies', Schema);
