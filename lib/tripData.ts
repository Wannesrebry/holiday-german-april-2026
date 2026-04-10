export interface Restaurant { name: string; description: string; mapsUrl: string }
export interface Attraction { name: string; mapsUrl: string }
export interface Bar { name: string; vibe: string; mapsUrl: string }
export interface Gem { icon: string; name: string; distance: string; description: string }
export interface DayData {
  day: number
  date: string
  isoDate: string   // YYYY-MM-DD, used for weather API
  weekday: string
  route: string
  drive: string
  hotel: string
  hotelAddress: string
  hotelPrice: string
  highlight: string
  heroImage: { url: string; caption: string }
  attractions: Attraction[]
  restaurants: Restaurant[]
  bars: Bar[]
  notes: string
  gems: Gem[]
  weatherCity: string   // city name shown in weather widget
  weatherLat: number    // destination latitude
  weatherLon: number    // destination longitude
}

export const days: DayData[] = [
  {
    day: 1,
    date: "April 14",
    isoDate: "2026-04-14",
    weekday: "Tuesday",
    route: "Zwevegem → Würzburg",
    drive: "520 km · ~5h · Motorways",
    hotel: "B&B HOTEL Würzburg",
    hotelAddress: "Schürerstraße 11, Würzburg",
    hotelPrice: "€97",
    highlight: "Arrive, check in, evening stroll to the Residenz",
    heroImage: {
      url: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Residenz_W%C3%BCrzburg3.JPG",
      caption: "Würzburg Residenz — UNESCO Baroque palace",
    },
    attractions: [
      { name: "Residenz Palace (UNESCO)", mapsUrl: "https://maps.google.com/?q=Würzburger+Residenz+Würzburg" },
      { name: "Old Main Bridge", mapsUrl: "https://maps.google.com/?q=Alte+Mainbrücke+Würzburg" },
      { name: "Marienberg Fortress (view)", mapsUrl: "https://maps.google.com/?q=Festung+Marienberg+Würzburg" },
    ],
    restaurants: [
      { name: "Bürgerspital", description: "Wine tavern, classic Franconian cuisine", mapsUrl: "https://maps.google.com/?q=Bürgerspital+Weinstuben+Würzburg" },
      { name: "Stachel", description: "Historic garden restaurant", mapsUrl: "https://maps.google.com/?q=Weinhaus+Stachel+Würzburg" },
      { name: "Alte Mainmühle", description: "On the bridge, great views", mapsUrl: "https://maps.google.com/?q=Alte+Mainmühle+Würzburg" },
      { name: "Backöfele", description: "Cozy local spot, schnitzel", mapsUrl: "https://maps.google.com/?q=Backöfele+Würzburg" },
    ],
    bars: [
      { name: "Biertumpel", vibe: "Lively student bar", mapsUrl: "https://maps.google.com/?q=Biertümpel+Würzburg" },
      { name: "Hofkeller", vibe: "Wine cellar, Würzburg wines", mapsUrl: "https://maps.google.com/?q=Staatlicher+Hofkeller+Würzburg" },
    ],
    notes: "Long driving day — pack snacks. Fill tank in Belgium before leaving.",
    gems: [],
    weatherCity: "Würzburg",
    weatherLat: 49.7913,
    weatherLon: 9.9534,
  },
  {
    day: 2,
    date: "April 15",
    isoDate: "2026-04-15",
    weekday: "Wednesday",
    route: "Würzburg → Nördlingen",
    drive: "135 km · ~1.5h · Romantic Road",
    hotel: "Cafe-Hotel Altreuter",
    hotelAddress: "Marktplatz 11, Nördlingen",
    hotelPrice: "€109",
    highlight: "Explore Würzburg in the morning, drive to medieval Nördlingen",
    heroImage: {
      url: "https://upload.wikimedia.org/wikipedia/commons/2/29/%C3%9Cberlick_%C3%BCber_N%C3%B6rdlingen.jpg",
      caption: "Nördlingen — one of Germany's last fully intact medieval walled towns",
    },
    attractions: [
      { name: "Würzburg Residenz (if not visited Day 1)", mapsUrl: "https://maps.google.com/?q=Würzburger+Residenz+Würzburg" },
      { name: "Nördlingen city wall walk (full circle!)", mapsUrl: "https://maps.google.com/?q=Stadtmauer+Nördlingen" },
      { name: "St. Georgs Kirche", mapsUrl: "https://maps.google.com/?q=St.+Georgs+Kirche+Nördlingen" },
      { name: "Rieskrater Museum (meteor crater)", mapsUrl: "https://maps.google.com/?q=Rieskrater+Museum+Nördlingen" },
    ],
    restaurants: [
      { name: "Sixenbrau", description: "Brewery restaurant, great atmosphere", mapsUrl: "https://maps.google.com/?q=Sixenbrau+Nördlingen" },
      { name: "Meyers Keller", description: "Traditional Swabian food", mapsUrl: "https://maps.google.com/?q=Meyers+Keller+Nördlingen" },
      { name: "Kleibls", description: "Local favourite", mapsUrl: "https://maps.google.com/?q=Kleibls+Nördlingen" },
    ],
    bars: [
      { name: "Sixenbrau", vibe: "Cozy brewery bar in the old town", mapsUrl: "https://maps.google.com/?q=Sixenbrau+Nördlingen" },
    ],
    notes: "Nördlingen is one of very few completely intact medieval walled cities in Germany.",
    gems: [
      { icon: "🏰", name: "Rothenburg ob der Tauber", distance: "~70km detour", description: "Germany's best-preserved medieval town. Wonky half-timbered houses, intact town wall, cobbled streets. Works as a morning stop — adds ~30 min to drive." },
      { icon: "🏯", name: "Schloss Harburg", distance: "On route", description: "11th-century castle, one of the most intact in Germany. Lies literally on your Nördlingen route. Quick photo stop or short visit." },
    ],
    weatherCity: "Nördlingen",
    weatherLat: 48.8481,
    weatherLon: 10.4899,
  },
  {
    day: 3,
    date: "April 16",
    isoDate: "2026-04-16",
    weekday: "Thursday",
    route: "Nördlingen → Augsburg",
    drive: "74 km · ~1h",
    hotel: "Arthotel ANA",
    hotelAddress: "Bürgermeister-Widmeier-Str., Augsburg",
    hotelPrice: "€90.90",
    highlight: "Short drive, full day to explore Augsburg",
    heroImage: {
      url: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Fuggerei_Augsburg.jpg",
      caption: "Fuggerei, Augsburg — the world's oldest social housing estate, founded 1516",
    },
    attractions: [
      { name: "Fuggerei (oldest social housing estate in the world)", mapsUrl: "https://maps.google.com/?q=Fuggerei+Augsburg" },
      { name: "Augsburg Cathedral", mapsUrl: "https://maps.google.com/?q=Augsburger+Dom+Augsburg" },
      { name: "Maximilianstraße", mapsUrl: "https://maps.google.com/?q=Maximilianstraße+Augsburg" },
      { name: "Fuggerhäuser", mapsUrl: "https://maps.google.com/?q=Fuggerhäuser+Augsburg" },
    ],
    restaurants: [
      { name: "Ratskeller", description: "Classic German dishes in the town hall cellar", mapsUrl: "https://maps.google.com/?q=Ratskeller+Augsburg" },
      { name: "Settele", description: "Refined Swabian cuisine", mapsUrl: "https://maps.google.com/?q=Settele+Augsburg" },
      { name: "Antinoro", description: "Italian option in historic setting", mapsUrl: "https://maps.google.com/?q=Antinoro+Augsburg" },
    ],
    bars: [
      { name: "Flannigan's", vibe: "Irish pub with good beer selection", mapsUrl: "https://maps.google.com/?q=Flannigan's+Augsburg" },
      { name: "OH BOI", vibe: "Trendy cocktail/nightlife bar", mapsUrl: "https://maps.google.com/?q=OH+BOI+Augsburg" },
    ],
    notes: "Fuggerei entry fee ~€8pp — worth every cent.",
    gems: [
      { icon: "🗼", name: "Perlachturm", distance: "Augsburg centre", description: "70m medieval watchtower, panoramic views over the city. Right next to the Rathaus." },
      { icon: "⛪", name: "St. Anne's Church", distance: "Augsburg centre", description: "Martin Luther stayed here in 1518. Elaborate interior, fascinating history. Free entry." },
      { icon: "🎵", name: "Mozart-Haus", distance: "Augsburg centre", description: "Birthplace of Mozart's father. Small but worthwhile if you're into music history." },
    ],
    weatherCity: "Augsburg",
    weatherLat: 48.3705,
    weatherLon: 10.8978,
  },
  {
    day: 4,
    date: "April 17",
    isoDate: "2026-04-17",
    weekday: "Friday",
    route: "Augsburg → Hopfen am See",
    drive: "105 km · ~1.5h",
    hotel: "Seehotel Hartung",
    hotelAddress: "Uferstraße 31, Hopfen am See",
    hotelPrice: "€291.32 for 2 nights",
    highlight: "Check in at the lake hotel — base for Neuschwanstein tomorrow",
    heroImage: {
      url: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hopfen_am_See_mit_Pfarrkirche.JPG",
      caption: "Hopfen am See — alpine lake village at the foot of the Allgäu Alps",
    },
    attractions: [
      { name: "Hopfen am See lakeside walk", mapsUrl: "https://maps.google.com/?q=Hopfen+am+See+Uferpromenade" },
      { name: "Füssen old town (10 min away)", mapsUrl: "https://maps.google.com/?q=Altstadt+Füssen" },
      { name: "Evening by the lake", mapsUrl: "https://maps.google.com/?q=Hopfensee+Hopfen+am+See" },
    ],
    restaurants: [
      { name: "Seaside", description: "Lakeside dining, great views", mapsUrl: "https://maps.google.com/?q=Seaside+Restaurant+Hopfen+am+See" },
      { name: "Maucher's", description: "Local favourite near the lake", mapsUrl: "https://maps.google.com/?q=Maucher's+Hopfen+am+See" },
      { name: "Seehaus", description: "Relaxed terrace by the water", mapsUrl: "https://maps.google.com/?q=Seehaus+Hopfen+am+See" },
    ],
    bars: [
      { name: "Schrannen Bar", vibe: "Chill bar in Füssen", mapsUrl: "https://maps.google.com/?q=Schrannen+Bar+Füssen" },
      { name: "Bayrish", vibe: "Traditional Bavarian bar", mapsUrl: "https://maps.google.com/?q=Bayrish+Füssen" },
    ],
    notes: "Neuschwanstein tickets must be booked in advance! Check tickets.hohenschwangau.de",
    gems: [
      { icon: "⛪", name: "Wieskirche", distance: "~45 min from Hopfen", description: "UNESCO Rococo church in a meadow — jaw-dropping interior. On the way to Linderhof. Don't skip." },
      { icon: "🏰", name: "Linderhof Palace", distance: "~60 min from Hopfen", description: "Ludwig II's personal retreat, inspired by Versailles. Opulent interiors, beautiful gardens. Far less crowded than Neuschwanstein. UNESCO-listed 2025." },
      { icon: "🎨", name: "Oberammergau", distance: "Between Wieskirche & Linderhof", description: "Charming village with painted houses (Lüftlmalerei) and woodcarving workshops. Great lunch stop." },
    ],
    weatherCity: "Hopfen am See",
    weatherLat: 47.575,
    weatherLon: 10.6833,
  },
  {
    day: 5,
    date: "April 18",
    isoDate: "2026-04-18",
    weekday: "Saturday",
    route: "Hopfen am See (base day)",
    drive: "No driving — rest day",
    hotel: "Seehotel Hartung (2nd night)",
    hotelAddress: "Uferstraße 31, Hopfen am See",
    hotelPrice: "Included in 2-night booking",
    highlight: "🏰 Neuschwanstein day!",
    heroImage: {
      url: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Schloss_Neuschwanstein_2013.jpg",
      caption: "Neuschwanstein Castle — Ludwig II's fairy-tale palace in the Bavarian Alps",
    },
    attractions: [
      { name: "Neuschwanstein Castle (must book!)", mapsUrl: "https://maps.google.com/?q=Schloss+Neuschwanstein" },
      { name: "Hohenschwangau Castle", mapsUrl: "https://maps.google.com/?q=Schloss+Hohenschwangau" },
      { name: "Alpsee lake walk", mapsUrl: "https://maps.google.com/?q=Alpsee+Schwangau" },
      { name: "Marienbrücke bridge viewpoint", mapsUrl: "https://maps.google.com/?q=Marienbrücke+Schwangau" },
    ],
    restaurants: [
      { name: "Seaside", description: "Lakeside dining", mapsUrl: "https://maps.google.com/?q=Seaside+Restaurant+Hopfen+am+See" },
      { name: "Maucher's", description: "Local favourite", mapsUrl: "https://maps.google.com/?q=Maucher's+Hopfen+am+See" },
      { name: "Seehaus", description: "Sunset drinks on the terrace", mapsUrl: "https://maps.google.com/?q=Seehaus+Hopfen+am+See" },
    ],
    bars: [
      { name: "Schrannen Bar", vibe: "Evening wind-down in Füssen", mapsUrl: "https://maps.google.com/?q=Schrannen+Bar+Füssen" },
      { name: "Bayrish", vibe: "Traditional Bavarian atmosphere", mapsUrl: "https://maps.google.com/?q=Bayrish+Füssen" },
    ],
    notes: "Neuschwanstein is ~20 min drive from hotel. Go early — it gets very crowded. Book tickets online!",
    gems: [
      { icon: "🏰", name: "Hohes Schloss Füssen", distance: "Füssen centre", description: "Medieval castle in the town centre with Bavarian paintings & weapons room. Often overlooked next to Neuschwanstein." },
      { icon: "🏊", name: "Alatsee / Weißensee", distance: "Near Hopfen", description: "Quieter alpine lakes near your hotel — worth an early morning or evening walk if Neuschwanstein is done by afternoon." },
    ],
    weatherCity: "Hopfen am See",
    weatherLat: 47.575,
    weatherLon: 10.6833,
  },
  {
    day: 6,
    date: "April 19",
    isoDate: "2026-04-19",
    weekday: "Sunday",
    route: "Hopfen am See → Zwevegem",
    drive: "~800 km · ~8h · Long return",
    hotel: "Home 🏠",
    hotelAddress: "Zwevegem, Belgium",
    hotelPrice: "—",
    highlight: "Head home — fill up smart on the way back",
    heroImage: {
      url: "",
      caption: "",
    },
    attractions: [
      { name: "Possible stop in Stuttgart or Karlsruhe if needed", mapsUrl: "https://maps.google.com/?q=Stuttgart+Germany" },
    ],
    restaurants: [],
    bars: [],
    notes: "Very long driving day. Start early! Consider an overnight stop if tired.",
    gems: [],
    weatherCity: "Zwevegem",
    weatherLat: 50.8066,
    weatherLon: 3.3297,
  },
]

