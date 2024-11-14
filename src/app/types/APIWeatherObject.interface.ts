export interface APIWeatherObject {
  "dt":Number
  "date": string,
  "weather": [
    {
      "description": string
    }
  ],
  "temp": {
    "min": number,
    "max": number
  }
}
