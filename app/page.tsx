import { days, budget } from '@/lib/tripData'
import RoadmapMap from './RoadmapMap'
import WeatherWidget from './WeatherWidget'

const allStops = [
  { city: 'Zwevegem', flag: '🇧🇪', href: null },
  { city: 'Würzburg', flag: null, href: '#day-1' },
  { city: 'Nördlingen', flag: null, href: '#day-2' },
  { city: 'Augsburg', flag: null, href: '#day-3' },
  { city: 'Hopfen am See', flag: null, href: '#day-4' },
  { city: 'Zwevegem', flag: '🇧🇪', href: '#day-6' },
]

const legs = [
  { km: '520 km', mapsHref: 'https://www.google.com/maps/dir/Zwevegem,+Belgium/Würzburg,+Germany' },
  { km: '135 km', mapsHref: 'https://www.google.com/maps/dir/Würzburg,+Germany/Nördlingen,+Germany' },
  { km: '74 km',  mapsHref: 'https://www.google.com/maps/dir/Nördlingen,+Germany/Augsburg,+Germany' },
  { km: '105 km', mapsHref: 'https://www.google.com/maps/dir/Augsburg,+Germany/Hopfen+am+See,+Germany' },
  { km: '~800 km', mapsHref: 'https://www.google.com/maps/dir/Hopfen+am+See,+Germany/Zwevegem,+Belgium' },
]