export const budget = {
  hotels: [
    { name: "B&B HOTEL Würzburg", dates: "14–15 Apr, 1 night", pp: "€48.50", total: "€97.00", status: "Confirmed" },
    { name: "Cafe-Hotel Altreuter", dates: "15–16 Apr, 1 night", pp: "€54.50", total: "€109.00", status: "Confirmed" },
    { name: "Arthotel ANA Augsburg", dates: "16–17 Apr, 1 night", pp: "€45.45", total: "€90.90", status: "Confirmed" },
    { name: "Seehotel Hartung", dates: "17–19 Apr, 2 nights", pp: "€145.66", total: "€291.32", status: "Confirmed" },
  ],
  fuel: [
    { leg: "Zwevegem → Würzburg", details: "520 km · 26 L", pp: "€28.85", total: "€57.70", note: "Fill in Belgium" },
    { leg: "Würzburg → Nördlingen", details: "135 km · 6.75 L", pp: "€7.50", total: "€15.00", note: "—" },
    { leg: "Nördlingen → Augsburg", details: "74 km · 3.7 L", pp: "€4.10", total: "€8.20", note: "—" },
    { leg: "Augsburg → Hopfen am See", details: "105 km · 5.25 L", pp: "€5.83", total: "€11.65", note: "—" },
    { leg: "Return to Zwevegem", details: "~800 km · 40 L", pp: "€44.40", total: "€88.80", note: "Refuel smart" },
  ],
  attractions: [
    { name: "Würzburg Residenz", day: "Day 1", pp: "€9.00", total: "€18.00", note: "UNESCO palace" },
    { name: "Daniel tower Nördlingen", day: "Day 2", pp: "€3.00", total: "€6.00", note: "Best panorama" },
    { name: "Rieskrater Museum", day: "Day 2", pp: "€5.50", total: "€11.00", note: "Meteorite crater" },
    { name: "Fuggerei Augsburg", day: "Day 3", pp: "€8.00", total: "€16.00", note: "World's oldest social housing" },
    { name: "Neuschwanstein Castle", day: "Day 5", pp: "€15.00", total: "€30.00", note: "Book online!" },
    { name: "Hohenschwangau", day: "Day 5", pp: "€15.00", total: "€30.00", note: "Optional" },
    { name: "Linderhof Palace", day: "Day 4", pp: "€10.00", total: "€20.00", note: "UNESCO 2026, less crowds" },
    { name: "Wieskirche", day: "Day 4", pp: "€0.00", total: "€0.00", note: "Free entry" },
    { name: "Rothenburg walk", day: "Day 2 detour", pp: "€0.00", total: "€0.00", note: "Free to explore" },
  ],
  totals: {
    hotels: { pp: "€294.11", total: "€588.22" },
    fuel: { pp: "€90.68", total: "€181.35" },
    attractions: { pp: "€65.50", total: "€131.00" },
    food: { pp: "€137.00", total: "€274.00" },
    grand: { pp: "€587.29", total: "€1,174.57" },
  }
}
