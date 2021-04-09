let express = require('express');
let api = require("./server/paths/api.js");

const PORT = process.env.PORT || 80;



const app = express();
app.use(express.json());

// App part
app.get('/',(req,res)=>{
  res.send('<h1>Reports</h1>');
});



// API part
app.use('/api', api);


//404 page
app.get('*',(req,res)=>{
  res.status(404);
  res.send('<h1>404</h1>');
})
app.listen(PORT,()=>{
  console.log(`Listening at ${PORT}`);
});

