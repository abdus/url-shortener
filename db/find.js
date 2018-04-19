const mongoClient = require("mongodb").MongoClient;

const dbURL = 'mongodb://localhost/url-list';

mongoClient.connect(dbURL, (err, db) => {
    if (err) throw err;

    let dbo = db.db('url-list');
    dbo.collection('urls').findOne({}, (err, data) => {
        if (err) throw err;

        console.log(data);
        db.close();
    })
})