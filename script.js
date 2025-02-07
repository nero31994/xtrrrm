function loadStream(channelKey) {
    const channel = channels[channelKey];
    const loadingIndicator = document.getElementById('loadingIndicator');
    const errorMessage = document.getElementById('errorMessage');
    const playerElement = document.getElementById('player');

    if (!channel) {
        errorMessage.textContent = 'Error: Channel not found!';
        errorMessage.classList.remove('hidden');
        return;
    }

    loadingIndicator.classList.remove('hidden');
    errorMessage.classList.add('hidden');

    // JW Player configuration
    let playerSetup = {
        file: channel.url,
        type: channel.type === "hls" ? "hls" : "dash", // Ensure correct format
        width: "100%",
        aspectratio: "21:9", // Maintain widescreen format
        autostart: true,
        mute: false
    };

    // If ClearKey DRM is required
    if (channel.drm && channel.drm.type === "clearkey" && channel.drm.keyId && channel.drm.key) {
        playerSetup.drm = {
            clearkey: {
                [channel.drm.keyId]: channel.drm.key
            }
        };
        console.log("Applying ClearKey DRM:", playerSetup.drm);
    }

    jwplayer("player").setup(playerSetup);

    // Enter fullscreen when playback starts
    jwplayer("player").on('play', () => {
        if (playerElement.requestFullscreen) {
            playerElement.requestFullscreen().catch(err => console.warn('Fullscreen request failed:', err));
        } else if (playerElement.webkitRequestFullscreen) {
            playerElement.webkitRequestFullscreen();
        } else if (playerElement.msRequestFullscreen) {
            playerElement.msRequestFullscreen();
        }
    });

    jwplayer("player").on('ready', () => {
        loadingIndicator.classList.add('hidden');
    });

    jwplayer("player").on('error', (event) => {
        loadingIndicator.classList.add('hidden');
        errorMessage.textContent = `Error: Unable to load the stream. (${event.message})`;
        errorMessage.classList.remove('hidden');
        console.error("JW Player Error:", event);
    });
}

function populateChannels() {
    const channelList = document.querySelector('.scrollable-grid');
    channelList.innerHTML = '';

    Object.keys(channels).forEach(key => {
        const channel = channels[key];

        const listItem = document.createElement('div');
        listItem.className = 'channel-item text-white rounded-lg p-3 text-center cursor-pointer font-medium';
        listItem.tabIndex = 0;
        listItem.textContent = channel.name;
        listItem.onclick = () => loadStream(key);

        channelList.appendChild(listItem);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    populateChannels();
    const defaultChannelKey = Object.keys(channels)[0];
    if (defaultChannelKey) {
        loadStream(defaultChannelKey);
    }
});
