var products = [];
var tbody = document.getElementById("tbody");

if (localStorage["products"] != null || localStorage["products"] != undefined) {
  products = JSON.parse(localStorage["products"]);
  display(products, tbody);
} else {
  localStorage.setItem("products", "");
}

// ==================================== Code of addition

var allInputs = document.querySelectorAll(".input");
var clearPwd = document.querySelector("#clearPwd");
var clearBtn = document.querySelector("#clearBtn");

function addProduct() {
  var product = {
    name: allInputs[0].value,
    price: allInputs[1].value,
    code: allInputs[2].value,
    amount: allInputs[3].value,
  };
  products.push(product);
  localStorage["products"] = JSON.stringify(products);
  display(products, tbody);
  clearInputs(allInputs);
}

function clearInputs(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].value = "";
  }
}

function display(arr, ele) {
  let cartona = ``;
  for (let i = 0; i < arr.length; i++) {
    cartona += `
    <tr>
      <td onclick="deleteProduct(${i})" class="delete-icon rounded-start-pill border border-0 ps-2">
        <i class="fa-solid fa-xmark"></i>
      </td>
      <td>${arr[i].amount}</td>
      <td>${arr[i].code}</td>
      <td>${arr[i].price}</td>
      <td>${arr[i].name}</td>
    </tr>
    `;
  }
  ele.innerHTML = cartona;
}

function deleteProduct(x) {
  products.splice(x, 1);
  display(products, tbody);
  localStorage["products"] = JSON.stringify(products);
}
