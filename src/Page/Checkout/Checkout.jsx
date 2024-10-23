import { useContext } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { OrderContext } from "../../ContextAPIs/OrderProvider";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Checkout = () => {
  const location = useLocation();
  const { totalPrice, cartCourse, quantity } = location.state || {};
//   const navigate = useNavigate();

  const {
    handleRemoveFromCart,
    handleIncreaseQuantity,
    setCartCourse,
    setQuantity,
  } = useContext(OrderContext);

  console.log("cartCourse", cartCourse);

  const handleSubmitCourse = (e) => {
    e.preventDefault();
   
    const form = e.target;
    
    const formData = new FormData();
    const name = form.fullName.value;
    const formNo = form.formNo.value;
    const photo = form.imageUpload?.files[0];
    const father_name = form.parentName.value;
    const father_phone_no = form.fatherPhoneNumber.value;
    const school_collage_name = form.school.value;
    const job_title = form.jobInfo.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const present_address = form.presentAddress.value;
    const permanent_address = form.permanentAddress.value;
    const nid_no = form.nid.value;
    const phone_no = form.mobile.value;
    const local_guardian_name = form.guardianName.value;
    const local_guardian_phone_no = form.guardianMobileNo.value;
    const date_of_birth = form.dob.value;
    const blood_group = form.bloodGroup.value;
    
    formData.append("course_fee", cartCourse.regular_price);
    formData.append("course_id", cartCourse.id);
    formData.append("course_qty", quantity);
    formData.append("total_course_fee", totalPrice);
    formData.append("discount_course_fee", cartCourse.discount_price);
    formData.append("sub_total_course_fee", totalPrice);
    formData.append("name", name);
    formData.append("formNo", formNo);
    formData.append("photo", photo);
    formData.append("father_name", father_name);
    formData.append("father_phone_no", father_phone_no);
    formData.append("school_collage_name", school_collage_name);
    formData.append("job_title", job_title);
    formData.append("email", email);
    formData.append("gender", gender);
    formData.append("present_address", present_address);
    formData.append("permanent_address", permanent_address);
    formData.append("nid_no", nid_no);
    formData.append("phone_no", phone_no);
    formData.append("local_guardian_name", local_guardian_name);
    formData.append("local_guardian_phone_no", local_guardian_phone_no);
    formData.append("date_of_birth", date_of_birth);
    formData.append("blood_group", blood_group);
    
    console.log('check')
    localStorage.setItem('phone_no', phone_no);
    localStorage.setItem('form_no', formNo);
    // navigate('/order-details',  { state: { formData: formData}} );

  
    fetch("https://itder.com/api/course-purchase", {
      method: "POST",
      body: formData,
    })
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
  };


  return (
    <div className="  mt-5 border mx-2">
      <div className="bg-[#6f42c1] text-white p-6 text-center mb-5">
        <h2 className="text-5xl font-bold">Trainee Admission Form</h2>
      </div>
      <form
        onSubmit={handleSubmitCourse}
        className="bg-white shadow-md rounded-lg p-6"
      >
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
                Fathers Mobile Number:
              </label>
              <input
                type="number"
                name="fatherPhoneNumber"
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
                Local Guardian Mobile No.
              </label>
              <input
                type="number"
                name="guardianMobileNo"
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
          <div>
              <label htmlFor="imageUpload" className="block font-semibold text-base mb-2">
                Upload Image:
              </label>
              <input
                className="w-full border border-gray-300 rounded-md p-2"
                type="file"
                id="imageUpload"
                name="imageUpload"
                accept=".jpg,.jpeg,.png,.gif,.svg"
              />
              {/* <input type="file" accept=".jpg,.jpeg,.png,.gif,.svg" /> */}

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
                          {cartCourse?.discount_price && quantity
                            ? cartCourse.discount_price * quantity
                            : 0}
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

                  <button type="submit" className="font-medium text-black mb-2 border-2 hover:bg-[#57544d] duration-300 py-2 px-4  block text-center mx-auto w-full">
                    Submit
                  </button>
                  <ToastContainer />
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
