'use strict';

const selectedNumbers = [];
const input = document.querySelector(`.textInput`);
const ingredientText = document.getElementById(`ingredientText`);
const message = document.getElementById(`whatToDo`);
let randomNumber;


function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } 

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
}
return true;
}


// Recipe list

const recipe = [
    
  {
    id: 1,
    name: `Spaghetti carbonara`,
    ingredients: [
        `spaghetti`,
        `beacon`,
        `meat`,
        `eggs`,
        `cheese`,
        `salt`,
        `black pepper`,
        `garlic`
    ]
  }, 

  {
    id: 2,
    name: "Macaroni with Sausage and Cheese",
    ingredients: [
      "macaroni",
      "sausages",
      "cheese",
      "salt"
    ]
  },
  {
    id: 3,
    name: "Tuna with Side Dish",
    ingredients: [
      "tuna",
      "choose from:",
      "chickpeas",
      "beans",
      "macaroni"
    ]
  },
  {
    id: 4,
    name: "Oatmeal Porridge",
    ingredients: [
      "oatmeal",
      "margarine",
      "salt",
      "sugar"
    ]
  },
  {
    id: 5,
    name: "Fried Chicken with Rice",
    ingredients: [
      "chicken",
      "rice",
      "soy sauce"
    ]
  },
  {
    id: 6,
    name: "Breaded Chicken",
    ingredients: [
      "chicken",
      "bread crumbs",
      "eggs",
      "choose from:",
      "rice / macaroni / potatoes"
    ]
  },
  {
    id: 7,
    name: "Simple Chicken Soup",
    ingredients: [
      "chicken",
      "potatoes",
      "carrots",
      "onion"
    ]
  },
  {
    id: 8,
    name: "Chili Con Carne",
    ingredients: [
      "ground meat",
      "beans",
      "tomato paste",
      "tomatoes",
      "chili pepper"
    ]
  },
  {
    id: 9,
    name: "Lasagna",
    ingredients: [
      "lasagna sheets",
      "ground meat",
      "cheese",
      "bechamel sauce",
      "bolognese sauce"
    ]
  },
  {
    id: 10,
    name: "Shrimp with Side Dish",
    ingredients: [
      "shrimp",
      "soy sauce",
      "soy dressing",
      "spices",
      "choose from:",
      "rice / macaroni / noodles"
    ]
  },
  {
    id: 11,
    name: "Tom Yum",
    ingredients: [
      "chicken",
      "tom yum paste",
      "garlic",
      "chili pepper",
      "coconut milk"
    ]
  },
  {
    id: 12,
    name: "Sweet and Sour Chicken",
    ingredients: [
      "chicken",
      "onion",
      "bell pepper",
      "soy sauce",
      "ginger",
      "chili pepper",
      "lime",
      "sugar",
      "choose from:",
      "rice / macaroni"
    ]
  },
  {
    id: 13,
    name: "Jellied Meat",
    ingredients: [
      "chicken",
      "onion",
      "mushrooms"
    ]
  },
  {
    id: 14,
    name: "Taco",
    ingredients: [
      "ground meat",
      "chips / tortillas",
      "beans",
      "tomatoes",
      "corn",
      "sauce",
      "jalapeno",
      "avocado",
      "onion"
    ]
  },
  {
    id: 15,
    name: "Fried Chicken with Vegetables",
    ingredients: [
      "chicken",
      "bell pepper",
      "other vegetables of your choice",
      "onion",
      "rice"
    ]
  },
  {
    id: 16,
    name: "Salad with Chickpeas",
    ingredients: [
      "chickpeas",
      "tomatoes",
      "cucumbers",
      "red onion",
      "mayonnaise"
    ]
  },
  {
    id: 17,
    name: "Salad with Lentils",
    ingredients: [
      "lentils",
      "tomatoes",
      "red onion",
      "mayonnaise"
    ]
  },
  {
    id: 18,
    name: "Vegetable Salad",
    ingredients: [
      "tomatoes",
      "cucumbers",
      "bell pepper",
      "red onion",
      "lettuce leaves",
      "choose from:",
      "sour cream"
    ]
  },
  {
    id: 19,
    name: "Herring Under a Fur Coat",
    ingredients: [
      "herring",
      "carrots",
      "potatoes",
      "onion",
      "beetroot",
      "mayonnaise"
    ]
  },
  {
    id: 20,
    name: "Herring Under a Fur Coat",
    ingredients: [
      "herring",
      "carrots",
      "potatoes",
      "onion",
      "beetroot",
      "mayonnaise"
    ]
  },
  {
    id: 21,
    name: "Chicken Salad",
    ingredients: [
      "chicken",
      "corn",
      "tomatoes",
      "cucumbers",
      "beetroot",
      "mayonnaise"
    ]
  },
  {
    id: 22,
    name: "Pilaf",
    ingredients: [
      "chicken",
      "corn",
      "tomatoes",
      "cucumbers",
      "bell pepper"
    ]
  },
  {
    id: 23,
    name: "Tuna on Baguette",
    ingredients: [
      "tuna",
      "mayonnaise",
      "tomatoes",
      "choose from:",
      "baguette",
      "bread"
    ]
  },
  {
    id: 24,
    name: "Omelette",
    ingredients: [
      "eggs",
      "sausages"
    ]
  },
  {
    id: 25,
    name: "Tuna with Macaroni",
    ingredients: [
      "macaroni",
      "tuna"
    ]
  },
  {
    id: 26,
    name: "Macaroni à la Flot",
    ingredients: [
      "macaroni",
      "ground meat"
    ]
  },


]

