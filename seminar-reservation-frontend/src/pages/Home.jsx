import { API_BASE_URL } from "../lib/constants";
import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/table";
import { Button } from "../components/ui/button";
import { PencilIcon, TrashIcon } from "lucide-react";
import CreateSeminar from "../components/modals/CreateSeminar";
import UpdateSeminar from "../components/modals/UpdateSeminar";

const Home = () => {
    const [seminars, setSeminars] = useState([]);
    const [isCreatingSeminar, setIsCreatingSeminar] = useState(false);
    const [isUpdatingSeminar, setIsUpdatingSeminar] = useState(false);
    const [selectedSeminarId, setSelectedSeminarId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSeminars = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/seminars`);
                if (!response.ok) {
                    throw new Error("Failed to fetch seminars");
                }
                const data = await response.json();
                setSeminars(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchSeminars();
    }, []);

    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem("token");

            const response = await fetch(`${API_BASE_URL}/api/seminars/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                throw new Error("Failed to delete seminar");
            }
            setSeminars((prevSeminars) =>
                prevSeminars.filter((event) => event._id !== id)
            );
        } catch (error) {
            setError(error.message);
        }
    };

    const handleCreate = () => {
        setIsCreatingSeminar((prev) => !prev);
    };

    const handleUpdate = (id) => {
        setSelectedSeminarId(id);
        setIsUpdatingSeminar((prev) => !prev);
    };

    if (loading) return <div>Loading seminars...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="w-[80%] mx-auto min-h-screen flex flex-col gap-4 pt-20">
            <div>
                <Button type="button" onClick={handleCreate}>
                    Create Seminar
                </Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Venue</TableHead>
                        <TableHead>Speaker</TableHead>
                        <TableHead>Fee</TableHead>
                        <TableHead>Slots</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {seminars.map((event) => (
                        <TableRow key={event._id}>
                            <TableCell>{event.title}</TableCell>
                            <TableCell>
                                {new Date(event.date).toLocaleDateString()}
                            </TableCell>
                            <TableCell>{`${event.timeFrame.from} - ${event.timeFrame.to}`}</TableCell>
                            <TableCell>{event.venue}</TableCell>
                            <TableCell>{event.speaker.name}</TableCell>
                            <TableCell>${event.fee}</TableCell>
                            <TableCell>{event.slotsAvailable}</TableCell>
                            <TableCell>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleUpdate(event._id)}
                                >
                                    <PencilIcon className="h-4 w-4" />
                                    <span className="sr-only">Edit</span>
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleDelete(event._id)}
                                >
                                    <TrashIcon className="h-4 w-4" />
                                    <span className="sr-only">Delete</span>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <CreateSeminar
                open={isCreatingSeminar}
                onOpenChange={handleCreate}
            />

            {isUpdatingSeminar && (
                <UpdateSeminar
                    open={isUpdatingSeminar}
                    onOpenChange={handleUpdate}
                    seminarId={selectedSeminarId}
                    setSeminars={setSeminars}
                />
            )}
        </div>
    );
};

export default Home;
