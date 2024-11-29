import { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Form } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import ProductDetailsModal from "../components/ProductDetailsModal";
import ProductCategory from "../components/ProductCategory";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    "https://fakestoreapi.com/products"
                );
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const handleShow = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    const filteredProducts = products.filter((product) => {
        const matchesCategory = selectedCategory
            ? product.category === selectedCategory
            : true;
        const matchesSearchTerm = product.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearchTerm;
    });

    return (
        <Container>
            <div
                style={{
                    marginTop: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                }}
            >
                <h1>Products</h1>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        gap: "20px",
                        flexWrap: "wrap",
                    }}
                >
                    <Form.Control
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ flex: 1 }}
                    />
                    <ProductCategory onSelectCategory={setSelectedCategory} />
                </div>
            </div>

            {loading ? (
                <div className="text-center" style={{ marginTop: "50px" }}>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <Row>
                    {filteredProducts.map((product) => (
                        <Col
                            key={product.id}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            style={{ marginTop: "20px" }}
                        >
                            <ProductCard
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                onViewDetails={() => handleShow(product)}
                            />
                        </Col>
                    ))}
                </Row>
            )}

            {selectedProduct && (
                <ProductDetailsModal
                    show={showModal}
                    handleClose={handleClose}
                    title={selectedProduct.title}
                    image={selectedProduct.image}
                    price={selectedProduct.price}
                    category={selectedProduct.category}
                    description={selectedProduct.description}
                />
            )}
        </Container>
    );
};

export default Products;
