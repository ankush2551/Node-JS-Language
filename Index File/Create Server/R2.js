const http = require('http');



const fs = require('fs');




// //  Second Server Created

// //    1

const serve = http.createServer();

serve.on('request',(req,res)=>{
    res.end('<h1> Ankush </h1>');
})

serve.listen(2555,()=>{
    console.log('server created')
});




// // //   2

const sever = http.createServer();

sever.on('request',(req,res)=>{
    res.end('<h1> Thummar </h1>');
})

sever.listen(1234,()=>{
    console.log('server created')
});




// // //   3

const se = http.createServer();

se.on('request',(req,res)=>{
    res.end('<h1> Patel </h1>');
})

se.listen(1111,()=>{
    console.log('server created')
});




// // //   4

const ever = http.createServer();

ever.on('request',(req,res)=>{
    res.end('<h1> Big </h1>');
})

ever.listen(4567,()=>{
    console.log('server created')
});




// // //   5

const sevr = http.createServer();

sevr.on('request',(req,res)=>{
    res.end('<h1> Small </h1>');
})

sevr.listen(8989,()=>{
    console.log('server created')
});
