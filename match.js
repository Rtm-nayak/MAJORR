// Sample users (could be dynamic later)
const users = [
    { name: "Alice", skills: ["HTML", "CSS"], bio: "Web designer", id: "u1" },
    { name: "Bob", skills: ["JavaScript", "React"], bio: "Frontend dev", id: "u2" },
    { name: "Charlie", skills: ["Python", "Java"], bio: "Backend expert", id: "u3" },
    { name: "Diana", skills: ["C++", "DSA"], bio: "Problem solver", id: "u4" }
  ];
  
  // Get current user's goals
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  const goals = userProfile?.goals?.split(",").map(g => g.trim().toLowerCase()) || [];
  
  const matchesDiv = document.getElementById("matches");
  
  // Filter users based on matching skills
  const matches = users.filter(user =>
    user.skills.some(skill => goals.includes(skill.toLowerCase()))
  );
  
  if (matches.length === 0) {
    matchesDiv.innerHTML = "<p>No matches found based on your learning goals.</p>";
  } else {
    matchesDiv.innerHTML = "<h3>People who can help you:</h3>";
    matches.forEach(match => {
      const div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `
        <p><strong>${match.name}</strong> — ${match.bio}</p>
        <p><strong>Skills:</strong> ${match.skills.join(", ")}</p>
        <button onclick="connect('${match.id}', '${match.name}')">Connect</button>
      `;
      matchesDiv.appendChild(div);
    });
  }
  
  // Store connection in localStorage
  function connect(id, name) {
    const connections = JSON.parse(localStorage.getItem("connections") || "[]");
    if (!connections.includes(id)) {
      connections.push(id);
      localStorage.setItem("connections", JSON.stringify(connections));
      alert(`You connected with ${name}!`);
    } else {
      alert(`Already connected with ${name}.`);
    }
  }
  