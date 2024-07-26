let cache = {
    data: null,
    timestamp: 0
};
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

export default async (req, res) => {
    const url = "https://api.github.com/users/PrinceMuichkine/repos?per_page=100";

    // Check if we have valid cached data
    const now = Date.now();
    if (cache.data && (now - cache.timestamp < CACHE_DURATION)) {
        return res.status(200).json({ repos: cache.data });
    }

    // Fetch new data from GitHub API
    const response = await fetch(url);
    const json = await response.json();

    // Initialize an empty array to store project details
    const projectsList = [];

    // Check if json is an array before using forEach
    if (Array.isArray(json)) {
        json.forEach(p => {
            projectsList.push({
                "name": p.name,
                "stars": p.stargazers_count,
                "url": p.html_url,
                "description": p.description,
                "language": p.language,
                "homepage": p.homepage,
                "topics": p.topics,
                "created_at": p.created_at,
                "updated_at": p.updated_at,
            });
        });

        // Update the cache
        cache.data = projectsList;
        cache.timestamp = now;

        // Return the list of projects with a 200 status code
        return res.status(200).json({ repos: projectsList });
    } else {
        // Handle the case where json is not an array
        return res.status(500).json({ error: 'Unexpected response format' });
    }
};