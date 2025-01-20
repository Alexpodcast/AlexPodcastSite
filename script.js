// Example podcast episodes
const episodes = [
  { title: "Episode 1: The Beginning", description: "Our first episode is all about starting strong!" },
  { title: "Episode 2: Building Confidence", description: "How to believe in yourself and grow." },
  { title: "Episode 3: Overcoming Challenges", description: "Stories of resilience and success." }
];

// Display episodes on the page
const episodeList = document.getElementById('episodeList');

episodes.forEach(episode => {
  const episodeDiv = document.createElement('div');
  episodeDiv.innerHTML = `
    <h3>${episode.title}</h3>
    <p>${episode.description}</p>
  `;
  episodeList.appendChild(episodeDiv);
});

// Handle "Listen to the Latest Episode" button
document.getElementById('latestEpisodeBtn').addEventListener('click', () => {
  alert(`Now playing: ${episodes[0].title}`);
});
