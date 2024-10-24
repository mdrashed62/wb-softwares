import { useEffect, useState } from "react";
import SingleCourseCard from "./SingleCourseCard";

const Courses = () => {
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("https://itder.com/api/get-course-list");
        const data = await response.json();
        setCoursesData(data.courseData);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-2">
      {coursesData?.map((course) => (
        <SingleCourseCard key={course._id} course={course} />
      ))}
    </div>
  );
};

export default Courses;
