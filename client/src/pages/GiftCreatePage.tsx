import GiftForm from "../components/GiftFrom";
import type { GiftInput } from "../types/gift";
import { useNavigate } from "react-router";
import { createGift } from "../services/gift";

export default function GiftCreatePage(){
    const navigate = useNavigate();
    const handleSave = async (data: GiftInput) =>{

        try{
            await createGift(data);
            navigate("/")
        }catch(error){
            console.error("Error creating gift:", error);
            alert("Failed to create gift. Please try again.")
        }
    }
    const handleCancel = () => {
        navigate("/");
    }   
    return <div>
        <GiftForm
        onSave={handleSave}
        onCancel={handleCancel}
        />
        </div>


}