/*---------------------
	:: ListItem
	-> model
---------------------*/
module.exports = {
	attributes	: {
		name: 'STRING',
		count: {
		  type: 'INT',
      defaultsTo: null
		},
		ailse: 'STRING',
		listId: 'INT'
	}
};
