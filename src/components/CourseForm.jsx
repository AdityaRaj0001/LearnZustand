import useCourseStore from "@/courseStore";
import React from "react";

const CourseForm = () => {
  const { addCourse } = useCourseStore();
  const [courseName, setCourseName] = React.useState("");

  const handleAddCourse = () => {
    addCourse(courseName);
    setCourseName("");
  };

  return (
    <div className="w-2/5 h-14 bg-white rounded-xl flex items-center flex-row px-2">
      <input
        onChange={(e) => setCourseName(e.target.value)}
        value={courseName}
        className="w-4/5 h-12 rounded-xl ml-4"
        type="text"
        placeholder="Add a new course"
      />
      <button
        onClick={handleAddCourse}
        className="w-1/5 p-2 bg-black text-white text-lg font-medium rounded-xl ml-4"
      >
        Add
      </button>
    </div>
  );
};

export default CourseForm;
