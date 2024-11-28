import { Link, Outlet } from "react-router-dom";
import { team } from "../team-data";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Team = () => {
    return (
        <div>
            <h1>Team Members:</h1>
            <ul
                style={{
                    display: "flex",
                    gap: "10px",
                }}
            >
                {team.map((t) => (
                    <li key={t.id} style={{ listStyle: "none" }}>
                        <Card style={{ width: "18rem" }}>
                            <Card.Body>
                                <Card.Title>{t.name}</Card.Title>
                                <Link to={`/team/${t.id}`}>
                                    <Button variant="primary">
                                        Show Details
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
};

export default Team;
