
async function getISSLocation() {
    const apiURL = "http://api.open-notify.org/iss-now.json";

    try {
        const response = await fetch(apiURL);

        if (!response.ok){
            throw new Error("Request Failed")
        }

        const data = await response.json();

        const timestamp = new Date(data.timestamp * 1000).toLocaleTimeString();
        const latitude = data.iss_position.latitude;
        const longitude = data.iss_position.longitude;

        document.getElementById('latitude').innerText = latitude;
        document.getElementById('longitude').innerText = longitude;
        document.getElementById('timestamp').innerText = timestamp;

        
        const x = ((Number(longitude) + 180) / 360) * 100;
        const y = ((90 - Number(latitude)) / 180) * 100;

        const marker = document.getElementById("marker");
        marker.style.left = x + "%";
        marker.style.top = y + "%";

    } catch (error){
        console.error('could not fetch data:', error);
        document.getElementById('timestamp').innerText = "Failed to load live data.";
    }

    
}

getISSLocation();

setInterval(getISSLocation, 5000);