var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var count_Available = 0;
var count_NotAvailable = 0;
var count = 0;
var array = fs.readFileSync('url240.txt').toString().split("\n");
var error = "Product not available";


for(i in array){
request(array[i], function(err, resp, html) {
        if (!err){
          const $ = cheerio.load(html);
         
          
          var test = ($('h3').text());

          if(test === error){
            console.log("haloom")
          }else {
            console.log("product found")
          }



          
      }
});


}



          
// For trimming before COLON :
// clone()  //clone the element
//             .children() //select all the children
//             .remove() //remove all the children
//             .end()  //again go back to selected element