const fact = document.querySelector(`.fact`);

// Render HTML content
const renderFact = (content) => {
  fact.innerHTML = ``;

  const text = document.createElement(`p`);
  text.classList.add(`fact__content`);
  text.innerText = content;
  fact.appendChild(text);
};

// renderFact(`Chuck`);

// Chuck Norris API
const url = `https://api.chucknorris.io/jokes/`;
class ChuckApi {
  constructor(url) {
    this.url = url;
  }

  async getRandom() {
    try {
      const joke = await axios.get(`${url}random`);
    } catch (error) {
      console.log(`error`);
    }
  }
}
