import { Modal, Button } from "react-bootstrap";

const ProductDetailsModal = ({
    show,
    handleClose,
    title,
    image,
    price,
    category,
    description,
}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div
                    style={{
                        marginBottom: "20px",
                        marginTop: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <img
                        src={image}
                        alt={title}
                        style={{
                            height: "200px",
                            objectFit: "contain",
                        }}
                    />
                </div>
                <h5>Price: ${price}</h5>
                <h6>Category: {category}</h6>
                <p>{description}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProductDetailsModal;
