const CityList = ({ weatherData, setCity }) => {
  return (
    <div>
        {Object.keys(weatherData).map((city) => (
            <button key={city} onClick={() => setCity(city)}>{city}</button>
        ))}
    </div>
  )
}

export default CityList
