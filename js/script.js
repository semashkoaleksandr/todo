const btn = document.querySelector(".main_btn");
const input = document.querySelector(".main_input");
const wrapper = document.querySelectorAll(".wrapper_li-item");
const activeItem = document.querySelector(".ul-active");
const completedItem = document.querySelector(".ul-completed");
const block = document.querySelector('.wrap');

btn.addEventListener("click", () => {
  const value = input.value;

  if (value) {
    addElement(value);
    input.value = "";
  }
});

wrapper.forEach((item) => {
  item.addEventListener("click", (event) => {
    const item = event.target;
    const parent = item.parentNode.parentNode;

    if (item && item.classList.contains("delete_btn")) {
      parent.remove();
    }
    if (item && item.classList.contains("done_btn")) {
      moveElement(parent.innerText);
      parent.remove();
    }
    if (item && item.classList.contains("return_btn")) {
      removeElement(parent.innerText);
      parent.remove();
    }
    if (item && item.classList.contains("edit_btn")) {

      // console.log(parent.innerText = 1);
      editElement();
      // parent.remove();+
    }
  });
});

const moveElement = (value) => {
  completedItem.innerHTML += `
  <li class="list_item">
    ${value}
  <button class="done_btn">
    <img class="btn_img return_btn" src="icons/return.svg" alt="" />
  </button>
  <button class="edit_btn">
    <img class="btn_img edit_btn" src="icons/edit.svg" alt="" />
  </button>
  <button class="delete_btn">
    <img class="btn_img delete_btn" src="icons/delete.svg" alt="" />
  </button>
</li>
`;
};

const addElement = (value) => {
  activeItem.innerHTML += `
  <li class="list_item">
    ${value}
  <button class="done_btn">
    <img class="btn_img done_btn" src="icons/done.svg" alt="" />
  </button>
  <button class="edit_btn">
    <img class="btn_img edit_btn" src="icons/edit.svg" alt="" />
  </button>
  <button class="delete_btn">
    <img class="btn_img delete_btn" src="icons/delete.svg" alt="" />
  </button>
</li>
`;
};

const removeElement = (value) => {
  activeItem.innerHTML += `
  <li class="list_item">
    ${value}
  <button class="done_btn">
    <img class="btn_img done_btn" src="icons/done.svg" alt="" />
  </button>
  <button class="edit_btn">
    <img class="btn_img edit_btn" src="icons/edit.svg" alt="" />
  </button>
  <button class="delete_btn">
    <img class="btn_img delete_btn" src="icons/delete.svg" alt="" />
  </button>
</li>
`;
};

const editElement = () => {
  const editInput = document.createElement("input");
  const editBtn = document.createElement("button");
  block.prepend(editInput, editBtn);
  editInput.classList.add('main_input', 'locationInput');
  editInput.placeholder = '...';
  editBtn.textContent = 'Редактировать';
  editBtn.classList.add('main_btn', 'propertyEdit');

  editBtn.addEventListener('click', () => {
    // addElement(item);
    console.log(activeItem.innerText);
    addElement(editInput.value);

    ;
  });
};