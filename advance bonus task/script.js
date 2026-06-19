let products = [
    {
        id: 1,
        name: "iPhone 15",
        price: 80000,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569"
    },
    {
        id: 2,
        name: "Samsung Galaxy S24",
        price: 75000,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
        id: 3,
        name: "Dell Inspiron Laptop",
        price: 55000,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },
    {
        id: 4,
        name: "Sony Headphones",
        price: 5000,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
        id: 5,
        name: "Smart Watch",
        price: 3000,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
        id: 6,
        name: "Nike Running Shoes",
        price: 4500,
        category: "Footwear",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
        id: 7,
        name: "Puma Sneakers",
        price: 4000,
        category: "Footwear",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772"
    },
    {
        id: 8,
        name: "Adidas Sports Shoes",
        price: 5500,
        category: "Footwear",
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    {
        id: 9,
        name: "Woodland Boots",
        price: 6500,
        category: "Footwear",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    {
        id: 10,
        name: "Men's T-Shirt",
        price: 1000,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
        id: 11,
        name: "Women's Jeans",
        price: 1800,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
    },
    {
        id: 12,
        name: "Hoodie",
        price: 2200,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7"
    },
    {
        id: 13,
        name: "Formal Shirt",
        price: 1500,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1603252109303-2751441dd157"
    },
    {
        id: 14,
        name: "Backpack",
        price: 2500,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa"
    },
    {
        id: 15,
        name: "Sunglasses",
        price: 1200,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
    }
];
let cart = [];
let div2 = document.querySelector("#div2");
let cartDiv = document.querySelector("#cart");
let total = document.querySelector("#total");

function displayProducts(product) {
    div2.innerHTML = "";
    product.forEach((c) => {
        let div21 = document.createElement("div");
        div21.className = "card";
        div21.innerHTML = `
        <h3>${c.name}</h3>
        <p>ID : ${c.id}</p>
        <img src=${c.image}>
        <h4>₹${c.price}</h4>
        <p>${c.category}</p>
        <button onclick="addToCart(${c.id})">Add To Cart</button>`;
        div2.append(div21);
    });
}

displayProducts(products)


function addToCart(id) {
    let item = products.find(product => product.id === id);
    cart.push(item);
    displayCart();
}

function displayCart() {
    cartDiv.innerHTML = "";
    let totalPrice = 0;
    cart.forEach((item, index) => {
        totalPrice += item.price;
        let div = document.createElement("div");
        div.className = "cartItem";
        div.innerHTML = `<h3>${item.name}</h3>
        <p>ID : ${item.id}</p>
        <h4>₹${item.price}</h4>
        <p>${item.category}</p>
        <button class="removeBtn" onclick="removeItem(${index})">Remove</button>`;

        cartDiv.append(div);
    });

    total.textContent = totalPrice;
}

function removeItem(index) {
    cart.splice(index, 1);
    displayCart();
}

let input1 = document.querySelector("#search");
input1.addEventListener("input", (e) => {
    let value = e.target.value.toLowerCase();
    let filtered = products.filter((product) => product.name.toLowerCase().includes(value));
    displayProducts(filtered)
})

let category = document.querySelector("#category");
category.addEventListener("change", (e) => {
    let value = e.target.value;
    if (value === "all") {
        displayProducts(products);
    }
    else {
        let filtered = products.filter(product => product.category === value);
        displayProducts(filtered);
    }
});



