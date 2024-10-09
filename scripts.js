/*
   Lógica de Programação 

   [x] Pegar a informaçao do Input, quando o botão for clicado
   [x] Ir até a API, e trazer as receitas
   [x] Colocar as receitas na Tela
   [ ] Saber quando o usuario clicou na receita
   [ ] Buscar informaçoes da receita individual na API
   [ ]Colocar receita individual na tela
   [ ]
*/


/*const Input = document.querySelector('.search-input')*/

const form = document.querySelector('.search-form')
const recipelist = document.querySelector('.recipe-list')

form.addEventListener('submit', function (event) {
    event.preventDefault()
    const inputValue = event.target[0].value

    searchRecipes(inputValue)
    

})

async function searchRecipes(ingredient) {

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    const data = await response.json()
    
    showRecipes(data.meals)
    console.log(data)
    
}

function showRecipes(recipes) {
    recipelist.innerHTML = recipes.map(item => `
        <div class="recipe-card" onclick="getRecipesDetails(${item.idMeal})"    >
        <img src="${item.strMealThumb}" alt="receita-foto">
        <h3>${item.strMeal}</h3>
        </div>
        `

    ).join('')
}

async function getRecipesDetails(id){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,)
    const data = await response.json()
    const recipe = data.meals[0]
    let ingredients = ''
    
    for(let i = 1; i <= 20; i++){
        if(recipe[`strIngredient${i}`]){
            ingredients = `<li>${}</li>` recipe[`strIngredient${i}

            ]
            
            console.log (recipe[`strIngredient${i}`])   
        }else{
            break;      
        }
    }
    
}