import useCourseStore from "@/courseStore";
import React from "react";

const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore();
  console.log(courses);
  return (
    <div className="h-full w-2/5 flex flex-col space-y-2  items-center">
      {courses.map((course) => (
        console.log(course),
        <div
          key={course.id}
          className="w-full h-14 bg-white rounded-xl flex items-center flex-row px-2"
        >
          <input
            onChange={() => toggleCourseStatus(course.id)}
            checked={course.isDone}
            className="w-4/5 h-12 rounded-xl ml-4"
            type="checkbox"
          />
          <p className="w-4/5 h-12 rounded-xl ml-4 text-lg font-medium text-black">
            {course.title}
          </p>
          <button
            onClick={() => removeCourse(course.id)}
            className="w-1/5 p-2 bg-black text-white text-lg font-medium rounded-full ml-4"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
