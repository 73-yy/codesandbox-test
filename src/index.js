import "./styles.css";

// document.getElementById('app').innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href='https://parceljs.org' target='_blank' rel='noopener noreferrer'>here</a>.
// </div>
// `;

const onClickAdd = () => {
  const inputText = document.querySelector("#add-text").value;
  // console.log(val);

  document.querySelector("input").value = "";

  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteItem("#incomplete-list");
    div.removeChild(completeButton);
    div.removeChild(deleteButton);
    div.appendChild(returnButton);
    document.querySelector("#complete-list").appendChild(div);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteItem("#incomplete-list");
  });

  const returnButton = document.createElement("button");
  returnButton.innerText = "戻す";
  returnButton.addEventListener("click", () => {
    alert();
  });

  function deleteItem(el) {
    const deleteTarget = deleteButton.parentNode;
    document.querySelector(el).removeChild(deleteTarget);
  }

  li.innerText = inputText;

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.querySelector("#incomplete-list").appendChild(div);
};

document.querySelector("#add-button").addEventListener("click", onClickAdd);
