import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const lat = searchParams.get('lat')
  const lon = searchParams.get('lon')
  const date = searchParams.get('date') // YYYY-MM-DD

  if (!lat || !lon || !date) {
    return Response.json({ error: 'Missing lat, lon or date' }, { status: 400 })
  }

  // Open-Meteo free API — no key required.
  // We request hourly temperature, precipitation probability, weathercode, and windspeed
  // for the specific date only.
  const url = new URL('https://api.open-meteo.com/v1/forecast')
  url.searchParams.set('latitude', lat)
  url.searchParams.set('longitude', lon)
  url.searchParams.set('daily', 'temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode,windspeed_10m_max,precipitation_probability_max')
  url.searchParams.set('timezone', 'Europe/Berlin')
  url.searchParams.set('start_date', date)
  url.searchParams.set('end_date', date)

  try {
    const res = await fetch(url.toString(), {
      next: { revalidate: 3600 }, // cache for 1 hour
    })

    if (!res.ok) {
      return Response.json({ error: 'Failed to fetch weather data' }, { status: 502 })
    }

    const data = await res.json()

    // Extract the single day's data
    const daily = data.daily
    if (!daily || !daily.time || daily.time.length === 0) {
      return Response.json({ error: 'No data returned' }, { status: 502 })
    }

    const weather = {
      date: daily.time[0],
      tempMax: daily.temperature_2m_max[0],
      tempMin: daily.temperature_2m_min[0],
      precipitation: daily.precipitation_sum[0],
      precipitationProbability: daily.precipitation_probability_max[0],
      weatherCode: daily.weathercode[0],
      windspeedMax: daily.windspeed_10m_max[0],
    }

    return Response.json(weather, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    })
  } catch {
    return Response.json({ error: 'Network error fetching weather' }, { status: 502 })
  }
}
