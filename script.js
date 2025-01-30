// Toggle the About Us section visibility
document.getElementById('aboutUsBtn').addEventListener('click', function() {
    const introSection = document.getElementById('intro');
    if (introSection.style.display === 'none' || introSection.style.display === '') {
        introSection.style.display = 'block'; // Show the intro text
    } else {
        introSection.style.display = 'none'; // Hide the intro text
    }
});

// Load podcast episodes dynamically
document.addEventListener('DOMContentLoaded', function() {
    const episodeList = document.getElementById('episodeList');

    // Sample podcast episode data (replace with actual episode info if needed)
    const episodes = [
        { title: "Episode 1: Inspiring Story", videoUrl: "https://www.youtube.com/embed/oga6APt4Xcs" },
        { title: "Episode 2: Overcoming Challenges", videoUrl: "https://www.youtube.com/embed/FJJxmfOatRI" },
        { title: "Episode 3: Building Connections", videoUrl: "https://www.youtube.com/embed/6fS5KFJcguM" }
    ];

    // Loop through the episodes array and create elements for each episode
    episodes.forEach(episode => {
        const episodeDiv = document.createElement('div');
        episodeDiv.classList.add('episode');
        episodeDiv.innerHTML = `
            <h3>${episode.title}</h3>
            <iframe width="560" height="315" src="${episode.videoUrl}" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
        `;
        episodeList.appendChild(episodeDiv);
    });

    // Hide the introduction text by default
    const introSection = document.getElementById('intro');
    introSection.style.display = 'none'; // Hide intro text initially
});

// Handle search functionality (this is just a placeholder for now)
document.getElementById('searchBar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const episodes = document.querySelectorAll('.episode h3');
    episodes.forEach(episode => {
        const title = episode.textContent.toLowerCase();
        if (title.includes(query)) {
            episode.parentElement.style.display = 'block';
        } else {
            episode.parentElement.style.display = 'none';
        }
    });
});
