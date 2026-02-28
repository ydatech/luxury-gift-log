import {  useEffect, useState } from "react";
import GiftList from "../components/GiftList";
import type { Gift } from "../types/gift";
import { deleteGift, getGifts } from "../services/gift";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router";



export default function GiftListPage() {
    const navigate = useNavigate();
const [gifts, setGifts] = useState<Gift[]>([]);
const [page, setPage] = useState(1);
const [search, setSearch] = useState('');
const [totalPages, setTotalPages] = useState(1);

useEffect(() => {
async function fetchGifts() {
    try {
        const res = await getGifts(page, search);
        setGifts(res.data);
        setTotalPages(res.meta.totalPages);
    } catch (error) {
        console.error('Error fetching gifts:', error);
    }   
}
fetchGifts();
}, [page, search]);

const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this gift?")) return;

    try {
        await deleteGift(id);
        setGifts(gifts.filter(gift => gift.id !== id));
    } catch (error) {
        console.error('Error deleting gift:', error);
        alert("Failed to delete gift. Please try again.");
    }
}
  return (
    <>
     <input 
     type="text"
     placeholder="Search gifts..."
     value={search}
     onChange={(e) => setSearch(e.target.value)}
     className="search" />
    <GiftList
        gifts={gifts}
        onEdit={(gift) => {
            navigate(`/gifts/${gift.id}/edit`);
        }}
        onDelete={handleDelete}
    />
    <Pagination page={page} totalPages={totalPages} onPage={setPage} />
    </>
  )
}