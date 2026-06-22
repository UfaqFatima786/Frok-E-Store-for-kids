let products = document.getElementById("products");
// fetch("https://fakestoreapi.com/products/category/women's%20clothing")
// fetch("https://fakestoreapi.com/products")
fetch("https://dummyjson.com/products")
// fetch("https://fakestoreapi.com/products/category/women's%20clothing")

// .then((res) => {

//     return res.json();

// })

// fetch("https://fakestoreapi.com/products")
//   .then(res => {

//     return res.json();

// })




// .then((data) => {

//     console.log(data);

//     data.products.map((item) => 
      
.then((res) => res.json())
  .then((data) => {

    data.products.map((item) =>

      {

        products.innerHTML += `

        <div class="cardhtml">

            <img src="${item.thumbnail}" alt="" class="product-image">

            <h3 class="product-title mt-3 py-2 px-2">${item.title}</h3>

            <p class="description">
              ${item.description.substring(0, 80)}...
            </p>

            <div class="price">
              $${item.price}
            </div>

            <button>Add To Cart</button>

        </div>

        `;
    });

})

.catch((error) => {

    console.log("API Error:", error);

    products.innerHTML = `
    
      <h1>
        Failed To Load Products
      </h1>

    `;
});



// let products = document.getElementById("products");

// fetch("https://api.jsonbin.io/v3/b/6a36d816f5f4af5e29155231/latest", {
//   headers: {
//     "X-Master-Key": "$2a$10$eAUsi0jyaGySpBNB53Cg0et.i0Z9NBw4FhGy6DXWXzvp/mFrEPGfO"
//   }
// })
// .then((res) => res.json())
// .then((data) => {

//   data.record.products.map((item) => {

//     products.innerHTML += `
//       <div class="card">
//         <img src="${item.thumbnail}" alt="" class="product-image">

//         <h3>${item.title}</h3>

//         <p>${item.description}</p>

//         <div class="price">$${item.price}</div>

//         <button>Add To Cart</button>
//       </div>
//     `;
//   });

// })
// .catch((err) => {
//   console.log(err);
// });