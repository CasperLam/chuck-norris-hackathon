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
      console.log(error);
    }
  }

  async getCategory() {
    try {
      const cat = await axios.get(`${url}categories`);
      return cat;
    } catch (error) {
      console.log(error);
    }
  }

  async getCategoryRandom(choice) {
    try {
      const cat = await axios.get(`${url}random?category=${choice}`);
      return cat;
    } catch (error) {
      console.log(error);
    }
  }
}

const chuck = new ChuckApi(); // Create a new instance of the API object

// Render HTML content - facts
const fact = document.querySelector(`.fact`);

async function renderFact() {
  fact.innerHTML = ``;

  const response = await chuck.getRandom();

  const text = document.createElement(`p`);
  text.classList.add(`fact__content`);
  text.innerText = response.data.value;
  fact.appendChild(text);
}

// Render HTML content - facts from a chosen category
async function renderFactCat(choice) {
  fact.innerHTML = ``;

  const response = await chuck.getCategoryRandom(choice);

  const text = document.createElement(`p`);
  text.classList.add(`fact__content`);
  text.innerText = response.data.value;
  fact.appendChild(text);
}

// Render HTML content - categories
const select = document.querySelector(`.form__select`);

async function renderCats() {
  const response = await chuck.getCategory();
  const categories = response.data;

  const first = document.createElement(`option`);
  first.setAttribute(`value`, `first`);
  first.classList.add(`form__option`);
  first.innerText = `Hit me with your best shot`;
  select.appendChild(first);

  categories.forEach((category) => {
    const option = document.createElement(`option`);
    option.setAttribute(`value`, category);
    option.classList.add(`form__option`);
    option.innerText = category[0].toUpperCase() + category.slice(1);
    select.appendChild(option);
  });
}

renderCats();

// Generate a new fact when the form is submitted
const handleSubmit = (event) => {
  event.preventDefault();
  const choice = event.target.category.value;

  if (choice === `first`) {
    renderFact();
  } else {
    renderFactCat(choice);
  }
};

const form = document.querySelector(`.form`);
form.addEventListener(`submit`, handleSubmit);
