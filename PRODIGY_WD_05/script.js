async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "2c444e4ea8f36ca774a765628d209fa0"; // Use your actual key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById("weatherDisplay").innerHTML = `
        <div class="weather-icon">⛅</div>
        <div class="temperature">${Math.round(data.main.temp)}°C</div>
        <div class="city-name">${data.name}</div>
        <div class="details">
          <div><strong>${data.main.humidity}%</strong><br>Humidity</div>
          <div><strong>${Math.round(data.wind.speed * 3.6)} km/h</strong><br>Wind Speed</div>
        </div>
      `;
    } else {
      document.getElementById("weatherDisplay").innerHTML = `<p>City not found.</p>`;
    }
  } catch (error) {
    document.getElementById("weatherDisplay").innerHTML = `<p>Error fetching data.</p>`;
  }
}
