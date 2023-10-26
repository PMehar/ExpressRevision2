const fs = require("fs");
const path = require('path');
const rootDir = require('../util/path');

const p = path.join(rootDir,'data' , 'products.json');


const getProductsFromFs = (cb) =>{
    fs.readFile(p , (err, fileContent)=>{
     if(err){
        return cb([]);
     }
     else{
        cb(JSON.parse(fileContent));
     }    
    });
}

module.exports = class Products{
    constructor(t){
        this.title = t;
    }
    save(){
        getProductsFromFs(products =>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products), (err)=>{
               console.log(err);
            });
        });
    };

    static fetchAll(cb){
      getProductsFromFs(cb);
    };
};