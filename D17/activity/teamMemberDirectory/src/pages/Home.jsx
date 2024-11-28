import { Button } from "react-bootstrap";

const Home = () => {
    return (
        <div style={{ height: "600px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <h1>Welcome to Our Website</h1>
            <p>We&apos;re glad you&apos;re here. Explore and enjoy!</p>
            <Button variant="primary">Get Started</Button>
        </div>
    );
};

export default Home;
