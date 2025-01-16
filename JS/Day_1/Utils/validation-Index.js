var user = localStorage.getItem("users");
if (user) {
    const parsedUser = JSON.parse(user);

    // Get user details from local Storage
    document.getElementById("welcomemessage").innerHTML = `Hello ${parsedUser[0].email}`;
    document.getElementById("logoutbutton").classList.remove("hidden");
}
else {
    document.getElementById("welcomemessage").innerHTML = `Hello, Please <a href="Day_2\Pages\login.html">Log In</a>`
}

document.getElementById("logoutbutton").addEventListener("click", function () {

    // Log Out 
    localStorage.removeItem("user");
    window.location.href = "./Pages/login.html";
});

async function populateCategories() {
    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const products = await response.json();

        // Extract categories
        const categories = [...new Set(products.map(product => product.category.name))];

        // Get the select element
        const select = document.getElementById('categories');

        // Populate the select element with category options
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            select.appendChild(option);
        });

        select.addEventListener('change', function () {
            const selectedCategory = this.value;
            filterProductsByCategory(selectedCategory, products);
        });

    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}
populateCategories();

function filterProductsByCategory(selectedCategory, products) {
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = '';

    // If no category is selected, all products are shown.
    const filteredProducts = selectedCategory ?
        products.filter(product => product.category.name === selectedCategory) :
        products;

    // Loop through the filtered products and create HTML for each.
    filteredProducts.forEach(product => {
        // Get description and title.
        let description = product.description;
        let productTitle = product.title;

        productsContainer.innerHTML += `
            <div class="product">
                <img src="${product.images[1]}" alt="${product.category.name}" class="product-img">

                <div class="product-content">
                    <h2 class="product-title">${productTitle.length > 15 ? productTitle.substring(0, 80).concat('...') : productTitle}</h2>
                    <h4 class="product-category">${product.category.name}</h4>
                    <p class="product-description">${description.length > 80 ? description.substring(0, 80).concat('...more') : description}</p>
                    <div class="product-price-container">
                        <h3 class="product-price">$${product.price}</h3>
                        <a href="#!" data-productId="${product.id}" class="add-to-cart"><ion-icon name="cart-outline"></ion-icon></a>
                    </div>
                </div>
            </div>
        `;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.querySelector('.products');
    let allProducts = [];

    async function fetchProducts(url) {
        try {
            const response = await fetch(url);
            allProducts = await response.json();

            // Display all products initially
            filterProductsByCategory(null, allProducts); // Show all products by default
        } catch (err) {
            console.log(err);
        }
    }

    fetchProducts("https://api.escuelajs.co/api/v1/products");
});
