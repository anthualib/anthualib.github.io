// Add event listeners for loading content
document.getElementById('loadcontacts').addEventListener('click', function(event) {
  event.preventDefault();
  loadBioContent('/assets/contacts.html');
  setActiveButton(this);
});

document.getElementById('loadabout').addEventListener('click', function(event) {
  event.preventDefault();
  loadBioContent('/assets/about.html');
  setActiveButton(this);
});

document.getElementById('loadroles').addEventListener('click', function(event) {
  event.preventDefault();
  loadBioContent('/assets/roles.html');
  setActiveButton(this);
});

document.getElementById('loadcareer').addEventListener('click', function(event) {
  event.preventDefault();
  event.stopPropagation();  // Prevent this click from triggering any parent events like dropdown
  loadBioContent('/assets/career.html');
  setActiveButton(this);
});

function loadBioContent(filePath) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error loading the file: ' + response.statusText);
      }
      return response.text();
    })
    .then(data => {
      const bioElement = document.getElementById('bio');
      bioElement.innerHTML = data;
      setFullHeightAuto(); 
    })
    .catch(error => {
      console.error('There was a problem:', error);
    });
}

function loadSideContent(filePath) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error loading the file: ' + response.statusText);
      }
      return response.text();
    })
    .then(data => {
      const sidebarElement = document.getElementById('sidebar');
      sidebarElement.innerHTML = data;
      setFullHeightAuto(); 
    })
    .catch(error => {
      console.error('There was a problem:', error);
    });
}

function setFullHeightAuto() {
  const fullElement = document.querySelector('.full');
  fullElement.style.height = 'auto'; 
}

// Function to set active button styling
function setActiveButton(clickedButton) {
  // Remove "active" class from all buttons
  document.querySelectorAll("button").forEach(button => button.classList.remove("active"));

  // Add "active" class to the clicked button
  clickedButton.classList.add("active");
}