/*---------------------
	:: Store
	-> model
---------------------*/
module.exports = {
	attributes	: {
		name: 'STRING',
		company_id: {
		  type: 'INT',
      defaultsTo: null
		}
	}
};