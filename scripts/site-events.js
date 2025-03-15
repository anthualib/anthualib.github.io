// Step 1: Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
    // Step 2: Add event listeners with comprehensive prevention of propagation
    document.getElementById('loadabout').addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation(); // This is stronger than stopPropagation
      loadBioContent('/assets/about.html');
      setActiveButton(this);
      return false; // Additional safeguard
    });
  
    document.getElementById('loadroles').addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      loadBioContent('/assets/roles.html');
      setActiveButton(this);
      return false;
    });
  
    document.getElementById('loadcareer').addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      loadBioContent('/assets/career.html');
      setActiveButton(this);
      return false;
    });
    
    // Also fix the hidden contacts button
    if (document.getElementById('loadcontacts')) {
      document.getElementById('loadcontacts').addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        loadBioContent('/assets/contacts.html');
        setActiveButton(this);
        return false;
      });
    }
    
    // Step 3: Replace the inline toggleMenu with a better version
    // First, remove the inline onclick if possible
    const hamburgerBtn = document.querySelector('.hamburger');
    if (hamburgerBtn) {
      // Clone the button to remove all event handlers
      const newHamburger = hamburgerBtn.cloneNode(true);
      hamburgerBtn.parentNode.replaceChild(newHamburger, hamburgerBtn);
      
      // Add our own controlled event listener
      newHamburger.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        document.getElementById("mobileMenu").classList.toggle("active");
      });
    }
  });
  
  // Keep the existing functions
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
  
  function setActiveButton(clickedButton) {
    // Remove "active" class from all buttons
    document.querySelectorAll("button").forEach(button => button.classList.remove("active"));
    
    // Add "active" class to the clicked button
    clickedButton.classList.add("active");
  }
  
  // Define toggleMenu globally for any inline onclick that might still exist
  window.toggleMenu = function(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    document.getElementById("mobileMenu").classList.toggle("active");
  };