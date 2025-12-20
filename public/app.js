async function save() {
  const data = {
    name: name.value,
    nid: nid.value,
    age: age.value,
    job: job.value,
    mic: mic.value
  };

  await fetch("/api/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  alert("تم الحفظ");
}

async function search() {
  const res = await fetch(`/api/search?nid=${search.value}`);
  const data = await res.json();
  result.textContent = JSON.stringify(data, null, 2);
}
