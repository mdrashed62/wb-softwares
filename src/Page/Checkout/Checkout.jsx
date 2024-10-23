import { useContext } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { OrderContext } from "../../ContextAPIs/OrderProvider";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Checkout = () => {
  const location = useLocation();
  const { totalPrice, cartCourse, quantity} = location.state || {};

  const {
    handleRemoveFromCart,
    handleIncreaseQuantity,
    setCartCourse,
    setQuantity,
  } = useContext(OrderContext);


  const handleSubmitCourse = (e) => {
    e.preventDefault();
    const form = e.target;

    const fullName = form.fullName.value;
    const formNo = form.formNo.value;
    const parentName = form.parentName.value;
    const school = form.school.value;
    const jobInfo = form.jobInfo.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const presentAddress = form.presentAddress.value;
    const permanentAddress = form.permanentAddress.value;
    const nid = form.nid.value;
    const mobile = form.mobile.value;
    const guardianName = form.guardianName.value;
    const dob = form.dob.value;
    const bloodGroup = form.bloodGroup.value;

    const addCourse = {
     fullName, formNo, parentName, school, jobInfo, email, gender, presentAddress, permanentAddress, nid, mobile, guardianName, dob, bloodGroup
    };

    fetch(
      "https://itder.com/api/course-purchase",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addCourse),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
            toast.success("Course Submitted", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
                transition: Bounce,
              });
        }
      });
    // form.reset();
  };


  return (
    <div className="  mt-5 border mx-2">
      <div className="bg-[#6f42c1] text-white p-6 text-center mb-5">
        <h2 className="text-5xl font-bold">Trainee Admission Form</h2>
      </div>
      <form onSubmit={handleSubmitCourse} className="bg-white shadow-md rounded-lg p-6">
        <div className="form-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="fullName"
                className="block font-semibold text-base mb-2"
              >
                Full Name:
              </label>
              <input
                type="text"
                name="fullName"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="formNo"
                className="block font-semibold text-base mb-2"
              >
                Form no:
              </label>
              <input
                type="text"
                name="formNo"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="parentName"
                className="block font-semibold text-base mb-2"
              >
                Father/Mother Name:
              </label>
              <input
                type="text"
                name="parentName"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="parentNumber"
                className="block font-semibold text-base mb-2"
              >
                Number:
              </label>
              <input
                type="text"
                name="parentNumber"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="school"
                className="block font-semibold text-base mb-2"
              >
                School/College:
              </label>
              <input
                type="text"
                name="school"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="jobInfo"
                className="block font-semibold text-base mb-2"
              >
                Job Information:
              </label>
              <input
                type="text"
                name="jobInfo"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="email"
                className="block font-semibold text-base mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block font-semibold text-base mb-2"
              >
                Gender:
              </label>
              <select
                name="gender"
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="" disabled selected>
                  Select Gender
                </option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Others">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="presentAddress"
                className="block font-semibold text-base mb-2"
              >
                Present Address:
              </label>
              <textarea
                name="presentAddress"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="permanentAddress"
                className="block font-semibold text-base mb-2"
              >
                Permanent Address:
              </label>
              <textarea
                name="permanentAddress"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="nid"
                className="block font-semibold text-base mb-2"
              >
                NID Number:
              </label>
              <input
                type="text"
                name="nid"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="block font-semibold text-base mb-2"
              >
                Mobile No:
              </label>
              <input
                type="text"
                name="mobile"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="guardianName"
                className="block font-semibold text-base mb-2"
              >
                Local Guardian’s Name:
              </label>
              <input
                type="text"
                name="guardianName"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="dob"
                className="block font-semibold text-base mb-2"
              >
                Date of Birth:
              </label>
              <input
                type="date"
                name="dob"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="bloodGroup"
                className="block font-semibold text-base mb-2"
              >
                Blood Group:
              </label>
              <select
                name="bloodGroup"
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="" disabled selected>
                  Select Blood Group
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>
        </div>

        <div className="m-mt_16px">
          <div className="pt-p_16px">
            <div className="lg:flex items-start gap-3">
              <div className="w-full lg:w-[58%] bg-white border-2">
                <table className=" overflow-x-auto  w-full">
                  <thead>
                    <tr className="border-b-4 border-gray-300">
                      <th className="text-[14.4px] w-6/12 font-bold p-[7px] text-black">
                        Course
                      </th>
                      <th className="text-[14.4px] font-bold p-[7px] text-black">
                        Price
                      </th>
                      <th className="text-[14.4px] font-bold p-[7px] text-black">
                        Quantity
                      </th>
                      <th className="text-[14.4px] font-bold p-[7px] text-black">
                        Sub Total
                      </th>
                    </tr>
                  </thead>

                  <tbody className="overflow-x-auto ">
                    <tr className="border-b border-gray-300 overflow-x-auto">
                      <td>
                        <div className="flex items-center justify-center ">
                          <div className="w-[20%] text-center flex items-center justify-center ">
                          <RiDeleteBin5Line
                          onClick={() => {
                            localStorage.clear();
                            setCartCourse({});
                            setQuantity(0);
                          }}
                          className="text-xl hover:text-footer_color cursor-pointer"
                        />
                          </div>
                          <div className="flex flex-col text-center justify-center items-center py-2  w-[80%]">
                            <div className="mask">
                              <img
                                className="h-[50px] w-[50px]"
                                src={cartCourse?.photo}
                                alt="Course"
                              />
                            </div>
                            <p className="text-[14.4px] px-[7px] text-center flex ">
                              {cartCourse?.course_name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-[14.4px] font-bold p-[7px] text-black text-center">
                         {cartCourse?.discount_price}
                        </p>
                      </td>
                      <td>
                        <div className="flex justify-center">
                        <div className="border">
                        <button
                          onClick={() => handleRemoveFromCart(cartCourse)}
                          className="px-4 w-[30px] font-bold font_standard my-1.5"
                        >
                          -
                        </button>
                      </div>
                      <div className="border-y">
                        <input
                          type="number"
                          value={quantity}
                          className="font-bold w-[30px] lg:w-[60px] font_standard px-2 text-center mx-auto h-full"
                        />
                      </div>
                      <div className="border">
                        <button
                          onClick={() => handleIncreaseQuantity(cartCourse)}
                          className="px-4 w-[30px] font-bold font_standard my-1.5"
                        >
                          +
                        </button>
                      </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-[14.4px] font-bold p-[7px] text-black text-center">
                        {cartCourse?.discount_price && quantity ? cartCourse.discount_price * quantity : 0} 
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="lg:w-[41%] bg-white border-2 ">
                <div className="px-[30px]">
                  <h2 className="font-bold text-start text-text_medium pt-2 pb-1 border-b-2 border-black">
                    Cart Summary
                  </h2>
                  <div className="py-3 flex justify-between border-b border-gray-300">
                    <p className="text-black font-bold">Total Price</p>
                    <p className="text-black font-bold">{totalPrice}</p>
                  </div>

                  <button
                    className="font-medium text-black mb-2 border-2 hover:bg-[#D2C5A2] duration-300 py-2 px-4  block text-center mx-auto w-full"
                  >
                    Submit
                  </button>
                  <ToastContainer/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
