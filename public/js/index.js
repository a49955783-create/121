fetch("/api/persons/list")
  .then(res => res.json())
  .then(data => {
    list.innerHTML = "";
    data.forEach(p => {
      list.innerHTML += `
        <div class="card">
          <b>${p.name}</b><br>
          المجموع: ${p.total}
        </div>
      `;
    });
  });
