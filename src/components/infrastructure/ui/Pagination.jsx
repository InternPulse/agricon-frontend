export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        className={`h-8 w-8 rounded-full flex items-center justify-center border text-sm ${
          currentPage === i
            ? "bg-[#02402D] text-white"
            : "text-gray-700 hover:bg-gray-200"
        }`}
        onClick={() => onPageChange(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="flex justify-end items-center space-x-2 mt-4">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="h-8 w-8 text-gray-500 hover:text-black"
      >
        {"<"}
      </button>
      {pages}
      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className="h-8 w-8 text-gray-500 hover:text-black"
      >
        {">"}
      </button>
    </div>
  );
}
