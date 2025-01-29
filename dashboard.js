document.addEventListener("DOMContentLoaded", () => {
    // Topics data
    const topics = [
      { name: "Arrays", count: 0 },
      { name: "Binary Search", count: 0 },
      { name: "Binary Search Tree", count: 0 },
      { name: "Binary Tree", count: 0 },
      { name: "Bit Manipulation", count: 0 },
      { name: "Dynamic Programming", count: 0 },
      { name: "Graph", count: 0 },
      { name: "Greedy", count: 0 },
    ]
  
    // Populate topics grid
    const topicsGrid = document.querySelector(".topics-grid")
    topics.forEach((topic) => {
      const topicElement = document.createElement("div")
      topicElement.className = "topic-item"
      topicElement.innerHTML = `
              <span>${topic.name}</span>
              <span>×${topic.count}</span>
          `
      topicsGrid.appendChild(topicElement)
    })
  
    // Update progress circles
    const circles = document.querySelectorAll(".circle-progress")
    circles.forEach((circle) => {
      const progress = Number.parseInt(circle.dataset.progress)
      circle.style.background = `conic-gradient(var(--accent-color) ${progress}%, var(--border-color) ${progress}%)`
    })
  
    // Toggle public/private profile
    const profileToggle = document.querySelector(".switch input")
    profileToggle.addEventListener("change", (e) => {
      // Handle profile visibility toggle
      console.log("Profile visibility:", e.target.checked ? "Public" : "Private")
    })
  
    // Handle Leetcode form submission
    const leetcodeForm = document.querySelector(".leetcode-form")
    leetcodeForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const username = leetcodeForm.querySelector("input").value
      console.log("Leetcode username submitted:", username)
    })
  })
  
  