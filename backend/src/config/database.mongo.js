const mongoose = require('mongoose')
mongoose.Promise = global.Promise //Só para tirar uma mensagem de advertência

//var uri = "mongodb://teste:teste@cluster0-shard-00-00-roxbw.mongodb.net:27017,cluster0-shard-00-01-roxbw.mongodb.net:27017,cluster0-shard-00-02-roxbw.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
var uri = "mongodb://localhost/todo";
//var uri = "mongodb://mem-mongo:zGtLQB5BWJKGskB6w58w5SBuZ9NDqJ0jgal2T8O5u5jdUJIyr35fqfXjjDVr4Mf1KNkdTCnEeQJiHiqVMKCXcA==@mem-mongo.documents.azure.com:10255/tododb?ssl=true&replicaSet=globaldb"
//var uri = "mongodb://mem-mongo:zGtLQB5BWJKGskB6w58w5SBuZ9NDqJ0jgal2T8O5u5jdUJIyr35fqfXjjDVr4Mf1KNkdTCnEeQJiHiqVMKCXcA==@mem-mongo.documents.azure.com:10255/tododb?ssl=true"
//var uri = "mongodb://mem-mongo:zGtLQB5BWJKGskB6w58w5SBuZ9NDqJ0jgal2T8O5u5jdUJIyr35fqfXjjDVr4Mf1KNkdTCnEeQJiHiqVMKCXcA==@mem-mongo.documents.azure.com:10255/tododb?ssl=true"

module.exports = mongoose.connect(uri)