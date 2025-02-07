function playStream(channel) {
    let playerSetup = {
        file: channel.streamUrl,
        type: "dash",  // JW Player auto-detects, but forcing helps
        width: "100%",
        height: 400,
        autostart: true
    };

    // Force HLS if needed
    if (channel.streamUrl.endsWith(".m3u8")) {
        playerSetup.type = "hls";
    }

    // Add DRM if available
    if (channel.drm) {
        playerSetup.drm = {};
        if (channel.drm.type === "clearkey") {
            playerSetup.drm.clearkey = { 
                keys: channel.drm.keys 
            };
        }
    }

    jwplayer("player").setup(playerSetup);
}
