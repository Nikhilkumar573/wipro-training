// Dummy local storage for users
const users = JSON.parse(localStorage.getItem("users")) || [];

// Monthly activities data
const activities = [
  { id: 1, activity: "Create project file with tables between 12 to 19", subject: "Maths" },
  { id: 2, activity: "Perform water cycle experiment", subject: "Science" },
  { id: 3, activity: "Write an essay on Environment", subject: "English" },
  { id: 4, activity: "Solve algebra equations", subject: "Maths" },
  { id: 5, activity: "Read chapter 5 - Human Body", subject: "Science" },
];

// DOM elements
const authSection = document.getElementById("authSection");
const welcomeSection = document.getElementById("welcomeSection");
const activitySection = document.getElementById("activitySection");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const studentName = document.getElementById("studentName");
const subjectSelect = document.getElementById("subjectSelect");
const activityList = document.getElementById("activityList");

// Buttons
document.getElementById("registerBtn").addEventListener("click", register);
document.getElementById("loginBtn").addEventListener("click", login);
document.getElementById("monthlyBtn").addEventListener("click", showActivities);
document.getElementById("backBtn").addEventListener("click", goBack);
document.getElementById("logoutBtn").addEventListener("click", logout);
subjectSelect.addEventListener("change", displayActivities);

// Register new user
function register() {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) {
    alert("Please enter username and password!");
    return;
  }

  if (users.find((u) => u.username === username)) {
    alert("Username already exists!");
    return;
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful!");
  usernameInput.value = "";
  passwordInput.value = "";
}

// Login user
function login() {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    localStorage.setItem("loggedInUser", username);
    showWelcome(username);
  } else {
    alert("Invalid credentials!");
  }
}

// Show welcome section
function showWelcome(username) {
  authSection.classList.add("hidden");
  welcomeSection.classList.remove("hidden");
  studentName.textContent = username;
}

// Show activities page
function showActivities() {
  welcomeSection.classList.add("hidden");
  activitySection.classList.remove("hidden");
}

// Display subject-wise activities
function displayActivities() {
  const selectedSubject = subjectSelect.value;
  activityList.innerHTML = "";

  if (selectedSubject === "") return;

  const filtered = activities.filter((a) => a.subject === selectedSubject);
  if (filtered.length === 0) {
    activityList.innerHTML = "<li>No activities found for this subject.</li>";
    return;
  }

  filtered.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.activity;
    activityList.appendChild(li);
  });
}

// Go back to welcome page
function goBack() {
  activitySection.classList.add("hidden");
  welcomeSection.classList.remove("hidden");
}

// Logout
function logout() {
  localStorage.removeItem("loggedInUser");
  welcomeSection.classList.add("hidden");
  activitySection.classList.add("hidden");
  authSection.classList.remove("hidden");
  usernameInput.value = "";
  passwordInput.value = "";
}

// Auto-login check
const loggedInUser = localStorage.getItem("loggedInUser");
if (loggedInUser) {
  showWelcome(loggedInUser);
}
