import { useContext } from "react";
import { OrderContext } from "../../ContextAPIs/OrderProvider";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleCourseCard = ({ course }) => {
  const { course_name, photo, trainer_data, regular_price, discount_price } =
    course;
  const trainerName = trainer_data?.name;
  const percentageOfDiscount =
    ((regular_price - discount_price) / regular_price) * 100;
  const { handleAddToCart, quantity } = useContext(OrderContext);

  return (
    <div className="mt-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <img src={photo} alt={course_name} className="w-full" />
          <div className="absolute top-0 left-0 p-2">
            <h3 className="text-white text-xl font-bold">Data Entry</h3>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-gray-800 text-lg font-semibold mb-2">
            {course_name}
          </h2>
          <div className="flex items-center justify-between mb-4">
            <span className="flex text-blue-500 text-md">★★★★★</span>
            <span className="ml-2 text-gray-600 text-md font-bold">
              {trainerName}
            </span>
          </div>
          <p className="text-gray-600 text-md mb-4">
            Course Details <span className="text-blue-500">Show Details</span>
          </p>
          <hr />
          <div className="mt-4 flex justify-between items-center">
            <div>
              <span className="line-through text-gray-400 text-sm">
                {regular_price}
              </span>
              <span className="text-green-600 text-md font-bold ml-2">
                -{percentageOfDiscount.toFixed(0)}%
              </span>
              <span className="text-black text-lg font-bold ml-2">
                {discount_price}
              </span>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <button
              disabled={quantity > 0}
              onClick={() => handleAddToCart(course)}
              className={`${
                quantity > 0
                  ? "bg-gray-300 text-black"
                  : "bg-blue-500 hover:bg-blue-700 text-white"
              } py-2 px-4 rounded w-full font-bold text-md`}
            >
              {quantity > 0 ? "Added to Cart" : "Add To Cart"}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingleCourseCard;
