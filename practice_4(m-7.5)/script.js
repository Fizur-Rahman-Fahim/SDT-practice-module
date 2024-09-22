const fetchmealdata=(val) => {
    // console.log(val);
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`)
.then(response => response.json())
 .then(data => {
    showSearch(data.meals);
    // console.log(data);
  })
}


const showSearch = (meals) => {

    const searchResults = document.getElementById('search-result');
    searchResults.innerHTML = '';
    meals.forEach(meal => {

        // console.log(meal);

        const div = document.createElement('div');
        div.className ='meal';
        div.onclick = () =>showDetails(meal);
        // console.log(meal);
        div.innerHTML = `
        <img id="thumbnail" src='${meal.strMealThumb}' alt='${meal.strMeal}'>
        <h3 id="food-name">${meal.strMeal}</h3>
        `;
        searchResults.appendChild(div);
    })

}



const showDetails = (Meal) => {
    // console.log(Meal);
    const mealcard = document.getElementById("details");
    mealcard.innerHTML = '';

    let mealingrediants = [];
    for(let i = 1; i<=20; i++){
        if(Meal[`strIngredient${i}`]){
            mealingrediants.push(Meal[`strIngredient${i}`]);
        }
    }
    // console.log(mealingrediants);

    const div = document.createElement('div');
    div.className ='meal_details';
    div.innerHTML = `
    <img id="meal-img" src='${Meal.strMealThumb}' alt='${Meal.strMealThumb}'>
    <h3 id="meal-name">${Meal.strMeal}</h3>
    <h4>Ingredients:</h4>
    <ul id="ingredients-list">
    ${mealingrediants.map(ing => `<li>${ing}</li>`).join('')}
    </ul>
    `;
    mealcard.appendChild(div);

}


function searchData(){
    const input = document.querySelector("#search_input");
    const val = input.value.trim();
    fetchmealdata(val);
}