(function(){
'use strict';

/* ════════════════════════════════════════════════════════════
   MODULE: DEFAULT DATA
   ════════════════════════════════════════════════════════════ */
function dayOffset(n){const d=new Date();d.setDate(d.getDate()+n);return d.toISOString().slice(0,10)}

const DEF = {
  password: 'bennard2024',
  events: [
    // 🎤 Karaoke
    {id:'e1',name:'Karaoke',time:'20:00',desc:'Jeden ersten Freitag im Monat — schnapp dir ein Mikro und leg los! Talent optional, Spaß garantiert.',cat:'🎤 Karaoke',price:'Kostenlos',type:'recurring',enabled:true,recurrence:{frequency:'monthly',weekOfMonth:1,weekday:5,endDate:null}},
    {id:'e2',name:'Karaoke Abend',date:dayOffset(-14),time:'20:00',desc:'Ein unvergesslicher Karaoke-Abend mit tollen Gästen und bester Stimmung.',cat:'🎤 Karaoke',price:'Kostenlos',type:'one-time'},
    {id:'e3',name:'Karaoke Special',date:dayOffset(0),time:'21:00',desc:'Heute Abend wird gesungen! Alle Genres willkommen — kommt vorbei und macht mit.',cat:'🎤 Karaoke',price:'Kostenlos',type:'one-time'},
    {id:'e4',name:'Karaoke Nacht',date:dayOffset(18),time:'20:30',desc:'Sing dich durch die Nacht — der nächste große Karaoke-Abend steht an!',cat:'🎤 Karaoke',price:'Kostenlos',type:'one-time'},
    // 🎯 Bingo
    {id:'e5',name:'Bennard Bingo',date:dayOffset(-7),time:'19:30',desc:'Zahlen, Spannung, Jubel — unser beliebter Bingo-Abend mit tollen Preisen.',cat:'🎯 Bingo',price:'2 € / Karte',type:'one-time'},
    {id:'e6',name:'Bingo Spezial',date:dayOffset(0),time:'18:00',desc:'Heute: Sonderrunde mit verdoppelten Gewinnen — Karten an der Theke erhältlich!',cat:'🎯 Bingo',price:'2 € / Karte',type:'one-time'},
    {id:'e7',name:'Bingo Night',date:dayOffset(12),time:'19:30',desc:'Die nächste Bingo-Runde steht an — Karten sichern und Glück haben!',cat:'🎯 Bingo',price:'2 € / Karte',type:'one-time'},
    // 🎉 Party
    {id:'e8',name:'Kostümparty',date:dayOffset(-20),time:'21:00',desc:'Die verrückteste Party des Jahres mit Kostüm-Prämierung um Mitternacht.',cat:'🎉 Party',price:'Kostenlos',type:'one-time'},
    {id:'e9',name:'Frühlingsparty',date:dayOffset(0),time:'20:00',desc:'Heute: Frühling willkommen heißen mit Getränke-Special den ganzen Abend!',cat:'🎉 Party',price:'Kostenlos',type:'one-time'},
    {id:'e10',name:'Sommer Opening',date:dayOffset(35),time:'21:00',desc:'Die erste große Sommerparty — kommt zahlreich und feiert mit uns!',cat:'🎉 Party',price:'Kostenlos',type:'one-time'},
    // 🎶 Musik
    {id:'e11',name:'Live Band Abend',date:dayOffset(-10),time:'20:00',desc:'Lokale Band mit großartigem Sound — war ein unvergesslicher Abend.',cat:'🎶 Musik',price:'5 € Eintritt',type:'one-time'},
    {id:'e12',name:'Akustik Session',date:dayOffset(0),time:'19:00',desc:'Heute: intime Akustik-Konzerte verschiedener Künstler — kommt früh!',cat:'🎶 Musik',price:'Kostenlos',type:'one-time'},
    {id:'e13',name:'Rock Night',date:dayOffset(22),time:'21:00',desc:'Drei Bands, ein Abend — Rock pur im Blixxem Bennard. Eintritt an der Tür.',cat:'🎶 Musik',price:'5 € Eintritt',type:'one-time'},
    // 🏆 Turnier
    {id:'e14',name:'Dart Turnier',date:dayOffset(-5),time:'18:00',desc:'Spannendes Dart-Turnier mit Pokal und Freigetränken für den Sieger.',cat:'🏆 Turnier',price:'3 € Startgebühr',type:'one-time'},
    {id:'e15',name:'Billard Cup',date:dayOffset(0),time:'17:00',desc:'Heute: der monatliche Billard-Cup. Anmeldung bis 16:30 Uhr an der Theke.',cat:'🏆 Turnier',price:'3 € Startgebühr',type:'one-time'},
    {id:'e16',name:'Kicker Meisterschaft',date:dayOffset(28),time:'18:30',desc:'2-gegen-2 Kicker-Turnier mit Wanderpokal — Teams jetzt anmelden!',cat:'🏆 Turnier',price:'2 € pro Person',type:'one-time'},
    // 🎭 Sonstige
    {id:'e17',name:'Stammtisch Special',date:dayOffset(-3),time:'19:00',desc:'Unser monatlicher Stammtisch-Abend mit Überraschungsgästen und guter Laune.',cat:'🎭 Sonstige',price:'Kostenlos',type:'one-time'},
    {id:'e18',name:'Spieleabend',date:dayOffset(0),time:'18:00',desc:'Heute: Brett- und Kartenspiele für alle — kommt vorbei und spielt mit!',cat:'🎭 Sonstige',price:'Kostenlos',type:'one-time'},
    {id:'e19',name:'Open Mic Night',date:dayOffset(40),time:'20:00',desc:'Comedians, Poeten, Musiker — zeig was du kannst auf unserer kleinen Bühne!',cat:'🎭 Sonstige',price:'Kostenlos',type:'one-time'},
    // 🧠 Kneipenquiz
    {id:'e20',name:'Quiz Night',date:dayOffset(-11),time:'19:00',desc:'Pub-Quiz mit 5 Runden, tollen Preisen und jeder Menge Spaß — war ein voller Erfolg!',cat:'🧠 Kneipenquiz',price:'Kostenlos',type:'one-time'},
    {id:'e21',name:'Kneipenquiz',date:dayOffset(0),time:'19:30',desc:'Heute: Wer weiß am meisten? Quizfragen aus allen Themenbereichen — Teams willkommen!',cat:'🧠 Kneipenquiz',price:'Kostenlos',type:'one-time'},
    {id:'e22',name:'Quiz Meisterschaft',date:dayOffset(16),time:'19:30',desc:'Das große Saisonfinale — wer holt sich den Titel Quizchampion 2026?',cat:'🧠 Kneipenquiz',price:'Kostenlos',type:'one-time'}
  ],
  hours:[
    {day:'Montag',open:false,from:'',to:''},
    {day:'Dienstag',open:false,from:'',to:''},
    {day:'Mittwoch',open:true,from:'18:00',to:'01:00'},
    {day:'Donnerstag',open:true,from:'18:00',to:'01:00'},
    {day:'Freitag',open:true,from:'18:00',to:'03:00'},
    {day:'Samstag',open:true,from:'16:00',to:'03:00'},
    {day:'Sonntag',open:true,from:'15:00',to:'00:00'}
  ],
  texts:{hero1:'Blixxem',hero2:'Bennard',heroTag:'Karaoke · Bingo · Live-Musik · Einfach gute Abende.',aboutH:'Hier fühlt sich jeder wie zuhause.',aboutP1:'Der Blixxem Bennard ist die gute Seele von Bad Bentheim.',aboutP2:'Mädelsabend, Stammtische, Firmenevents oder einfach gesellig trinken mit Freunden. — bei uns immer in guter Gesellschaft.',addr:'Am Bismarckplatz 4, Bad Bentheim, Germany',wa:'',email:'info@blixxem-bennard.de'},
  sections:{about:true,events:true,hours:true,reservation:true,social:true,contact:true},
  popupEnabled: true,
  promo: { enabled: false, text: 'Tickets kaufen', url: 'https://www.eventim.de' }
};

/* ════════════════════════════════════════════════════════════
   MODULE: SUPABASE
   ════════════════════════════════════════════════════════════ */
const SUPA_URL = 'https://ntnrsinahgcjqfdjdagn.supabase.co';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50bnJzaW5haGdjanFmZGpkYWduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyMTMzMzIsImV4cCI6MjA4OTc4OTMzMn0.f6HQP3eBtafguQL4J2eQVVuwNIO8KXgWr7ac_2pPcWY';

// Safe init — falls back to a no-op mock if the CDN script didn't load
const _supaAvailable = typeof supabase !== 'undefined' && typeof supabase.createClient === 'function';
const _supa = _supaAvailable
  ? supabase.createClient(SUPA_URL, SUPA_KEY)
  : { from: () => ({ select: () => Promise.resolve({ data: [], error: null }),
                      upsert: () => Promise.resolve({ error: null }),
                      delete: () => ({ eq: () => Promise.resolve({ error: null }) }) }) };

/* ════════════════════════════════════════════════════════════
   MODULE: INDEXEDDB — für Bilddaten (kein Größenlimit)
   ════════════════════════════════════════════════════════════ */
// Diese Keys enthalten Base64-Bilddaten → IndexedDB statt localStorage
const _IMG_KEYS = new Set(['galleryImages','igImages','storyKneipe','storyParty','aboutImage']);

// Supabase-Präfixe für einzelne Bild-Rows (jedes Bild = eigene Zeile → kein Größenlimit)
const _SUPA_IMG_PREFIX = {
  galleryImages: 'bb_gal',
  igImages:      'bb_ig',
  storyKneipe:   'bb_sk',
  storyParty:    'bb_sp'
};

// Bild (dataUrl) zu Supabase Storage hochladen → gibt öffentliche CDN-URL zurück
async function _supaStorageUpload(dataUrl, fname) {
  try {
    const res  = await fetch(dataUrl);
    const blob = await res.blob();
    const { error } = await _supa.storage.from('photos').upload(fname, blob, {
      contentType: 'image/jpeg', upsert: true, cacheControl: '31536000'
    });
    if (error) { console.warn('[Storage] Upload:', error.message); return null; }
    const base = _supa.storage.from('photos').getPublicUrl(fname).data.publicUrl;
    return `${base}?v=${Date.now()}`; // Cache-Busting: neue URL bei jedem Upload
  } catch(e) { console.warn('[Storage] Fehler:', e); return null; }
}

// Bilder zu Supabase speichern:
//   → versucht Storage-Upload (CDN-URLs, winzig) — falls nicht verfügbar: altes bb_*-Format
async function _supaImgSet(key, value) {
  if (!_supaAvailable) return;

  if (key === 'aboutImage') {
    // Direkt in Settings speichern (base64 oder URL) — kein Storage-Upload, kein Hänger
    await _supa.from('settings').upsert({ key: 'aboutImage', value, updated_at: new Date().toISOString() });
    _supa.from('settings').delete().eq('key', 'bb_about').catch(() => {});
    return;
  }

  const prefix = _SUPA_IMG_PREFIX[key];
  if (!prefix) return;
  const arr = Array.isArray(value) ? value : [];

  // Jedes base64-Bild zu Storage hochladen und URL ersetzen
  const supaArr = [];
  let anyUploaded = false;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (typeof item?.url === 'string' && item.url.startsWith('data:')) {
      const url = await _supaStorageUpload(item.url, `${prefix}_${i}.jpg`);
      if (url) { supaArr.push({ ...item, url }); anyUploaded = true; continue; }
    }
    supaArr.push(item); // bereits URL oder Upload fehlgeschlagen
  }

  const hasStorageUrls = supaArr.some(it => typeof it?.url === 'string' && it.url.startsWith('http'));
  if (hasStorageUrls) {
    // Kompakte Speicherung als einzelner Settings-Eintrag (nur URLs, ~10KB statt ~30MB)
    await _supa.from('settings').upsert({ key, value: supaArr, updated_at: new Date().toISOString() });
    // Alte bb_*-Einzelzeilen aufräumen
    if (anyUploaded) {
      _supa.from('settings').delete().eq('key', `${prefix}_cnt`);
      for (let i = 0; i < arr.length; i++)
        _supa.from('settings').delete().eq('key', `${prefix}_${i}`);
    }
  } else {
    // Fallback: altes bb_*-Split-Format (Storage nicht verfügbar)
    _supa.from('settings').upsert({ key: `${prefix}_cnt`, value: arr.length, updated_at: new Date().toISOString() });
    arr.forEach((item, i) => {
      _supa.from('settings').upsert({ key: `${prefix}_${i}`, value: item, updated_at: new Date().toISOString() });
    });
  }
}

// Alle Bilder aus Supabase laden
// Bild-Arrays aus den bereits in _store geladenen bb_*-Rows zusammenbauen
// (kein extra API-Aufruf nötig — _loadFromSupabase hat alle Rows schon geladen)
function _supaImgAssemble() {
  // Nur übernehmen wenn noch keine Storage-URL vorhanden (Storage-URLs haben Vorrang)
  const _isStorageUrl = v => typeof v === 'string' && v.startsWith('http');
  const _hasStorageUrls = v => Array.isArray(v) && v.some(it => _isStorageUrl(it?.url));

  if (_store['bb_about'] !== undefined && !_isStorageUrl(_store['aboutImage'])) {
    _store['aboutImage'] = _store['bb_about'];
    // kein IDB-Cache — Supabase-Daten werden direkt aus Supabase geladen, nicht aus IDB
  }
  for (const [imgKey, prefix] of Object.entries(_SUPA_IMG_PREFIX)) {
    if (_hasStorageUrls(_store[imgKey])) continue; // Storage-URLs haben Vorrang
    const cnt = _store[`${prefix}_cnt`];
    if (cnt == null || cnt === 0) continue;
    const arr = [];
    for (let i = 0; i < cnt; i++) {
      const item = _store[`${prefix}_${i}`];
      if (item != null) arr.push(item);
    }
    if (arr.length > 0) {
      _store[imgKey] = arr;
      // kein IDB-Cache — kein veralteter Stand möglich
    }
  }
}

// IDB → Supabase synchronisieren (einmalig beim Start, im Hintergrund)
async function _syncIDBToSupa() {
  if (!_supaAvailable) return;
  for (const key of _IMG_KEYS) {
    const val = _store[key];
    if (!val) continue;
    if (Array.isArray(val) && val.length === 0) continue;
    await _supaImgSet(key, val);
  }
}

const IDB = {
  _db: null,
  _open() {
    if (this._db) return Promise.resolve(this._db);
    return new Promise((resolve, reject) => {
      const req = indexedDB.open('bb_v1', 1);
      req.onupgradeneeded = e => e.target.result.createObjectStore('kv', { keyPath: 'k' });
      req.onsuccess  = e => { this._db = e.target.result; resolve(this._db); };
      req.onerror    = () => reject(req.error);
    });
  },
  async set(k, v) {
    try {
      const db = await this._open();
      await new Promise((res, rej) => {
        const tx = db.transaction('kv', 'readwrite');
        tx.objectStore('kv').put({ k, v });
        tx.oncomplete = res;
        tx.onerror    = () => rej(tx.error);
      });
    } catch(e) { console.warn('[IDB] set fehlgeschlagen:', e); }
  },
  async del(k) {
    try {
      const db = await this._open();
      await new Promise(res => {
        const tx = db.transaction('kv', 'readwrite');
        tx.objectStore('kv').delete(k);
        tx.oncomplete = res; tx.onerror = res;
      });
    } catch(e) {}
  },
  async getAll() {
    try {
      const db = await this._open();
      return new Promise(resolve => {
        const req = db.transaction('kv', 'readonly').objectStore('kv').getAll();
        req.onsuccess = () => resolve(req.result || []);
        req.onerror   = () => resolve([]);
      });
    } catch(e) { return []; }
  }
};

async function _loadFromIDB() {
  const rows = await IDB.getAll();
  rows.forEach(({ k, v }) => { _store[k] = v; });
}

// Phase 1: alle kleinen Rows laden (Texte + migrierte Bild-URLs, schnell < 10KB)
async function _loadTextFromSupabase() {
  if (!_supaAvailable) return;
  try {
    const { data, error } = await _supa.from('settings').select('*').not('key', 'like', 'bb_%');
    if (error) { console.warn('[Supabase] Text-Laden fehlgeschlagen:', error.message); return; }
    if (data) data.forEach(row => {
      if (_IMG_KEYS.has(row.key)) {
        const v = row.value;
        if (row.key === 'aboutImage') {
          // aboutImage: immer laden (URL oder base64 — einzelnes Bild, kein Problem)
          _store['aboutImage'] = v;
          return;
        }
        // Andere Bild-Keys: nur Storage-URLs (base64 wäre zu groß für Text-Request)
        const isStorageUrlArr = Array.isArray(v) && v.some(it => typeof it?.url === 'string' && it.url.startsWith('http'));
        const isStorageUrl    = typeof v === 'string' && v.startsWith('http');
        if (!isStorageUrlArr && !isStorageUrl) return;
        _store[row.key] = v;
        return;
      }
      _store[row.key] = row.value;
      try { localStorage.setItem('bb_s_' + row.key, JSON.stringify(row.value)); } catch(e) {}
    });
  } catch(e) { console.warn('[Supabase] Verbindungsfehler:', e); }
}

// Phase 2: nur Bild-Rows laden (groß, im Hintergrund)
async function _loadImagesFromSupabase() {
  if (!_supaAvailable) return;
  try {
    const { data, error } = await _supa.from('settings').select('*').like('key', 'bb%');
    if (error) { console.warn('[Supabase] Bild-Laden fehlgeschlagen:', error.message); return; }
    if (data) data.forEach(row => { _store[row.key] = row.value; });
    _supaImgAssemble();
  } catch(e) { console.warn('[Supabase] Bild-Verbindungsfehler:', e); }
}

function _loadFromLocalStorage() {
  const prefix = 'bb_s_';
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(prefix)) {
        const settingKey = k.slice(prefix.length);
        try { _store[settingKey] = JSON.parse(localStorage.getItem(k)); } catch(e) {}
      }
    }
  } catch(e) { console.warn('[Storage] localStorage lesen fehlgeschlagen:', e); }
}

