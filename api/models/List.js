/*---------------------
	:: List
	-> model
---------------------*/
module.exports = {
	attributes	: {
		name: 'STRING',
		store_id: {
		  type: 'INT',
		  defaultsTo: null
		}
	}
};
