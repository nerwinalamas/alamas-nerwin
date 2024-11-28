import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { team } from "../team-data";

const TeamDetails = () => {
    const { id } = useParams();
    const [member, setMember] = useState(null);

    useEffect(() => {
        const teamMember = team.find((member) => member.id === parseInt(id));
        setMember(teamMember);
    }, [id]);

    if (!member) {
        return <div>Team member not found.</div>;
    }

    return (
        <div style={{ width: "700px" }}>
            <h1>Team Member Info:</h1>
            <Card>
                <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Text>
                        <strong>Role:</strong> {member.role}
                        <br />
                        <strong>Email:</strong> {member.email}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TeamDetails;
