// Replace the following string with patch version folder and file.
const csvFilePath = './Patches-csv/v0.3/AVARIAvs public specs - soldier_Abilities.csv';
const csv=require('csvtojson');
const fs = require('fs');


csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
    // Change version folder.
    fs.appendFile('./json/v.03' + csvFilePath.slice(21) + '.json', JSON.stringify(jsonObj, null, 4) ,function (err) {
        if (err) throw err;
    });
})
.on('done',(error)=>{
    console.log('end');
});