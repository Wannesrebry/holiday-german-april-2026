'use client'

import { useEffect, useState } from 'react'

interface WeatherData {
  date: string
  tempMax: number
  tempMin: number
  precipitation: number
  precipitationProbability: number
  weatherCode: number
  windspeedMax: number
}

// WMO Weather interpretation codes → { label, icon }
function interpretWeatherCode(code: number): { label: string; icon: string } {
  if (code === 0)  return { label: 'Clear sky',           icon: '☀️' }
  if (code === 1)  return { label: 'Mainly clear',        icon: '🌤️' }
  if (code === 2)  return { label: 'Partly cloudy',       icon: '⛅' }
  if (code === 3)  return { label: 'Overcast',            icon: '☁️' }
  if (code <= 49)  return { label: 'Foggy',               icon: '🌫️' }
  if (code <= 57)  return { label: 'Drizzle',             icon: '🌦️' }
  if (code <= 67)  return { label: 'Rain',                icon: '🌧️' }
  if (code <= 77)  return { label: 'Snow',                icon: '❄️' }
  if (code <= 82)  return { label: 'Rain showers',        icon: '🌦️' }
  if (code <= 86)  return { label: 'Snow showers',        icon: '🌨️' }
  if (code <= 99)  return { label: 'Thunderstorm',        icon: '⛈️' }
  return { label: 'Unknown', icon: '🌡️' }
}

interface WeatherWidgetProps {
  lat: number
  lon: number
  date: string // YYYY-MM-DD
  city: string
}

export default function WeatherWidget({ lat, lon, date, city }: WeatherWidgetProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    fetch(`/api/weather?lat=${lat}&lon=${lon}&date=${date}`)
      .then(r => {
        if (!r.ok) throw new Error('Failed')
        return r.json()
      })
      .then((data: WeatherData) => {
        setWeather(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [lat, lon, date])

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    background: 'var(--weather-bg)',
    border: '1px solid var(--weather-border)',
    borderRadius: '10px',
    padding: '0.75rem 1rem',
    marginBottom: '1.5rem',
    flexWrap: 'wrap',
  }

  if (loading) {
    return (
      <div style={containerStyle}>
        <span style={{ fontSize: '1.1rem', opacity: 0.5 }}>🌡️</span>
        <span style={{ fontSize: '0.78rem', color: 'var(--muted)', fontStyle: 'italic' }}>
          Loading weather for {city}…
        </span>
      </div>
    )
  }

  if (error || !weather) {
    return (
      <div style={containerStyle}>
        <span style={{ fontSize: '1.1rem' }}>🌡️</span>
        <span style={{ fontSize: '0.78rem', color: 'var(--muted)', fontStyle: 'italic' }}>
          Weather unavailable for {city}
        </span>
      </div>
    )
  }

  const { label, icon } = interpretWeatherCode(weather.weatherCode)
  const hasPrecip = (weather.precipitationProbability ?? 0) > 10

  return (
    <div style={containerStyle}>
      {/* Icon + condition */}
      <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{icon}</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
        <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--weather-city)', fontWeight: 500 }}>
          {city} · {date}
        </span>
        <span style={{ fontSize: '0.85rem', color: 'var(--weather-condition)', fontWeight: 400 }}>{label}</span>
      </div>

      {/* Divider */}
      <div style={{ width: '1px', height: '32px', background: 'var(--weather-divider)', margin: '0 4px', flexShrink: 0 }} />

      {/* Temps */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 400, color: 'var(--weather-temp)', lineHeight: 1 }}>
          {Math.round(weather.tempMax)}°
        </span>
        <span style={{ fontSize: '0.8rem', color: 'var(--weather-temp-min)' }}>
          / {Math.round(weather.tempMin)}°C
        </span>
      </div>

      {/* Rain probability */}
      {hasPrecip && (
        <>
          <div style={{ width: '1px', height: '32px', background: 'var(--weather-divider)', margin: '0 4px', flexShrink: 0 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'center' }}>
            <span style={{ fontSize: '0.95rem' }}>💧</span>
            <span style={{ fontSize: '0.72rem', color: 'var(--weather-precip)' }}>
              {weather.precipitationProbability}%
            </span>
          </div>
        </>
      )}

      {/* Wind */}
      {weather.windspeedMax > 20 && (
        <>
          <div style={{ width: '1px', height: '32px', background: 'var(--weather-divider)', margin: '0 4px', flexShrink: 0 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'center' }}>
            <span style={{ fontSize: '0.95rem' }}>💨</span>
            <span style={{ fontSize: '0.72rem', color: 'var(--weather-precip)' }}>
              {Math.round(weather.windspeedMax)} km/h
            </span>
          </div>
        </>
      )}

      {/* Precipitation amount */}
      {weather.precipitation > 0.5 && (
        <>
          <div style={{ width: '1px', height: '32px', background: 'var(--weather-divider)', margin: '0 4px', flexShrink: 0 }} />
          <span style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>
            {weather.precipitation.toFixed(1)} mm
          </span>
        </>
      )}

      {/* Source attribution */}
      <span style={{ marginLeft: 'auto', fontSize: '0.6rem', color: 'var(--weather-attr)', whiteSpace: 'nowrap' }}>
        via Open-Meteo
      </span>
    </div>
  )
}
