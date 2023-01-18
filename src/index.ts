import  express  from 'express';
import mongoose from 'mongoose';
mongoose.set('strictQuery', true);



mongoose.connect('mongodb://localhost:27018')
  .then(()=>{
    const app = express();
    const port=3002;
    app.listen(port,()=>{
      console.log(` listening on port http://localhost:${port}` );
    });
  })
  .catch(()=>console.log('connection established'));
