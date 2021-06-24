const row = document.querySelector(".row");
// const button = document.querySelectorAll(".btn");

// const card = document.querySelectorAll(".card");

const displayProducts = (products) => {
  // console.log(products);
  products.forEach((product) => {
    const html = `
    
    <div class="card mt-5 m-1">
    <img src="${product.img}" class="card-img-top w-100 img-fluid" alt="...">
    <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="font-weight-bold"> ${product.price} $  </p>
    <button type='button' class="btn btn-dark">Add to Cart</button>
    </div>
    </div>
    
    
    `;

    row.insertAdjacentHTML("afterbegin", html);

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) => {
      // 3) When the button is pressed, change the style of the item and add its data to another list. That's going to be the Cart's list. Display it somewhere.

      button.addEventListener("click", function (e) {
        // products.forEach((product) => {
        //   console.log(pruduct);
        // });
      });
    });
  });
};

const getData = () => {
  fetch(` https://striveschool-api.herokuapp.com/books`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      displayProducts(data);
    });
};

getData();

const button = document.querySelectorAll(".btn");

// const card = document.querySelectorAll(".card");

// console.log(card);
