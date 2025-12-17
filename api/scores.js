export function calculateScores(arr=[]){
 return arr.reduce((a,b)=>a+Number(b.value||0),0);}
