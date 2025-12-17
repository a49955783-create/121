import {redis} from '../_redis.js';
export default async(req,res)=>{
 const ids=await redis.smembers('persons')||[];
 const out=[];
 for(const id of ids){
  const p=await redis.get(`person:${id}`);
  if(p) out.push(p);
 }
 res.json(out);
};