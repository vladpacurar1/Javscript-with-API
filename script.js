async function customFetch(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const factElement = document.querySelector(".fact");

async function getRandomFact() {
  const fact = await customFetch(
    "https://uselessfacts.jsph.pl/random.json?language=en"
  );
  return fact.text;
}

async function setRandomFact() {
  factElement.textContent = "Loading...";
  factElement.textContent = await getRandomFact();
}

setRandomFact();

const newFactButton = document.querySelector(".new-fact-button");

newFactButton.addEventListener("click", async () => {
  setRandomFact();
});
