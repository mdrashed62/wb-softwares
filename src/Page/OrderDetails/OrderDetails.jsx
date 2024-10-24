import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../ContextAPIs/OrderProvider";

const OrderDetails = () => {
  const { quantity, cartCourse } = useContext(OrderContext);

  const [orderData, setOrderData] = useState({
    name: "",
    formNo: "",
    father_name: "",
    father_phone_no: "",
    school_collage_name: "",
    job_title: "",
    email: "",
    gender: "",
    present_address: "",
    permanent_address: "",
    nid_no: "",
    phone_no: "",
    local_guardian_name: "",
    local_guardian_phone_no: "",
    date_of_birth: "",
    blood_group: "",
    photo: "",
    totalPrice: "",
  });

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      const parsedData = JSON.parse(storedFormData);
      setOrderData(parsedData);
    }
  }, []);

  const formNo = localStorage.getItem('form_no');
  
  return (
    <div className=" m-mt_16px">
      <div className="w-full flex flex-col lg:flex-row items-start justify-center h-full gap-2 ">
        <div className="bg-white lg:p-p_30px w-full  ">
          <div className="text-center  flex flex-col justify-center items-center ">
            <p className="text-xl font-bold">Order Information</p>
            <p className="p-3 rounded-md lg:my-2 my-1 w-fit border bg-[#D2C5A2] font-bold text-lg">
              Order Id :{" "}
              <span className="font-semibold">{formNo}</span>
            </p>
          </div>
          <div className="w-full border flex flex-col md:flex-row md:items-start   md:mt-4 mt-3 bg-[#D2C5A2] rounded-md p-4  ">
            <div className="md:text-base text-sm flex-1  font-semibold   md:border-r-2 md:border-black md:pr-10">
              <div className="space-y-1 w-full">
                <div className="flex items-center justify-between">
                  <p>Full Name :</p>
                  <p className="text-start">{orderData?.name}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Father/Mother Name:</p>
                  <p>{orderData?.father_name}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Father/Mother Mobile Number:</p>
                  <p className="text-start">{orderData?.father_phone_no}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>School/College:</p>
                  <p>{orderData?.school_collage_name}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Job Information:</p>
                  <p className="text-start">{orderData?.job_title}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Email:</p>
                  <p>{orderData?.email}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Date of Birth:</p>
                  <p>{orderData?.date_of_birth}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Blood Group:</p>
                  <p>{orderData?.blood_group}</p>
                </div>
              </div>
            </div>

            <div className="md:text-base text-sm  flex-1 font-semibold  md:ml-10 mt-m_medium">
              <div className="space-y-1 w-full">
                <div className="flex items-center justify-between">
                  <p>Gender:</p>
                  <p className="text-start">{orderData?.gender}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Present Address:</p>
                  <p>{orderData?.present_address}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Permanent Address:</p>
                  <p className="text-start">{orderData?.permanent_address}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>NID:</p>
                  <p>{orderData?.nid_no}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Mobile No:</p>
                  <p className="text-start">{orderData?.phone_no}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Local Guardian’s Name:</p>
                  <p>{orderData?.local_guardian_name}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Local Guardian’s Mobile No:</p>
                  <p>{orderData?.local_guardian_phone_no}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Order Id: :</p>
                  <p>{orderData?.formNo}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:my-8 md:my-6 my-8 px-p_4px">
            <p className=" md:my-2 font-semibold">Courses:</p>
            <table className="overflow-x-auto border w-full">
              <thead className="b w-full">
                <tr className="text-sm ">
                  <th className="lg:w-20 md:w-16 w-8 py-2 md:py-4 lg:py-6 border ">
                    Image
                  </th>
                  <th className="lg:w-72 md:w-64 w-40 py-2 md:py-4 lg:py-6 border">
                    Course Name
                  </th>
                  <th className="lg:w-72 md:w-64 w-40 py-2 md:py-4 lg:py-6 border">
                    Student Name
                  </th>
                  <th className="lg:w-20 md:w-20 w-16 py-2 md:py-4 lg:py-6 border">
                    Quantity
                  </th>
                  <th className="lg:w-20 md:w-20 w-16  py-2 md:py-4 lg:py-6 border text-center">
                    Price
                  </th>
                  <th className="lg:w-20 md:w-20 w-16  py-2 md:py-4 lg:py-6 border text-center">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="md:text-base text-sm font-semibold">
                <tr>
                  <td className="border text-center w-10 h-12 px-2">
                    <img
                      className=" w-[60px] h-[60px] object-cover mx-auto"
                      src={cartCourse.photo}
                      alt=""
                    />
                  </td>
                  <td className="lg:py-6 md:py-4 py-2 text-center border">
                    {cartCourse.course_name}
                  </td>
                  <td className="lg:py-6 md:py-4 py-2 text-center border">
                    {orderData.name}
                  </td>
                  <td className="lg:py-6 md:py-4 py-2 text-center border">
                    {quantity}
                  </td>
                  <td className="lg:py-6 md:py-4 py-2 text-center border">
                    {orderData.totalPrice}
                  </td>
                  <td className="lg:py-6 md:py-4 py-2 text-center border">
                    {orderData.totalPrice}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
