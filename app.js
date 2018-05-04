const csvFilePath = './Patches-csv/v0.3/AVARIAvs public specs - Items.csv';
const csv=require('csvtojson');
const fs = require('fs');
csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
    fs.appendFile('./json/v.03' + csvFilePath.slice(18) + '.json', JSON.stringify(jsonObj) ,function (err) {
        if (err) throw err;
    }); 
    console.log(jsonObj);
})
.on('done',(error)=>{
    console.log('end');
});