let RecipesData = [];
let componants = {};
let Links = document.getElementsByClassName("nav-item");
GetReciepe("pizza");

for (let i = 0; i < Links.length; i++) {

  Links[i].addEventListener("click", function (e) {

    GetReciepe(e.target.innerHTML);

  })
}

async function GetReciepe(kelma) {

  let x = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${kelma}`);

  let Data = await x.json();
  RecipesData = Data.recipes;
  DisplayElements();
}

function DisplayElements() {

  let cartona = "";

  for (let i = 0; i < RecipesData.length; i++) {
    cartona += `
    <div class="col-md-4 text-center">
    <img  data-bs-toggle="modal" data-bs-target="#mitso" src="${RecipesData[i].image_url}" class="img-fluid" onclick='getComponants("${RecipesData[i].recipe_id}")'>
    <h4>${RecipesData[i].recipe_id}</h4>
    <h4>${RecipesData[i].title}</h4>
    </div>`
  }

  document.getElementById("rowData").innerHTML = cartona;
}

async function getComponants(id) {

  let y = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
  let ComponantData = await y.json();
  componants = ComponantData.recipe;
  displayComponants();
}

function displayComponants() {

  let LIs = ``;
  for (let i = 0; i < componants.ingredients.length; i++) {

    LIs += `<li>${componants.ingredients[i]}</li>`
  }

  let cartona =

    `
      <div class="">

        <img src="${componants.image_url}"  class='img-fluid'>
 
             <ol>
               ${LIs}
             </ol>

     </div>
     ` ;

  document.getElementById("recipe").innerHTML = cartona;



}