/* ════════════════════════════════════════════════════════════
   MODULE: STORAGE
   ════════════════════════════════════════════════════════════ */
const _store = {};
let _supaImgLoading = false; // true = erste Seite, Bilder kommen noch von Supabase
const S = {
  get(k) { return k in _store ? _store[k] : DEF[k]; },
  set(k, v) {
    _store[k] = v;
    if (_IMG_KEYS.has(k)) {
      // Bilddaten → IndexedDB (lokal) + Supabase (einzelne Rows, für alle Besucher)
      IDB.set(k, v);
      _supaImgSet(k, v);
    } else {
      // Kleine Daten → localStorage (synchron, schnell) + Supabase
      try { localStorage.setItem('bb_s_' + k, JSON.stringify(v)); } catch(e) {
        console.warn('[Storage] localStorage voll:', e);
      }
      if (!_supaAvailable) return;
      _supa.from('settings').upsert({ key: k, value: v, updated_at: new Date().toISOString() })
        .then(({ error }) => { if (error) console.warn('[Supabase] Speichern fehlgeschlagen:', error.message); });
    }
  },
  del(k) {
    delete _store[k];
    if (_IMG_KEYS.has(k)) {
      IDB.del(k);
    } else {
      try { localStorage.removeItem('bb_s_' + k); } catch(e) {}
    }
    if (!_supaAvailable || _IMG_KEYS.has(k)) return;
    _supa.from('settings').delete().eq('key', k)
      .then(({ error }) => { if (error) console.warn('[Supabase] Löschen fehlgeschlagen:', error.message); });
  }
};

/* ════════════════════════════════════════════════════════════
   MODULE: IMAGES — Supabase Storage + Default Fallback
   ════════════════════════════════════════════════════════════ */
const DEFAULT_ABOUT_IMAGE = 'images/embedded-01.jpg';
const DEFAULT_IG_IMAGES = [
  {url:'images/embedded-02.jpg',label:'Karaoke Night',path:null},
  {url:'images/embedded-03.jpg',label:'Spieleabend \u0026 Bier',path:null},
  {url:'images/embedded-04.jpg',label:'Karnevals-Party',path:null},
  {url:'images/embedded-05.jpg',label:'Bingo-Abend',path:null},
  {url:'images/embedded-06.jpg',label:'Cocktails \u0026 Drinks',path:null},
  {url:'images/embedded-07.jpg',label:'Au\u00dfenbereich',path:null}
];
const DEFAULT_GALLERY_IMAGES = [
  {url:'images/embedded-08.jpg',label:'Blixxem Bennard',path:null},
  {url:'images/embedded-09.jpg',label:'Unser Gastbereich',path:null},
  {url:'images/embedded-10.jpg',label:'Lounge',path:null},
  {url:'images/embedded-11.jpg',label:'Biergarten',path:null},
  {url:'images/embedded-12.jpg',label:'Au\u00dfenbereich',path:null},
  {url:'images/embedded-13.jpg',label:'Cocktails',path:null},
  {url:'images/embedded-14.jpg',label:'Nachos \u0026 Snacks',path:null},
  {url:'images/embedded-15.jpg',label:'Karaoke Night',path:null},
  {url:'images/embedded-16.jpg',label:'Prost!',path:null},
  {url:'images/embedded-17.jpg',label:'Blixxem Bennard',path:null},
  {url:'images/embedded-18.jpg',label:'Unser Gastbereich',path:null},
  {url:'images/embedded-19.jpg',label:'Lounge',path:null},
  {url:'images/embedded-20.jpg',label:'Biergarten',path:null},
  {url:'images/embedded-21.jpg',label:'Au\u00dfenbereich',path:null},
  {url:'images/embedded-22.jpg',label:'Blixxem Bennard',path:null},
  {url:'images/embedded-23.jpg',label:'Unser Gastbereich',path:null},
  {url:'images/embedded-24.jpg',label:'Cocktails \u0026 Drinks',path:null},
  {url:'images/embedded-25.jpg',label:'Biergarten',path:null},
  {url:'images/embedded-26.jpg',label:'Auf uns!',path:null},
  {url:'images/embedded-27.jpg',label:'Nachos \u0026 Snacks',path:null},
  {url:'images/embedded-28.jpg',label:'Lounge Bereich',path:null},
  {url:'images/embedded-29.jpg',label:'Spieleabend',path:null},
  {url:'images/embedded-30.jpg',label:'Au\u00dfenbereich',path:null},
  {url:'images/embedded-31.jpg',label:'Voller Laden',path:null},
  {url:'images/embedded-32.jpg',label:'Karaoke Night',path:null},
  {url:'images/embedded-33.jpg',label:'Zwei Runde, bitte!',path:null},
  {url:'images/embedded-34.jpg',label:'Bingo-Abend',path:null},
  {url:'images/embedded-35.jpg',label:'Party-Stimmung',path:null},
  {url:'images/embedded-36.jpg',label:'Saisonale Dekoration',path:null},
  {url:'images/embedded-37.jpg',label:'WC \u2014 f\u00fcr Kunstliebhaber',path:null},
  {url:'images/embedded-38.jpg',label:'Prost, dat Leven is kort.',path:null},
  {url:'images/embedded-39.jpg',label:'Unsere Partner',path:null}
];

/* Komprimiert ein Bild auf max. maxDim px (längste Seite), JPEG quality q */
function _compress(dataUrl, maxDim, q) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      let w = img.width, h = img.height;
      if (w > maxDim || h > maxDim) {
        if (w >= h) { h = Math.round(h * maxDim / w); w = maxDim; }
        else        { w = Math.round(w * maxDim / h); h = maxDim; }
      }
      const c = document.createElement('canvas');
      c.width = w; c.height = h;
      c.getContext('2d').drawImage(img, 0, 0, w, h);
      resolve(c.toDataURL('image/jpeg', q || 0.82));
    };
    img.onerror = () => resolve(dataUrl); // Fallback: unkomprimiert
    img.src = dataUrl;
  });
}

const IMAGES = {
  _key(tgt) { return tgt === 'ig' ? 'igImages' : 'galleryImages'; },
  _def(tgt) { return tgt === 'ig' ? DEFAULT_IG_IMAGES : DEFAULT_GALLERY_IMAGES; },

  async upload(files, tgt, onDone) {
    const key = this._key(tgt), def = this._def(tgt);
    const imgs = [...(S.get(key) || def)];
    const readFile = (file) => new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload  = (e) => resolve(e.target.result);
      reader.onerror = ()  => resolve(null);
      reader.readAsDataURL(file);
    });
    for (const file of files) {
      const raw = await readFile(file);
      if (!raw) continue;
      const dataUrl = await _compress(raw, 1200, 0.82);
      const label = file.name.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
      imgs.push({ url: dataUrl, label, path: null });
    }
    S.set(key, imgs);
    if (onDone) onDone(imgs);
  },

  async deleteFrom(index, tgt, onDone) {
    const key = this._key(tgt), def = this._def(tgt);
    const imgs = [...(S.get(key) || def)];
    const img = imgs[index];
    if (img && img.path) { await _supa.storage.from('images').remove([img.path]); }
    imgs.splice(index, 1);
    S.set(key, imgs);
    if (onDone) onDone(imgs);
  },

  updateLabelIn(index, label, tgt) {
    const key = this._key(tgt), def = this._def(tgt);
    const imgs = [...(S.get(key) || def)];
    if (imgs[index]) { imgs[index] = {...imgs[index], label}; S.set(key, imgs); }
  },

  reorder(tgt, from, to) {
    const key = this._key(tgt), def = this._def(tgt);
    const imgs = [...(S.get(key) || def)];
    const [moved] = imgs.splice(from, 1);
    imgs.splice(to, 0, moved);
    S.set(key, imgs);
  }
};

