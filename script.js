window.addEventListener('DOMContentLoaded', () => {
    if (typeof channels === "undefined" || Object.keys(channels).length === 0) {
        console.error("Error: channels.js failed to load or contains no channels.");
        document.querySelector('.scrollable-grid').innerHTML = "<p class='text-white'>No channels found.</p>";
        return;
    }

    populateChannels(); 
    
    // Automatically load the first channel
    const defaultChannelKey = Object.keys(channels)[0];
    if (defaultChannelKey) {
        loadStream(defaultChannelKey);
    }
});

function populateChannels() {
    const channelList = document.querySelector('.scrollable-grid');

    if (!channelList) {
        console.error("Error: Could not find '.scrollable-grid' in the DOM.");
        return;
    }

    channelList.innerHTML = ''; // Clear existing content

    Object.keys(channels).forEach(key => {
        const channel = channels[key];

        if (!channel.name || !channel.url) {
            console.error("Skipping invalid channel:", channel);
            return;
        }

        const listItem = document.createElement('div');
        listItem.className = 'channel-item text-white rounded-lg p-3 text-center cursor-pointer font-medium';
        listItem.tabIndex = 0;
        listItem.textContent = channel.name;
        listItem.onclick = () => loadStream(key);

        channelList.appendChild(listItem);
    });

    console.log("Channels populated successfully.");
}
