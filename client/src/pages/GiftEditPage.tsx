import { useEffect, useState } from "react";
import GiftForm from "../components/GiftFrom";
import { useNavigate, useParams } from "react-router";
import { getGiftById, updateGift } from "../services/gift";
import type { Gift, GiftInput } from "../types/gift";

export default function GiftEditPage() {
    const navigate = useNavigate();
    
    const {id} = useParams();
    const [gift, setGift] = useState<Gift| null>(null);

    useEffect(() => {   

        async function fetchGift() {
            // fetch gift by id and set form values
            const res = await getGiftById(Number(id));
            setGift(res);
        }
        if(id) {
            fetchGift();
        }
    },[id])
        const handleSave = async (data: GiftInput) =>{
            try{
                // update gift by id
                await updateGift(Number(id), data);
                navigate("/");
            }catch(error){
                console.error("Error updating gift:", error);
                alert("Failed to update gift. Please try again.")
            }
        }

        const handleCancel = () => {
            // navigate back to list page
           navigate("/");
        }
    
        if(!gift) return <p>Loading...</p>

    return <GiftForm 
    editing={gift}
    onSave={handleSave}
    onCancel={handleCancel}
    />

}