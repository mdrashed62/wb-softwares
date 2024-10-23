import { useEffect, useState } from "react";


const OrderDetails = () => {
  const [purchasedCourses, setPurchasedCourses] = useState([]);

  console.log("purchase course", purchasedCourses);

  useEffect(() => {
    fetch("https://itder.com/api/course-purchase")
      .then((res) => res.json())
      .then((data) => setPurchasedCourses(data))
      .catch((error) => console.error("Error fetching camps:", error));
  }, []);

  return (
   <div>

   </div>
  );
};

export default OrderDetails;
