const channels = [
    {
        name: "Public Channel 1",
        streamUrl: "https://your-stream-url-1.m3u8",
        image: "https://via.placeholder.com/200x120/000000/ffffff?text=Public+Channel+1",
        drm: null // No DRM
    },
    {
        name: "Widevine DRM Channel",
        streamUrl: "https://your-widevine-stream.mpd",
        image: "https://via.placeholder.com/200x120/000000/ffffff?text=Widevine+Channel",
        drm: {
            type: "widevine",
            licenseUrl: "https://your-widevine-license-server.com"
        }
    },
    {
        name: "ClearKey DRM Channel",
        streamUrl: "https://your-clearkey-stream.mpd",
        image: "https://via.placeholder.com/200x120/000000/ffffff?text=ClearKey+Channel",
        drm: {
            type: "clearkey",
            licenseUrl: "https://your-clearkey-license-server.com",
            keys: {
                "key-id": "your-clearkey-key-value"
            }
        }
    }
];
