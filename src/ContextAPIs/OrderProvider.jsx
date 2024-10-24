import { createContext, useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SnackbarContext } from "./SnackbarProvider";

export const OrderContext = createContext(null);

const OrderProvider = ({ children }) => {
  const [examID, setExamID] = useState(null);
  const [open, setOpen] = useState(true);
  const sidebarRef = useRef(null);
  const [quantity, setQuantity] = useState(0);
  const [cartCourse, setCartCourse] = useState({});
  const showSnackbar = useContext(SnackbarContext);

  const getCourseFromLocalStorage = () => {
    const storedCourse = localStorage.getItem("course");
    if (storedCourse) {
      return JSON.parse(storedCourse);
    }
    return null;
  };

  const handleAddToCart = (course) => {
    const storedCourse = getCourseFromLocalStorage();

    if (!storedCourse) {
      const courseWithQuantity = { ...course, quantity: 1 };
      localStorage.setItem("course", JSON.stringify(courseWithQuantity));
      setQuantity(courseWithQuantity.quantity);
      setCartCourse(courseWithQuantity);
      showSnackbar("Course Added to Cart!", "success");
    }
  };

  const handleIncreaseQuantity = () => {
    const storedCourse = getCourseFromLocalStorage();

    if (storedCourse) {
      const updatedCourse = {
        ...storedCourse,
        quantity: storedCourse.quantity + 1,
      };
      localStorage.setItem("course", JSON.stringify(updatedCourse));
      setQuantity(updatedCourse.quantity);
      setCartCourse(updatedCourse);
    }
  };

  const handleRemoveFromCart = () => {
    const storedCourse = getCourseFromLocalStorage();

    if (storedCourse && storedCourse.quantity > 1) {
      const updatedCourse = {
        ...storedCourse,
        quantity: storedCourse.quantity - 1,
      };
      localStorage.setItem("course", JSON.stringify(updatedCourse));
      setQuantity(updatedCourse.quantity);
      setCartCourse(updatedCourse);
    }
  };

  useEffect(() => {
    const storedCourse = getCourseFromLocalStorage();
    if (storedCourse) {
      setQuantity(storedCourse.quantity);
      setCartCourse(storedCourse);
    }
  }, []);

  const info = {
    examID,
    setExamID,
    open,
    setOpen,
    sidebarRef,
    handleAddToCart,
    handleIncreaseQuantity,
    handleRemoveFromCart,
    quantity,
    setQuantity,
    cartCourse,
    setCartCourse,
  };

  return <OrderContext.Provider value={info}>{children}</OrderContext.Provider>;
};

export default OrderProvider;
