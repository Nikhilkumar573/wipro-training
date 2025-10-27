document.getElementById("runDemo").addEventListener("click", () => {
  const output = document.getElementById("output");
  output.innerHTML = ""; // Clear previous content

  // 1️⃣ let & const
  const instituteName = "Great Learning Institute";
  let courseName = "Full Stack Web Development";
  courseName = "Advanced Full Stack Web Development";

  const section1 = document.createElement("section");
  section1.innerHTML = `
    <h3>1️⃣ Use of let & const</h3>
    <p><b>Institute:</b> ${instituteName}</p>
    <p><b>Course:</b> ${courseName}</p>
  `;
  output.appendChild(section1);

  // 2️⃣ Spread Operator
  const coreSubjects = ["HTML", "CSS", "JavaScript"];
  const advancedSubjects = ["React", "Node.js", "MongoDB"];
  const allSubjects = [...coreSubjects, ...advancedSubjects];

  const section2 = document.createElement("section");
  section2.innerHTML = `
    <h3>2️⃣ Spread Operator</h3>
    <p><b>All Subjects:</b> ${allSubjects.join(", ")}</p>
  `;
  output.appendChild(section2);

  // 3️⃣ Arrow Function
  const greet = (name) => `Welcome ${name} to ${courseName}!`;

  const section3 = document.createElement("section");
  section3.innerHTML = `
    <h3>3️⃣ Arrow Function</h3>
    <p>${greet("Nikhil")}</p>
  `;
  output.appendChild(section3);

  // 4️⃣ Class Example
  class Student {
    constructor(name, age, skills) {
      this.name = name;
      this.age = age;
      this.skills = skills;
    }

    display() {
      return `<b>Name:</b> ${this.name} | <b>Age:</b> ${this.age} | <b>Skills:</b> ${this.skills.join(", ")}`;
    }
  }

  const s1 = new Student("Ravi", 21, ["HTML", "CSS", "JavaScript"]);
  const s2 = new Student("Priya", 22, ["React", "Node.js", "CSS"]);

  const section4 = document.createElement("section");
  section4.innerHTML = `
    <h3>4️⃣ Class Usage</h3>
    <p>${s1.display()}</p>
    <p>${s2.display()}</p>
  `;
  output.appendChild(section4);

  // 5️⃣ Map Object
  const studentGrades = new Map();
  studentGrades.set("Ravi", "A");
  studentGrades.set("Priya", "B+");
  studentGrades.set("Nikhil", "A+");

  let gradeHTML = "";
  studentGrades.forEach((grade, name) => {
    gradeHTML += `<li>${name}: ${grade}</li>`;
  });

  const section5 = document.createElement("section");
  section5.innerHTML = `
    <h3>5️⃣ Map Object</h3>
    <ul>${gradeHTML}</ul>
  `;
  output.appendChild(section5);

  // 6️⃣ Set Object
  const skillsSet = new Set([...s1.skills, ...s2.skills, "HTML", "CSS"]); // duplicates removed
  const uniqueSkills = Array.from(skillsSet);

  const section6 = document.createElement("section");
  section6.innerHTML = `
    <h3>6️⃣ Set Object</h3>
    <p><b>Unique Skills:</b> ${uniqueSkills.join(", ")}</p>
  `;
  output.appendChild(section6);

  // ✅ Final message
  const section7 = document.createElement("section");
  section7.innerHTML = `
    <h3>✅ Demo Complete!</h3>
    <p>All ES6 features demonstrated successfully on the page.</p>
  `;
  output.appendChild(section7);
});
