const PRODUCTS = [
    {
        product: "Product 1",
        price: 10,
    },
    {
        product: "Product 2",
        price: 15,
    },
    {
        product: "Product 3",
        price: 20,
    },
];

const products = document.querySelector(".products");
const cart = document.querySelector(".cart");
const totalDisplay = document.getElementById("total");
const checkout = document.querySelector(".checkout");
let totalAmount = 0;
const myCart = [];

PRODUCTS.forEach((product) => {
    const list = document.createElement("li");
    const listItem = document.createElement("p");
    const button = document.createElement("button");

    listItem.textContent = `${product.product} Price: $${product.price}`;
    button.textContent = "Add to Cart";
    button.addEventListener("click", () =>
        handleAddToCart(product)
    );

    list.appendChild(listItem);
    list.appendChild(button);

    products.appendChild(list);
});

function handleAddToCart(product) {
    const checkItemIndex = myCart.findIndex(item => item.product === product.product)

    if (checkItemIndex > -1) {
        myCart[checkItemIndex].quantity += 1;
        totalAmount += product.price;

        const cartItem = cart.children[checkItemIndex];
        const quantityElement = cartItem.querySelector(".quantity");
        quantityElement.textContent = myCart[checkItemIndex].quantity;
    } else {
        myCart.push({ ...product, quantity: 1 });
        totalAmount += product.price;

        const list = document.createElement("li");
        const listItem = document.createElement("p");
        const button = document.createElement("button");
        const quantity = document.createElement("p");

        listItem.textContent = `${product.product} Price: $${product.price}`;
        button.textContent = "Remove";
        button.addEventListener("click", () => handleDelete(list, product.price));
        quantity.textContent = 1;
        quantity.classList.add("quantity");

        list.appendChild(listItem);
        list.appendChild(button);
        list.appendChild(quantity);

        cart.appendChild(list);
    }

    updateTotal();
}

function handleDelete(item) {
    item.remove();
    console.log("Cart item deleted:", item);
}

function updateTotal() {
    totalDisplay.textContent = `Total: $${totalAmount.toFixed(2)}`;
}

checkout.addEventListener("click", handleCheckout)

function handleCheckout() {
    cart.innerHTML = "";
    myCart.length = 0;
    totalAmount = 0;
    updateTotal();
}