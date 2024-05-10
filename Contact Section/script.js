document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const mapContainer = document.querySelector('.map-container');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();
        
        if (name.length < 2) {
            alert('Name must be at least 2 characters long.');
            return;
        }
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (message.length < 10) {
            alert('Message must be at least 10 characters long.');
            return;
        }
        
        contactForm.submit();
    });

    // Function to toggle the visibility of the map
    function toggleMapVisibility() {
        mapContainer.style.display = (mapContainer.style.display === 'none' || mapContainer.style.display === '') ? 'block' : 'none';
    }

    document.getElementById('toggleMapButton').addEventListener('click', toggleMapVisibility);
s
    mapContainer.style.display = 'block';
});
