document.addEventListener("DOMContentLoaded", function () {
    const channelList = document.getElementById("channelList");

    // Load channels dynamically
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

function playStream(channel) {
    console.log("Playing Channel:", channel.name); // Debugging

    let playerSetup = {
        file: channel.streamUrl,
        type: "dash", // Default to DASH for MPD files
        width: "100%",
        height: 400,
        autostart: true
    };

    if (channel.streamUrl.endsWith(".m3u8")) {
        playerSetup.type = "hls"; // Force HLS for .m3u8 files
    }

    // Add DRM if available
    if (channel.drm) {
        console.log("DRM detected for:", channel.name, channel.drm);
        playerSetup.drm = {};

        if (channel.drm.type === "clearkey") {
            if (channel.drm.keys) {
                playerSetup.drm.clearkey = {
                    keys: channel.drm.keys
                };
                console.log("ClearKey DRM Keys:", channel.drm.keys); // Debugging
            } else {
                console.error("ClearKey DRM keys are missing for", channel.name);
            }
        }
    } else {
        console.log("No DRM for:", channel.name);
    }

    // Initialize JW Player
    jwplayer("player").setup(playerSetup);
}
