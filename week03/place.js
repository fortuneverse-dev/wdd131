// Static weather values (metric units: °C and km/h)
const temperature = 8;
const windSpeed = 15;

// Show the static values in the Weather section so the page and the script always match
document.getElementById("temperature").textContent = temperature;
document.getElementById("wind").textContent = windSpeed;

// Wind chill formula in metric units, in one line of code
function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

// Only call the function when the conditions are viable: <= 10 °C and > 4.8 km/h
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
}

document.getElementById("windchill").textContent = windChill;

// Footer: current year and last modified date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;