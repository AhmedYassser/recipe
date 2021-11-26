function getPizza() {
  return new Promise(function (resolve , reject) {
    var xml = new XMLHttpRequest(); //make instance

    xml.open("GET", `https://forkify-api.herokuapp.com/api/search?q=pizza`);

    xml.send();

    xml.addEventListener("load", function () {
      if (xml.readyState == 4 && xml.status == 200) {
        console.log("pizza");

        resolve(); //call
      }

      else{

        //erros
          reject();
      }
    });
  });
}

function getPasta() {
  return new Promise(function (callback , reject) {
    var xml = new XMLHttpRequest(); //make instance

    xml.open("GET", `https://forkify-api.herokuapp.com/api/search?q=pasta`);

    xml.send();

    xml.addEventListener("load", function () {
      if (xml.readyState == 4 && xml.status == 200) {
        console.log("pasta");

        callback(); //call
      }else{

        reject()

      }
    });
  });
}

function getSalad() {
  return new Promise((callback , mshakel) => {
    var xml = new XMLHttpRequest(); //make instance

    xml.open("GET", `https://forkify-api.herokuapp.com/api/search?q=s`);

    xml.send();

    xml.addEventListener("readystatechange", function () {
      if (xml.readyState == 4 && xml.status == 200) {
        console.log("salad");

        callback(); //call
      }
      else{
          mshakel();
      }
    });
  });
}

function theend() {
  //sync
  console.log("the end");
}

// getPizza().then(() => {
//   getPasta().then(() => {
//     getSalad().then(theend);
//   });
// });





//es6  >> primise callbackhell   2017   >>>   fetch()

//then chining

getPizza()
  .then(() => getPasta())
  .then(() => getSalad())
  .then(theend).catch(handleError)  

//   9:00  





function handleError(){
    console.log('something error')
}




// getPizza().then( ()=>getPasta()).catch( handleError );











// f().then().then().then()

//callback

//callback hell

// getSalad(() => {
//   getPizza(() => {
//     getPasta(theend);
//   });
// }); //async

//es6  promise >>  callback hell

// pending

// resolved

// rejected

// let x = new Promise(  func  )

// then();

// catch();

// f1().then(f2).then(f3).then(f4)

// callbacks

// tag.addEventListener('click', function(){
//     closeslide();
// })

// function xyz(x){

//     console.log(x);

//     x(); //call

// }

// xyz( function(){console.log('hello')}    )
