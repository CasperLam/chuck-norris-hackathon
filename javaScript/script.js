// Chuck Norris API class
const url = `https://api.chucknorris.io/jokes/`;

class ChuckApi {
  //   constructor() {
  //     this.url = url;
  //   }
  // >> The constructor isn't needed as each instance created from it is the same. i.e. the url is always the same <<

  async getRandom() {
    try {
      const joke = await axios.get(`${url}random`);
      return joke;
    } catch (error) {
      console.log(`error`);
    }
  }
}

const chuck = new ChuckApi(); // Create a new instance of the API object

// Render HTML content
const fact = document.querySelector(`.fact`);

async function renderFact() {
  fact.innerHTML = ``;

  const response = await chuck.getRandom();

  const text = document.createElement(`p`);
  text.classList.add(`fact__content`);
  text.innerText = response.data.value;
  fact.appendChild(text);
}

// Generate a new fact when the form is submitted
const handleSubmit = (event) => {
  event.preventDefault();
  renderFact();
};

const form = document.querySelector(`.form`);
form.addEventListener(`submit`, handleSubmit);
