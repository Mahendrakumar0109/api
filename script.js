document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "b9a8702820d1632ce97ca8a0c21f4760"; // Replace with your OpenWeatherMap API key

    const cityName = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    const cityInput = document.getElementById("city-input");
    const searchBtn = document.getElementById("search-btn");

    searchBtn.addEventListener("click", () => {
        const city = cityInput.value.trim();
        if (city === "") return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                cityName.textContent = data.name;
                temperature.textContent = `Temperature: ${data.main.temp}°C`;
                description.textContent = `Description: ${data.weather[0].description}`;
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                cityName.textContent = "City not found";
                temperature.textContent = "";
                description.textContent = "";
            });
    });
});
