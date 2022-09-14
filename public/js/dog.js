const dogBtn = document.querySelector(".dogBtn");
const divDog = document.querySelector(".divDog");

dogBtn.addEventListener("click", async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");

  //   console.log(response);
  const result = await response.json();

  const dogImg = `<img src='${result.message}' alt ='dog' />`;

  divDog.innerHTML = dogImg;
});
