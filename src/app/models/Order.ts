import { model,Schema } from 'mongoose';
export const Order=model('Category',new Schema({
  name:{
    type:String,
    required:true,

  },
  status:{
    type:String,
    required:true,
    enum:['WAITING','IN_PRODUCTION','DONE'],
    default:'WAITING'
  },
  createdAt:{
    type:Date,
    default:Date.now
  },
  products:{
    required:true,
    type:[{
      product:{
        type:Schema.Types.ObjectId,
        ref:'Product',
        required:true
      }
    }]
  },
  quantity:{
    type:Number,
    default:1
  }
} ));