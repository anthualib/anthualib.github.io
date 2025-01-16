// Add event listeners for loading content
document.getElementById('loadcontacts').addEventListener('click', function(event) {
    event.preventDefault();
    loadBioContent('/assets/contacts.html');
  });
  
  document.getElementById('loadabout').addEventListener('click', function(event) {
    event.preventDefault();
    loadBioContent('/assets/about.html');
  });
  
  document.getElementById('loadroles').addEventListener('click', function(event) {
    event.preventDefault();
    loadBioContent('/assets/roles.html');
  });
  
  document.getElementById('loadcareer').addEventListener('click', function(event) {
    event.preventDefault();
    loadBioContent('/assets/career.html');
    loadSideContent('/assets/sidebars/career');
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