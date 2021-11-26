// //statement function  >> hoisting

// // test();

// function test(){

//     console.log('hello')

// }




// div.addEventListener('click',()=>{

//     //  e.taregt


// })

// // welcome();

// //function expression >> no hoisting

let welcome = function () {
  alert("hello");
};

// //arrow function

let getSalary = () => {
  console.log(10000);
};

// let xyz = (x,y)=>{

//     console.log(x+y);

// }

// //sygar syntax

// let getUserName = ()=>{
//     let x = 20;

//     return 'ahmed ali';
// }

// // let test2 = (n)=>{

// //     console.log(n);

// // }

// let test2 = n =>{

//     console.log(n);

// }

// // let test3 = (x)=>{

// //     return x*500;

// // }

//  let test3 = x => x*500;

// console.log(   test3(100) )

// test2(5);

// getSalary();

// xyz(10,20);

// console.log(  getUserName()  )

// this >>
  //this  >>> object

  //console.log(this); window

  function test() {
    console.log(this); //window
  };

let div = document.getElementById("mydiv");

div.addEventListener("click", function () {
  console.log(this);
});

// test();

let person = {
  name: "ahmed",
  salary: 1000,
  working: function () {
    //method

    console.log(this); //object

    let that = this;

    console.log(person);

    let test = () => {
      console.log(that); //  window  >> //1000
      console.log(this);

      let test2 = () => {
        console.log(this);
      }
      
      test2();
    }

    test();
  },
};

person.working(); //call






(()=>{

    console.log('self invoke')

})()

