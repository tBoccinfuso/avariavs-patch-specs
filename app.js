// Replace the following string with patch version folder and file.
const csvFilePath = './Patches-csv/v0.4/AVARIAvs public specs - heroes.csv';
const csv=require('csvtojson');
const fs = require('fs');


csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
    // Change version folder.
    fs.appendFile('./json/' + csvFilePath.slice(19) + '.json', JSON.stringify(jsonObj, null, 4) ,function (err) {
        if (err) throw err;
    });
})
.on('done',(error)=>{
    console.log('converted file');
});