import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const ProductCard = ({ image, title, price, onViewDetails }) => {
    return (
        <Card style={{ marginBottom: "20px", height: "100%" }}>
            <Card.Img
                variant="top"
                src={image}
                style={{
                    height: "150px",
                    objectFit: "contain",
                    marginBottom: "20px",
                    marginTop: "20px",
                }}
            />
            <Card.Body
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <Card.Title
                    style={{
                        fontSize: "1.2rem",
                        marginBottom: "10px",
                    }}
                >
                    {title}
                </Card.Title>
                <Card.Text>${price}</Card.Text>
                <Button variant="primary" onClick={onViewDetails}>
                    View Details
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
