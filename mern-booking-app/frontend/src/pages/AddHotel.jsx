import { useMutation } from "react-query";
import { useAppContext } from "../contexts/AppContext.jsx";
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm.jsx"; // Form component for managing hotel data.
import * as apiClient from "../api-client";

const AddHotel = () => {
    const { showToast } = useAppContext();

    const { mutate, isLoading } = useMutation(apiClient.addMyHotel, {
        onSuccess: () => {
            showToast({ message: "Hotel Saved!", type: "SUCCESS" });
        },
        onError: () => {
            showToast({ message: "Error Saving Hotel", type: "ERROR" });
        },
    });

    const handleSave = (hotelFormData) => {
        mutate(hotelFormData);
    };

    return <ManageHotelForm onSave={handleSave} isLoading={isLoading} />;
};

export default AddHotel;
