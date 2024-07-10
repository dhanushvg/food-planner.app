// var foodInput = document.getElementById("food-bar");

// var save_btn =document.getElementById("food-btn");

// var response = document.getElementsByClassName("food-items");

// var list = document.getElementsByClassName("food-container")

// var food_check = document.querySelector('li.lastChild')

// var food_statistics = document.getElementById("food-list-statistics")

// var no_list = document.getElementById("no-list")

// const keyboardhandling = ()=>{
   
//    const main = document.getElementById("alert");
   
//    const createDiv = document.createElement('div')
   
//    createDiv.className = "updated"
   
//     const textMsg = document.TEXT_NODE = `✅Successful, ${foodInput.value} is updated`;
   
//     createDiv.append(textMsg);
   
//     main.prepend(createDiv)


   
// const div_element = document.createElement("div");

// const div_btn =document.createElement("div");

// const foodEl =document.createElement("li");

// foodEl.className="food-items"

//  foodEl.append(div_element,div_btn)

// div_element.textContent=foodInput.value;

// div_btn.innerHTML= `<i class="fa-solid fa-xmark"></i>`
            
// div_btn.parentElement.setAttribute("onclick","removeItem(event)")

// foodEl.append(div_element)

// foodEl.append(div_btn);

// list.append(foodEl)

// };

// save_btn.addEventListener('click',keyboardhandling)

// // foodInput.addEventListener('keyup',(event)=>{

// //    console.log(event);
// //    if(event.key === 'Enter'){
// //       keyboardhandling;
// //    }
// //     else if(event.key === 'KeyZ' && event.ctrlKey || event.metaKey){
// //       foodInput='';
// //    }
// // })


// // const elementCreate = document.createElement('li');

// // elementCreate.className="food-items";

// // elementCreate.textContent = "Pani puri"


// // console.log(list.parentNode.nextSibling)


// function removeItem(event){
//    const erase = event.target.parentNode.parentNode;
//    erase.remove();
// }

// // const div_element = document.createElement("div");

// // const div_btn =document.createElement("div");

// // const foodEl =document.createElement("li");

// // foodEl.className="food-items"

// // foodEl.append(div_element)

// // // foodEl.append(div_element,div_btn)

// // div_element.textContent=foodInput.value;

// // div_btn.innerHTML= `<i class="fa-solid fa-xmark"></i>`
            
// // div_btn.parentElement.setAttribute("onclick","removeItem(event)")

// // foodEl.append(div_element)

// // foodEl.append(div_btn);

// // list.append(foodEl)

// // const removeEl = document.querySelector("#input-data");

// // const hideMe = document.querySelector("#hideMe");

// // hideMe.addEventListener('click',()=>{
// //    if(removeEl.classList.contains("hide")){
// //       hideMe.style.background="grey";
// //       removeEl.style.display="block"
// //       hideMe.innerText="hideMe"
// //       removeEl.classList.remove("hide")
// //    }

// //    else{
// //        hideMe.style.background="royalblue";
// //        removeEl.classList.add("hide")
// //        removeEl.style.display="none";
// //         hideMe.innerText="showMe"
// //    }
// // })


// // formel.addEventListener('click',(event)=>{
// //    alert("clicked")
// //    event.stopImmediatePropagation();
// // })

// // divel.addEventListener('click',(event)=>{
// //    alert("div")
// // })

// // pel.addEventListener('click',(event)=>{
// //    alert("p")
// // })

// // formel.addEventListener('click',(event)=>{
// //    alert("clicked for twice")
// // })


// console.log(food_statistics);


// function totalnum(){
//     if(list.length > 0){
//       no_list.hidden = true
//     }
//     else{
//       no_list.hidden = false
//     }
   
// }



let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let foodContainer = document.getElementById("food-container");
let noListEl = document.getElementById("no-list");
const foodListStatistics = document.getElementById("food-list-statistics");


 const localStorageKey = "foodItems";



 //fetch local storage
 
 document.addEventListener('DOMContentLoaded',()=>{

   const fetchedFoods = 
   [...JSON.parse(localStorage.getItem(localStorageKey))]
    

  fetchedFoods.forEach((items)=>{
    let newFoodItemEl = document.createElement("li");

    let div = document.createElement("div"); //for list-item
    let divBtn = document.createElement("div");
  
    newFoodItemEl.append(div, divBtn);
  
    // assigning textContent & className to newFoodItemEl
    div.textContent = items.foodItem;
    newFoodItemEl.className = "food-item";
  
    divBtn.parentElement.setAttribute("onClick", "removeFoodItem(event)");
    divBtn.innerHTML = `<i class="fa fa-xmark"></i>`;
    newFoodItemEl.append(divBtn);
  
    // appending newly created element(newFoodItemEl) to foodContainer
    foodContainer.append(newFoodItemEl);
  })

  
  refreshUI();
 })



const handleInputFood = () => {
  // creating li element
  let newFoodItemEl = document.createElement("li");

  let div = document.createElement("div"); //for list-item
  let divBtn = document.createElement("div");

  newFoodItemEl.append(div, divBtn);

  // assigning textContent & className to newFoodItemEl
  div.textContent = inputFood.value;
  newFoodItemEl.className = "food-item";

  divBtn.parentElement.setAttribute("onClick", "removeFoodItem(event)");
  divBtn.innerHTML = `<i class="fa fa-xmark"></i>`;
  newFoodItemEl.append(divBtn);

  // appending newly created element(newFoodItemEl) to foodContainer
  foodContainer.append(newFoodItemEl);

  // resetting the inputFood value
  
  
  //localstorage set
  
  localStorage.setItem(localStorageKey,
  JSON.stringify([
    ...JSON.parse(localStorage.getItem(localStorageKey) || "[]"),
    {foodItem : inputFood.value}
  ])
);

inputFood.value = "";

  refreshUI();
};

inputBtn.addEventListener("click", handleInputFood);

inputFood.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    handleInputFood();
  } else if (event.key === "KeyZ" && (event.ctrlKey || event.metaKey)) {
    // Undo Operations
    inputFood.value = "";
  }
});

// remove Food items
function removeFoodItem(event) {
  const existingList = event.target.parentNode.parentNode;
  existingList.remove();

  const fetchedFoods = 
  [...JSON.parse(localStorage.getItem(localStorageKey))]

  fetchedFoods.forEach((items)=>{

    if(existingList.innerText ===items.localStorageKey){
      fetchedFoods.splice(fetchedFoods.indexOf(items),1)

    }

  })
  localStorage.setItem(localStorageKey,JSON.stringify(fetchedFoods))

  refreshUI();
}

function refreshUI() {
  foodListStatistics.innerText = `You have ${foodContainer.children.length} lists`;

  // if (foodContainer.children.length > 0) {
  //   //  children exist, so don't show `no-list` div
  //   noListEl.hidden = true;
  // } else {
  //   // children not exist, show `no-list` div
  //   noListEl.hidden = false;
  // }

  // You can write better!
  foodContainer.children.length > 0
    ? ((noListEl.hidden = true), (foodListStatistics.hidden = false))
    : ((noListEl.hidden = false), (foodListStatistics.hidden = true));
}