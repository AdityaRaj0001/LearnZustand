"use client"
import CourseForm from "@/components/CourseForm"
import CourseList from "@/components/CourseList"

export default function Home() {
  return (
    <div className="bg-black h-screen w-full flex  items-center flex-col p-2 space-y-2">
      <h1 className="text-white font-black text-4xl" >My Loda Lasan Todo App</h1>
      <CourseForm />
      <CourseList />
    </div>
  )
}