/* ════════════════════════════════════════════════════════════
   MODULE: STORY DEFAULTS
   ════════════════════════════════════════════════════════════ */
const DEFAULT_STORY_KNEIPE = [
  { url: null, quote: '„Du kommst nur auf ein Bier…"',   sub: 'Klar. Einfach kurz vorbeischauen.' },
  { url: null, quote: '„…noch eine Runde?"',              sub: 'Die Musik ist zu gut. Die Stimmung noch besser.' },
  { url: null, quote: '„…und bleibst bis zum Schluss."', sub: 'So ist das eben beim Blixxem Bennard.' }
];
const DEFAULT_STORY_PARTY = [
  { url: null, quote: '„Ich geh nur kurz raus…"',         sub: 'Klar. 😄' },
  { url: null, quote: '„…noch ein letztes Lied!"',        sub: 'Die Nacht ist jung.' },
  { url: null, quote: '„…Wann haben die eigentlich zu?"', sub: 'Gute Frage. Egal.' }
];

/* ════════════════════════════════════════════════════════════
   MODULE: RECURRENCE ENGINE
   Computes actual dates from recurring event rules.
   Rules are stored once; dates are generated on demand.
   ════════════════════════════════════════════════════════════ */
const REC = {
  /**
   * Get all occurrence dates for a recurring event within a month.
   * @param {Object} ev  - The recurring event object
   * @param {number} yr  - Year
   * @param {number} mo  - Month (0-based)
   * @returns {string[]} Array of YYYY-MM-DD strings
   */
  getMonthOccurrences(ev, yr, mo) {
    if (!ev.enabled) return [];
    const r   = ev.recurrence;
    const end = r.endDate ? new Date(r.endDate + 'T23:59:59') : null;
    const results = [];

    if (r.frequency === 'weekly') {
      // Find all days in month matching the weekday
      const dim = new Date(yr, mo+1, 0).getDate();
      for (let d=1; d<=dim; d++) {
        const dt = new Date(yr, mo, d);
        if (dt.getDay() === parseInt(r.weekday)) {
          if (!end || dt <= end) results.push(this._fmt(yr, mo, d));
        }
      }
    } else if (r.frequency === 'monthly') {
      const date = this._nthWeekdayOfMonth(yr, mo, parseInt(r.weekOfMonth), parseInt(r.weekday));
      if (date && (!end || date <= end)) results.push(this._fmt(yr, mo, date.getDate()));
    } else if (r.frequency === 'custom') {
      // Days interval from start date
      const start  = new Date(r.startDate + 'T12:00:00');
      const days   = parseInt(r.intervalDays) || 7;
      const first  = new Date(yr, mo, 1);
      const last   = new Date(yr, mo+1, 0);
      let cur = new Date(start);
      // Advance to first occurrence >= first of month
      if (cur < first) {
        const diff = Math.ceil((first - cur) / 86400000);
        const steps = Math.ceil(diff / days);
        cur.setDate(cur.getDate() + steps * days);
      }
      while (cur <= last) {
        if (!end || cur <= end) results.push(this._fmt(cur.getFullYear(), cur.getMonth(), cur.getDate()));
        cur.setDate(cur.getDate() + days);
      }
    }
    return results;
  },

  /** Get upcoming occurrences (next 60 days) for event list view */
  getUpcomingOccurrences(ev, count=3) {
    if (!ev.enabled) return [];
    const r   = ev.recurrence;
    const end = r.endDate ? new Date(r.endDate + 'T23:59:59') : null;
    const results = [];
    const today = new Date(); today.setHours(0,0,0,0);
    const limit = new Date(); limit.setDate(limit.getDate()+90);

    // Iterate month by month
    let cur = new Date(today.getFullYear(), today.getMonth(), 1);
    while (cur <= limit && results.length < count) {
      const mo = cur.getMonth(), yr = cur.getFullYear();
      const occ = this.getMonthOccurrences(ev, yr, mo);
      for (const d of occ) {
        const dt = new Date(d + 'T12:00:00');
        if (dt >= today && results.length < count) results.push(d);
      }
      cur.setMonth(cur.getMonth()+1);
    }
    return results;
  },

  /**
   * Find nth weekday of a month. weekOfMonth=-1 means last.
   * weekday: 0=Sunday … 6=Saturday
   */
  _nthWeekdayOfMonth(yr, mo, weekOfMonth, weekday) {
    if (weekOfMonth === -1) {
      // Last occurrence
      const last = new Date(yr, mo+1, 0);
      const diff = (last.getDay() - weekday + 7) % 7;
      last.setDate(last.getDate() - diff);
      return last.getMonth() === mo ? last : null;
    }
    // Find first occurrence of weekday in month
    const first = new Date(yr, mo, 1);
    const diff  = (weekday - first.getDay() + 7) % 7;
    const date  = new Date(yr, mo, 1 + diff + (weekOfMonth-1)*7);
    return date.getMonth() === mo ? date : null;
  },

  _fmt(yr, mo, d) {
    return `${yr}-${String(mo+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
  },

  /** Get past occurrences (last N, looking back 90 days) */
  _getPastOccurrences(ev, count=3) {
    if (!ev.enabled) return [];
    const results = [];
    const today = new Date(); today.setHours(0,0,0,0);
    const limit = new Date(); limit.setDate(limit.getDate()-90);
    let cur = new Date(today.getFullYear(), today.getMonth(), 1);
    const endDate = new Date(limit.getFullYear(), limit.getMonth(), 1);
    while (cur >= endDate && results.length < count*3) {
      const yr = cur.getFullYear(), mo = cur.getMonth();
      const occ = this.getMonthOccurrences(ev, yr, mo);
      for (const d of occ.reverse()) {
        const dt = new Date(d+'T12:00:00');
        if (dt < today) results.push(d);
      }
      cur.setMonth(cur.getMonth()-1);
    }
    return results.slice(0, count);
  }
};

/* ════════════════════════════════════════════════════════════
   MODULE: HELPERS
   ════════════════════════════════════════════════════════════ */
function $(id){return document.getElementById(id)}
function esc(s){return s?String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'):''}
function fmtDate(s){try{return new Date(s+'T12:00:00').toLocaleDateString('de-DE',{day:'2-digit',month:'2-digit',year:'numeric'})}catch{return s}}
function fmtDateLong(s){try{return new Date(s+'T12:00:00').toLocaleDateString('de-DE',{weekday:'long',day:'2-digit',month:'long',year:'numeric'})}catch{return s||'[Datum]'}}
function setText(id,html){const el=$(id);if(el)el.innerHTML=html||''}
function toast(msg){const t=$('toast');if(!t)return;t.textContent='✓ '+msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000)}

/* ════════════════════════════════════════════════════════════
   MODULE: SLOGAN ROTATOR
   ════════════════════════════════════════════════════════════ */
const SLOGAN = {
  texts: [
    'Hier kennt man sich.',
    'Hier lacht man laut.',
    'Hier bleibt man länger als geplant.',
    'Dein Feierabend beginnt hier.',
    'Mehr als nur eine Kneipe.',
    'Bad Bentheims gemütlichste Adresse.'
  ],
  idx:     0,
  timer:   null,
  DELAY:   4800,  // ms between rotations
  PAUSED:  false,

  init() {
    const wrap = $('sloganWrap');
    if (!wrap) return;
    // Rebuild DOM from texts array
    wrap.innerHTML = this.texts.map((t,i)=>
      `<span class="slogan-text${i===0?' active':''}" id="slogan${i}">${esc(t)}</span>`
    ).join('');
    // Pause on hover
    wrap.addEventListener('mouseenter', ()=>{ this.PAUSED=true });
    wrap.addEventListener('mouseleave', ()=>{ this.PAUSED=false });
    this.start();
  },

  start() {
    this.timer = setInterval(()=>{ if(!this.PAUSED) this.next() }, this.DELAY);
  },

  next() {
    const els = document.querySelectorAll('.slogan-text');
    if (!els.length) return;
    const cur = els[this.idx];
    this.idx  = (this.idx+1) % els.length;
    const nxt = els[this.idx];
    // Animate out current, in next
    if (cur) { cur.classList.add('exit'); setTimeout(()=>cur.classList.remove('active','exit'),550) }
    if (nxt) { setTimeout(()=>nxt.classList.add('active'),80) }
  },

  stop() { clearInterval(this.timer) }
};

/* ════════════════════════════════════════════════════════════
   MODULE: POPUP
   ════════════════════════════════════════════════════════════ */
const POPUP = {
  init() {
    const enabled = S.get('popupEnabled');
    if (enabled === false) return;
    const seen = localStorage.getItem('bb_popup_dismissed');
    if (seen === 'true') return;
    // Slight delay so page renders first
    setTimeout(()=>this.show(), 900);
  },

  show() {
    this._buildContent();
    const ov = $('popup-overlay');
    if (ov) ov.classList.remove('hidden');
  },

  _buildContent() {
    // Upcoming events (next 3)
    const today = new Date(); today.setHours(0,0,0,0);
    const events = S.get('events')||[];
    const upcoming = [];

    events.forEach(ev => {
      if (ev.type==='recurring' && ev.enabled) {
        const occ = REC.getUpcomingOccurrences(ev, 2);
        occ.forEach(d => upcoming.push({...ev, _date:d}));
      } else if (ev.type!=='recurring') {
        try { if(new Date(ev.date)>=today) upcoming.push({...ev, _date:ev.date}) } catch{}
      }
    });
    upcoming.sort((a,b)=>a._date.localeCompare(b._date));

    const popEl = $('popEvents');
    if (popEl) {
      if (!upcoming.length) {
        popEl.innerHTML = '<p style="color:var(--text3);font-size:.82rem">Aktuell keine anstehenden Events.</p>';
      } else {
        popEl.innerHTML = upcoming.slice(0,3).map(ev => {
          const em = (ev.cat||'🎭').split(' ')[0];
          let ds = '';
          try { ds = new Date(ev._date+'T12:00:00').toLocaleDateString('de-DE',{weekday:'short',day:'2-digit',month:'short'}) } catch{}
          return `<div class="popup-event-row">
            <div class="popup-event-em">${em}</div>
            <div class="popup-event-info">
              <strong>${esc(ev.name)}</strong>
              <span>${esc(ds)}${ev.time?' · '+esc(ev.time)+' Uhr':''}</span>
            </div>
          </div>`;
        }).join('');
      }
    }

    // Today's hours
    const hours  = S.get('hours')||[];
    const di     = (new Date().getDay()+6)%7;
    const todayH = hours[di];
    const popH   = $('popHours');
    if (popH) {
      if (todayH && todayH.open) {
        popH.innerHTML = `<p style="color:var(--text2);font-size:.85rem">Heute geöffnet: <strong>${esc(todayH.from)} – ${esc(todayH.to)} Uhr</strong></p>`;
      } else {
        popH.innerHTML = '<p style="color:var(--text3);font-size:.85rem">Heute geschlossen.</p>';
      }
    }
  },

  close() {
    const ov=$('popup-overlay');
    if (ov) { ov.style.opacity='0'; ov.style.transition='opacity .3s'; setTimeout(()=>ov.classList.add('hidden'),300) }
  },

  setNoShow(v) {
    localStorage.setItem('bb_popup_dismissed', v ? 'true' : 'false');
    if (v) this.close();
  }
};

/* ════════════════════════════════════════════════════════════
   MODULE: CALENDAR TOOLTIP
   Single singleton, event delegation, zero layout shift
   ════════════════════════════════════════════════════════════ */
const CAL_TIP = {
  tip:    null,
  active: null,
  MARGIN: 12,

  init() {
    this.tip = $('cal-tooltip');
    if (!this.tip) return;

    // Use event delegation on the calendar grid for precise per-cell behaviour
    const attachToGrid = () => {
      const grid = $('calGrid');
      if (!grid) return;

      grid.addEventListener('mouseover', e => {
        const cell = e.target.closest('.cal-day.has-event, .cal-day.past-event');
        if (!cell) { this._hide(); this.active = null; return; }
        if (cell === this.active) return; // already showing for this cell
        this.active = cell;
        this._show(cell, e.clientX, e.clientY);
      });

      grid.addEventListener('mousemove', e => {
        if (!this.active) return;
        this._pos(e.clientX, e.clientY);
      });

      grid.addEventListener('mouseleave', () => {
        this.active = null;
        this._hide();
      });

      grid.addEventListener('mouseout', e => {
        // Hide immediately when leaving a cell (not just the grid)
        const cell = e.target.closest('.cal-day.has-event, .cal-day.past-event');
        if (cell && !cell.contains(e.relatedTarget)) {
          this.active = null;
          this._hide();
        }
      });
    };

    // Attach now and re-attach after each calendar render
    attachToGrid();
    this._attachToGrid = attachToGrid;
  },

  _show(cell, mx, my) {
    const ds = cell.dataset.date;
    if (!ds) { this._hide(); return; }

    // Gather all events (one-time + recurring) for this date
    const events = S.get('events')||[];
    const [yr,mo,d] = ds.split('-').map(Number);
    const dayEvts = [];

    events.forEach(ev=>{
      if (ev.type==='recurring' && ev.enabled) {
        const occ = REC.getMonthOccurrences(ev, yr, mo-1);
        if (occ.includes(ds)) dayEvts.push({...ev, _recurring:true});
      } else if (ev.date===ds) {
        dayEvts.push({...ev, _recurring:false});
      }
    });

    if (!dayEvts.length) { this._hide(); return; }

    let dateLabel=ds;
    try { dateLabel=new Date(ds+'T12:00:00').toLocaleDateString('de-DE',{weekday:'long',day:'numeric',month:'long'}) } catch{}

    const trunc=(s,n)=>s&&s.length>n?s.slice(0,n).trimEnd()+'…':s||''

    const _today = new Date(); _today.setHours(0,0,0,0);
    const todayStr = REC._fmt(_today.getFullYear(), _today.getMonth(), _today.getDate());
    const isPastDay = ds < todayStr;
    const headerStyle = isPastDay ? 'color:rgba(150,150,150,.8)' : '';
    this.tip.innerHTML = `<div class="ctt-header"><span class="ctt-date" style="${headerStyle}">${esc(dateLabel)}${isPastDay?' · vergangen':''}</span></div>`
      + dayEvts.map(ev=>{
        const em=(ev.cat||'🎭').split(' ')[0];
        const pastStyle = isPastDay ? 'opacity:.6;' : '';
        return `<div class="ctt-event" style="${pastStyle}">
          <div class="ctt-name">${em} ${esc(ev.name)}${isPastDay?' <span style="font-size:.65rem;color:rgba(150,150,150,.7);font-weight:400">stattgefunden</span>':''}</div>
          <div class="ctt-meta">${ev.time?'<span>🕗 '+esc(ev.time)+' Uhr</span>':''}</div>
          ${trunc(ev.desc,80)?'<div class="ctt-desc">'+esc(trunc(ev.desc,80))+'</div>':''}
          ${ev._recurring?'<div class="ctt-recurring">🔁 Wiederkehrend</div>':''}</div>`;
      }).join('');

    this.tip.style.left='-9999px'; this.tip.style.top='-9999px';
    this.tip.classList.add('visible');
    requestAnimationFrame(()=>this._pos(mx,my));
  },

  _pos(mx,my) {
    const t=this.tip, M=this.MARGIN;
    const tw=t.offsetWidth||240, th=t.offsetHeight||100;
    const vw=window.innerWidth, vh=window.innerHeight;
    let x=mx+M, y=my+M;
    if(x+tw+M>vw) x=mx-tw-M;
    if(y+th+M>vh) y=my-th-M;
    x=Math.max(M,Math.min(x,vw-tw-M));
    y=Math.max(M,Math.min(y,vh-th-M));
    t.style.left=x+'px'; t.style.top=y+'px';
  },

  _hide() {
    if (this.tip) this.tip.classList.remove('visible');
  }
};

/* ════════════════════════════════════════════════════════════
   MODULE: STATE
   ════════════════════════════════════════════════════════════ */
const state = { adminLoggedIn:false, calDate:new Date(), view:'list', showPastEvents:false, eventsPage:1, EVENTS_PER_PAGE:12, activeMood:'kneipe' };

/* ════════════════════════════════════════════════════════════
   MODULE: GALLERY — Masonry Lightbox
   ════════════════════════════════════════════════════════════ */
const GALLERY = {
  items: [], // populated by BB.renderImages()
  current: 0,

  open(i) {
    this.current = i;
    this._render();
    const lb = document.getElementById('galleryLightbox');
    if (lb) { lb.classList.add('open'); document.body.style.overflow='hidden'; }
    document.addEventListener('keydown', this._onKey);
  },

  close() {
    const lb = document.getElementById('galleryLightbox');
    if (lb) lb.classList.remove('open');
    document.body.style.overflow='';
    document.removeEventListener('keydown', this._onKey);
  },

  prev(e) { if(e)e.stopPropagation(); this.current=(this.current-1+this.items.length)%this.items.length; this._render(); },
  next(e) { if(e)e.stopPropagation(); this.current=(this.current+1)%this.items.length; this._render(); },

  onBackdrop(e) { if(e.target===document.getElementById('galleryLightbox')) this.close(); },

  _render() {
    const img = document.getElementById('lbImg');
    const ctr = document.getElementById('lbCounter');
    const item = this.items[this.current];
    if (img) { img.src=item.src; img.alt=item.label; }
    if (ctr) ctr.textContent = (this.current+1) + ' / ' + this.items.length + '  ·  ' + item.label;
  },

  openGrid() {
    const gg = document.getElementById('galleryGrid');
    if (!gg) return;
    const grid = document.getElementById('ggGrid');
    if (grid) {
      grid.innerHTML = this.items.length
        ? this.items.map((item, i) =>
            '<div class="gg-item" onclick="GALLERY.openFromGrid(' + i + ')">' +
            '<img src="' + esc(item.src) + '" alt="' + esc(item.label) + '" loading="lazy"/>' +
            '<span class="gg-item-num">' + (i + 1) + '</span>' +
            '</div>'
          ).join('')
        : '<p style="color:rgba(255,255,255,.4);text-align:center;padding:3rem;grid-column:1/-1">Noch keine Bilder vorhanden.</p>';
    }
    gg.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', this._onGridKey);
  },

  closeGrid() {
    const gg = document.getElementById('galleryGrid');
    if (gg) gg.classList.remove('open');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', this._onGridKey);
  },

  onGridBackdrop(e) { if (e.target === document.getElementById('galleryGrid')) this.closeGrid(); },

  openFromGrid(i) {
    this.closeGrid();
    this.open(i);
  },

  _onGridKey: (e) => { if (e.key === 'Escape') GALLERY.closeGrid(); },

  _onKey: (e) => {
    if (e.key==='Escape') GALLERY.close();
    if (e.key==='ArrowLeft') GALLERY.prev();
    if (e.key==='ArrowRight') GALLERY.next();
  }
};

/* ════════════════════════════════════════════════════════════
   MODULE: LEGAL — Impressum & Datenschutz Overlay
   ════════════════════════════════════════════════════════════ */
const LEGAL = {
  init() {
    this._handleHash(location.hash);
    window.addEventListener('popstate', () => this._handleHash(location.hash));
  },
  _show(page) {
    const ov = $('legalOverlay');
    if (!ov) return;
    ov.classList.add('active');
    document.body.style.overflow = 'hidden';
    const imp = $('legalImpressum'), dts = $('legalDatenschutz');
    if (imp) imp.style.display = page === 'impressum' ? 'block' : 'none';
    if (dts) dts.style.display = page === 'datenschutz' ? 'block' : 'none';
    history.pushState({ legal: page }, '', '#' + page);
    // Focus management
    const back = ov.querySelector('.legal-back');
    if (back) back.focus();
    // Escape closes
    const onKey = e => {
      if (e.key === 'Escape') { this._hide(); document.removeEventListener('keydown', onKey); }
    };
    document.addEventListener('keydown', onKey);
  },
  _hide() {
    const ov = $('legalOverlay');
    if (!ov) return;
    ov.classList.remove('active');
    document.body.style.overflow = '';
    if (location.hash === '#impressum' || location.hash === '#datenschutz') {
      history.pushState({}, '', location.pathname);
    }
  },
  _handleHash(hash) {
    if (hash === '#impressum') this._show('impressum');
    else if (hash === '#datenschutz') this._show('datenschutz');
  }
};

/* ════════════════════════════════════════════════════════════
   MODULE: BB — Public API (window.BB)
   ════════════════════════════════════════════════════════════ */
const BB = {

  init() {
    // _initReveal first — so .reveal elements become visible even if a render crashes
    this._initReveal();
    this._initTheme();
    try { SLOGAN.init(); } catch(e) { console.warn('[BB] SLOGAN.init', e); }
    try { POPUP.init();  } catch(e) { console.warn('[BB] POPUP.init',  e); }
    try { CAL_TIP.init();} catch(e) { console.warn('[BB] CAL_TIP.init',e); }
    this.renderAll();
    this._initNav();
    this._initRsvName();
    try { LEGAL.init();  } catch(e) { console.warn('[BB] LEGAL.init',  e); }
    try { COOKIE.init(); } catch(e) { console.warn('[BB] COOKIE.init', e); }
    this._autoArchive();
  },

  /* ── RENDER ALL ── */
  renderAll() {
    const _r = (name, fn) => { try { fn(); } catch(e) { console.warn('[BB] render.' + name, e); } };
    _r('events',   () => this.renderEvents());
    _r('hours',    () => this.renderHours());
    _r('texts',    () => this.renderTexts());
    _r('sections', () => this.renderSections());
    _r('promo',    () => this.renderPromo());
    _r('images',   () => this.renderImages());
    _r('wa',       () => this.buildWa());
    _r('tooltips', () => this.initFeatTooltips());
  },

  /* ── RENDER IMAGES ── */
  renderImages() {
    const igImgs  = Array.isArray(S.get('igImages'))      ? S.get('igImages')      : (_supaImgLoading ? [] : DEFAULT_IG_IMAGES);
    const galImgs = Array.isArray(S.get('galleryImages')) ? S.get('galleryImages') : (_supaImgLoading ? [] : DEFAULT_GALLERY_IMAGES);
    const aboutUrl = S.get('aboutImage') || '';
    // GALLERY.items = gallery images for lightbox
    GALLERY.items = galImgs.map(img => ({src: img.url, label: img.label}));

    // About image
    const aboutFrame = document.getElementById('aboutImgFrame');
    if (aboutFrame) {
      const img = aboutFrame.querySelector('img');
      if (img) { img.src = aboutUrl; img.style.visibility = aboutUrl ? '' : 'hidden'; }
    }

    // Social / Instagram grid
    const igGrid = document.getElementById('igGrid');
    if (igGrid) {
      igGrid.innerHTML = igImgs.map(img =>
        '<div class="ig-tile" onclick="window.open(\'https://www.instagram.com/blixxem_bennard\',\'_blank\')">' +
        '<img alt="' + esc(img.label) + '" loading="lazy" src="' + esc(img.url) + '"/>' +
        '<div class="ig-overlay"><span>' + esc(img.label) + '</span></div></div>'
      ).join('');
    }

    // Story panels
    this.renderStory();
  },

  renderStory() {
    const strip = document.getElementById('storyStrip');
    if (!strip) return;
    const mood = state.activeMood || 'kneipe';
    const key  = mood === 'party' ? 'storyParty' : 'storyKneipe';
    const def  = mood === 'party' ? DEFAULT_STORY_PARTY : DEFAULT_STORY_KNEIPE;
    const panels = Array.isArray(S.get(key)) ? S.get(key) : def;
    const galImgs = Array.isArray(S.get('galleryImages')) ? S.get('galleryImages') : (_supaImgLoading ? [] : DEFAULT_GALLERY_IMAGES);
    strip.innerHTML = panels.map((p, i) => {
      const bgUrl = p.url || (galImgs[i] ? galImgs[i].url : '');
      const bgStyle = bgUrl ? "background-image:url('" + bgUrl.replace(/'/g, "%27") + "')" : '';
      return '<div class="story-step">' +
        '<div class="story-img" style="' + bgStyle + '"></div>' +
        '<div class="story-overlay"></div>' +
        '<div class="story-txt">' +
        '<span class="story-num">0' + (i + 1) + '</span>' +
        '<p class="story-q">' + esc(p.quote) + '</p>' +
        '<p class="story-s">' + esc(p.sub) + '</p>' +
        '</div></div>';
    }).join('');
  },

  switchMood(mood) {
    state.activeMood = mood;
    const btnK = document.getElementById('moodBtnKneipe');
    const btnP = document.getElementById('moodBtnParty');
    if (btnK) btnK.classList.toggle('active', mood === 'kneipe');
    if (btnP) btnP.classList.toggle('active', mood === 'party');
    const strip = document.getElementById('storyStrip');
    if (strip) {
      strip.classList.add('fading');
      setTimeout(() => { this.renderStory(); strip.classList.remove('fading'); }, 250);
    }
  },

  /* ── NAVIGATION ── */
  _initNav() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(a => {
      if (a.getAttribute('href').length > 1) {
        a.addEventListener('click', e => {
          const target = document.querySelector(a.getAttribute('href'));
          if (target) {
            e.preventDefault();
            const top = target.getBoundingClientRect().top + window.scrollY - 110;
            window.scrollTo({ top, behavior: 'smooth' });
            this.closeMobile();
          }
        });
      }
    });
    // Mobile menu toggle (hamburger)
    const burger = $('burgerBtn');
    if (burger) burger.addEventListener('click', () => {
      const mm = $('mobileMenu');
      if (mm) mm.classList.toggle('open');
    });

    // Theme toggle
    const themeBtn = $('themeBtn');
    if (themeBtn) themeBtn.addEventListener('click', () => this.toggleTheme());

    // Admin panel open
    const adminBtn = $('adminBtn');
    if (adminBtn) adminBtn.addEventListener('click', () => {
      const ap = $('adminPanel');
      if (ap) ap.classList.toggle('open');
    });
  },
  closeMobile() {
    const mm = $('mobileMenu');
    if (mm) mm.classList.remove('open');
  },

  /* ── REVEAL ON SCROLL ── */
  _initReveal() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  },

  /* ── THEME ── */
  _initTheme() {
    const saved = localStorage.getItem('bb_theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
  },
  toggleTheme() {
    const el = document.documentElement;
    const next = el.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    el.setAttribute('data-theme', next);
    localStorage.setItem('bb_theme', next);
  },

  /* ── RESERVATION NAME INPUT ── */
  _initRsvName() {
    const nameEl = $('rsvName');
    if (nameEl) nameEl.addEventListener('input', () => this.buildWa());
  },

  /* ── RENDER: TEXTS ── */
  renderTexts() {
    const t = S.get('texts') || {};
    // Hero tagline (shown in heroTag element)
    setText('heroTag', t.heroTag || 'Karaoke · Bingo · Live-Musik · Einfach gute Abende.');
    // About section
    setText('aboutH', t.aboutH || 'Hier fühlt sich jeder wie zuhause.');
    setText('aboutP1', t.aboutP1 || '');
    setText('aboutP2', t.aboutP2 || 'Mädelsabend, Stammtische, Firmenevents oder einfach gesellig trinken mit Freunden. — bei uns immer in guter Gesellschaft.');
    // Contact / address
    const addr = $('contactAddr');
    if (addr) addr.textContent = t.addr || 'Am Bismarckplatz 4 · 48455 Bad Bentheim';
    const addrH = $('addrHint');
    if (addrH) addrH.textContent = t.addr || 'Am Bismarckplatz 4, Bad Bentheim';
  },

  /* ── RENDER: EVENTS ── */
  renderEvents() {
    const grid = $('eventsGrid');
    if (!grid) return;
    const events = S.get('events') || [];
    const today = new Date(); today.setHours(0,0,0,0);
    const todayStr = REC._fmt(today.getFullYear(), today.getMonth(), today.getDate());
    const showPast = state.showPastEvents === true;
    const CATS = {'🎤 Karaoke':'#b03a8a','🎯 Bingo':'#2a7ae4','🎉 Party':'#e4922a','🎶 Musik':'#2aae66','🏆 Turnier':'#c8813a','🎭 Sonstige':'#888','🧠 Kneipenquiz':'#7b4fcf'};
    const catColor = cat => CATS[cat] || '#c8813a';

    const makeCard = (ev, date, isRec, isPast) => {
      let ds = date;
      try { ds = new Date(date+'T12:00:00').toLocaleDateString('de-DE',{weekday:'long',day:'2-digit',month:'long',year:'numeric'}); } catch{}
      const cat = ev.cat || '🎭 Sonstige';
      const col = isPast ? '#888' : (catColor(cat));
      const catLabel = cat.split(' ').slice(1).join(' ');
      return `<div class="event-card reveal${isPast?' past':''}" data-date="${esc(date)}" role="article">
        <div class="event-card-top">
          <span class="event-tag${isRec?' recurring':''}" style="background:${col}22;color:${col};border-color:${col}44">${esc(catLabel)}</span>
          ${isRec ? '<span style="font-size:.8rem;opacity:.6" title="Wiederkehrend">🔁</span>' : ''}
          ${isPast ? '<span class="past-badge">🕐 vergangen</span>' : ''}
        </div>
        <div class="event-card-body">
          <h3>${esc(ev.name)}</h3>
          <div class="event-meta">
            <span>📅 ${esc(ds)}</span>
            ${ev.time ? `<span>🕗 ${esc(ev.time)} Uhr</span>` : ''}
          </div>
          ${ev.desc ? `<p>${esc(ev.desc)}</p>` : ''}
        </div>
        ${ev.price ? `<div class="event-card-footer"><span class="event-price">💰 ${esc(ev.price)}</span></div>` : ''}
      </div>`;
    };

    const cards = [];
    events.forEach(ev => {
      if (ev.type === 'recurring' && ev.enabled) {
        REC.getUpcomingOccurrences(ev, 3).forEach(d => {
          cards.push({ date: d, past: false, html: makeCard(ev, d, true, false) });
        });
        // Past recurring: show last 3 occurrences if showPast
        if (showPast) {
          const pastOcc = REC._getPastOccurrences(ev, 3);
          pastOcc.forEach(d => {
            cards.push({ date: d, past: true, html: makeCard(ev, d, true, true) });
          });
        }
      } else if (ev.type !== 'recurring') {
        try {
          const d = new Date(ev.date+'T12:00:00');
          const isPast = ev.date < todayStr;
          if (!isPast) {
            cards.push({ date: ev.date, past: false, html: makeCard(ev, ev.date, false, false) });
          } else if (showPast) {
            cards.push({ date: ev.date, past: true, html: makeCard(ev, ev.date, false, true) });
          }
        } catch {}
      }
    });

    // Sort: upcoming ascending, past descending (most recent first)
    const upcoming = cards.filter(c=>!c.past).sort((a,b)=>a.date.localeCompare(b.date));
    const past     = cards.filter(c=>c.past).sort((a,b)=>b.date.localeCompare(a.date));
    const sorted   = [...upcoming, ...past];

    if (!upcoming.length && !showPast) {
      grid.innerHTML = '<div class="events-empty">Keine anstehenden Events — schau bald wieder rein! 🍺</div>';
      this.initFeatTooltips();
      return;
    }
    if (!upcoming.length && !past.length) {
      grid.innerHTML = '<div class="events-empty">Keine Events gefunden.</div>';
      this.initFeatTooltips();
      return;
    }

    const PAGE = state.EVENTS_PER_PAGE;
    const page = state.eventsPage;

    // Paginate upcoming
    const upcomingVisible  = upcoming.slice(0, page * PAGE);
    const upcomingRemain   = upcoming.length - upcomingVisible.length;

    let html = upcomingVisible.map(c=>c.html).join('');

    // Count indicator
    html += `<div class="events-count">${upcomingVisible.length} von ${upcoming.length} anstehenden Events</div>`;

    // "Mehr laden" for upcoming
    if (upcomingRemain > 0) {
      html += `<div class="events-load-more">
        <button onclick="BB.loadMoreEvents()">Weitere ${Math.min(upcomingRemain, PAGE)} Events laden ↓</button>
      </div>`;
    }

    // Past events section
    if (showPast && past.length) {
      html += `<div style="grid-column:1/-1;display:flex;align-items:center;gap:12px;margin:16px 0 8px;opacity:.5">
        <div style="flex:1;height:1px;background:var(--border)"></div>
        <span style="font-size:.72rem;letter-spacing:2px;text-transform:uppercase;color:var(--text3)">Vergangene Events (${past.length})</span>
        <div style="flex:1;height:1px;background:var(--border)"></div>
      </div>`;
      const pastPage    = state.pastEventsPage || 1;
      const pastVisible = past.slice(0, pastPage * PAGE);
      const pastRemain  = past.length - pastVisible.length;
      html += pastVisible.map(c=>c.html).join('');
      if (pastRemain > 0) {
        html += `<div class="events-load-more">
          <button onclick="BB.loadMorePastEvents()">Weitere vergangene Events laden ↓</button>
        </div>`;
      }
    }

    grid.innerHTML = html;
    this.initFeatTooltips();
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.10 });
    grid.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  },

  /* ── RENDER: HOURS ── */
  renderHours() {
    const hours = S.get('hours') || [];
    const DAYS = ['Mo','Di','Mi','Do','Fr','Sa','So'];
    const nowDi = (new Date().getDay()+6)%7;
    const tbl = $('hoursTable');
    if (tbl) {
      tbl.innerHTML = DAYS.map((d,i) => {
        const h = hours[i];
        const open = h && h.open;
        const isToday = i === nowDi;
        return `<tr class="${open?'hours-open':'hours-closed'}${isToday?' today-row':''}">
          <td>${d}</td>
          <td>${open ? esc(h.from)+' – '+esc(h.to)+' Uhr' : 'Geschlossen'}</td>
        </tr>`;
      }).join('');
    }
    // Status badge
    const now = new Date();
    const di  = (now.getDay()+6)%7;
    const cur = hours[di];
    const badge = $('statusBadge'), txt = $('statusText');
    if (!badge || !txt) return;
    if (cur && cur.open) {
      const [hh,mm] = (cur.to||'00:00').split(':').map(Number);
      const close = new Date(); close.setHours(hh,mm,0,0);
      if (hh < 6) close.setDate(close.getDate()+1);
      badge.className = 'status-badge open';
      txt.textContent = 'Jetzt geöffnet — bis '+cur.to+' Uhr';
    } else {
      badge.className = 'status-badge closed';
      txt.textContent = 'Heute geschlossen';
    }
  },

  /* ── RENDER: SECTIONS ── */
  renderSections() {
    const secs = S.get('sections') || {};
    ['about','events','hours','reservation','gallery','social','contact'].forEach(k => {
      const el = document.getElementById(k);
      if (el) el.style.display = secs[k] !== false ? '' : 'none';
    });
  },

  /* ── RENDER: CALENDAR ── */
  renderCalendar() {
    const events = S.get('events')||[];
    const d = state.calDate, yr = d.getFullYear(), mo = d.getMonth();
    const MONTHS = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
    const title = $('calTitle');
    if (title) title.textContent = MONTHS[mo]+' '+yr;

    // Build date → events map
    const dateMap = {};
    events.forEach(ev => {
      if (ev.type==='recurring' && ev.enabled) {
        REC.getMonthOccurrences(ev, yr, mo).forEach(ds => {
          if (!dateMap[ds]) dateMap[ds]=[];
          dateMap[ds].push({...ev, _recurring:true});
        });
      } else if (ev.type!=='recurring' && ev.date) {
        try {
          const [eyr,emo] = ev.date.split('-').map(Number);
          if (eyr===yr && emo-1===mo) {
            if (!dateMap[ev.date]) dateMap[ev.date]=[];
            dateMap[ev.date].push({...ev, _recurring:false});
          }
        } catch {}
      }
    });

    const first = new Date(yr, mo, 1).getDay();
    const startOffset = (first+6)%7;
    const dim = new Date(yr, mo+1, 0).getDate();
    const today = new Date(); today.setHours(0,0,0,0);
    const todayStr = REC._fmt(today.getFullYear(), today.getMonth(), today.getDate());

    let cells = '';
    ['Mo','Di','Mi','Do','Fr','Sa','So'].forEach(d => { cells += `<div class="cal-day-name">${d}</div>`; });
    for (let i=0; i<startOffset; i++) cells += '<div class="cal-day"></div>';
    for (let day=1; day<=dim; day++) {
      const ds = REC._fmt(yr, mo, day);
      const evts = dateMap[ds]||[];
      const isToday = ds===todayStr;
      const isPast  = ds < todayStr;
      const hasRec  = evts.some(e=>e._recurring);
      const hasOne  = evts.some(e=>!e._recurring);
      const hasEvt  = evts.length > 0;
      let cls = 'cal-day';
      if (isToday)           cls += ' today';
      if (hasEvt && !isPast) cls += ' has-event';
      if (hasEvt && isPast)  cls += ' past-event';
      cells += `<div class="${cls}" data-date="${ds}">
        <span class="cal-num">${day}</span>
        ${isToday ? '<span class="cal-today-label">Heute</span>' : ''}
        ${hasOne  ? `<div class="cal-dot${isPast?' past':''}"></div>` : ''}
        ${hasRec  ? `<div class="cal-dot recurring${isPast?' past':''}"></div>` : ''}
      </div>`;
    }
    const grid = $('calGrid');
    if (grid) { grid.innerHTML = cells; if(CAL_TIP._attachToGrid) CAL_TIP._attachToGrid(); }
  },

  calPrev() { state.calDate.setMonth(state.calDate.getMonth()-1); this.renderCalendar(); },
  calNext() { state.calDate.setMonth(state.calDate.getMonth()+1); this.renderCalendar(); },

  /* ── AUTO-ARCHIVE: move events older than 6 months to bb_archive ── */
  _autoArchive() {
    const events = [...(S.get('events') || [])];
    if (!events.length) return;
    const now = new Date();
    const cutoff = new Date(now.getFullYear(), now.getMonth() - 6, now.getDate());
    const cutoffStr = REC._fmt(cutoff.getFullYear(), cutoff.getMonth(), cutoff.getDate());

    const keep = [], archive = [];
    events.forEach(ev => {
      if (ev.type === 'recurring') {
        // Never archive active recurring events
        keep.push(ev);
      } else {
        // Archive one-time events older than 6 months
        if (ev.date && ev.date < cutoffStr) {
          archive.push(ev);
        } else {
          keep.push(ev);
        }
      }
    });

    if (!archive.length) return;

    // Merge into existing archive
    const existing = S.get('archive') || [];
    const merged = [...existing, ...archive];
    // Deduplicate by id
    const seen = new Set();
    const deduped = merged.filter(ev => {
      if (seen.has(ev.id)) return false;
      seen.add(ev.id);
      return true;
    });

    S.set('archive', deduped);
    S.set('events', keep);
    if (archive.length > 0) {
      console.info(`[BB] Auto-archived ${archive.length} old event(s). Archive total: ${deduped.length}`);
    }
  },

  togglePastEvents() {
    state.showPastEvents = !state.showPastEvents;
    state.eventsPage = 1;
    state.pastEventsPage = 1;
    const btn = $('btnPast');
    if (btn) {
      btn.classList.toggle('active', state.showPastEvents);
      btn.setAttribute('aria-pressed', state.showPastEvents ? 'true' : 'false');
    }
    this.renderEvents();
  },

  loadMoreEvents() {
    state.eventsPage = (state.eventsPage || 1) + 1;
    this.renderEvents();
    // Scroll to load-more position
    const grid = $('eventsGrid');
    if (grid) {
      const btn = grid.querySelector('.events-load-more');
      if (btn) btn.scrollIntoView({ behavior:'smooth', block:'center' });
    }
  },

  loadMorePastEvents() {
    state.pastEventsPage = (state.pastEventsPage || 1) + 1;
    this.renderEvents();
  },

  switchView(v) {
    if (v === 'list') { state.eventsPage = 1; state.pastEventsPage = 1; }
    state.view = v;
    const lv=$('eventsListView'), cv=$('calendarView'), bl=$('btnList'), bc=$('btnCal');
    if (lv) lv.style.display = v==='list' ? '' : 'none';
    if (cv) cv.classList.toggle('show', v==='calendar');
    if (bl) bl.classList.toggle('active', v==='list');
    if (bc) bc.classList.toggle('active', v==='calendar');
    const bp=$('btnPast');
    if (bp) bp.style.display = v==='list' ? '' : 'none';
    if (v==='calendar') this.renderCalendar();
  },

  /* ── ABOUT-FEAT: Hover-Tooltip + Click-Navigation ── */
  initFeatTooltips() {
    const feats = document.querySelectorAll('.about-feat[data-cat]');
    if (!feats.length) return;
    const events = S.get('events') || [];
    const today  = new Date(); today.setHours(0,0,0,0);

    feats.forEach(feat => {
      const cat = (feat.dataset.cat || '').trim();

      let best = null;
      events.forEach(ev => {
        if ((ev.cat || '').trim() !== cat) return;
        let nextDate = null;
        if (ev.type === 'recurring' && ev.enabled) {
          const occ = REC.getUpcomingOccurrences(ev, 1);
          if (occ.length) nextDate = occ[0];
        } else if (ev.type !== 'recurring') {
          try {
            const d = new Date(ev.date + 'T12:00:00');
            if (d >= today) nextDate = ev.date;
          } catch {}
        }
        if (nextDate && (!best || nextDate < best.date)) {
          best = { name: ev.name, date: nextDate };
        }
      });

      const nameEl = feat.querySelector('[data-feat-name]');
      const dateEl = feat.querySelector('[data-feat-date]');
      if (best) {
        if (nameEl) { nameEl.textContent = best.name; nameEl.className = 'feat-tooltip-name'; }
        if (dateEl) {
          try {
            dateEl.textContent = new Date(best.date + 'T12:00:00')
              .toLocaleDateString('de-DE', { weekday:'long', day:'2-digit', month:'long' });
          } catch { dateEl.textContent = best.date; }
        }
      } else if (cat) {
        if (nameEl) { nameEl.textContent = 'Demnächst geplant'; nameEl.className = 'feat-tooltip-none'; }
        if (dateEl) dateEl.textContent = 'Noch keine Termine eingetragen';
      }
    });
  },

  featClick(el) {
    const cat = el.dataset.cat;
    this.switchView('list');
    const sec = document.getElementById('events');
    if (sec) {
      const top = sec.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    if (!cat) return;
    setTimeout(() => {
      const cards = document.querySelectorAll('#eventsGrid .event-card');
      let found = false;
      const allEvts = S.get('events') || [];
      const catTrimmed = (cat || '').trim();
      let targetName = null;
      allEvts.forEach(ev => { if (!targetName && (ev.cat || '').trim() === catTrimmed) targetName = ev.name; });
      cards.forEach(card => {
        card.classList.remove('feat-highlighted');
        if (!found) {
          const h3El = card.querySelector('h3');
          const cardName = h3El ? h3El.textContent.trim() : '';
          const tagEl  = card.querySelector('.event-tag');
          const tagTxt = tagEl ? tagEl.textContent.trim() : '';
          const catWord = catTrimmed.split(' ').slice(1).join(' ');
          const matchByTag  = catWord && tagTxt.toLowerCase() === catWord.toLowerCase();
          const matchByName = targetName && cardName === targetName;
          if (matchByTag || matchByName) {
            found = true;
            setTimeout(() => {
              card.classList.add('feat-highlighted');
              card.scrollIntoView({ behavior: 'smooth', block: 'center' });
              setTimeout(() => card.classList.remove('feat-highlighted'), 2000);
            }, 300);
          }
        }
      });
    }, 600);
  },

  featClickAll() {
    this.switchView('list');
    const sec = document.getElementById('events');
    if (sec) {
      const top = sec.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  },

  /* ── PROMO BUTTON ── */
  renderPromo() {
    const promo = S.get('promo') || DEF.promo;
    const wrap  = $('heroPropmoWrap');
    const btn   = $('heroPromoBtn');
    const txt   = $('heroPromoBtnText');
    if (!wrap) return;
    wrap.style.display = promo.enabled ? 'flex' : 'none';
    if (btn)  btn.href        = promo.url  || 'https://www.eventim.de';
    if (txt)  txt.textContent = promo.text || 'Tickets kaufen';
  },

  savePromoSetting() {
    const promo = S.get('promo') || { ...DEF.promo };
    const enEl  = $('promoEnabled');
    const txEl  = $('promoText');
    const urlEl = $('promoUrl');
    if (enEl)  promo.enabled = enEl.checked;
    if (txEl)  promo.text    = txEl.value.trim() || 'Tickets kaufen';
    if (urlEl) promo.url     = urlEl.value.trim() || 'https://www.eventim.de';
    S.set('promo', promo);
    this.renderPromo();
    toast('Promo-Button gespeichert! 🎟️');
  },

  _loadPromoAdmin() {
    const promo = S.get('promo') || DEF.promo;
    const enEl  = $('promoEnabled');
    const txEl  = $('promoText');
    const urlEl = $('promoUrl');
    if (enEl)  enEl.checked = !!promo.enabled;
    if (txEl)  txEl.value   = promo.text  || 'Tickets kaufen';
    if (urlEl) urlEl.value  = promo.url   || 'https://www.eventim.de';
  },

  /* ── POPUP PUBLIC ── */
  closePopup(){POPUP.close()},
  popNoShowToggle(v){POPUP.setNoShow(v)},

  /* ── LEGAL ROUTING ── */
  showLegal(page){ LEGAL._show(page); },
  hideLegal(){ LEGAL._hide(); },

  /* ── WHATSAPP RESERVATION ── */
  buildWa() {
    const t=S.get('texts')||{};
    const name=$('rsvName')?$('rsvName').value.trim():'';
    const rawDate=$('rsvDate')?$('rsvDate').value:'';
    const rawTime=$('rsvTime')?$('rsvTime').value:'';
    const rawPax=$('rsvPax')?$('rsvPax').value:'';
    const nameTxt=name||'[Name]';
    const dateTxt=rawDate?fmtDateLong(rawDate):'[Datum]';
    const timeTxt=rawTime?rawTime+' Uhr':'[Uhrzeit]';
    const paxTxt=rawPax?rawPax+' Personen':'[Personenzahl]';
    const msg='Hallo Blixxem Bennard, ich ('+nameTxt+') möchte gerne einen Tisch reservieren für '+dateTxt+' um '+timeTxt+' mit '+paxTxt+'.';
    const btn=$('waBtn');
    if(!btn) return;
    const waNum = (S.get('texts')||{}).wa||'';
    const url=waNum?'https://wa.me/'+waNum.replace(/\D/g,'')+'?text='+encodeURIComponent(msg):'https://wa.me/?text='+encodeURIComponent(msg);
    btn.dataset.href=url;
    const gdpr=$('rsvGdpr');
    const accepted=gdpr&&gdpr.checked;
    btn.disabled=!accepted;
    btn.setAttribute('aria-disabled',accepted?'false':'true');
    const hint=$('waBtn-hint');
    if(hint) hint.style.display=accepted?'none':'';
  },

  openWa(e) {
    e.preventDefault();
    const btn=$('waBtn');
    const gdpr=$('rsvGdpr');
    if(!gdpr||!gdpr.checked){btn&&btn.focus();return;}
    const url=btn&&btn.dataset.href;
    if(url) window.open(url,'_blank','noopener,noreferrer');
  },

  /* ── ADMIN ── */
  adminLogin() {
    const pw=$('pwInput')?$('pwInput').value:'';
    const saved=S.get('password')||DEF.password;
    if(pw===saved){ this._openAdmin(); $('loginErr').style.display='none'; }
    else { $('loginErr').style.display='block'; }
  },

  _openAdmin(){
    $('adminContent').style.display='block';
    this._loadAdminEvents();this._loadAdminHours();this._loadAdminTexts();this._loadSecToggles();this._loadPromoAdmin();this._loadAdminImages();
    $('adminLogin').style.display='none';
    const ap=$('adminPanel'); if(ap) ap.classList.add('open');
    state.adminLoggedIn=true;
    this.tab('events');
  },

  adminClose(){
    // Alles automatisch speichern bevor das Panel schließt
    this._saveAllSilent();
    const ap=$('adminPanel'); if(ap) ap.classList.remove('open');
    state.adminLoggedIn=false;
    $('adminContent').style.display='none';
    $('adminLogin').style.display='block';
    if($('pwInput'))$('pwInput').value='';
  },

  _saveAllSilent(){
    // Texte speichern (ohne Toast)
    try {
      const t=S.get('texts')||{};
      const fields={tHero1:'hero1',tHero2:'hero2',tHeroTag:'heroTag',tAboutH:'aboutH',tAboutP1:'aboutP1',tAboutP2:'aboutP2',tAddr:'addr',tEmail:'email'};
      Object.entries(fields).forEach(([elId,key])=>{const el=$(elId);if(el)t[key]=el.value.trim();});
      const waEl=$('tWa');if(waEl)t.wa=waEl.value.replace(/\D/g,'');
      S.set('texts',t);this.renderTexts();this.buildWa();
    } catch(e){}
    // Öffnungszeiten speichern (ohne Toast)
    try {
      const hours=Array.from({length:7},(_,i)=>({
        day:(S.get('hours')||DEF.hours)[i]?.day||'',
        open:$('hOpen'+i)?$('hOpen'+i).checked:false,
        from:$('hFrom'+i)?$('hFrom'+i).value:'18:00',
        to:$('hTo'+i)?$('hTo'+i).value:'23:00'
      }));
      S.set('hours',hours);this.renderHours();
    } catch(e){}
    // Promo speichern (ohne Toast)
    try {
      const promo=S.get('promo')||{...DEF.promo};
      const enEl=$('promoEnabled'),txEl=$('promoText'),urlEl=$('promoUrl');
      if(enEl) promo.enabled=enEl.checked;
      if(txEl) promo.text=txEl.value.trim()||'Tickets kaufen';
      if(urlEl) promo.url=urlEl.value.trim()||'https://www.eventim.de';
      S.set('promo',promo);this.renderPromo();
    } catch(e){}
    toast('Alle Änderungen gespeichert ✅');
  },

  tab(t){
    document.querySelectorAll('.admin-tab').forEach(b=>{
      const oc=b.getAttribute('onclick')||'';
      b.classList.toggle('active', oc.includes("'"+t+"'"));
    });
    document.querySelectorAll('.admin-pane').forEach(p=>p.style.display='none');
    const pane=$('pane-'+t); if(pane) pane.style.display='block';
  },

  /* Admin: Events */
  _loadAdminEvents(){
    const allEvents=S.get('events')||[];
    const wrap=$('adminEvtList'); if(!wrap) return;
    const showPastCb=$('adminShowPast');
    const showPast=showPastCb&&showPastCb.checked;
    const _now=new Date(); const todayStr=REC._fmt(_now.getFullYear(),_now.getMonth(),_now.getDate());

    // Separate upcoming vs past
    const upcoming=[], past=[];
    allEvents.forEach((ev,i)=>{
      let isPast=false;
      if(ev.type==='recurring'){
        const next=REC.getUpcomingOccurrences(ev,1);
        isPast=(!ev.enabled)||(next.length===0);
      } else {
        isPast=ev.date&&ev.date<todayStr;
      }
      (isPast?past:upcoming).push({ev,i});
    });

    const toShow=[...upcoming,...(showPast?past:[])];

    if(!toShow.length&&!allEvents.length){
      wrap.innerHTML='<p style="color:var(--text3);font-size:.82rem;padding:8px 0">Noch keine Events.</p>';
      return;
    }
    if(!toShow.length){
      wrap.innerHTML='<p style="color:var(--text3);font-size:.82rem;padding:8px 0">Keine Events in dieser Ansicht.</p>';
      return;
    }

    wrap.innerHTML='';
    toShow.forEach(({ev,i})=>{
      const isPast=past.some(p=>p.i===i);
      const row=document.createElement('div');
      row.className='ev-row'+(isPast?' ev-row-past':'');
      // Info
      const info=document.createElement('div');
      info.className='ev-row-info';
      const strong=document.createElement('strong');
      strong.textContent=ev.name+(isPast?' 🕐':'');
      if(isPast) strong.style.opacity='.55';
      const span=document.createElement('span');
      span.textContent=(ev.type==='recurring'?'🔁 Wiederkehrend':('📅 '+(ev.date||'')))+(ev.type==='recurring'?(ev.enabled?' ✅':' ⏸'):'')+(isPast?' · vergangen':'');
      if(isPast) span.style.opacity='.5';
      info.appendChild(strong);
      info.appendChild(span);
      // Actions
      const acts=document.createElement('div');
      acts.className='ev-row-actions';
      if(ev.type==='recurring'){
        const lbl=document.createElement('label');
        lbl.className='tog-sw';
        const cb=document.createElement('input');
        cb.type='checkbox'; cb.checked=!!ev.enabled;
        cb.onchange=()=>BB._togEv(i,cb.checked);
        const sl=document.createElement('div');
        sl.className='tog-sl';
        lbl.appendChild(cb); lbl.appendChild(sl);
        acts.appendChild(lbl);
      }
      const editBtn=document.createElement('button');
      editBtn.className='btn-a sm'; editBtn.textContent='✏️';
      editBtn.onclick=()=>BB._editEv(i);
      const delBtn=document.createElement('button');
      delBtn.className='btn-a sm danger'; delBtn.textContent='🗑';
      delBtn.onclick=()=>{
        if(delBtn.dataset.confirm==='1'){
          BB._delEv(i);
        } else {
          delBtn.dataset.confirm='1';
          delBtn.textContent='Sicher?';
          delBtn.style.background='rgba(180,50,50,.45)';
          delBtn.style.color='#fff';
          setTimeout(()=>{
            if(delBtn.dataset.confirm==='1'){
              delBtn.dataset.confirm='';
              delBtn.textContent='🗑';
              delBtn.style.background='';
              delBtn.style.color='';
            }
          },3000);
        }
      };
      acts.appendChild(editBtn);
      acts.appendChild(delBtn);
      row.appendChild(info);
      row.appendChild(acts);
      wrap.appendChild(row);
    });
  },

  _togEv(i,v){const evs=[...(S.get('events')||[])];evs[i]={...evs[i],enabled:v};S.set('events',evs);this.renderAll();this._loadAdminEvents();},

  _editEv(i){
    const evs=S.get('events')||[], ev=evs[i];
    if(!ev) return;
    const isRec = ev.type==='recurring';
    const nm=$('eName'),dt=$('eDate'),dc=$('eDesc'),pr=$('ePrice'),ct=$('eCat'),ri=$('eEditId');
    const cbRec=$('eIsRecurring');
    if(nm) nm.value=ev.name||'';
    if(dc) dc.value=ev.desc||'';
    if(pr) pr.value=ev.price||'';
    if(ct) ct.value=ev.cat||'🎭 Sonstige';
    if(ri) ri.value=i;
    if(cbRec) cbRec.checked=isRec;
    if(!isRec){
      if(dt) dt.value=ev.date||'';
      const tm=$('eTime'); if(tm) tm.value=ev.time||'';
    } else {
      const tm=$('eRecurTime'); if(tm) tm.value=ev.time||'';
    }
    this.toggleRecurring();
    if(isRec&&ev.recurrence){
      const rf=$('eFreq'),rw=$('eWeekday'),rwm=$('eWeekOfMonth'),
            rmw=$('eMonthWeekday'),re=$('eEndDate'),rs=$('eCustomStart'),
            rid=$('eCustomDays');
      if(rf) rf.value=ev.recurrence.frequency||'weekly';
      if(rw) rw.value=ev.recurrence.weekday!==undefined?ev.recurrence.weekday:1;
      if(rwm) rwm.value=ev.recurrence.weekOfMonth||1;
      if(rmw) rmw.value=ev.recurrence.weekday!==undefined?ev.recurrence.weekday:1;
      if(re) re.value=ev.recurrence.endDate||'';
      if(rs) rs.value=ev.recurrence.startDate||'';
      if(rid) rid.value=ev.recurrence.intervalDays||7;
      this.toggleFreqOpts();
    }
    // Scroll to top of form + highlight name field
    const ap=$('adminPanel'); if(ap) ap.scrollTop=0;
    if(nm){ nm.focus(); nm.select(); }
  },

  _delEv(i){const evs=[...(S.get('events')||[])];evs.splice(i,1);S.set('events',evs);this.renderAll();this._loadAdminEvents();},

  resetEvtForm(){
    ['eName','eDate','eTime','eRecurTime','eDesc','ePrice','eEndDate','eCustomStart'].forEach(id=>{const el=$(id);if(el)el.value='';});
    const ri=$('eEditId'); if(ri) ri.value='';
    const ct=$('eCat'); if(ct) ct.value='🎭 Sonstige';
    const cb=$('eIsRecurring'); if(cb) cb.checked=false;
    this.toggleRecurring();
  },

  toggleRecurring(){
    const cb=$('eIsRecurring');
    const isRec=cb&&cb.checked;
    const ro=$('recurringFields'); if(ro) ro.style.display=isRec?'block':'none';
    const ot=$('oneTimeFields'); if(ot) ot.style.display=isRec?'none':'block';
  },

  toggleFreqOpts(){
    const rf=$('eFreq');
    const freq=rf?rf.value:'weekly';
    const wo=$('weeklyOpts'),mo=$('monthlyOpts'),co=$('customOpts');
    if(wo) wo.style.display=freq==='weekly'?'block':'none';
    if(mo) mo.style.display=freq==='monthly'?'block':'none';
    if(co) co.style.display=freq==='custom'?'block':'none';
  },

  saveEvent(){
    const nm=$('eName'),dc=$('eDesc'),pr=$('ePrice'),ct=$('eCat'),ri=$('eEditId');
    const cb=$('eIsRecurring');
    const isRec=cb&&cb.checked;
    if(!nm||!nm.value.trim()){alert('Bitte Event-Name eingeben!');return;}
    const dt=$('eDate'), tm=isRec?$('eRecurTime'):$('eTime');
    if(!isRec&&(!dt||!dt.value)){alert('Bitte Datum eingeben!');return;}
    const ev={
      id:'e'+(Date.now()),
      name:nm.value.trim(),
      time:tm?tm.value:'',
      desc:dc?dc.value.trim():'',
      price:pr?pr.value.trim():'',
      cat:ct?ct.value:'🎭 Sonstige',
      type:isRec?'recurring':'one-time'
    };
    if(!isRec) ev.date=dt.value;
    if(isRec){
      ev.enabled=true;
      const rf=$('eFreq'),rw=$('eWeekday'),rwm=$('eWeekOfMonth'),
            rmw=$('eMonthWeekday'),re=$('eEndDate'),rs=$('eCustomStart'),
            rid=$('eCustomDays');
      const freq=rf?rf.value:'weekly';
      ev.recurrence={
        frequency:freq,
        weekday:freq==='monthly'?(rmw?parseInt(rmw.value):1):(rw?parseInt(rw.value):1),
        weekOfMonth:rwm?parseInt(rwm.value):1,
        endDate:re?re.value:'',
        startDate:rs?rs.value:'',
        intervalDays:rid?parseInt(rid.value):7
      };
    }
    const evs=[...(S.get('events')||[])];
    const idx=ri&&ri.value!==''?parseInt(ri.value):-1;
    if(idx>=0&&idx<evs.length) evs[idx]={...evs[idx],...ev};
    else evs.push(ev);
    S.set('events',evs);
    this.resetEvtForm();
    this.renderAll();
    this._loadAdminEvents();
    toast('Event gespeichert! ✅');
  },

  /* Admin: Hours */
  _loadAdminHours(){
    const hours=S.get('hours')||[];
    const DAYS=['Mo','Di','Mi','Do','Fr','Sa','So'];
    const wrap=$('hoursEditor'); if(!wrap) return;
    wrap.innerHTML=DAYS.map((d,i)=>{
      const h=hours[i]||{open:false,from:'18:00',to:'23:00'};
      return `<div class="hours-row">
        <label class="tog-sw"><input type="checkbox" id="hOpen${i}" ${h.open?'checked':''} onchange="BB.saveHours()"><div class="tog-sl"></div></label>
        <span class="hours-day">${d}</span>
        <input type="time" id="hFrom${i}" value="${esc(h.from||'18:00')}" onchange="BB.saveHours()" class="time-input">
        <span>–</span>
        <input type="time" id="hTo${i}" value="${esc(h.to||'23:00')}" onchange="BB.saveHours()" class="time-input">
      </div>`;
    }).join('');
  },

  saveHours(){
    const hours=Array.from({length:7},(_,i)=>({
      open:$('hOpen'+i)?$('hOpen'+i).checked:false,
      from:$('hFrom'+i)?$('hFrom'+i).value:'18:00',
      to:$('hTo'+i)?$('hTo'+i).value:'23:00'
    }));
    S.set('hours',hours);this.renderHours();toast('Öffnungszeiten gespeichert! ✅');
  },

  /* Admin: Texts */
  _loadAdminTexts(){
    const t=S.get('texts')||{};
    const fields={tHero1:'hero1',tHero2:'hero2',tHeroTag:'heroTag',tAboutH:'aboutH',tAboutP1:'aboutP1',tAboutP2:'aboutP2',tAddr:'addr',tWa:'wa',tEmail:'email'};
    Object.entries(fields).forEach(([elId,key])=>{const el=$(elId);if(el)el.value=t[key]||'';});
  },

  saveTexts(){
    const t=S.get('texts')||{};
    const fields={tHero1:'hero1',tHero2:'hero2',tHeroTag:'heroTag',tAboutH:'aboutH',tAboutP1:'aboutP1',tAboutP2:'aboutP2',tAddr:'addr',tEmail:'email'};
    Object.entries(fields).forEach(([elId,key])=>{const el=$(elId);if(el)t[key]=el.value.trim();});
    const waEl=$('tWa');if(waEl)t.wa=waEl.value.replace(/\D/g,'');
    S.set('texts',t);this.renderTexts();this.buildWa();toast('Texte gespeichert! ✅');
  },

  /* Admin: Sections */
  _loadSecToggles(){
    const secs=S.get('sections')||{};
    const labels={about:'Über uns',events:'Events',hours:'Öffnungszeiten',reservation:'Reservierung',social:'Instagram',contact:'Kontakt'};
    const wrap=$('secToggles');if(!wrap)return;
    wrap.innerHTML=Object.entries(labels).map(([k,lbl])=>`
      <div class="tog-row"><span class="tog-lbl">${lbl}</span>
      <label class="tog-sw"><input type="checkbox" ${secs[k]!==false?'checked':''} onchange="BB._togSec('${k}',this.checked)"><div class="tog-sl"></div></label></div>`
    ).join('');
  },
  _togSec(k,v){const secs=S.get('sections')||{};secs[k]=v;S.set('sections',secs);this.renderSections()},

  /* Admin: Password */
  changePw(){
    const pw=$('newPw')?$('newPw').value:'', cn=$('newPwC')?$('newPwC').value:'';
    if(!pw||pw.length<4){alert('Mindestens 4 Zeichen!');return}
    if(pw!==cn){alert('Passwörter stimmen nicht überein!');return}
    S.set('password',pw);
    if($('newPw'))$('newPw').value='';if($('newPwC'))$('newPwC').value='';
    toast('Passwort geändert! 🔐');
  },

  /* Admin: Popup Toggle */
  savePopupSetting(v){S.set('popupEnabled',v);toast(v?'Popup aktiviert':'Popup deaktiviert');},

  /* Admin: Images */
  _loadAdminImages() {
    const aboutUrl = S.get('aboutImage') || DEFAULT_ABOUT_IMAGE;
    const preview = document.getElementById('aboutImgPreview');
    if (preview) preview.src = aboutUrl;
    this._renderImgGrid('igAdminGrid',  S.get('igImages')      || DEFAULT_IG_IMAGES,  'ig');
    this._renderImgGrid('galAdminGrid', S.get('galleryImages') || DEFAULT_GALLERY_IMAGES, 'gallery');
    this._renderStoryAdmin('kneipe');
    this._renderStoryAdmin('party');

  },

  _renderStoryAdmin(mood) {
    const key     = mood === 'party' ? 'storyParty' : 'storyKneipe';
    const def     = mood === 'party' ? DEFAULT_STORY_PARTY : DEFAULT_STORY_KNEIPE;
    const panels  = S.get(key) || def;
    const gridId  = mood === 'party' ? 'storyAdminParty' : 'storyAdminKneipe';
    const grid    = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = panels.map((p, i) => {
      const thumb = p.url ? '<img src="' + esc(p.url) + '" alt="Panel ' + (i+1) + '" class="story-edit-thumb"/>' :
        '<div class="story-edit-thumb story-edit-placeholder">🖼 Kein Bild</div>';
      return '<div class="story-edit-card">' +
        '<div class="story-edit-header"><span class="story-num">0' + (i+1) + '</span>' +
        '<label class="btn-a sec sm" style="cursor:pointer">Bild wählen' +
        '<input type="file" accept="image/*" style="display:none" onchange="BB._uploadStoryImg(this,\'' + mood + '\',' + i + ')"/>' +
        '</label></div>' +
        thumb +
        '<div class="fg" style="margin-top:.5rem"><label>Zitat</label>' +
        '<input type="text" value="' + esc(p.quote) + '" placeholder="„Zitat…"" onblur="BB._saveStoryText(\'' + mood + '\',' + i + ',\'quote\',this.value)"/></div>' +
        '<div class="fg"><label>Untertitel</label>' +
        '<input type="text" value="' + esc(p.sub) + '" placeholder="Untertitel…" onblur="BB._saveStoryText(\'' + mood + '\',' + i + ',\'sub\',this.value)"/></div>' +
        '</div>';
    }).join('');
  },

  _saveStoryText(mood, i, field, value) {
    const key    = mood === 'party' ? 'storyParty' : 'storyKneipe';
    const def    = mood === 'party' ? DEFAULT_STORY_PARTY : DEFAULT_STORY_KNEIPE;
    const panels = JSON.parse(JSON.stringify(S.get(key) || def));
    panels[i][field] = value.trim();
    S.set(key, panels);
    this.renderStory();
    toast('Text gespeichert.');
  },

  _uploadStoryImg(input, mood, i) {
    if (!input.files[0]) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = await _compress(e.target.result, 1200, 0.82);
      const key    = mood === 'party' ? 'storyParty' : 'storyKneipe';
      const def    = mood === 'party' ? DEFAULT_STORY_PARTY : DEFAULT_STORY_KNEIPE;
      const panels = JSON.parse(JSON.stringify(S.get(key) || def));
      panels[i].url = dataUrl;
      S.set(key, panels);
      this.renderStory();
      this._renderStoryAdmin(mood);
      toast('Story-Bild aktualisiert! 🖼');
    };
    reader.onerror = () => toast('Fehler beim Lesen der Datei.');
    reader.readAsDataURL(input.files[0]);
    input.value = '';
  },

  _renderImgGrid(gridId, imgs, tgt) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    if (!imgs.length) {
      grid.innerHTML = '<p style="color:var(--text3);font-size:.82rem;text-align:center;padding:1rem;grid-column:1/3">Noch keine Bilder.</p>';
      return;
    }
    grid.innerHTML = imgs.map((img, i) =>
      '<div class="img-admin-card" draggable="true" data-idx="' + i + '" data-tgt="' + tgt + '">' +
      '<img src="' + esc(img.url) + '" alt="' + esc(img.label) + '" loading="lazy"/>' +
      '<div class="img-admin-card-body">' +
      '<input type="text" value="' + esc(img.label) + '" onblur="BB._updateImgLabel(' + i + ',this.value,\'' + tgt + '\')" placeholder="Bezeichnung"/>' +
      '<div class="img-admin-card-actions">' +
      '<button class="btn-a sm danger" onclick="BB._deleteImg(' + i + ',\'' + tgt + '\')">&#128465; Löschen</button>' +
      '</div></div></div>'
    ).join('');
    this._initDrag(grid);
  },

  _initDrag(grid) {
    let from = null;
    grid.querySelectorAll('.img-admin-card').forEach(card => {
      card.addEventListener('dragstart', e => {
        from = parseInt(card.dataset.idx);
        card.classList.add('img-dragging');
        e.dataTransfer.effectAllowed = 'move';
      });
      card.addEventListener('dragend', () => {
        card.classList.remove('img-dragging');
        grid.querySelectorAll('.img-admin-card').forEach(c => c.classList.remove('img-drag-over'));
      });
      card.addEventListener('dragover', e => {
        e.preventDefault();
        grid.querySelectorAll('.img-admin-card').forEach(c => c.classList.remove('img-drag-over'));
        card.classList.add('img-drag-over');
      });
      card.addEventListener('dragleave', () => card.classList.remove('img-drag-over'));
      card.addEventListener('drop', e => {
        e.preventDefault();
        card.classList.remove('img-drag-over');
        const to = parseInt(card.dataset.idx);
        const tgt = card.dataset.tgt;
        if (from !== null && from !== to) { IMAGES.reorder(tgt, from, to); this.renderImages(); this._loadAdminImages(); }
        from = null;
      });
    });
  },

  async _uploadImages(input, tgt) {
    if (!input.files.length) return;
    const target = tgt || 'gallery';
    toast('Bilder werden hochgeladen…');
    await IMAGES.upload(input.files, target, () => {
      this.renderImages();
      this._loadAdminImages();
      toast(input.files.length + ' Bild(er) hochgeladen! \uD83D\uDDBC');
    });
    input.value = '';
  },

  async _deleteImg(i, tgt) {
    if (!confirm('Bild löschen?')) return;
    await IMAGES.deleteFrom(i, tgt || 'gallery', () => {
      this.renderImages();
      this._loadAdminImages();
      toast('Bild gelöscht.');
    });
  },

  _updateImgLabel(i, label, tgt) {
    const trimmed = label.trim();
    if (!trimmed) return;
    IMAGES.updateLabelIn(i, trimmed, tgt || 'gallery');
    this.renderImages();
    toast('Bezeichnung gespeichert.');
  },

  _uploadAboutImage(input) {
    if (!input.files[0]) return;
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = await _compress(e.target.result, 1400, 0.85);
      // Lokal sofort aktualisieren
      _store['aboutImage'] = dataUrl;
      IDB.set('aboutImage', dataUrl);
      const aboutFrame = document.getElementById('aboutImgFrame');
      if (aboutFrame) { const img = aboutFrame.querySelector('img'); if (img) { img.src = dataUrl; img.style.visibility = ''; } }
      const preview = document.getElementById('aboutImgPreview');
      if (preview) preview.src = dataUrl;
      toast('Titelbild wird gespeichert… ⏳');
      // Erst zu Supabase hochladen, DANN "gespeichert" zeigen (verhindert Datenverlust beim Schließen)
      await _supaImgSet('aboutImage', dataUrl);
      toast('Titelbild gespeichert \u2705');
    };
    reader.onerror = () => toast('Fehler beim Lesen der Datei.');
    reader.readAsDataURL(file);
    input.value = '';
  },


  /* Admin: Export / Reset */
  exportData(){
    const data={events:S.get('events'),hours:S.get('hours'),texts:S.get('texts'),sections:S.get('sections')};
    const a=document.createElement('a');
    a.href=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));
    a.download='blixxem-bennard-daten.json';a.click();URL.revokeObjectURL(a.href);toast('Exportiert! 📤');
  },
  resetAll(){
    if(!confirm('Wirklich ALLES zurücksetzen?\nDas kann nicht rückgängig gemacht werden!'))return;
    ['events','hours','texts','sections','password','popupEnabled','promo','archive','igImages','galleryImages','aboutImage','storyKneipe','storyParty'].forEach(k=>S.del(k));
    localStorage.removeItem('bb_popup_dismissed');
    this.renderAll();this._openAdmin();toast('Zurückgesetzt.');
  }

}; // end BB
/* ════════════════════════════════════════════════════════════
   MODULE: COOKIE — DSGVO-konform (Art. 7 DSGVO / § 25 TTDSG)
   Speichert Einwilligungsstatus in localStorage.
   Kein Banner bei rein technisch-notwendiger Speicherung nötig,
   aber Transparenz und Widerrufsrecht werden gewährt.
   ════════════════════════════════════════════════════════════ */
const COOKIE = {
  /* Nur technisch notwendige Speicherung — kein Consent-Banner erforderlich
     gemäß §25 Abs. 2 TTDSG / Erwägungsgrund 47 DSGVO.
     Kein Tracking, keine Werbung, keine Weitergabe an Dritte. */
  init() {
    // Alte Cookie-Consent-Keys aufräumen (falls vorhanden)
    try { localStorage.removeItem('bb_cookie_consent'); } catch {}
  }
}

window.BB = BB;
window.GALLERY = GALLERY;

/* ── BOOT ── */
const _boot = async () => {
  // 1. Lokale Daten laden (IDB + localStorage) — sofort, kein Netzwerk
  _loadFromLocalStorage();
  await _loadFromIDB();

  // 2. Texte + Storage-Bild-URLs von Supabase laden (max 3s — danach Fallback)
  const _supaTextPromise = _supaAvailable
    ? _loadTextFromSupabase().catch(() => {})
    : Promise.resolve();
  if (_supaAvailable) {
    const timeout = new Promise(r => setTimeout(r, 3000));
    await Promise.race([_supaTextPromise, timeout]);
  }

  // 3. Lade-Flag setzen wenn noch keine Bilder vorhanden (verhindert Flash alter Defaults)
  const _hasLocalImages = [..._IMG_KEYS].some(k => {
    const v = _store[k];
    return Array.isArray(v) ? v.length > 0 : v != null;
  });
  if (_supaAvailable && !_hasLocalImages) _supaImgLoading = true;

  // 4. Sofort rendern (Texte korrekt; Bilder aus Supabase oder Lade-Zustand)
  BB.init();

  // 5. Falls Supabase nach dem Timeout antwortet: Bilder sofort neu rendern (kein Flash)
  _supaTextPromise.then(() => { _supaImgLoading = false; BB.renderImages(); });

  // 6. Hintergrund: alte bb_*-Zeilen laden (nur noch nötig vor Storage-Migration)
  //    + Migration der base64-Bilder zu Supabase Storage (einmalig, pro Gerät mit IDB-Daten)
  if (_supaAvailable) {
    _loadImagesFromSupabase()
      .then(() => { _supaImgLoading = false; BB.renderAll(); })
      .catch(() => { _supaImgLoading = false; });
    _syncIDBToSupa(); // migriert base64 → Storage-URL (einmalig)
  }
};
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _boot);
else _boot();

})();
