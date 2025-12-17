import {redis} from './_redis.js';
import {requireAdmin} from './auth.js';
export default async(req,res)=>{
 if(!requireAdmin(req,res))return;
 const logs=await redis.lrange('logs',0,100);
 res.json(logs);
};