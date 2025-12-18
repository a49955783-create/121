fetch("/api/logs", {
  headers: {
    "x-admin-password": "12455"
  }
})
.then(res => res.json())
.then(data => {
  logs.innerHTML = "";

  if (!data.length) {
    logs.innerHTML = "<p>لا يوجد سجلات</p>";
    return;
  }

  data.forEach(l => {
    logs.innerHTML += `
      <div class="card">
        <b>${l.action}</b><br>
        الاسم: ${l.name || "-"}<br>
        بواسطة: ${l.by}<br>
        ${new Date(l.at).toLocaleString("ar-SA")}
      </div>
    `;
  });
});
