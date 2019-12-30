var axios = require("axios");
var cheerio = require("cheerio");

var scrape = function(){
    axios.get("https://grammar.yourdictionary.com/spelling-and-word-lists/spelling-bee-study-words.html")
    .then(function(result){
        var $ = cheerio.load(result.data);
        console.log("Scraping",);
        $("tr").each(function(i,element){
            let spellit = {
             link : $(this).find("a")
                       .attr("href"),
             word :  $(this).find("a").children("span").text().trim(),
            grammar : $(this).find("h3").children("span").first().text().trim(),
            meaning : $(this).find("h3").children("span").last().text().trim(),
            
            }
            console.log("Spellit",spellit)
        })
        return "Scarpe"
    })
    .catch((error) => {
        console.log("Error in scrapping",error)
    })

}

module.exports = scrape;