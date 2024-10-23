import { createContext, useEffect, useRef, useState } from "react";
import { Bounce, toast } from "react-toastify";

export const OrderContext = createContext(null);

const OrderProvider = ({ children }) => {
  const [examID, setExamID] = useState(null);
  const [open, setOpen] = useState(true);
  const sidebarRef = useRef(null);
  const [quantity, setQuantity] = useState(0);
  const [cartCourse, setCartCourse] = useState({});

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
      toast.success("Course Added to Cart", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.info("Course already in the cart. Use '+' to increase quantity.", {
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
      toast.info("Course quantity increased", {
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
      toast.info("Course quantity reduced", {
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
