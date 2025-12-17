async function save(){
 const body={
  name:name.value,nationalId:nationalId.value,age:age.value,
  mic:mic.value,hours:hours.value,notes:notes.value,
  grades:[{value:1},{value:1},{value:1},{value:1},{value:1},{value:2},{value:1}]
 };
 await fetch('/api/persons/create',{
  method:'POST',headers:{'Content-Type':'application/json','x-user':'user'},
  body:JSON.stringify(body)
 });
 alert('تم');location.href='/';
}