// Initialize repository list
let repositories = [];

// Function to render repositories
function renderRepositories() {
  const repoListContainer = document.getElementById("repoListContainer");
  repoListContainer.innerHTML = ''; // Clear the list before rendering
  
  repositories.forEach((repo, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${repo.name}</strong> <span>(${repo.date})</span>
      <button onclick="deleteRepo(${index})">Delete</button>
    `;
    repoListContainer.appendChild(li);
  });
}

// Handle form submission to upload code
document.getElementById("uploadForm").addEventListener('submit', function (e) {
  e.preventDefault();
  const repoName = document.getElementById("repoName").value;
  const codeFile = document.getElementById("codeFile").files[0];

  if (repoName && codeFile) {
    const newRepo = {
      name: repoName,
      file: codeFile.name,
      date: new Date().toLocaleDateString(),
    };

    // Add repository to the list
    repositories.push(newRepo);
    renderRepositories();

    // Reset form inputs
    document.getElementById("repoName").value = '';
    document.getElementById("codeFile").value = '';
    alert('Code uploaded successfully!');
  } else {
    alert('Please provide both repository name and code file.');
  }
});

// Function to delete repository
function deleteRepo(index) {
  repositories.splice(index, 1); // Remove repository from list
  renderRepositories(); // Re-render the repository list
}

// Initial rendering of repositories (if any)
renderRepositories();
