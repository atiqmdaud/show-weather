# Weather 🌦️

**Weather** is a user-friendly weather application built with Vite, Vue 3, TypeScript, and the OpenWeatherMap API. It provides real-time weather updates and forecasts for cities around the world, featuring intuitive and quick access to weather information.

## Features

- 🌍 **Global Weather Data**: Get weather updates for any city around the world.
- 🔄 **Real-Time Updates**: See current, hourly and weekly-daily forecast weather conditions, including temperature.
- 🔍 **City Suggestions**: Receive city suggestions as you type, making it easy to find your location.
- ⏲️ **Quick Access**: Instantly check the weather with an intuitive and responsive interface.
- ❌ **Clear Search**: Easily clear your search input with a built-in clear button.

## Project Setup and Installation Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/atiqmdaud/show-weather

   ```

2. **Navigate to the Project Directory:**:

   ```bash
   cd showweather

   ```

3. **Install Dependencies:**:

   ```bash
   npm install

   ```

4. **Add Your OpenWeatherMap API Key:**

- Create a .env file in the root directory.
- Add the following line to your .env file:\*\*:
  ```bash
  VITE_OPENWEATHERMAP_API_KEY=your_api_key
  ```

5. **Run the Application:**:
   ```bash
   npm run dev
   ```

## Approach and Architectural Decisions

- Tech Stack: The project uses Vite for its build tool, Vue 3 for the frontend framework, and TypeScript for type safety. This combination ensures fast development and efficient performance.

- State Management: Vuex is used for state management to handle the global state of the application efficiently.

- API Integration: The OpenWeatherMap API is used to fetch real-time weather data. The Geocoding API helps in searching and validating city names.

- Components: The app follows a component-based architecture, breaking down the UI into reusable components, which improves maintainability and scalability.

- Styling: Basic styling is applied using CSS to ensure a clean and responsive design.

## Demo url

[Visit Weather App](https://openweathermap.org)
