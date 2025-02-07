document.addEventListener("DOMContentLoaded", function () {
    const channelList = document.getElementById("channelList");

    if (!channels || channels.length === 0) {
        console.error("Error: No channels loaded from channels.js");
        return;
    }

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
    console.log("Playing:", channel.name);
    let playerSetup = {
        file: channel.streamUrl,
        width: "100%",
        height: 400,
        autostart: true,
        type: channel.streamUrl.includes(".m3u8") ? "hls" : "dash"
    };

    // Add DRM if available
    if (channel.drm && channel.drm.type === "clearkey" && channel.drm.keys) {
        console.log("Applying ClearKey DRM:", channel.drm.keys);
        playerSetup.drm = {
            clearkey: { keys: channel.drm.keys }
        };
    }

    // Debugging output
    console.log("JW Player Setup:", playerSetup);

    // Initialize JW Player
    jwplayer("player").setup(playerSetup);
}
