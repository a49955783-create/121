fetch("/api/logs", {
  headers: { "x-role": "admin" }
})
.then(res => res.json())
.then(data => {
  logs.innerHTML = "";
  data.forEach(l => {
    logs.innerHTML += `
      <div class="card">
        <b>${l.action}</b><br>
        الاسم: ${l.name}<br>
        بواسطة: ${l.by}<br>
        ${l.at}
      </div>
    `;
  });
});
