// main.ts
// Demonstrating the functionality of the Online Course Management System mini app

import { CourseManager, CourseCategory } from "./courseApp";  // ✅ Single import

// Create an instance of CourseManager
const courseManager = new CourseManager();

// Example usage
const instructor1 = courseManager.addInstructor("John Doe", [CourseCategory.DEVELOPMENT]);
const student1 = courseManager.addStudent("Alice Smith");
const course1 = courseManager.createCourse("TypeScript Basics", CourseCategory.DEVELOPMENT, instructor1.id);

courseManager.enrollStudent(course1.id, student1.id);

// Print summary
courseManager.printSummary();

// Fetch and display all courses
const allCourses = courseManager.getAllCourses();
console.log("All Courses:", allCourses);

// Fetch and display course details 
const courseDetails = courseManager.getCourseDetails(course1.id);
console.log("Course Details:", courseDetails);

// Demonstrating iterators
console.log("Iterating over all courses:");
for (const c of courseManager.courseIterator()) {
    console.log(`Course ID: ${c.id}, Title: ${c.title}`);
}
