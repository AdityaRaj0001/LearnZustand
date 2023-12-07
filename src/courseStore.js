import { create } from 'zustand'

import { devtools, persist } from 'zustand/middleware'

const useCourseStore = create((set) => ({
    courses: [],
    addCourse: (course) => {
        set((state) => ({
            courses: [{
                id: state.courses.length + 1,
                title: course,
                completed: false,
            }, ...state.courses],
        }))
    },
    removeCourse: (courseId) => {
        set((state) => ({
            courses: state.courses.filter((c) => c.id !== courseId)
        }))
    },
    toggleCourseStatus: (courseId) => {
        set((state) => ({
            courses: state.courses.map((course) => course.id === courseId ? { ...course, completed: !course.completed } : course)
        }))
    }
}))

// const useCourseStore = create(
//     devtools(
//         persist(courseStore, {
//             name: "courses",
//         })
//     )
// )


export default useCourseStore;