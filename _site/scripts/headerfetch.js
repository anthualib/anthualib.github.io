fetch('/assets/header.html')
.then(response => {
    if (!response.ok) {
        throw new Error('Failed to load header.html');
    }
    return response.text();
})
.then(data => {
    document.getElementById('headercontainer').innerHTML = data;

    // Initialize the dropdown functionality after the content is loaded
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownMenu = document.getElementById('dropdownMenu');

    dropdownButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        const isOpen = dropdownMenu.style.display === 'block';
        dropdownMenu.style.display = isOpen ? 'none' : 'block';

        // Toggle active class on the button
        dropdownButton.classList.toggle('active', !isOpen);
    });

    // Optional: Close dropdown when clicking outside
    document.addEventListener('click', function (event) {
        if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';

            // Remove the active class when menu is closed
            dropdownButton.classList.remove('active');
        }
    });
})
.catch(error => {
    console.error('Error:', error);
});

fetch('/assets/footer.html')
.then(response => {
    if (!response.ok) {
        throw new Error('Failed to load header.html');
    }
    return response.text();
})
.then(data => {
    document.getElementById('footercontainer').innerHTML = data;
})
.catch(error => {
    console.error('Error:', error);
});
