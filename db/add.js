const mongoCli = require('mongodb').MongoClient;
const dbURL = 'mongodb://localhost/db-url'

module.exports = (urlData, userData) => {
    mongoCli.connect(dbURL, (err, cli) => {
        if (err) throw err;
    
        let dbURLCol = cli.db('db-url').collection('urls');
        
        dbURLCol.insertOne(urlData, (err) => {
            if (err) throw err;
        });
    })
    mongoCli.connect(dbURL, (err, cli) => {
        if (err) throw err;
    
        let dbUserCol = cli.db('db-url').collection('users');
        dbUserCol.insertOne(userData, (err) => {
            if (err) throw err;
        })
    })
}
