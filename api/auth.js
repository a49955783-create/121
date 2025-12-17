export function requireAdmin(req,res){
 if(req.headers['x-role']!=='admin'){
  res.status(403).json({error:'forbidden'});return false;}
 return true;}