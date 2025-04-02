const inputField = document.getElementById("inputField");
const applyButton = document.getElementById("applyButton");
const randomButton = document.getElementById("randomButton");
const displayField = document.getElementById("displayField");

// applyButton.addEventListener("click", function(){
//     const color = inputField.value
//     displayField.style.backgroundColor = color;
//     displayField.textContent = color;
// })

const randomColors = [
    '#FFB17A',
    '#0A1128',
    '#BEE7B8',
    '#713E5A',
    '#0B4F6C',
    '#20BF55'
  ];

  const randomIndex = Math.floor(Math.random() * randomColors.length);

  randomButton.addEventListener("click", function(){
    const random = randomColors[randomIndex];
    displayField.style.backgroundColor = random;
    displayField.innerText = random;
    console.log(random)
  });

  inputField.addEventListener("change", (event) => {
    displayField.style.backgroundColor = inputField.value;
    displayField.innerText = inputField.value;
  });
