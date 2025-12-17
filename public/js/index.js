fetch('/api/persons/list')
.then(r=>r.json()).then(d=>{
 list.innerHTML='';
 d.forEach(p=>{
  list.innerHTML+=`<div class='card'><b>${p.name}</b><br>المجموع:${p.total}</div>`;
 });
});