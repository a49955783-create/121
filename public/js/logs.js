fetch('/api/logs',{headers:{'x-role':'admin'}})
.then(r=>r.json()).then(d=>{
 logs.innerHTML='';
 d.forEach(l=>logs.innerHTML+=`<div class='card'>${l.action} ${l.name||''}</div>`);
});