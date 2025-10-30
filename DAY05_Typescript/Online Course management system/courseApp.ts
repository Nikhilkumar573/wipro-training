// courseApp.ts
// Online Course Management System (TypeScript Mini App)

// Step 1: Enum for Course Categories
export enum CourseCategory {
    DEVELOPMENT = "Development",
    DESIGN = "Design",
    MARKETING = "Marketing",
    BUSINESS = "Business"
}

// Step 2: Interfaces for Course, Instructor, and Student
interface Course {
    id: number;
    title: string;
    category: CourseCategory;
    instructorId: number;
    studentIds: number[];
}

interface Instructor {
    id: number;
    name: string;
    expertise: CourseCategory[];
}

interface Student {
    id: number;
    name: string;
    enrolledCourses: number[];
}

// Step 3: Maps for data storage
const courses: Map<number, Course> = new Map();
const instructors: Map<number, Instructor> = new Map();
const students: Map<number, Student> = new Map();

// Step 4: Decorator for Logging Actions
function LogAction(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`🟢 Action: ${propertyKey} called with arguments: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}

// Step 5: CourseManager Class
export class CourseManager {
    private courseIdCounter: number = 1;

    @LogAction
    public createCourse(title: string, category: CourseCategory, instructorId: number): Course {
        const newCourse: Course = {
            id: this.courseIdCounter++,
            title,
            category,
            instructorId,
            studentIds: []
        };
        courses.set(newCourse.id, newCourse);
        return newCourse;
    }

    @LogAction
    public enrollStudent(courseId: number, studentId: number): void {
        const course = courses.get(courseId);
        const student = students.get(studentId);

        if (course && student) {
            if (!course.studentIds.includes(studentId)) {
                course.studentIds.push(studentId);
            }
            if (!student.enrolledCourses.includes(courseId)) {
                student.enrolledCourses.push(courseId);
            }
        } else {
            console.log("⚠️ Course or Student not found!");
        }
    }

    @LogAction
    public getCourseDetails(courseId: number): Course | undefined {
        return courses.get(courseId);
    }

    @LogAction
    public getAllCourses(): Course[] {
        return Array.from(courses.values());
    }

    public *courseIterator(): IterableIterator<Course> {
        for (const course of courses.values()) {
            yield course;
        }
    }

    @LogAction
    public addInstructor(name: string, expertise: CourseCategory[]): Instructor {
        const newInstructor: Instructor = {
            id: instructors.size + 1,
            name,
            expertise
        };
        instructors.set(newInstructor.id, newInstructor);
        return newInstructor;
    }

    @LogAction
    public addStudent(name: string): Student {
        const newStudent: Student = {
            id: students.size + 1,
            name,
            enrolledCourses: []
        };
        students.set(newStudent.id, newStudent);
        return newStudent;
    }

    @LogAction
    public printSummary(): void {
        console.log("📚 Courses:", Array.from(courses.values()));
        console.log("👨‍🏫 Instructors:", Array.from(instructors.values()));
        console.log("🎓 Students:", Array.from(students.values()));
    }
}
