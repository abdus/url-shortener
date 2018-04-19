const mongoClient = require('mongodb').MongoClient;

const dbURL = 'mongodb://localhost/url-list';

urlObj = { url: "reddit.com", short_url: "HyEcRm" }

module.exports = (urlData) => {
    mongoClient.connect(dbURL, (err, db) => {
        if (err) throw err;
        
        let dbo = db.db('url-list');
    
        dbo.collection('urls').insertOne(urlData,)
    
        db.close();
    })
}
