import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const Search = () => {
  const [searchResults, setSearchResults] = useState({});
  const [error, setError] = useState(null);

  console.log("searchResults", searchResults);

  const handleSearch = async (value) => {
    try {
      const response = await fetch(
        "https://itder.com/api/search-purchase-data",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            form_no: value,
            phone_no: localStorage.getItem("phone_no"),
          }),
        }
      );

      const data = await response.json();
      setSearchResults(data.singleCoursePurchaseData); // সঠিক ডাটা স্ট্রাকচার অ্যাক্সেস
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
          onClick={() =>
            handleSearch(document.querySelector('input[name="search"]').value)
          }
          className="absolute right-2 top-2"
        >
          <IoMdSearch className="text-2xl text-black" />
        </button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <div className="mt-4">
        {searchResults?.course_qty > 0 && (
          <div className="m-mt_16px">
            <div className="w-full flex flex-col lg:flex-row items-start justify-center h-full gap-2 ">
              <div className="bg-white lg:p-p_30px w-full">
                <div className="text-center  flex flex-col justify-center items-center ">
                  <p className="text-xl font-bold">Order Information</p>
                  <p className="p-3 rounded-md lg:my-2 my-1 w-fit border bg-[#D2C5A2] font-bold text-lg">
                    Order Id:{" "}
                    <span className="font-semibold">
                      {searchResults?.form_no}
                    </span>{" "}
                    {/* Fix */}
                  </p>
                </div>

                <div className="w-full border flex flex-col md:flex-row md:items-start md:mt-4 mt-3 bg-[#D2C5A2] rounded-md p-4">
                  <div className="md:text-base text-sm flex-1  font-semibold md:border-r-2 md:border-black md:pr-10">
                    <div className="space-y-1 w-full">
                      {/* Personal Information */}
                      <div className="flex items-center justify-between">
                        <p>Full Name :</p>
                        <p>{searchResults?.name}</p> {/* Fix */}
                      </div>
                      <div className="flex items-center justify-between">
                        <p>Father/Mother Name:</p>
                        <p>{searchResults?.father_name}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p>Father/Mother Mobile Number:</p>
                        <p>{searchResults?.father_phone_no}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p>School/College:</p>
                        <p>{searchResults?.school_collage_name}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p>Job Information:</p>
                        <p>{searchResults?.job_title}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p>Email:</p>
                        <p>{searchResults?.email}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p>Date of Birth:</p>
                        <p>{searchResults?.date_of_birth}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p>Blood Group:</p>
                        <p>{searchResults?.blood_group}</p>
                      </div>
                    </div>
                  </div>

                  <div className="md:text-base text-sm  flex-1 font-semibold  md:ml-10 mt-m_medium">
                    <div className="space-y-1 w-full">
                      {/* Additional Information */}
                      <div className="flex items-center justify-between">
                        <p>Gender:</p>
                        <p>{searchResults?.gender}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p>Present Address:</p>
                        <p>{searchResults?.present_address}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p>Permanent Address:</p>
                        <p>{searchResults?.permanent_address}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p>NID:</p>
                        <p>{searchResults?.nid_no}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p>Mobile No:</p>
                        <p>{searchResults?.phone_no}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p>Local Guardian’s Name:</p>
                        <p>{searchResults?.local_guardian_name}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p>Local Guardian’s Mobile No:</p>
                        <p>{searchResults?.local_guardian_phone_no}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:my-8 md:my-6 my-8 px-p_4px">
                  <p className="md:my-2 font-semibold">Courses:</p>
                  <table className="overflow-x-auto border w-full">
                    <thead className="b w-full">
                      <tr className="text-sm">
                        <th className="lg:w-20 md:w-16 w-8 py-2 md:py-4 lg:py-6 border">
                          Image
                        </th>
                        <th className="lg:w-72 md:w-64 w-40 py-2 md:py-4 lg:py-6 border">
                          Course Name
                        </th>
                        <th className="lg:w-72 md:w-64 w-40 py-2 md:py-4 lg:py-6 border">
                          Student Name
                        </th>
                        <th className="lg:w-20 md:w-20 w-16 py-2 md:py-4 lg:py-6 border">
                         Price
                        </th>
                        <th className="lg:w-20 md:w-20 w-16 py-2 md:py-4 lg:py-6 border text-center">
                        Quantity
                        </th>
                        <th className="lg:w-20 md:w-20 w-16 py-2 md:py-4 lg:py-6 border text-center">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="md:text-base text-sm font-semibold">
                      <tr>
                        <td className="border text-center w-10 h-12 px-2">
                          <img
                            className="w-[60px] h-[60px] object-cover mx-auto"
                            src={searchResults?.course_data?.photo}
                            alt="Course"
                          />
                        </td>
                        <td className="lg:py-6 md:py-4 py-2 text-center border">
                          {searchResults?.course_data?.course_name}
                        </td>
                        <td className="lg:py-6 md:py-4 py-2 text-center border">
                          {searchResults?.name}
                        </td>
                        <td className="lg:py-6 md:py-4 py-2 text-center border">
                          {searchResults?.total_course_fee}
                        </td>
                        <td className="lg:py-6 md:py-4 py-2 text-center border">
                          {searchResults?.course_qty || 1}
                        </td>

                        <td className="lg:py-6 md:py-4 py-2 text-center border">
                          {searchResults?.sub_total_course_fee}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* <div className="w-full flex justify-end">
                  <div className="md:text-base text-sm font-semibold space-y-2 ">
                    <div className="flex justify-between gap-2 items-center">
                      <p>Total Course Fee:</p>
                      <p>{searchResults?.total_course_fee} BDT</p>
                    </div>
                    <div className="flex justify-between gap-2 items-center">
                      <p>Discount:</p>
                      <p>{searchResults?.discount || 0} BDT</p>
                    </div>
                    <div className="flex justify-between gap-2 items-center">
                      <p>Sub Total Course Fee:</p>
                      <p>{searchResults?.sub_total_course_fee} BDT</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
