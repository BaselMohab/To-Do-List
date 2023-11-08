const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
});

function toDoList() {
  let newTask = inputEl.value;
  const liEl = document.createElement("li");
  liEl.innerText = newTask;
  ulEl.appendChild(liEl);
  inputEl.value = "";
  
  const checkBtnEl = document.createElement("div");
  checkBtnEl.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  liEl.appendChild(checkBtnEl);
  
  const deleteBtnEl = document.createElement("div");
  deleteBtnEl.innerHTML = '<i class="fa-solid fa-trash"></i>';
  liEl.appendChild(deleteBtnEl);
  
  checkBtnEl.addEventListener("click", ()=> {
    liEl.classList.toggle("checked");
  });
  
  deleteBtnEl.addEventListener("click", ()=> {
    liEl.remove();
  });
}