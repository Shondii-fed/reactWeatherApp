const CityForecast = ({ weatherData, city, setFocusCount, detailsRef }) => {
  if (!city || !weatherData[city]) {
    return <p>Please select a city to view its weather forecast.</p>
  }
  
  return (
    <div>
      <p>{weatherData[city].summary}</p>
      <button onClick={() => setFocusCount((prev) => prev + 1)}>View Details</button>
      <p ref={detailsRef}>{weatherData[city].details}</p>
    </div>
  )
}

export default CityForecast
