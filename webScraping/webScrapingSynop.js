const request = require("request-promise");
const cheerio = require("cheerio");

async function getSynop() {

    const station = "Resistencia, AR";
    

    let options = {

        uri: 'https://www.ogimet.com/display_stations.php?tipo=AND&isyn=&oaci=&nombre=&estado=&enviar=Ver',
        transform: function (body)  
            { return cheerio.load(body); }
    }


    await request(options) 
        .then(function ($) {            

            $("td table tbody tr td").each((index, element) => {
                if ($(element).text().split("\n") === 87155) {
                    console.log("encontrado");
                    return false;
                };
            }); 
        })
        .catch(function (err) {
            console.log(err);
        })
    

}

getSynop();