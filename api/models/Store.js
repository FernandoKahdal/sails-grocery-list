/*---------------------
	:: Store
	-> model
---------------------*/
module.exports = {
	attributes	: {
		name: 'STRING',
		companyId: {
		  type: 'INT',
      defaultsTo: null
		}
	}
};