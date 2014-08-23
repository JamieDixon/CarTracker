
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var JourneySchema = new Schema({
	id : String,
	memberId: String,
	data: String
});

module.exports = mongoose.model('Journey', JourneySchema);