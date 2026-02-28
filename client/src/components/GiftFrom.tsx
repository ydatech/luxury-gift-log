import {  useState } from "react"
import type { Gift, GiftInput } from "../types/gift"

interface GiftFormProps {
    editing? : Gift| null;
    onSave: (data: GiftInput) => Promise<void>;
    onCancel: () => void;
}   
export default function GiftForm({
    editing,
    onSave,
    onCancel
}: GiftFormProps){

    const [form,setForm] = useState<GiftInput>(editing ? {...editing, dateGiven: editing.dateGiven.split("T")[0]} : {
        clientName: '',
        propertyAddress: '',
        description: '',
        category: 'Closing Gift',
        cost: 0,
        dateGiven: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await onSave(form);
    }

    return <form onSubmit={handleSubmit} className="card">
        <h2>{editing ? "Edit Gift" : "Add Gift"}</h2>
        <input 
        type="text"
        placeholder="Client Name"
        value={form.clientName}
        onChange={(e) => setForm({...form, clientName: e.target.value})}
         required />
        <input 
        type="text"
        placeholder="Property Address"
        value={form.propertyAddress}
        onChange={(e) => setForm({...form, propertyAddress: e.target.value})}
         required />
        <input 
        type="text"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({...form, description: e.target.value})}
         required />
         <select
         value={form.category}
         onChange={(e) => setForm({...form, category: e.target.value})}
         >
         <option value="Closing Gift">Closing Gift</option>
         <option value="Refferal Reward">Referral Reward</option> 
         <option value="Housewarming">Housewarming</option>
         </select>   

         <input type="number"
         placeholder="Cost"
         value={form.cost}
         onChange={(e) => setForm({...form, cost: Number(e.target.value)})}
         required />
         <input type="date"
         value={form.dateGiven}
         onChange={(e) => setForm({...form, dateGiven: e.target.value})}
         required />
         <div className="button-group">
         <button type="submit">Save</button>
         <button onClick={onCancel} type="button" className="secondary">Cancel</button>
         </div>
    </form>

}