import type { Gift } from "../types/gift"

interface GiftListProps {
    gifts: Gift[],
    onEdit: (gift: Gift) => void;
    onDelete: (id: number) => void;
}

export default function GiftList({
    gifts,
    onEdit,
    onDelete
}: GiftListProps){


    return <div className="card">
        <h2>Gift History</h2>

        {
gifts.map((gift) => (
    <div key={gift.id} className="gift">
       <div>

        <strong>{gift.clientName}</strong>
        <p>{gift.description}</p>
        <small>{gift.category} - ${gift.cost}</small>
      
       </div>
       <div className="button-group">
        <button onClick={()=>{
            onEdit(gift)
        }}>Edit</button>
        <button onClick={()=>{
            onDelete(gift.id)
        }} className="danger">Delete</button>
       </div>
       
       </div>
))
        }
    </div>
}