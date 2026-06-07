import app from './app.js';
import connectDB from './src/config/db.js';


connectDB()

app.listen(1234,"0.0.0.0",()=>{
  console.log('Server is working on port 1234')
})
