const apiUrl = "https://your-xtream-code-api.com"; // Xtream Codes API URL
const apiUsername = "username"; // Your Xtream Codes username
const apiPassword = "password"; // Your Xtream Codes password

// Function to get the channel list
async function getChannels() {
  const response = await fetch(`${apiUrl}/get_channels.php?username=${apiUsername}&password=${apiPassword}`);
  const data = await response.json();

  const channelsContainer = document.getElementById("channels-container");
  data.channels.forEach(channel => {
    const channelElement = document.createElement("div");
    channelElement.classList.add("channel");
    channelElement.textContent = channel.name;
    channelElement.addEventListener("click", () => playStream(channel.stream_url));
    channelsContainer.appendChild(channelElement);
  });
}

// Function to play stream
function playStream(url) {
  const videoPlayer = document.getElementById("video-player");
  videoPlayer.src = url;
  videoPlayer.play();
}

getChannels();
