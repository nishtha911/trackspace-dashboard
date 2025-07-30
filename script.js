function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime(); 

document.getElementById("new-quote").addEventListener("click", async function () {
  try {
    const res = await fetch("http://localhost:3000/quote");
    const data = await res.json();
    document.getElementById("quote-text").textContent = `"${data.quote}" – ${data.author}`;
  } catch (err) {
    document.getElementById("quote-text").textContent = "Couldn't load quote. Try again.";
  }
});
