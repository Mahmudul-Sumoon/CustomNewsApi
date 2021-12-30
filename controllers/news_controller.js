
const { default: axios } = require("axios");
var uuid = require('uuid');

const getNews = async (req,res)=>{
    try{
        var responseObj = [];
      var data = await axios.get(process.env.url);
      data.data.articles.map((e) => {
        responseObj.push({
            "title":e.title,
            "description":e.description,
            "url":e.url,
            "urlToImage":e.urlToImage,
        });
      });
    }
    catch(e){
        console.log(e);
    }
    res.json(responseObj);
    
   };

module.exports = {getNews};