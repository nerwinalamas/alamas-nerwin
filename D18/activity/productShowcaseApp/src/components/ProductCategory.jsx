import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const ProductCategory = ({ onSelectCategory }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(
                    "https://fakestoreapi.com/products/categories"
                );
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Categories
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {categories.map((category) => (
                    <Dropdown.Item
                        key={category}
                        onClick={() => onSelectCategory(category)}
                    >
                        {category}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default ProductCategory;
