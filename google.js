// Simple functionality for the search button
document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    if (query) {
        // For demonstration, it alerts the search query
        alert('Searching for: ' + query);
        
        // Redirect to Google search results
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    } else {
        alert('Please enter a search term.');
    }
});
