# 🌤️ SkyCast: Smart Weather & Activity Advisor

**SkyCast** is a dynamic web application that provides real-time meteorological data for any city worldwide. Unlike standard weather apps, SkyCast features a **Logic-Driven Recommendation Engine** that suggests personalized activities based on current climate conditions (Temperature & Weather State).

## 🚀 Live Demo
Experience the application here: **[ https://krishkumar2227.github.io/SkyCast-Smart-Weather-Activity-Planner/]**

## 🛠️ Key Technical Features

* **Real-time REST API Integration:** Synchronous data fetching from the **OpenWeatherMap API** using JavaScript's `async/await` and `Fetch API`.
* **Intelligent Recommendation Logic:** An integrated algorithm that processes raw weather data to provide actionable advice (e.g., "Perfect for cycling" vs "Indoor coding weather").
* **Asynchronous State Management:** Managed UI transitions and loading states to ensure a seamless user experience during data retrieval.
* **Glassmorphic Responsive UI:** A modern, blur-effect interface designed with **CSS3 Flexbox** for full compatibility across Mobile, Tablet, and Desktop screens.
* **Robust Error Handling:** Implemented checks for `404 (City Not Found)` and `401 (Invalid API Key)` to guide the user gracefully during failures.



## 💻 Tech Stack

* **Frontend:** HTML5, CSS3 (Advanced Gradients & Backdrop Filters)
* **Scripting:** JavaScript (ES6+), Fetch API, Promises
* **Data Source:** OpenWeatherMap REST API
* **Automation (Optional):** Python `requests` library for CLI-based weather diagnostics.

## 📂 Project Structure

```text
├── index.html      # Structural layout and UI components
├── style.css       # Glassmorphic design and responsive breakpoints
├── script.js       # API integration logic and recommendation engine
├── weather_cli.py  # Python-based automated weather reporter
└── README.md       # Technical project documentation
