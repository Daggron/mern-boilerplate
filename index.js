const express = require('express');
const app = express();
const cors = require('cors');


const arr = [
    {
        "name":"Abhay",
        "price":25
    },
    {
        "name":"deved",
        "price":23
    },
    {
        "name":"ezramiller",
        "price":12
    }
]
app.use(cors());

app.route('/api/get/data').get((req,res)=>{
    res.json(arr);

});

let port = 4000
app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});