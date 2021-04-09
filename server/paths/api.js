let express = require('express');
let router = express.Router();

//Middleware

router.use((req,res,next)=>{
  res.set({
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'content-type'
  })
  next();
});

// AUTH from Token need!
// router.use((req,res,next)=>{
//   if(!true){                  
//     res.status(403);
//     res.send();
//   }
//   next();
// })

//Routes
router.get('/',(req,res)=>{
  // add reading from database 
  res.send('<h1>API</h1>');
})
.post('/',(req,res)=>{

  console.log(req.body); // Change to put in database
  res.send();
})
.options('/',(req,res)=>{
  // pre-flight requeste
  res.send();
});

module.exports = router;