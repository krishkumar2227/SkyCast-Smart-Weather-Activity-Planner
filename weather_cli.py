import requests

def get_weather_report(city):
    api_key = "83e4e6b1d692eb2df4f880ce5069160a"
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
    
    try:
        response = requests.get(url)
        data = response.json()
        
        temp = data['main']['temp']
        weather = data['weather'][0]['description']
        
        print(f"--- Weather Report for {city} ---")
        print(f"Temperature: {temp}°C")
        print(f"Condition: {weather.capitalize()}")
        
        # Simple Logic
        if temp < 20:
            print("Status: Cold Day. Wear a jacket!")
        else:
            print("Status: Pleasant Day. Enjoy!")
            
    except:
        print("Error fetching data. Check city name or API Key.")

get_weather_report("Delhi")