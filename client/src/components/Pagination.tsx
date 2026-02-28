

interface PaginationProps {
    page: number;
    totalPages: number;
    onPage: (page: number) => void;
}
export default function Pagination(
    {page, totalPages, onPage}: PaginationProps
) {
return <div className="pagination">
    <button disabled={page === 1} onClick={() => onPage(page - 1)}>Previous</button>
    <span>{page} of {totalPages}</span>
    <button disabled={page === totalPages} onClick={() => onPage(page + 1)}>Next</button>
    </div>

}