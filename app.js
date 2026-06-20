let products = document.getElementById("products");
fetch("https://fakestoreapi.com/products/category/women's%20clothing")
fetch("https://fakestoreapi.com/products")
fetch("https://dummyjson.com/products")
fetch("https://fakestoreapi.com/products/category/women's%20clothing")

.then((res) => {

    return res.json();

})
// fetch("https://fakestoreapi.com/products")
//   .then(res => {

//     return res.json();

// })

.then((data) => {

    console.log(data);

    data.products.map((item) => {

        products.innerHTML += `

        <div class="card">

            <img src="${item.thumbnail}" alt="" class="product-image">

            <h3>${item.title}</h3>

            <p>
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

