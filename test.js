var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var path = require('path');
var $$ = cheerio.load(fs.readFileSync('./index.html'))

var logger = fs.createWriteStream('log.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
})

request('http://natico.espwebsite.com/ProductDetails/?productId=550056708', function(err, resp, html) {
        if (!err){
          const $ = cheerio.load(html);
          //console.log($('div.prodDetailImprint').text());
          logger.write($('div.prodDetailImprint').text());
      //     $('div.prodDetailImprint').each(function(i, element){
      //     $$('div.prodDetailImprint').text();
      // });
      //     fs.writeFileSync(path.join(process.cwd(), 'index.html'), $$.html(), {'encoding': 'utf-8'});
            
         
          // console.log($('.prodName').text()); 
          // console.log($('.prodNum').text()); 

          
          // console.log($('#ctl01_ctl00_pricegrids_rptPriceGrids_ctl00_pg_th1').text());
          // console.log($('#ctl01_ctl00_pricegrids_rptPriceGrids_ctl00_pg_th2').text());
          // console.log($('#ctl01_ctl00_pricegrids_rptPriceGrids_ctl00_pg_th3').text());
          // console.log($('#ctl01_ctl00_pricegrids_rptPriceGrids_ctl00_pg_th4').text());

          // console.log($('#ctl01_ctl00_pricegrids_rptPriceGrids_ctl00_pg_tdlp1').text());
          // console.log($('#ctl01_ctl00_pricegrids_rptPriceGrids_ctl00_pg_tdlp2').text());
          // console.log($('#ctl01_ctl00_pricegrids_rptPriceGrids_ctl00_pg_tdlp3').text());
          // console.log($('#ctl01_ctl00_pricegrids_rptPriceGrids_ctl00_pg_tdlp4').text());
          
          


          // $(".priceGrid.marginBot10 tr").each(function() {
          //   console.log($('#ctl01_ctl00_pricegrids_rptPriceGrids_ctl00_pg_tdlp1').text());
          
          // }) 
          
      }
});
// request('http://natico.espwebsite.com/ProductResults/?ProdSetIds=35691', function(err, resp, html) {
//         if (!err){
//           const $ = cheerio.load(html);
//           // console.log($('.prodName').closest('a').attr('href'));
//           // console.log($('.prodName').length);
          
//           // console.log($('.prodName a').text());

//           $(".prodName").each(function() {
//             wikiUrls.push($('.prodName a', html)[i].attribs.href);
                      
//             }) 
//           console.log(wikiUrls);
          
//       }
// });