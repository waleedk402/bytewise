const path=require('path')
const express = require("express");
const dotenv = require("dotenv");
const {errorHandler}=require('./middleware/errorMiddleware')
const colors=require('colors')
const connectDB=require('./config/db')
dotenv.config();
const port = process.env.PORT || 5000;
connectDB()
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/goals',require('./routes/goalRoutes'))
app.use('/api/users',require('./routes/userRoutes'))

// Serve Frontend for deployment
if(process.env.NODE_ENV==='production')
{
  app.use(express.static(path.join(__dirname,'../frontend/build')))
  app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'../','frontend','build','index.html')))
}
else{
  app.get('/',(req,res)=>res.send('Please set to Production'))
}
app.use(errorHandler)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
