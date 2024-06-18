import Item from "./Pagination/Item";

export default function Pagination() {
  return (
    <div className="w-full mb-12 flex justify-center items-center gap-2">
      <div className="w-8 h-9 border border-font-color-light bg-primary/50 px-2 py-1 rounded-md text-font-color cursor-pointer flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <Item value="1" active={true} />
      <Item value="2" active={false} />
      <Item value="..." active={false} />
      <Item value="9" active={false} />
      <Item value="10" active={false} />
      <div className="w-8 h-9 border border-primary px-2 py-1 rounded-md text-font-color cursor-pointer flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}