export default function Home() {
  return (
    <main style={{ fontFamily: "'Jost', sans-serif" }}>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #1a1410 0%, #2d1f0e 40%, #1a2818 100%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '4rem 2rem', position: 'relative', overflow: 'hidden',
      }}>
        {/* decorative circles */}
        <div style={{ position:'absolute', top:'-120px', right:'-120px', width:'500px', height:'500px',
          borderRadius:'50%', border:'1px solid rgba(200,151,58,0.12)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', top:'-80px', right:'-80px', width:'360px', height:'360px',
          borderRadius:'50%', border:'1px solid rgba(200,151,58,0.08)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'-100px', left:'-100px', width:'400px', height:'400px',
          borderRadius:'50%', border:'1px solid rgba(200,151,58,0.08)', pointerEvents:'none' }} />

        <p className="anim-fade-in" style={{
          fontFamily:"'Cormorant Garamond', serif", fontSize:'0.9rem', letterSpacing:'0.25em',
          color:'#c8973a', textTransform:'uppercase', marginBottom:'1.5rem',
        }}>
          April 2026 · Belgium → Bavaria
        </p>

        <h1 className="anim-fade-up delay-100" style={{
          fontFamily:"'Cormorant Garamond', serif", fontWeight:300,
          fontSize:'clamp(3rem, 8vw, 7rem)', lineHeight:1.05,
          color:'#faf7f2', textAlign:'center', marginBottom:'1rem',
        }}>
          Germany<br />
          <em style={{ fontStyle:'italic', color:'#e8c97a' }}>Roadtrip</em>
        </h1>

        <p className="anim-fade-up delay-200" style={{
          fontFamily:"'Cormorant Garamond', serif", fontSize:'clamp(1rem, 2.5vw, 1.4rem)',
          color:'rgba(250,247,242,0.6)', textAlign:'center', marginBottom:'3rem',
          letterSpacing:'0.05em',
        }}>
          Zwevegem → Würzburg → Nördlingen → Augsburg → Hopfen am See
        </p>

        {/* Stats row */}
        <div className="anim-fade-up delay-300" style={{
          display:'flex', flexWrap:'wrap', gap:'2px', justifyContent:'center',
          borderTop:'1px solid rgba(200,151,58,0.3)', borderBottom:'1px solid rgba(200,151,58,0.3)',
          padding:'1.5rem 0', marginBottom:'3rem', width:'100%', maxWidth:'680px',
        }}>
          {[
            { label:'Days', value:'6' },
            { label:'Total km', value:'1,634' },
            { label:'Countries', value:'2' },
            { label:'Hotels', value:'4' },
            { label:'Est. budget', value:'€1,175' },
          ].map((s, i) => (
            <div key={i} style={{
              flex:'1', minWidth:'100px', textAlign:'center', padding:'0.75rem 1.5rem',
              borderRight:'1px solid rgba(200,151,58,0.2)',
            }}>
              <div style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'2rem', fontWeight:300, color:'#e8c97a' }}>{s.value}</div>
              <div style={{ fontSize:'0.7rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(250,247,242,0.45)', marginTop:'2px' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Route map */}
        <div className="anim-fade-up delay-350" style={{ width:'100%', maxWidth:'860px', marginBottom:'2rem' }}>
          <RoadmapMap />
        </div>

        {/* Route graphic */}
        <div className="anim-fade-up delay-400" style={{ width:'100%', maxWidth:'900px', overflowX:'auto', padding:'0.5rem 0 0.5rem' }}>
          <div style={{ display:'flex', alignItems:'stretch', justifyContent:'center', minWidth:'580px' }}>
            {allStops.map((stop, i) => (
              <div key={i} style={{ display:'flex', alignItems:'stretch' }}>

                {/* Stop column: km label / dot / city name */}
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
                  {/* top spacer to match leg km height */}
                  <div style={{ height:'18px' }} />
                  {/* dot */}
                  {stop.href ? (
                    <a href={stop.href} style={{ textDecoration:'none', display:'flex', flexDirection:'column', alignItems:'center', gap:'6px' }}>
                      <div style={{
                        width:'10px', height:'10px', borderRadius:'50%', flexShrink:0,
                        background: i === 0 || i === allStops.length - 1 ? '#c8973a' : '#e8c97a',
                        boxShadow:'0 0 0 3px rgba(200,151,58,0.18)',
                      }} />
                      <span style={{ fontSize:'0.72rem', fontWeight:400, color: i === 0 || i === allStops.length - 1 ? '#e8c97a' : 'rgba(250,247,242,0.85)', letterSpacing:'0.04em', whiteSpace:'nowrap' }}>
                        {stop.flag ? `${stop.flag} ` : ''}{stop.city}
                      </span>
                    </a>
                  ) : (
                    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'6px' }}>
                      <div style={{
                        width:'10px', height:'10px', borderRadius:'50%', flexShrink:0,
                        background:'#c8973a', boxShadow:'0 0 0 3px rgba(200,151,58,0.18)',
                      }} />
                      <span style={{ fontSize:'0.72rem', fontWeight:400, color:'#e8c97a', letterSpacing:'0.04em', whiteSpace:'nowrap' }}>
                        {stop.flag} {stop.city}
                      </span>
                    </div>
                  )}
                </div>

                {/* Leg connector */}
                {i < legs.length && (() => {
                  const isReturn = i === legs.length - 1
                  return (
                    <a
                      href={legs[i].mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Directions: ${allStops[i].city} → ${allStops[i+1].city}`}
                      style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', gap:'4px', padding:'0 2px', textDecoration:'none', cursor:'pointer' }}
                    >
                      {/* km label row */}
                      <span style={{
                        fontSize:'0.58rem',
                        color: isReturn ? 'rgba(200,151,58,0.45)' : 'rgba(200,151,58,0.7)',
                        letterSpacing:'0.06em', whiteSpace:'nowrap', lineHeight:1,
                        height:'18px', display:'flex', alignItems:'center', gap:'3px',
                      }}>
                        {isReturn && <span style={{ fontSize:'0.55rem', opacity:0.8 }}>↩</span>}
                        {legs[i].km}
                      </span>
                      {/* line + arrow */}
                      <div style={{ display:'flex', alignItems:'center', marginTop:'0px' }}>
                        {isReturn ? (
                          /* dashed return line with left-pointing arrow */
                          <>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ flexShrink:0 }}>
                              <path d="M8 5H2M4 2.5L1.5 5 4 7.5" stroke="rgba(200,151,58,0.4)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <svg width="32" height="6" style={{ flexShrink:0 }}>
                              <line x1="0" y1="3" x2="32" y2="3"
                                stroke="rgba(200,151,58,0.28)" strokeWidth="1"
                                strokeDasharray="3,3" />
                            </svg>
                          </>
                        ) : (
                          /* solid outbound line with right-pointing arrow */
                          <>
                            <div style={{ width:'32px', height:'1px', background:'rgba(200,151,58,0.35)' }} />
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ flexShrink:0 }}>
                              <path d="M2 5h6M6 2.5L8.5 5 6 7.5" stroke="rgba(200,151,58,0.6)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </>
                        )}
                      </div>
                    </a>
                  )
                })()}

              </div>
            ))}
          </div>
        </div>


      </section>

      {/* ── ITINERARY OVERVIEW ── */}
      <section style={{ background:'#f5f0e8', padding:'5rem 2rem' }}>
        <div style={{ maxWidth:'900px', margin:'0 auto' }}>
          <p style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'0.85rem', letterSpacing:'0.2em',
            textTransform:'uppercase', color:'#c8973a', textAlign:'center', marginBottom:'0.5rem' }}>The Route</p>
          <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'clamp(2rem, 4vw, 3.5rem)',
            fontWeight:300, textAlign:'center', color:'#1a1410', marginBottom:'3.5rem' }}>
            Six days through Bavaria
          </h2>

          {/* Timeline */}
          <div style={{ position:'relative', paddingLeft:'2rem' }}>
            <div style={{ position:'absolute', left:'7px', top:'12px', bottom:'12px', width:'1px', background:'#d4c9b8' }} />
            {days.map((day, i) => (
              <div key={i} style={{ display:'flex', gap:'1.5rem', marginBottom:'2rem', position:'relative' }}>
                <div style={{ position:'absolute', left:'-1.65rem', top:'6px', width:'14px', height:'14px',
                  borderRadius:'50%', background: i===5 ? '#c8973a' : '#2d4a35', border:'2px solid #f5f0e8',
                  flexShrink:0, zIndex:1 }} />
                <a href={`#day-${day.day}`} style={{ flex:1, background:'#faf7f2', borderRadius:'12px', padding:'1.25rem 1.5rem',
                  border:'1px solid #d4c9b8', textDecoration:'none', display:'block', cursor:'pointer' }}>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:'8px', alignItems:'baseline', marginBottom:'0.4rem' }}>
                    <span style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'0.75rem',
                      letterSpacing:'0.15em', textTransform:'uppercase', color:'#c8973a' }}>
                      Day {day.day} · {day.date}
                    </span>
                    <span style={{ fontSize:'0.7rem', color:'#7a6e62', letterSpacing:'0.05em' }}>— {day.drive}</span>
                  </div>
                  <p style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.2rem', fontWeight:500,
                    color:'#1a1410', marginBottom:'0.25rem' }}>{day.route}</p>
                  <p style={{ fontSize:'0.82rem', color:'#7a6e62', lineHeight:1.5 }}>{day.highlight}</p>
                  {day.hotel !== 'Home 🏠' && (
                    <p style={{ fontSize:'0.75rem', color:'#8b3a2a', marginTop:'0.4rem' }}>
                      🏨 {day.hotel} · {day.hotelPrice}
                    </p>
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DAY CARDS ── */}
      {days.map((day, di) => (
        <section key={di} id={`day-${day.day}`} style={{
          padding:'5rem 2rem',
          background: di % 2 === 0 ? '#faf7f2' : '#f5f0e8',
          borderTop:'1px solid #d4c9b8',
        }}>
          <div style={{ maxWidth:'960px', margin:'0 auto' }}>

            {/* Day header */}
            <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem', alignItems:'flex-end', marginBottom:'2.5rem',
              paddingBottom:'1.5rem', borderBottom:'1px solid #d4c9b8' }}>
              <div>
                <p style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'0.8rem', letterSpacing:'0.2em',
                  textTransform:'uppercase', color:'#c8973a', marginBottom:'0.3rem' }}>
                  Day {day.day} · {day.weekday}, {day.date}
                </p>
                <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight:300, color:'#1a1410', lineHeight:1.1 }}>
                  {day.route}
                </h2>
              </div>
              <div style={{ marginLeft:'auto', textAlign:'right' }}>
                <div style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.8rem', fontWeight:300, color:'#2d4a35' }}>
                  {day.drive.split('·')[0].trim()}
                </div>
                <div style={{ fontSize:'0.72rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'#7a6e62' }}>
                  {day.drive.split('·').slice(1).join('·').trim()}
                </div>
              </div>
            </div>

            {/* Highlight banner */}
            <WeatherWidget
              lat={day.weatherLat}
              lon={day.weatherLon}
              date={day.isoDate}
              city={day.weatherCity}
            />
            <div style={{ background:'linear-gradient(135deg, #2d4a35 0%, #1a2818 100%)',
              borderRadius:'12px', padding:'1.25rem 1.75rem', marginBottom:'2.5rem',
              display:'flex', alignItems:'center', gap:'12px' }}>
              <span style={{ fontSize:'1.2rem' }}>⭐</span>
              <p style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.15rem', color:'#e8c97a',
                fontStyle:'italic' }}>{day.highlight}</p>
            </div>

            {/* Hero image */}
            {day.heroImage.url && (
              <div style={{ marginBottom:'2.5rem', borderRadius:'16px', overflow:'hidden', position:'relative',
                boxShadow:'0 4px 24px rgba(26,20,16,0.12)' }}>
                <img
                  src={day.heroImage.url}
                  alt={day.heroImage.caption}
                  style={{ width:'100%', height:'360px', objectFit:'cover', display:'block' }}
                />
                {day.heroImage.caption && (
                  <p style={{ position:'absolute', bottom:0, left:0, right:0,
                    background:'linear-gradient(transparent, rgba(26,20,16,0.72))',
                    color:'rgba(255,255,255,0.85)', fontSize:'0.72rem', letterSpacing:'0.05em',
                    padding:'2rem 1.25rem 0.9rem', fontStyle:'italic' }}>
                    {day.heroImage.caption}
                  </p>
                )}
              </div>
            )}

            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'1.5rem' }}>

              {/* Hotel */}
              {day.hotel !== 'Home 🏠' && (
                <div style={{ background:'#faf7f2', border:'1px solid #d4c9b8', borderRadius:'12px', padding:'1.5rem',
                  borderTop:'3px solid #c8973a' }}>
                  <p style={{ fontSize:'0.7rem', letterSpacing:'0.15em', textTransform:'uppercase',
                    color:'#c8973a', marginBottom:'0.75rem' }}>🏨 Hotel</p>
                  <p style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.3rem', fontWeight:500,
                    color:'#1a1410', marginBottom:'0.3rem' }}>{day.hotel}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(day.hotelAddress)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize:'0.8rem', color:'#7a6e62', marginBottom:'0.5rem', display:'block', textDecoration:'underline', textDecorationColor:'rgba(122,110,98,0.4)', cursor:'pointer' }}
                  >{day.hotelAddress}</a>
                  <p style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.5rem', fontWeight:500,
                    color:'#2d4a35' }}>{day.hotelPrice}</p>
                  <p style={{ fontSize:'0.7rem', color:'#2d4a35', marginTop:'2px' }}>✓ Confirmed</p>
                </div>
              )}

              {/* Attractions */}
              {day.attractions.length > 0 && (
                <div style={{ background:'#faf7f2', border:'1px solid #d4c9b8', borderRadius:'12px', padding:'1.5rem',
                  borderTop:'3px solid #2d4a35' }}>
                  <p style={{ fontSize:'0.7rem', letterSpacing:'0.15em', textTransform:'uppercase',
                    color:'#2d4a35', marginBottom:'0.75rem' }}>🗺 Things to see</p>
                  <ul style={{ listStyle:'none', padding:0, margin:0 }}>
                    {day.attractions.map((a, ai) => (
                      <li key={ai} style={{ display:'flex', gap:'8px', marginBottom:'0.5rem',
                        paddingBottom:'0.5rem', borderBottom: ai < day.attractions.length-1 ? '1px solid #ebe4d8' : 'none' }}>
                        <span style={{ color:'#c8973a', marginTop:'1px', flexShrink:0 }}>▸</span>
                        <span style={{ fontSize:'0.85rem', color:'#3d4a5c', lineHeight:1.4 }}>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Restaurants */}
              {day.restaurants.length > 0 && (
                <div style={{ background:'#faf7f2', border:'1px solid #d4c9b8', borderRadius:'12px', padding:'1.5rem',
                  borderTop:'3px solid #8b3a2a' }}>
                  <p style={{ fontSize:'0.7rem', letterSpacing:'0.15em', textTransform:'uppercase',
                    color:'#8b3a2a', marginBottom:'0.75rem' }}>🍽 Restaurants</p>
                  {day.restaurants.map((r, ri) => (
                    <div key={ri} style={{ marginBottom:'0.6rem', paddingBottom:'0.6rem',
                      borderBottom: ri < day.restaurants.length-1 ? '1px solid #ebe4d8' : 'none' }}>
                      <a href={r.mapsUrl} target="_blank" rel="noopener noreferrer" className="restaurant-link"
                      >{r.name} <span style={{ fontSize:'0.7rem', opacity:0.7 }}>↗</span></a>
                      <p style={{ fontSize:'0.78rem', color:'#7a6e62' }}>{r.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Bars */}
              {day.bars.length > 0 && (
                <div style={{ background:'#faf7f2', border:'1px solid #d4c9b8', borderRadius:'12px', padding:'1.5rem',
                  borderTop:'3px solid #3d4a5c' }}>
                  <p style={{ fontSize:'0.7rem', letterSpacing:'0.15em', textTransform:'uppercase',
                    color:'#3d4a5c', marginBottom:'0.75rem' }}>🍺 Bars & drinks</p>
                  {day.bars.map((b, bi) => (
                    <div key={bi} style={{ marginBottom:'0.6rem', paddingBottom:'0.6rem',
                      borderBottom: bi < day.bars.length-1 ? '1px solid #ebe4d8' : 'none' }}>
                      <p style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1rem', fontWeight:500,
                        color:'#1a1410', marginBottom:'1px' }}>{b.name}</p>
                      <p style={{ fontSize:'0.78rem', color:'#7a6e62' }}>{b.vibe}</p>
                    </div>
                  ))}
                </div>
              )}

            </div>

            {/* Notes */}
            <div style={{ marginTop:'1.5rem', background:'#fef9ee', border:'1px solid #e8c97a',
              borderLeft:'3px solid #c8973a', borderRadius:'0 8px 8px 0', padding:'1rem 1.25rem',
              display:'flex', gap:'10px', alignItems:'flex-start' }}>
              <span style={{ flexShrink:0, marginTop:'1px' }}>📝</span>
              <p style={{ fontSize:'0.85rem', color:'#7a6e62', lineHeight:1.6, fontStyle:'italic' }}>{day.notes}</p>
            </div>

            {/* Hidden gems */}
            {day.gems.length > 0 && (
              <div style={{ marginTop:'2rem' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'1rem' }}>
                  <div style={{ height:'1px', flex:1, background:'#d4c9b8' }} />
                  <p style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'0.8rem', letterSpacing:'0.18em',
                    textTransform:'uppercase', color:'#7a6e62', whiteSpace:'nowrap' }}>
                    💎 Hidden gems
                  </p>
                  <div style={{ height:'1px', flex:1, background:'#d4c9b8' }} />
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'1rem' }}>
                  {day.gems.map((g, gi) => (
                    <div key={gi} style={{ background:'linear-gradient(135deg, #f5eef8 0%, #ece4f5 100%)',
                      border:'1px solid #c9b8e0', borderRadius:'12px', padding:'1.25rem' }}>
                      <div style={{ display:'flex', gap:'8px', alignItems:'flex-start', marginBottom:'0.5rem' }}>
                        <span style={{ fontSize:'1.2rem', flexShrink:0 }}>{g.icon}</span>
                        <div>
                          <p style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.05rem', fontWeight:500,
                            color:'#3a1f5c', lineHeight:1.3 }}>{g.name}</p>
                          <p style={{ fontSize:'0.7rem', letterSpacing:'0.08em', color:'#7a5c9a', marginTop:'2px' }}>
                            {g.distance}
                          </p>
                        </div>
                      </div>
                      <p style={{ fontSize:'0.8rem', color:'#5a4570', lineHeight:1.6 }}>{g.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* ── BUDGET SECTION ── */}
      <section id="budget" style={{ padding:'5rem 2rem', background:'#1a1410', borderTop:'1px solid #2d2520' }}>
        <div style={{ maxWidth:'960px', margin:'0 auto' }}>
          <p style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'0.85rem', letterSpacing:'0.2em',
            textTransform:'uppercase', color:'#c8973a', textAlign:'center', marginBottom:'0.5rem' }}>Finance</p>
          <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'clamp(2rem, 4vw, 3.5rem)',
            fontWeight:300, textAlign:'center', color:'#faf7f2', marginBottom:'3rem' }}>
            Trip budget
          </h2>

          {/* Grand total cards */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(160px, 1fr))',
            gap:'1px', background:'rgba(200,151,58,0.2)', borderRadius:'12px', overflow:'hidden', marginBottom:'3rem' }}>
            {[
              { label:'Hotels', value:'€588', sub:'5 nights · confirmed' },
              { label:'Fuel', value:'€181', sub:'1,634 km total' },
              { label:'Attractions', value:'€131', sub:'if all visited' },
              { label:'Food est.', value:'€274', sub:'€50/day × 2' },
              { label:'Grand total', value:'€1,175', sub:'€587 per person', highlight: true },
            ].map((s, i) => (
              <div key={i} style={{
                background: s.highlight ? 'rgba(200,151,58,0.2)' : 'rgba(255,255,255,0.03)',
                padding:'1.5rem', textAlign:'center',
              }}>
                <p style={{ fontSize:'0.65rem', letterSpacing:'0.18em', textTransform:'uppercase',
                  color:'rgba(200,151,58,0.7)', marginBottom:'0.5rem' }}>{s.label}</p>
                <p style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'2rem', fontWeight:300,
                  color: s.highlight ? '#e8c97a' : '#faf7f2' }}>{s.value}</p>
                <p style={{ fontSize:'0.7rem', color:'rgba(250,247,242,0.4)', marginTop:'3px' }}>{s.sub}</p>
              </div>
            ))}
          </div>

          {/* Hotels table */}
          <BudgetTable title="🏨 Hotels" color="#c8973a" rows={budget.hotels.map(h => ({
            name: h.name, detail: h.dates, pp: h.pp, total: h.total, note: h.status
          }))} totalPP={budget.totals.hotels.pp} totalAll={budget.totals.hotels.total} />

          {/* Fuel table */}
          <BudgetTable title="⛽ Fuel" color="#8b3a2a" rows={budget.fuel.map(f => ({
            name: f.leg, detail: f.details, pp: f.pp, total: f.total, note: f.note
          }))} totalPP={budget.totals.fuel.pp} totalAll={budget.totals.fuel.total} />

          {/* Attractions table */}
          <BudgetTable title="🎟 Attractions" color="#2d4a35" rows={budget.attractions.map(a => ({
            name: a.name, detail: a.day, pp: a.pp, total: a.total, note: a.note
          }))} totalPP={budget.totals.attractions.pp} totalAll={budget.totals.attractions.total} />

        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background:'#100e0b', padding:'3rem 2rem', textAlign:'center',
        borderTop:'1px solid rgba(200,151,58,0.2)' }}>
        <p style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.5rem', fontWeight:300,
          color:'rgba(250,247,242,0.4)', marginBottom:'0.5rem', fontStyle:'italic' }}>
          Gute Reise
        </p>
        <p style={{ fontSize:'0.7rem', letterSpacing:'0.15em', textTransform:'uppercase',
          color:'rgba(200,151,58,0.4)' }}>
          Belgium → Bavaria · April 14–19, 2026
        </p>
        <div style={{ marginTop:'2rem', display:'flex', justifyContent:'center', gap:'2rem', flexWrap:'wrap' }}>
          {days.map((d, i) => (
            <a key={i} href={`#day-${d.day}`} style={{
              fontSize:'0.75rem', letterSpacing:'0.08em', color:'rgba(200,151,58,0.5)',
              textDecoration:'none', transition:'color 0.2s',
            }}>
              Day {d.day} · {d.date.split(' ')[1]}
            </a>
          ))}
          <a href="#budget" style={{
            fontSize:'0.75rem', letterSpacing:'0.08em', color:'rgba(200,151,58,0.5)',
            textDecoration:'none',
          }}>Budget</a>
        </div>
      </footer>

    </main>
  )
}

