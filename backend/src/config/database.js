const sqlite = require('sqlite-sync');
 
//Connecting
module.exports = sqlite.connect('todo.db');

