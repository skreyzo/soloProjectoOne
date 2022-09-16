const rickBtn = document.querySelector(".rickBtn");
const divRick = document.querySelector(".divRick");

rickBtn.addEventListener("click", async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character/2");

  const result = await response.json();
  console.log(result);

  //   const rickImg = `<img src='${result.image}' alt ='rick' />`;
  const rickImg = `map.result((el) => el.id`;

  divRick.innerHTML = rickImg;
});

module.exports = result