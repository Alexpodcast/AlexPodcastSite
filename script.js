// Sample podcast episodes
const episodes = [
  { title: "Episode 1: The Journey Begins", description: "Our very first episode!", audio: "episode1.mp3" },
  { title: "Episode 2: Overcoming Challenges", description: "How to tackle life's obstacles.", audio: "episode2.mp3" },
  { title: "Episode 3: Building Connections", description: "The power of networking.", audio: "episode3.mp3" }
];

// Function to display episodes
function loadEpisodes() {
  const episodeList = document.getElementById('episodeList');

  episodes.forEach(episode => {
    const episodeDiv = document.createElement('div');
    episodeDiv.classList.add('episode');
    episodeDiv.innerHTML = `
      <h3>${episode.title}</h3>
      <p>${episode.description}</p>
      <audio controls>
        <source src="${episode.audio}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    `;
    episodeList.appendChild(episodeDiv);
  });
}

// Handle "Listen to Latest Episode" button
document.getElementById('latestEpisodeBtn').addEventListener('click', () => {
  alert(`Now playing: ${episodes[0].title}`);
});

// Load episodes when the page loads
document.addEventListener('DOMContentLoaded', loadEpisodes);
