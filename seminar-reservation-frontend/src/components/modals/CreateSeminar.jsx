import {
    Dialog,
    DialogContent,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react";
import { API_BASE_URL } from "../../lib/constants";

const CreateSeminar = ({ open, onOpenChange }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [venue, setVenue] = useState("");
    const [fee, setFee] = useState(0);
    const [slotsAvailable, setSlotsAvailable] = useState(0);
    const [timeFrame, setTimeFrame] = useState({ from: "", to: "" });
    const [speaker, setSpeaker] = useState({
        name: "",
        image: "",
        linkedin: "",
    });

    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const seminarData = {
            title,
            description,
            date,
            venue,
            fee: parseFloat(fee),
            slotsAvailable: parseInt(slotsAvailable, 10),
            timeFrame,
            speaker,
        };

        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${API_BASE_URL}/api/seminars`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(seminarData),
            });

            if (!response.ok) {
                throw new Error("Failed to create seminar");
            }

            const data = await response.json();
            console.log(data);
            resetForm();
        } catch (error) {
            setError(error.message);
        }
    };

    const resetForm = () => {
        setTitle("");
        setDescription("");
        setDate("");
        setVenue("");
        setFee(0);
        setSlotsAvailable(0);
        setTimeFrame({ from: "", to: "" });
        setSpeaker({ name: "", image: "", linkedin: "" });
        onOpenChange()
    };

    return (
        <Dialog open={open} onOpenChange={resetForm}>
            <DialogContent className="max-w-2xl h-[90vh] overflow-auto">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <h2 className="text-xl font-bold mb-4">Create Seminar</h2>
                    <div>
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="date">Date</Label>
                        <Input
                            id="date"
                            name="date"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="venue">Venue</Label>
                        <Input
                            id="venue"
                            name="venue"
                            value={venue}
                            onChange={(e) => setVenue(e.target.value)}
                            required
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="fee">Fee</Label>
                            <Input
                                id="fee"
                                name="fee"
                                type="number"
                                value={fee}
                                onChange={(e) => setFee(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="slotsAvailable">
                                Available Slots
                            </Label>
                            <Input
                                id="slotsAvailable"
                                name="slotsAvailable"
                                type="number"
                                value={slotsAvailable}
                                onChange={(e) =>
                                    setSlotsAvailable(e.target.value)
                                }
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="timeFrom">Time From</Label>
                            <Input
                                id="timeFrom"
                                name="from"
                                type="time"
                                value={timeFrame.from}
                                onChange={(e) =>
                                    setTimeFrame({
                                        ...timeFrame,
                                        from: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="timeTo">Time To</Label>
                            <Input
                                id="timeTo"
                                name="to"
                                type="time"
                                value={timeFrame.to}
                                onChange={(e) =>
                                    setTimeFrame({
                                        ...timeFrame,
                                        to: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="speakerName">Speaker Name</Label>
                        <Input
                            id="speakerName"
                            name="name"
                            value={speaker.name}
                            onChange={(e) =>
                                setSpeaker({ ...speaker, name: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="speakerImage">Speaker Image URL</Label>
                        <Input
                            id="speakerImage"
                            name="image"
                            value={speaker.image}
                            onChange={(e) =>
                                setSpeaker({
                                    ...speaker,
                                    image: e.target.value,
                                })
                            }
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="speakerLinkedin">
                            Speaker LinkedIn
                        </Label>
                        <Input
                            id="speakerLinkedin"
                            name="linkedin"
                            value={speaker.linkedin}
                            onChange={(e) =>
                                setSpeaker({
                                    ...speaker,
                                    linkedin: e.target.value,
                                })
                            }
                            required
                        />
                    </div>
                    {error && <div className="text-red-500">{error}</div>}
                    <div className="flex justify-end space-x-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={resetForm}
                        >
                            Cancel
                        </Button>
                        <Button type="submit">Create Seminar</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default CreateSeminar;
