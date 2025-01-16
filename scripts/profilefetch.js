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
        setHelloHeightAuto(); 
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
        setHelloHeightAuto(); 
      })
      .catch(error => {
        console.error('There was a problem:', error);
      });
  }

  function setFullHeightAuto() {
    const helloElement = document.querySelector('.full');
    helloElement.style.height = 'auto'; 
  }