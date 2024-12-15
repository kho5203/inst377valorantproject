const urlParams = new URLSearchParams(window.location.search);
const agentId = urlParams.get('id');
const youtubeAPIKey = "AIzaSyBPUVKhbD8Tj6p_x8_iSCquizrBMP53t9s";


async function fetchAgentDetails(agentId) {
    const container = document.getElementById('agent-container');
    try {
        const response = await fetch(`https://valorant-api.com/v1/agents/${agentId}`);
        const data = await response.json();
        const agent = data.data;

        if (!agent) {
            container.innerHTML = '<div class="error">Agent not found.</div>';
            return;
        }

        const { displayName, fullPortrait, description, abilities } = agent;

        // Hero Section
        const heroSection = `
            <div class="hero-section">
                <img src="${fullPortrait || ''}" alt="${displayName}" class="hero-image">
                <div class="hero-details">
                    <h1 class="agent-name">${displayName}</h1>
                    <p class="agent-description">${description}</p>
                </div>
            </div>
        `;

        // Abilities Section
        const abilitiesSection = `
            <div class="abilities-section">
                <h2 class="section-title">Abilities</h2>
                <div class="abilities-grid">
                    ${abilities.map(ability => `
                        <div class="ability-card">
                            <img class="ability-icon" 
                                 src="${ability.displayIcon || ''}" 
                                 alt="${ability.displayName || 'Unknown Ability'}">
                            <h3 class="ability-name">${ability.displayName || 'Unknown Ability'}</h3>
                            <p class="ability-description">${ability.description || 'No description available.'}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;


        // tutorial section
        const tutorialVideo = await fetchYouTubeTutorial(displayName);

        // Tutorial Section (If video found)
        const tutorialSection = tutorialVideo ? `
            <div class="tutorial-section">
                <h2 class="section-title">Agent Tutorial</h2>
                <div class="tutorial-video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/${tutorialVideo.id}" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                    <p><a href="https://www.youtube.com/watch?v=${tutorialVideo.id}" target="_blank" class="tutorial-link">Watch on YouTube</a></p>
                </div>
            </div>
        ` : '';

        // Combine Sections
        container.innerHTML = heroSection + abilitiesSection + tutorialSection;



    } catch (error) {
        console.error('Error fetching agent details:', error);
        container.innerHTML = '<div class="error">Failed to load agent details. Please try again later.</div>';
    }
}

// youtube api thing
async function fetchYouTubeTutorial(agentName) {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(agentName + ' tutorial')}+valorant&key=${youtubeAPIKey}`);
        const data = await response.json();
        const video = data.items[0]; // Get the first video

        if (video) {
            return { id: video.id.videoId, title: video.snippet.title };
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error fetching YouTube tutorial:', error);
        return null;
    }
}

fetchAgentDetails(agentId);


