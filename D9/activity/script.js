const productList = document.getElementById("productList");

const displayProducts = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("Failed to fetch data.");
        }

        const data = await response.json();

        let html = "";

        data.forEach((product) => {
            html += `
                <div class="card">
                    <img src=${product.image} alt=${product.name + " image"}>
                    <div class="card-description">
                        <h2>${product.title}</h2>
                        <p>$${product.price}</p>
                        <p>${product.description}</p>
                    </div>
                </div>
            `;
        });

        productList.innerHTML = html;
    } catch (error) {
        productList.innerHTML = "An error occurred while fetching data.";
        console.error(error);
    }
};

displayProducts();
