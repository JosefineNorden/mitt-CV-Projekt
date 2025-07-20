document.addEventListener("DOMContentLoaded", async () => {
  const projectList = document.getElementById("project-list");
  const loadingText = document.getElementById("loading");

  try {
    const response = await fetch("https://api.github.com/users/JosefineNorden/repos");
    const repos = await response.json();

   
    loadingText.remove();

   
    repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

  
    repos.forEach(repo => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${repo.name}</strong><br>
        ${repo.description || "Ingen beskrivning"}<br>
        <a href="${repo.html_url}" target="_blank">Besök projekt</a>
      `;
      projectList.appendChild(li);
    });
  } catch (error) {
    loadingText.textContent = "Kunde inte hämta projekten...";
    console.error(error);
  }
});
