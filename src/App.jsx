import './App.css'
import { useState, useEffect, useRef } from 'react'
import CityList from './components/CityList'
import CityForecast from './components/CityForecast'
import weatherData from './data/mockWeatherData'

function App() {
  const [city, setCity] = useState(null)
  const [focusCount, setFocusCount] = useState(0)
  const detailsRef = useRef(null)

  useEffect(() => {
    if (focusCount > 0) {
      detailsRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [focusCount])


  return (
    <>
    <div className="weather-forecast-container">
      <h1>Weather Forecast by City</h1>
      <CityList weatherData={weatherData} setCity={setCity}/>
      <CityForecast weatherData={weatherData} city={city} setFocusCount={setFocusCount} detailsRef={detailsRef} />
    </div>
    </>
  )
}

export default App
