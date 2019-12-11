const request = require("request-promise");
const cheerio = require("cheerio");

// I made web scraping for the last hour.
async function getData() {

    let parts = String(new Date()).split(/[ :]/);
    let month = String(new Date().getMonth());
    
    
    const station = 87155;
    

    let options = {

        uri: 'https://www.ogimet.com/cgi-bin/gsynres?ind=' + station + '&decoded=yes&ndays=2&ano=' + parts[3] + '&mes=' + month + '&day=' + parts[2] + '&hora=' + parts[4],
        transform: function (body)  
            { return cheerio.load(body); }
    }


    await request(options) 
        .then(function ($) {            

            const lastHour = [];
            $('thead tr').each((index, element) => { ;
                    
                if (index === 1) {         
                    lastHour.push($(element).text().split("\n"));
                    
                    return false;
                } 
            });
            console.log(lastHour); 
        })
        .catch(function (err) {
            console.log(err);
        })
    

}

getData();