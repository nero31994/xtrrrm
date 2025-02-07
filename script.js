document.addEventListener("DOMContentLoaded", function () {
    const channelList = document.getElementById("channelList");

    // Load Channels Dynamically
    channels.forEach(channel => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${channel.image}" alt="${channel.name}">
            <h3>${channel.name}</h3>
        `;
        card.onclick = () => playStream(channel);
        channelList.appendChild(card);
    });
});

// Play Stream in JW Player with DRM Support
function playStream(channel) {
    let playerSetup = {
        file: channel.streamUrl,
        width: "100%",
        height: 400,
        autostart: true
    };

    // Check if the channel has DRM protection
    if (channel.drm) {
        playerSetup.drm = {};
        if (channel.drm.type === "widevine") {
            playerSetup.drm.widevine = {
                url: channel.drm.licenseUrl
            };
        } else if (channel.drm.type === "clearkey") {
            playerSetup.drm.clearkey = {
                keys: channel.drm.keys
            };
        }
    }

    // Initialize JW Player
    jwplayer("player").setup(playerSetup);
} 
