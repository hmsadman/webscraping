const puppeteer = require('puppeteer');
const fs = require('fs');

let scrape = async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://www.bproperty.com/en/dhaka/apartments-for-rent/page-237');

    var results = []; // variable to hold collection of all book titles and prices
    var lastPageNumber = 25; // this is hardcoded last catalogue page, you can set it dunamically if you wish
    // defined simple loop to iterate over number of catalogue pages
    for (let index = 0; index < lastPageNumber; index++) {
        // wait 1 sec for page load
        await page.waitFor(3000);
        console.log(index);
        // call and wait extractedEvaluateCall and concatenate results every iteration.
        // You can use results.push, but will get collection of collections at the end of iteration
        results = results.concat(await extractedEvaluateCall(page));
        // this is where next button on page clicked to jump to another page
        if (index != lastPageNumber - 1) {
            // no next button on last page
           await page.click('.svg-arrow.right-arrow');
             // await page.click('body > div.wrapper > section.pagination > ul > li:nth-child(6) > svg');
        }
    }

    browser.close();
    return results;
};

async function extractedEvaluateCall(page) {
    // just extracted same exact logic in separate function
    // this function should use async keyword in order to work and take page as argument
    
    return page.evaluate(() => {
        let data = [];
        let elements = document.querySelectorAll('.right.card-content');

        for (var element of elements) {
            
            let price = element.childNodes[1].innerText;
            let address = element.childNodes[3].innerText;
            let bedrooms = element.children[3].childNodes[1].innerText;
            let bathrooms = element.children[3].childNodes[3].innerText;
            let area = element.children[3].childNodes[5].innerText;
            //let price = element.childNodes[7].children[0].innerText;

            data.push({ price, address, bedrooms, bathrooms, area});
        }

        return data;
    });
}

scrape().then((value) => {
  // console.log(JSON.stringify(value, null,2));
  //   console.log(value);
  //   console.log('Collection length: ' + value.length);
  //   console.log(value[0]);
  //   console.log(value[value.length - 1]);
  fs.writeFile(
    './Dataset260.json',
    JSON.stringify(value, null, 2),
    (err) => err ? console.error('Data not written') : console.log('Data Written successfully')
    )
});