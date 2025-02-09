const box = document.querySelector(".box");

array = [10, 5, 6, 1, 2, 9, 4, 6, 11, 0];

let j = array.length;
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
arrr;
