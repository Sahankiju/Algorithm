const box = document.querySelector(".box");
const number = document.querySelector(".number");
const num_btn=document.querySelector(".num_enter")
const ele_btn=document.querySelector(".ele_enter")
const before=document.querySelector(".before")
const after=document.querySelector(".after")
const head=document.querySelector(".head")



let array=[];

num_btn.addEventListener('click',take_numofele);
ele_btn.addEventListener('click',input);
let num_ele;
function take_numofele(){
  num_ele=number.value;
  number.value=NaN;
  before.classList.add("hidden");
  after.classList.remove("hidden");
  num_btn.classList.add("hidden");
  ele_btn.classList.remove("hidden");
}


function input(){
  array.push(Number(number.value));
  console.log(typeof(Number(number.value)));
  if(array.length==num_ele){
    head.innerHTML="Sorted";
    after.classList.add("hidden");
    ele_btn.classList.add("hidden");
    number.classList.add("hidden")
    sorting();
  }
}



function sorting(){
  let newRow = document.createElement("div");
newRow.classList.add("row");
box.appendChild(newRow);
for (let i = 0; i < array.length; i++) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("element");
  newDiv.innerHTML = array[i];
  newRow.appendChild(newDiv);
}
const sort = (arr, k) => {
  let newRow = document.createElement("div");
  newRow.classList.add("row");
  box.appendChild(newRow);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp;
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }

    if (i >= arr.length - k) {
      let newDiv = document.createElement("div");
      newDiv.classList.add("element");
      newDiv.classList.add("sorted");
      newDiv.innerHTML = arr[i];
      newRow.appendChild(newDiv);
    } else {
      let newDiv = document.createElement("div");
      newDiv.classList.add("element");
      newDiv.innerHTML = arr[i];
      newRow.appendChild(newDiv);
    }
  }

  return arr;
};
for (let i = 0; i < array.length; i++) {
  sort(array, i + 1);
}
}