//! Random button pressed--------------------------------------------------------------------------------

document.querySelector(`.btnRandom`).addEventListener(`click`, function() {
console.log(`random button is pressed`);

// Generate random unique number

  do {
    randomNumber = Math.trunc(Math.random() * recipe.length ); 
  } while (selectedNumbers.includes(randomNumber));

// Show recipe name above ingredients

  document.getElementById(`recipeName`).textContent = recipe[randomNumber].name;

// Add selected numbers to the list
  selectedNumbers.push(randomNumber);

// Acress the ingredients of the random recipe
  const randomRecipeIngredients = recipe[randomNumber].ingredients;

// Create a string with ingredients separated by line breaks
 
  const ingredientsText = randomRecipeIngredients.join(`<br>`);
  
// Changing list of ingredients to a random ingredient

       document.getElementById(`dish`).innerHTML =  ingredientsText

  if (selectedNumbers.length === recipe.length) {
    document.getElementById(`dish`).textContent = `You have viewed all available recipes`
  }
       
});


//! Search button pressed------------------------------------------------------------------------------

document.querySelector(`.btnSearch`).addEventListener(`click`, function() 
{  console.log(`search button is pressed`);

document.getElementById(`recipeName`).textContent = ``

const inputValue = input.value.trim().toLowerCase();
const inputIngredients = inputValue.split(`, `);
let recipesFound = [];

for (const r of recipe) {

  const foundIngredients = inputIngredients.filter(ingredient => r.ingredients.includes(ingredient.toLowerCase())
);

    if (arraysAreEqual(foundIngredients, inputIngredients)) {


        let ingredientList = r.ingredients.join(`<br>`);
      recipesFound.push(`<span style="font-size: 19px; color: black;"> ${r.name} : <br> <br>  ${ingredientList}`)

    }
}

if (recipesFound.length === 0) {
    document.getElementById(`dish`).textContent = `Sorry, no recipes available`
    message.textContent = `Enter the available ingredients using ,`;
} else {
  message.textContent = `Enter the available ingredients using ,`
  document.getElementById(`dish`).innerHTML = recipesFound.join(`<br><br>`);
}
   
});
