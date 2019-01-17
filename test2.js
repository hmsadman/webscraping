var fs = require('fs');
var array = fs.readFileSync('file.txt').toString().split("\n");
var request = require('request');
var cheerio = require('cheerio');


for(i in array) {
request(array[i], function(err, resp, html) {
        if (!err){
          const $ = cheerio.load(html);
          
              console.log($('.prodName').text()); 
              console.log($('.prodNum').text()); 

            
            // console.log($('#ctl01_ctl00_pricegrids_rptPriceGrids_ctl00_pg_th1').text());
            // console.log($('#ctl01_ctl00_pricegrids_rptPriceGrids_ctl00_pg_th2').text());
            // console.log($('#ctl01_ctl00_pricegrids_rptPriceGrids_ctl00_pg_th3').text());
            // console.log($('#ctl01_ctl00_pricegrids_rptPriceGrids_ctl00_pg_th4').text());

            // console.log($('#ctl01_ctl00_pricegrids_rptPriceGrids_ctl00_pg_tdlp1').text());
            // console.log($('#ctl01_ctl00_pricegrids_rptPriceGrids_ctl00_pg_tdlp2').text());
            // console.log($('#ctl01_ctl00_pricegrids_rptPriceGrids_ctl00_pg_tdlp3').text());
            // console.log($('#ctl01_ctl00_pricegrids_rptPriceGrids_ctl00_pg_tdlp4').text());

          
                   
      }
});
}


