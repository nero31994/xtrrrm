document.addEventListener('DOMContentLoaded', () => {
    if (!window.channels || Object.keys(window.channels).length === 0) {
        console.error("❌ channels.js failed to load or is empty.");
        document.getElementById('channelList').innerHTML = "<p style='color: red;'>No channels found.</p>";
        return;
    }

    populateChannels();

    const defaultChannelKey = Object.keys(window.channels)[0];
    if (defaultChannelKey) {
        loadStream(defaultChannelKey);
    }
});

function loadStream(channelKey) {
    const channel = window.channels[channelKey];
    const playerContainer = document.getElementById("player");

    if (!channel) {
        console.error("❌ Channel not found:", channelKey);
        return;
    }

    console.log("📺 Loading Channel:", channel.name);

    // Setup JW Player config
    let playerSetup = {
        file: channel.url,
        type: channel.type === "hls" ? "hls" : "dash",
        width: "100%",
        aspectratio: "16:9",
        autostart: true,
        mute: false
    };

    // Add DRM if available
    if (channel.drm) {
        playerSetup.drm = {};
        if (channel.drm.type === "clearkey") {
            playerSetup.drm.clearkey = {
                [channel.drm.keyId]: channel.drm.key
            };
        } else if (channel.drm.type === "widevine") {
            playerSetup.drm.widevine = {
                url: channel.drm.licenseUrl
            };
        }
    }

    // Initialize JW Player
    jwplayer("player").setup(playerSetup);

    jwplayer("player").on('error', (event) => {
        console.error("❌ JW Player Error:", event.message);
    });

    jwplayer("player").on('play', () => {
        console.log("▶ Playing:", channel.name);
    });
}

function populateChannels() {
    const channelList = document.getElementById('channelList');
    channelList.innerHTML = '';

    Object.keys(window.channels).forEach(key => {
        const channel = window.channels[key];

        const listItem = document.createElement('button');
        listItem.className = 'channel-btn';
        listItem.textContent = channel.name;
        listItem.onclick = () => loadStream(key);

        channelList.appendChild(listItem);
    });

    console.log("✅ Channels Loaded.");
}
