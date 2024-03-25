let btn = document.getElementById('btn-change-cite');
let cite = document.getElementById('cite');
let author = document.getElementById('author')

function randomIntegerGenerator (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

function changeCite () {
  let randomIndex = randomIntegerGenerator(0, cites.length - 1);
  cite.innerText = `"${cites[randomIndex].text}"`;
  author.innerText = `${cites[randomIndex].author}`
}

changeCite();

btn.addEventListener('click', changeCite);