function BudgetTable({ title, color, rows, totalPP, totalAll }: {
  title: string
  color: string
  rows: { name: string; detail: string; pp: string; total: string; note: string }[]
  totalPP: string
  totalAll: string
}) {
  return (
    <div style={{ marginBottom:'2.5rem' }}>
      <p style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.1rem', color,
        letterSpacing:'0.05em', marginBottom:'0.75rem', paddingBottom:'0.5rem',
        borderBottom:'1px solid rgba(200,151,58,0.2)' }}>{title}</p>
      <div style={{ overflowX:'auto' }}>
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'0.82rem' }}>
          <thead>
            <tr style={{ borderBottom:'1px solid rgba(200,151,58,0.15)' }}>
              {['Name','Details','Per person','For 2','Note'].map(h => (
                <th key={h} style={{ padding:'0.5rem 0.75rem', textAlign:'left', fontSize:'0.65rem',
                  letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(200,151,58,0.5)',
                  fontWeight:400 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} style={{
                borderBottom:'1px solid rgba(255,255,255,0.04)',
                background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
              }}>
                <td style={{ padding:'0.6rem 0.75rem', color:'#faf7f2' }}>{r.name}</td>
                <td style={{ padding:'0.6rem 0.75rem', color:'rgba(250,247,242,0.5)' }}>{r.detail}</td>
                <td style={{ padding:'0.6rem 0.75rem', color:'rgba(250,247,242,0.7)', fontFamily:"'Cormorant Garamond', serif", fontSize:'0.95rem' }}>{r.pp}</td>
                <td style={{ padding:'0.6rem 0.75rem', color:'#e8c97a', fontFamily:"'Cormorant Garamond', serif", fontSize:'0.95rem' }}>{r.total}</td>
                <td style={{ padding:'0.6rem 0.75rem', color:'rgba(250,247,242,0.35)', fontSize:'0.75rem' }}>{r.note}</td>
              </tr>
            ))}
            <tr style={{ borderTop:'1px solid rgba(200,151,58,0.3)', background:'rgba(200,151,58,0.07)' }}>
              <td colSpan={2} style={{ padding:'0.6rem 0.75rem', color:'#c8973a', fontSize:'0.75rem',
                letterSpacing:'0.1em', textTransform:'uppercase' }}>Total</td>
              <td style={{ padding:'0.6rem 0.75rem', color:'#e8c97a', fontFamily:"'Cormorant Garamond', serif", fontSize:'1rem', fontWeight:500 }}>{totalPP}</td>
              <td style={{ padding:'0.6rem 0.75rem', color:'#e8c97a', fontFamily:"'Cormorant Garamond', serif", fontSize:'1rem', fontWeight:500 }}>{totalAll}</td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
