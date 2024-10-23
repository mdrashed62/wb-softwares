import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const Search = () => {
  const [searchResults, setSearchResults] = useState({}); 
  const [error, setError] = useState(null);

  console.log('searchResults', searchResults);
  
  const handleSearch = async (value) => {
    try {
      const response = await fetch("https://itder.com/api/search-purchase-data", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          form_no: value,   
          phone_no: localStorage.getItem("phone_no"), 
        }),
      });

      const data = await response.json();
      setSearchResults(data.singleCoursePurchaseData);
    } catch (err) {
      setError("Error fetching data");
      console.error("Error:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col text-text_40px font-bold items-center justify-center">
      <h1 className="w-[600px] mx-auto">Search here</h1>
      <div className="h-[52px] relative col-span-4 w-[600px] mx-auto">
        <input
          type="text"
          name="search"
          placeholder="search"
          onChange={(e) => handleSearch(e.target.value)}
          className="text-black px-2 w-full block h-full outline-0 rounded-[4px] border"
        />
        <button
          onClick={() => handleSearch(document.querySelector('input[name="search"]').value)}
          className="absolute right-2 top-2"
        >
          <IoMdSearch className="text-2xl text-black" />
        </button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <div className="mt-4">
        
        {searchResults && (
          <ul>
            
            <li className="text-black">{searchResults.phone_no}</li>
           
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
