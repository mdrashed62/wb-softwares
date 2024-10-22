import { useEffect } from "react";
import { useState } from "react";
import SingleCourseCard from "./SingleCourseCard";

const Courses = () => {
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    fetch("https://itder.com/api/get-course-list")
      .then((res) => res.json())
      .then((data) => setCoursesData(data.courseData))
      .catch((error) => console.error("Error fetching camps:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {coursesData?.map((course) => (
        <SingleCourseCard key={course._id} course={course} />
      ))}
    </div>
  );
};

export default Courses;
