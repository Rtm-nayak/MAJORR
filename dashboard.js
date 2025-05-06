/*// Hardcoded users (same as match.js)
const users = [
    { name: "Alice", skills: ["HTML", "CSS"], id: "u1" },
    { name: "Bob", skills: ["JavaScript", "React"], id: "u2" },
    { name: "Charlie", skills: ["Python", "Java"], id: "u3" },
    { name: "Diana", skills: ["C++", "DSA"], id: "u4" }
  ];
  
  // Show connected mentors
  const connectionIDs = JSON.parse(localStorage.getItem("connections") || "[]");
  const connectionsList = document.getElementById("connectionsList");
  
  if (connectionIDs.length === 0) {
    connectionsList.innerHTML = "<li>No mentors connected yet.</li>";
  } else {
    connectionIDs.forEach(id => {
      const mentor = users.find(u => u.id === id);
      if (mentor) {
        const li = document.createElement("li");
        li.textContent = `${mentor.name} (${mentor.skills.join(", ")})`;
        connectionsList.appendChild(li);
      }
    });
  }
  
  // Learning goals tracker
  const goalForm = document.getElementById("goalForm");
  const newGoalInput = document.getElementById("newGoal");
  const goalList = document.getElementById("goalList");
  
  let learningGoals = JSON.parse(localStorage.getItem("learningGoals") || "[]");
  
  function renderGoals() {
    goalList.innerHTML = "";
    if (learningGoals.length === 0) {
      goalList.innerHTML = "<li>No goals added yet.</li>";
      return;
    }
    learningGoals.forEach((goal, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <input type="checkbox" ${goal.done ? "checked" : ""} onchange="toggleGoal(${index})" />
        <span style="${goal.done ? 'text-decoration: line-through;' : ''}">${goal.text}</span>
        <button onclick="removeGoal(${index})">❌</button>
      `;
      goalList.appendChild(li);
    });
  }
  
  goalForm.addEventListener("submit", e => {
    e.preventDefault();
    learningGoals.push({ text: newGoalInput.value, done: false });
    localStorage.setItem("learningGoals", JSON.stringify(learningGoals));
    newGoalInput.value = "";
    renderGoals();
  });
  
  window.toggleGoal = function(index) {
    learningGoals[index].done = !learningGoals[index].done;
    localStorage.setItem("learningGoals", JSON.stringify(learningGoals));
    renderGoals();
  };
  
  window.removeGoal = function(index) {
    learningGoals.splice(index, 1);
    localStorage.setItem("learningGoals", JSON.stringify(learningGoals));
    renderGoals();
  };
  
  // Initial render
  renderGoals();
  
  */

  const user = JSON.parse(localStorage.getItem('userProfile'));

if (user) {
  document.getElementById('welcomeMsg').textContent = `Welcome, ${user.name}!`;
  document.getElementById('roleInfo').textContent = `Role: ${user.role === 'student' ? 'Student' : 'Mentor'}`;
} else {
  // If no user data, redirect to profile
  window.location.href = 'profile.html';
}
