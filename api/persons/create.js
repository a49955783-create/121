import {redis} from '../_redis.js';
import {v4 as uuid} from 'uuid';
import {calculateScores} from '../scores.js';
export default async(req,res)=>{
 const id=uuid();
 const total=calculateScores(req.body.grades);
 const data={...req.body,id,total,createdAt:Date.now()};
 await redis.set(`person:${id}`,data);
 await redis.sadd('persons',id);
 await redis.lpush('logs',{action:'create',name:data.name,by:req.headers['x-user']});
 res.json(data);
};