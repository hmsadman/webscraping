var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');


var array = fs.readFileSync('url_245.txt').toString().split("\n");
var error = "Product not available";

var logger = fs.createWriteStream('result_245_urls.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
})

for(i in array){
request(array[i], function(err, resp, html) {
        if (!err){
          const $ = cheerio.load(html);

//Checking if link is empty or not
          var test = ($('h3').text());
          if(test === error){
            console.log("product not Found")
          } 
          else {
          
//Get the product Name and SKU  
          logger.write('[ ' + $('.prodName').text().trim()+' ]'+ '\n'); 
          logger.write('[ ' + $('.prodNum').text().trim()+' ]' + '\n'); 

//Get the product imprint text of first 4 lines
        $('#divImprintInfo').find('.dataFieldBlock').each(function( index ) {
          //console.log( index + ": " + $( this ).contents()[1]);
          logger.write($(this)
            
            .text().trim()+'\n');//get the text of element
        });

//Get the product text in <span>
        $('#ctl01_ctl00_rptCriteriaSetImprint_ctl00_divExp').find('.dataFieldBlock span').each(function( index ) {
          //console.log( index + ": " + $( this ).contents()[1]);
          logger.write($(this)
            .text().trim()+'\n');//get the text of element
        });
//Get the product price and quantity
         $('#ctl01_ctl00_rptCriteriaSetImprint_ctl00_divExp > div:nth-child(5) > div').find('th,td').each(function( index ) {
          //console.log( index + ": " + $( this ).contents()[1]);
         logger.write($(this)
            .text().trim()+'\n');//get the text of element

        });
         logger.write('\n');
          //WRITE TO FILE
          //logger.write($('div.prodDetailImprint').text());

          console.log(i+ ":" + " Inserted")
      }
    }
});
}
// For trimming before COLON :
// clone()  //clone the element
//             .children() //select all the children
//             .remove() //remove all the children
//             .end()  //again go back to selected element