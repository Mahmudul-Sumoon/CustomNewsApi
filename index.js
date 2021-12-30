
const express = require("express");
const  mongoose  = require("mongoose");
const dotenv = require("dotenv");
const router = require("./routes/news_api_route");

const app = express();
const port= process.env.PORT || 4000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
dotenv.config();

// //params
// app.get('/name/:id',(req,res)=>{
//  res.json({    
//         "reqField": req.params.id,
//         "source": {
//             "id": "ars-technica",
//             "name": "Ars Technica"
//         },
//         "author": "Eric Bangeman",
//         "title": "Tesla is recalling over 475,000 Model 3 and Model S vehicles",
//         "description": "NHTSA fingers faulty wiring harness in the Model 3 and frunk latch in the Model S .",
//         "url": "https://arstechnica.com/cars/2021/12/tesla-is-recalling-over-475000-model-3-and-model-s-vehicles/",
//         "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2019/03/Tesla-Model-3-6-760x380.jpg",
//         "publishedAt": "2021-12-30T15:30:33Z",
//         "content": "4 with 3 posters participating\r\nTesla is recalling over 475,000 of its vehicles because of a pair of safety issues. According to the National Highway Traffic Safety Administration, 356,309 Tesla Mode… [+1276 chars]"
    
    
//  });
// });

// //query
// app.get('/name2/:id',(req,res)=>{
//     console.log('Hit');
//     try{
//     console.log(req.query);
//     }
//     catch(e){
//         console.log(e);
//     }
//     res.json({    
//            "params": req.params.id,
//            "query":req.query,
//     });
    
//    });

//our api return /news route *axios as http *map e loop with map data * responseObj.push push those data to defined field
//*uuid unique id generator 
app.use('/news',router)


app.listen(port, ()=>{
    console.log(`server created at ${port}`)
});