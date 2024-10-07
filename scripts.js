/*
   Lógica de Programação 

   [ ] Pegar a informaçao do Input, quando o botão for clicado
   [ ] Ir até a API, e trazer as receitas
   [ ] Colocar as receitas na Tela
   [ ] Saber quando o usuario clicou na receita
   [ ] Buscar informaçoes da receita individual na API
   [ ]Colocar receita individual na tela
   [ ]
*/ 


const Input = document.querySelector('.search-input')
const form = document.querySelector('.search-form')

form.addEventListener('submit', function(event){
    
    event.preventDefault ()    
    console.log(event)

})
