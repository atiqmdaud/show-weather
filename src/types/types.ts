export interface CitiesGeo {
  name: string
  state?: string
  country: string
  lat: string
  lon: string
}

export interface WeatherCityResultProps {
  cityGeo: CitiesGeo
  index: number
  length: number
}
