const packagingReferences = [
  { file: '02-ghost-hardware.png', width: 564, height: 582, x: -600, y: -270, size: 210, title: 'Chrome pouch, orange label and iconography', alt: 'Reflective foil hardware pouch with a fluorescent orange label filled with black symbols.' },
  { file: '03-amg-symbols.png', width: 478, height: 604, x: 150, y: -450, size: 190, title: 'Foil, circular symbols and the human figure', alt: 'Silver foil pouch on a black background, printed with two circular black marks including a Vitruvian figure.' },
  { file: '04-face-mask.png', width: 501, height: 588, x: -350, y: 270, size: 190, title: 'Chrome surface and minimal black print', alt: 'Stacked reflective foil face-mask sachets with small black typographic markings.' },
  { file: '05-coffee-pouch.png', width: 832, height: 628, x: -70, y: 300, size: 250, title: 'Material first — silver coffee pouch', alt: 'Long silver coffee pouch with one small, high-contrast black label.' },
  { file: '06-white-refill.png', width: 501, height: 620, x: -735, y: -630, size: 210, title: 'Quiet labelling and a metallic environment', alt: 'White refill pouch with a small black label, photographed among metal profiles.' },
  { file: '07-wolf-iconography.png', width: 499, height: 611, x: -100, y: -450, size: 180, title: 'Symbol-led foil packaging', alt: 'Silver pouch with a large black wolf silhouette and the letters I and O.' },
  { file: '08-droplet-pouch.png', width: 517, height: 641, x: 430, y: -260, size: 200, title: 'One clear symbol on reflective foil', alt: 'Reflective chrome pouch carrying one oversized white droplet illustration.' },
  { file: '09-iridescent-cartons.png', width: 553, height: 556, x: 690, y: -510, size: 210, title: 'Colour adaptations on a silver base', alt: 'Three metallic cartons with restrained lettering and iridescent blue, amber and purple finishes.' },
  { file: '10-orange-tins.png', width: 494, height: 628, x: 470, y: 120, size: 185, title: 'Chrome, embossing and a flavour accent', alt: 'Three stacked square pull-tab tins with silver lids and bright orange sides.' },
  { file: '11-bravo-sierra.png', width: 635, height: 634, x: 700, y: -125, size: 210, title: 'Reflective material, condensation and tactility', alt: 'Opened silver foil sachet with water droplets and minimal black Bravo Sierra lettering.' },
  { file: '12-embossed-tin.png', width: 484, height: 637, x: 240, y: 280, size: 180, title: 'Embossed metal and a small colour signal', alt: 'Silver rectangular tin with embossed lettering and a narrow orange label.' },
  { file: '13-eye-symbol.jpg', width: 430, height: 430, x: -360, y: -100, size: 130, title: 'Eye iconography', alt: 'Grainy silver eye and branching figure on black, with four small dots overhead.' },
  { file: '14-sculptural-symbol.jpg', width: 736, height: 736, x: -850, y: 120, size: 180, title: 'A sculptural symbolic form', alt: 'Black sculptural emblem with pointed branches and spherical ends on a grey field.' },
  { file: '15-metal-eye-charm.jpg', width: 939, height: 813, x: 470, y: 500, size: 230, title: 'Metal eye charm', alt: 'A textured silver eye charm surrounded by radiating points on a black background.' },
  { file: '16-golden-diagram.jpg', width: 1200, height: 1600, x: 740, y: 290, size: 210, title: 'Golden diagram and symbolic engraving', alt: 'A golden circular engraved diagram with numbers and human figures on black.' },
  { file: '17-packaging-reference.mp4', poster: '17-packaging-poster.jpg', type: 'video', width: 720, height: 1280, x: -600, y: 120, size: 160, title: 'Metal charm reference — motion study', alt: 'Looping reference video showing a sculptural silver charm.' },
  { file: '18-seoul-tonic.jpg', width: 1200, height: 1500, title: 'Spout pouch and a bold graphic symbol', alt: 'Silver Seoul Tonic spout pouch with a black botanical emblem and condensation.' },
  { file: '19-green-postage.jpg', width: 488, height: 600, title: 'Postage, portrait and printed texture', alt: 'Green Indian postage-style emblems and an oval portrait printed on pale paper.' },
  { file: '20-circular-seals.jpg', width: 736, height: 896, title: 'Circular seals and figurative iconography', alt: 'Two black-and-white circular graphic seals with typography and a mounted figure.' },
  { file: '21-debut-medallion.jpg', width: 1080, height: 1350, title: 'Medallion, relief and a graphic identity', alt: 'A silver octagonal medallion with a figurative relief surrounded by black typography.' },
  { file: '22-embossed-seals.jpg', width: 1000, height: 1333, title: 'Metal marks and wax seals', alt: 'A collection of embossed silver emblems, coloured wax seals and a sculpted face.' },
  { file: '23-valley-of-gold.jpg', width: 735, height: 751, title: 'Wrapped object with a metal seal', alt: 'Green Valley of Gold soap packaging bound in metallic cord with an embossed seal.' },
  { file: '24-engraved-identity.jpg', width: 1200, height: 1600, title: 'Engraving and symbolic print', alt: 'An engraved animal illustration and a blue ornamental graphic printed over pale paper.' },
  { file: '25-foil-embossing.jpg', width: 736, height: 807, title: 'Illustrative foil embossing', alt: 'A large silver foil illustration embossed on a brown paper cover.' },
  { file: '26-silver-eye-emblem.jpg', width: 1199, height: 1489, title: 'Silver eye emblem on textured paper', alt: 'A circular silver eye emblem and serif lettering embossed on textured ochre paper.' },
  { file: '27-blanxart.jpg', width: 540, height: 720, title: 'Heritage illustration and a quiet wrapper', alt: 'A pale Blanxart chocolate wrapper with blue typography and a small figurative illustration.' },
  { file: '28-neon-header-pouch.jpg', width: 736, height: 919, title: 'Chrome pouch with a colour-coded header', alt: 'A reflective silver pouch with a bright yellow-green header card and black print.' },
  { file: '29-coffee-hand-pouch.jpg', width: 768, height: 1024, title: 'Figurative print on a silver pouch', alt: 'Silver Nine Two Coffee Lab sachets printed with a hand making a peace sign.' },
  { file: '30-diome-sachets.jpg', width: 1200, height: 1200, title: 'Small-format silver sachets', alt: 'A closely arranged stack of metallic Diome sachets with restrained black print.' },
  { file: '31-mineral-pouch-store.jpeg', width: 399, height: 501, title: 'Spout pouch with a flavour colour signal', alt: 'A hand holding a small silver mineral drink spout pouch with a purple header in a shop.' },
  { file: '32-mineral-pouch.jpeg', width: 447, height: 447, title: 'Silver spout pouch and purple accent', alt: 'A silver mineral drink spout pouch with a white cap and purple colour accent.' },
  { file: '33-packaging-motion.mp4', poster: '33-packaging-motion-poster.jpg', type: 'video', width: 1280, height: 720, title: 'Monochrome reference film', alt: 'Looping monochrome reference film with layered organic and natural imagery.' },
];

const merchandisingReferences = [
  { file: 'merch-01-pilgrim-badges-green.jpg', width: 1170, height: 1532, title: 'Pilgrim badges — green presentation', alt: 'Green paper booklet displaying small silver pilgrim badges shaped like a flower, anchor and key.' },
  { file: 'merch-02-pilgrim-badges-ochre.jpg', width: 1170, height: 1533, title: 'Pilgrim badges — ochre presentation', alt: 'Ochre booklet displaying small silver pilgrim badges on a dark ground.' },
  { file: 'merch-03-gold-medallion.jpg', width: 1200, height: 1800, title: 'Gold medallion on dark cloth', alt: 'An octagonal gold medallion with a classical figure and lettering on textured black cloth.' },
  { file: 'merch-04-vessel-pendants.png', width: 382, height: 603, title: 'Metal vessel pendants', alt: 'Two cylindrical silver pendants with oval windows, one suspended from a chain.' },
  { file: 'merch-05-vintage-flask.png', width: 529, height: 472, title: 'Textured silver pocket flask', alt: 'A small rectangular silver flask with a finely textured face and an open hinged cap.' },
  { file: 'merch-06-silver-flask.png', width: 510, height: 459, title: 'Brushed silver hip flask', alt: 'A brushed stainless steel hip flask with a small engraved mark.' },
  { file: 'merch-07-campsite-flask.png', width: 379, height: 720, title: 'Tall steel flask', alt: 'A tall rectangular silver flask with a tethered black cap and restrained black print.' },
  { file: 'merch-08-beads-hand.png', width: 512, height: 642, title: 'Beads and a sculptural hand', alt: 'Dark and gold beads with a small charm arranged around a sculptural hand on red.' },
  { file: 'merch-09-beads-display.png', width: 514, height: 646, title: 'Beaded objects and a metal charm', alt: 'Two beaded bracelets with a small gold charm displayed on a black slab over red.' },
  { file: 'merch-10-figure-charms.png', width: 470, height: 631, title: 'Small figurative metal charms', alt: 'Seven flat metal human figures with outstretched arms on a pale ground.' },
  { file: 'merch-11-metallic-print-shirt.png', width: 926, height: 631, title: 'Metallic print on a white T-shirt', alt: 'A white T-shirt with a large reflective rectangular silver print across the chest.' },
  { file: 'merch-12-curved-incense-holder.png', width: 495, height: 626, title: 'Curved metal incense holder', alt: 'A curved silver incense holder with a smoking incense stick against a quiet gradient ground.' },
  { file: 'merch-13-cube-incense-holder.png', width: 512, height: 644, title: 'Metal cube incense holder', alt: 'A hand holding a small metal cube with a diagonally positioned incense stick.' },
  { file: 'merch-14-embossed-metal-figures.jpg', width: 1080, height: 1350, title: 'Embossed figures in metal', alt: 'Two silver metal plates embossed with a reclining figure and four standing human silhouettes.' },
  { file: 'merch-15-foil-gorilla.jpg', width: 736, height: 1307, title: 'Figurative relief in silver foil', alt: 'A gorilla holding a small vessel, embossed into a crinkled sheet of silver foil on a dark ground.' },
  { file: 'merch-16-silver-nourishment-medallion.jpg', width: 736, height: 1307, title: 'Silver medallion — a ritual of nourishment', alt: 'A circular silver relief showing a person pouring a drink, with cups, bread and flowers on a table.' },
  { file: 'merch-17-brass-card-case.jpg', width: 750, height: 983, title: 'Brass card case on red cloth', alt: 'An open brass card case holding white cards on deep red fabric, with its lid beside it.' },
  { file: 'merch-18-metal-envelope-seal.jpg', width: 736, height: 920, title: 'Sculptural metal seal', alt: 'A softly rounded gold metal nameplate sealing the flap of a pale envelope.' },
];
const irlReferences = [
  {
    "file": "irl-01-candle-staircase.jpg",
    "width": 1000,
    "height": 1500,
    "title": "Candlelit stone staircase",
    "alt": "A weathered stone staircase and distressed plaster walls illuminated by tall candles in brass holders."
  },
  {
    "file": "irl-02-ritual-display.png",
    "width": 1179,
    "height": 1351,
    "title": "Quiet ritual display",
    "alt": "Ceramic vessels and an open reference book arranged on a low wooden platform in a pale room."
  },
  {
    "file": "irl-03-stone-rucksack.jpg",
    "width": 620,
    "height": 363,
    "title": "Stone rucksack",
    "alt": "A two-panel reference showing a rounded stone fitted with backpack straps and worn on a person’s back."
  },
  {
    "file": "irl-04-amber-gathering.jpg",
    "width": 1179,
    "height": 1479,
    "title": "An amber gathering space",
    "alt": "People seated in a circle on sand beneath a large suspended circular canopy in warm amber light."
  },
  {
    "file": "irl-05-draped-dining.jpg",
    "width": 1062,
    "height": 1489,
    "title": "Draped communal dining",
    "alt": "A long dining table beneath towering folds of warm illuminated fabric in a dark hall."
  },
  {
    "file": "irl-06-monastic-room.jpg",
    "width": 3024,
    "height": 4032,
    "title": "A spare monastic room",
    "alt": "A candlelit room with rough pale plaster, a simple bed, dark wooden chairs and a low table."
  },
  {
    "file": "irl-07-arched-window.jpg",
    "width": 1170,
    "height": 1442,
    "title": "Arched window and wax",
    "alt": "A pointed arched window with a patterned grille and pooled candle wax on its stone sill."
  },
  {
    "file": "irl-08-candle-niche.jpg",
    "width": 736,
    "height": 751,
    "title": "A candle in raw masonry",
    "alt": "A single lit candle in a niche cut into rough plaster and exposed brick."
  },
  {
    "file": "irl-09-confessional-grille.jpg",
    "width": 753,
    "height": 1000,
    "title": "Timber and a patterned grille",
    "alt": "A dark wooden confessional screen with a decorative grille and a small cross above it."
  },
  {
    "file": "irl-10-metal-linen-screen.jpg",
    "width": 1800,
    "height": 2118,
    "title": "Metal and linen screen",
    "alt": "A folding screen made from hinged metal panels with pale linen suspended along its lower edge."
  },
  {
    "file": "irl-11-fractured-retail.jpg",
    "width": 736,
    "height": 920,
    "title": "Fractured concrete retail",
    "alt": "A retail display viewed through a broken concrete wall with exposed reinforcing metal."
  },
  {
    "file": "irl-12-rough-shop-entrance.jpg",
    "width": 564,
    "height": 564,
    "title": "A rough concrete entrance",
    "alt": "A Gentle Monster storefront with a large irregular opening cut through a concrete facade."
  },
  {
    "file": "irl-13-stone-metal-table.jpg",
    "width": 736,
    "height": 1062,
    "title": "Stone and metal table",
    "alt": "A long reflective metal tabletop resting on stacks of irregular pale stone blocks."
  },
  {
    "file": "irl-14-broken-concrete-entry.jpg",
    "width": 1080,
    "height": 1920,
    "title": "An opening through concrete",
    "alt": "A narrow concrete entrance with a rough broken opening cut into its door."
  },
  {
    "file": "irl-15-stone-steel.jpg",
    "width": 1200,
    "height": 1500,
    "title": "Stone against steel",
    "alt": "A smooth rounded stone fastened to a vertical brushed metal surface with a black strap."
  },
  {
    "file": "irl-16-concrete-storefront.jpg",
    "width": 333,
    "height": 500,
    "title": "Concrete storefront on a busy street",
    "alt": "A tall concrete Gentle Monster storefront with a rough-edged entrance beside a street."
  },
  {
    "file": "irl-17-fractured-block.jpg",
    "width": 800,
    "height": 1200,
    "title": "Breaking a cast block",
    "alt": "Gloved hands using a hammer to break a pale cast block containing small coloured objects."
  },
  {
    "file": "irl-18-floating-stones.jpg",
    "width": 1000,
    "height": 1500,
    "title": "Stones suspended against concrete",
    "alt": "Visitors on a staircase beside a concrete wall displaying small rock fragments on metal supports."
  },
  {
    "file": "irl-19-wood-vessel-mould.jpg",
    "width": 1200,
    "height": 1255,
    "title": "Vessel and wooden mould",
    "alt": "A textured dark vessel enclosed within a roughly cut wooden mould."
  },
  {
    "file": "irl-20-sculptural-retail.jpg",
    "width": 735,
    "height": 1160,
    "title": "Sculptural retail installation",
    "alt": "Oversized pale sculptural product forms and a low display counter in a softly lit retail space."
  },
  {
    "file": "irl-21-concrete-display.jpg",
    "width": 735,
    "height": 980,
    "title": "Concrete display plinths",
    "alt": "Stepped pale concrete plinths holding small skincare containers in fine grey aggregate."
  },
  {
    "file": "irl-22-fluted-plinth.jpg",
    "width": 750,
    "height": 937,
    "title": "Fluted concrete plinth",
    "alt": "A pale fluted concrete pedestal holding skincare packaging and a small bottle."
  },
  {
    "file": "irl-23-metal-concrete-insert.jpg",
    "width": 900,
    "height": 1200,
    "title": "Metal inserted into concrete",
    "alt": "A reflective metal and wood insert set into a rough opening in the corner of a concrete block."
  },
  {
    "file": "irl-24-concrete-object.jpg",
    "width": 828,
    "height": 1266,
    "title": "Raw concrete and metal objects",
    "alt": "Small shiny metal objects resting in a broken recess on top of a raw concrete cube."
  },
  {
    "file": "irl-25-sculptural-heads.jpg",
    "width": 236,
    "height": 236,
    "title": "Sculptural head installation",
    "alt": "Oversized sculptural heads supported by exposed white mechanical structures on red circular platforms."
  }
];
const sectionReferences = { packaging: packagingReferences, merchandising: merchandisingReferences, irl: irlReferences };
let references = packagingReferences;

const missionExcerpts = [
  'We are the builders of the temple of self',
  'We believe the individual will is the supreme source of power.',
  'to belong so completely to oneself that even discipline becomes a form of freedom',
  'for those pulling heists on their own fate',
  'this becoming equal to the life one insists on living',
  'to help sustain the body that must carry it',
  'to support the climb our Sisyphean fate demands of us',
  'unlocks a new, more autonomous self.',
];

const board = document.querySelector('#reference-board');
const note = document.querySelector('#direction-note');
const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = [...document.querySelectorAll('[role="tabpanel"]')];
const viewer = document.querySelector('#image-viewer');
const viewerImage = document.querySelector('#viewer-image');
const viewerVideo = document.querySelector('#viewer-video');
const viewerCount = document.querySelector('#viewer-count');
const viewerCaption = document.querySelector('#viewer-caption');
const closeButton = document.querySelector('#viewer-close');
const rendered = new Map();
const period = { width: 1680, height: 1900 };
let fieldItems = composeField();
const camera = { x: 0, y: 0, zoom: innerWidth < 700 ? 0.85 : 1 };
const savedCameras = new Map();
const pointers = new Map();
let activeSection = 'packaging';
let activeReference = 0;
let lastReferenceButton = null;
let frame = 0;
let dragging = false;
let suppressClick = false;
let pointerStart = null;
let pinchStart = null;

function requestRender() { if (!frame) frame = requestAnimationFrame(renderCanvas); }

function composeField() {
  const isPackaging = references === packagingReferences;
  const isMerchandising = references === merchandisingReferences;
  const isIrl = references === irlReferences;
  const centreClearance = isPackaging ? 120 : isMerchandising ? 190 : 205;
  const excerpts = isPackaging ? missionExcerpts : isIrl ? [
    { text: 'the self is supreme', plain: true },
    { text: 'a space to retreat to self', plain: true },
  ] : [];
  const items = [];
  const laneWidth = 280;
  const gap = 32;
  const start = [-860, -900, -840, -880, -820, -870];
  const ends = [...start];
  const widths = [216, 232, 220, 238, 208, 226];
  const nudges = [-6, 4, 0, 7, -4, 2];
  const order = isPackaging ? [16, 0, 17, 11, 18, 1, 19, 12, 20, 31, 2, 21, 5, 22, 13, 23, 3, 24, 6, 25, 4, 26, 7, 27, 14, 28, 8, 29, 9, 30, 10, 15] : isMerchandising ? [0, 1, 2, 3, 7, 8, 9, 4, 5, 6, 13, 10, 14, 11, 15, 12, 16, 17] : [0, 9, 3, 10, 11, 2, 5, 12, 4, 6, 14, 13, 7, 15, 17, 16, 19, 20, 8, 18, 21, 22, 23, 24, 1];
  let quoteIndex = 0;
  function xFor(lane, width, offset = 0) { return -period.width / 2 + lane * laneWidth + (laneWidth - width) / 2 + offset; }
  function quoteHeight(text, width) { return Math.ceil((text.length + 2) / (width / 8.1)) * 23 + 12; }
  function addQuote(lane, y, available = Infinity) {
    if (!excerpts.length || (isIrl && quoteIndex >= excerpts.length)) return false;
    const excerpt = excerpts[quoteIndex % excerpts.length];
    const { text, href, plain } = typeof excerpt === 'string' ? { text: excerpt } : excerpt;
    const size = 224;
    const height = quoteHeight(text, size);
    if (height > available) return false;
    if ((lane === 2 || lane === 3) && y < centreClearance && y + height > -centreClearance) y = centreClearance + gap;
    items.push({ kind: 'quote', text, href, plain, x: xFor(lane, size), y, size, height, quoteIndex });
    ends[lane] = y + height + gap;
    quoteIndex++;
    return true;
  }
  order.forEach((index, position) => {
    const lane = ends.indexOf(Math.min(...ends));
    const size = widths[(position + lane) % widths.length];
    const height = size * references[index].height / references[index].width;
    let y = ends[lane];
    if ((lane === 2 || lane === 3) && y < centreClearance && y + height > -centreClearance) {
      addQuote(lane, y, -centreClearance - y - gap);
      y = centreClearance + gap;
    }
    items.push({ ...references[index], kind: 'media', index, x: xFor(lane, size, nudges[position % nudges.length]), y, size });
    ends[lane] = y + height + gap;
    if (position % 5 === 3 && quoteIndex < excerpts.length) addQuote(lane, ends[lane]);
  });
  // Packaging fills short lanes; IRL stops after its two short text elements.
  const target = Math.max(...ends);
  for (let lane = 0; lane < ends.length; lane++) {
    while (target - ends[lane] > 120) {
      if (!addQuote(lane, ends[lane], target - ends[lane])) break;
    }
  }
  while (quoteIndex < excerpts.length) {
    const lane = ends.indexOf(Math.min(...ends));
    addQuote(lane, ends[lane]);
  }
  period.height = Math.ceil((Math.max(...ends) + 920) / 20) * 20;
  if (isPackaging) {
    items.push({ kind: 'quote', text: 'We are the builders of the temple of self, for those pulling heists on their own fate', x: -215, y: -75, size: 430, height: 160, quoteIndex: 'centre', hero: true, omitOrigin: true });
  } else if (isMerchandising) {
    items.push({ kind: 'quote', text: 'monasterymade of hydration', href: 'https://monasterymade.com/attar?v=17618820333639', x: -215, y: -185, size: 430, height: 40, quoteIndex: 'monastery' });
  }
  return items;
}

function makeQuote(item) {
  const quote = document.createElement('blockquote');
  quote.className = `mission-quote${item.hero ? ' mission-quote--hero' : ''}`;
  const text = document.createElement(item.href ? 'a' : 'span');
  text.className = 'highlighted-copy';
  text.textContent = item.href || item.plain ? item.text : `“${item.text}”`;
  if (item.href) { text.href = item.href; text.target = '_blank'; text.rel = 'noopener noreferrer'; }
  quote.append(text);
  return quote;
}

function makeTile(index) {
  const reference = references[index];
  const tile = document.createElement('button');
  tile.className = 'reference-tile';
  tile.type = 'button';
  tile.setAttribute('aria-label', `Enlarge reference ${index + 1}: ${reference.title}`);
  let media;
  if (reference.type === 'video') {
    media = document.createElement('video');
    media.src = `./assets/${reference.file}`;
    media.poster = `./assets/${reference.poster}`;
    media.autoplay = true;
    media.loop = true;
    media.muted = true;
    media.playsInline = true;
    media.preload = 'auto';
    media.setAttribute('aria-label', reference.alt);
    media.addEventListener('loadeddata', () => media.play().catch(() => {}));
  } else {
    media = document.createElement('img');
    media.src = `./assets/${reference.file}`;
    media.alt = reference.alt;
    media.decoding = 'async';
    media.draggable = false;
    media.addEventListener('error', () => tile.classList.add('image-failed'));
  }
  media.width = reference.width;
  media.height = reference.height;
  tile.append(media);
  const indexLabel = document.createElement('span');
  indexLabel.className = 'tile-index';
  indexLabel.setAttribute('aria-hidden', 'true');
  indexLabel.textContent = reference.type === 'video' ? 'loop' : String(index + 1).padStart(2, '0');
  tile.append(indexLabel);
  tile.addEventListener('click', event => {
    if (suppressClick) { event.preventDefault(); return; }
    openReference(index, tile);
  });
  return tile;
}

function renderCanvas() {
  frame = 0;
  if (!sectionReferences[activeSection]) return;
  const width = board.clientWidth;
  const height = board.clientHeight;
  const zoom = camera.zoom;
  const overscan = 180;
  const left = camera.x - (width / 2 + overscan) / zoom;
  const right = camera.x + (width / 2 + overscan) / zoom;
  const top = camera.y - (height / 2 + overscan) / zoom;
  const bottom = camera.y + (height / 2 + overscan) / zoom;
  const retained = new Set();
  const minX = Math.floor((left - 1000) / period.width);
  const maxX = Math.ceil((right + 1000) / period.width);
  const minY = Math.floor((top - 850) / period.height);
  const maxY = Math.ceil((bottom + 850) / period.height);
  for (let cellY = minY; cellY <= maxY; cellY++) {
    for (let cellX = minX; cellX <= maxX; cellX++) {
      fieldItems.forEach((reference, itemIndex) => {
        if (reference.omitOrigin && cellX === 0 && cellY === 0) return;
        const x = reference.x + cellX * period.width;
        const y = reference.y + cellY * period.height;
        const mediaHeight = reference.kind === 'quote' ? reference.height : reference.size * reference.height / reference.width;
        if (x > right || x + reference.size < left || y > bottom || y + mediaHeight < top) return;
        const key = `${cellX}:${cellY}:${itemIndex}`;
        retained.add(key);
        let tile = rendered.get(key);
        if (!tile) { tile = reference.kind === 'quote' ? makeQuote(reference) : makeTile(reference.index); rendered.set(key, tile); board.append(tile); }
        const screenX = width / 2 + (x - camera.x) * zoom;
        const screenY = height / 2 + (y - camera.y) * zoom;
        const onScreen = screenX < width && screenX + reference.size * zoom > 0 && screenY < height && screenY + mediaHeight * zoom > 0;
        if (reference.kind === 'media') tile.tabIndex = onScreen ? 0 : -1;
        tile.querySelector('a')?.setAttribute('tabindex', onScreen ? '0' : '-1');
        tile.setAttribute('aria-hidden', String(!onScreen));
        tile.style.width = `${reference.size}px`;
        tile.style.transform = `translate3d(${screenX}px, ${screenY}px, 0) scale(${zoom})`;
      });
    }
  }
  for (const [key, tile] of rendered) {
    if (!retained.has(key)) { tile.querySelector('video')?.pause(); tile.remove(); rendered.delete(key); }
  }
  note.style.width = `${Math.min(430, (width - 40) / zoom)}px`;
  const noteWidth = note.offsetWidth;
  const noteHeight = note.offsetHeight;
  const noteX = width / 2 - camera.x * zoom - noteWidth * zoom / 2;
  const noteY = height / 2 - camera.y * zoom - noteHeight * zoom / 2;
  const noteOnScreen = noteX < width && noteX + noteWidth * zoom > 0 && noteY < height && noteY + noteHeight * zoom > 0;
  note.setAttribute('aria-hidden', String(!noteOnScreen));
  note.querySelectorAll('a').forEach(link => { link.tabIndex = noteOnScreen ? 0 : -1; });
  note.style.transform = `translate3d(${noteX}px, ${noteY}px, 0) scale(${zoom})`;
  document.querySelector('#zoom-value').textContent = `${Math.round(zoom * 100)}%`;
}

function moveCamera(dx, dy) { camera.x += dx / camera.zoom; camera.y += dy / camera.zoom; requestRender(); }
function setZoom(value, anchorX = innerWidth / 2, anchorY = innerHeight / 2) {
  const zoom = Math.max(0.4, Math.min(1.8, value));
  const x = anchorX - board.clientWidth / 2;
  const y = anchorY - board.clientHeight / 2;
  camera.x += x / camera.zoom - x / zoom;
  camera.y += y / camera.zoom - y / zoom;
  camera.zoom = zoom;
  requestRender();
}
function resetCamera() { camera.x = 0; camera.y = 0; camera.zoom = innerWidth < 700 ? 0.85 : 1; requestRender(); }

board.addEventListener('wheel', event => {
  if (event.ctrlKey || viewer.open || !sectionReferences[activeSection]) return;
  event.preventDefault();
  const factor = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? board.clientHeight : 1;
  const dx = event.shiftKey && !event.deltaX ? event.deltaY : event.deltaX;
  const dy = event.shiftKey && !event.deltaX ? 0 : event.deltaY;
  moveCamera(dx * factor, dy * factor);
}, { passive: false });

board.addEventListener('pointerdown', event => {
  if (event.target.closest('.direction-note, .mission-quote') || (event.button !== 0 && event.button !== 1)) return;
  pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  if (pointers.size === 2) {
    const [a, b] = [...pointers.values()];
    pinchStart = { distance: Math.hypot(a.x - b.x, a.y - b.y), zoom: camera.zoom };
    dragging = true;
    suppressClick = true;
  } else {
    pointerStart = { x: event.clientX, y: event.clientY, lastX: event.clientX, lastY: event.clientY };
    dragging = false;
    suppressClick = false;
  }
  if (!event.target.closest('.reference-tile')) board.focus({ preventScroll: true });
});
window.addEventListener('pointermove', event => {
  if (!pointers.has(event.pointerId)) return;
  pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  if (pointers.size === 2 && pinchStart) {
    const [a, b] = [...pointers.values()];
    setZoom(pinchStart.zoom * Math.hypot(a.x - b.x, a.y - b.y) / Math.max(1, pinchStart.distance), (a.x + b.x) / 2, (a.y + b.y) / 2);
    return;
  }
  if (!pointerStart) return;
  if (!dragging && Math.hypot(event.clientX - pointerStart.x, event.clientY - pointerStart.y) > 6) {
    dragging = true; suppressClick = true; board.classList.add('is-dragging');
  }
  if (dragging) { moveCamera(pointerStart.lastX - event.clientX, pointerStart.lastY - event.clientY); event.preventDefault(); }
  pointerStart.lastX = event.clientX;
  pointerStart.lastY = event.clientY;
}, { passive: false });
function endPointer(event) {
  pointers.delete(event.pointerId);
  if (pointers.size === 1) {
    const remaining = [...pointers.values()][0];
    pointerStart = { x: remaining.x, y: remaining.y, lastX: remaining.x, lastY: remaining.y };
    pinchStart = null;
  }
  if (pointers.size === 0) {
    board.classList.remove('is-dragging'); pointerStart = null; pinchStart = null; dragging = false;
    if (suppressClick) setTimeout(() => { suppressClick = false; }, 0);
  }
}
window.addEventListener('pointerup', endPointer);
window.addEventListener('pointercancel', endPointer);
window.addEventListener('blur', () => { pointers.clear(); pointerStart = null; pinchStart = null; dragging = false; board.classList.remove('is-dragging'); });
board.addEventListener('keydown', event => {
  if (event.target.closest('.direction-note, .mission-quote') || getSelection()?.toString()) return;
  const moves = { ArrowLeft: [-100, 0], ArrowRight: [100, 0], ArrowUp: [0, -100], ArrowDown: [0, 100] };
  if (moves[event.key]) { event.preventDefault(); moveCamera(...moves[event.key]); }
  if (event.key === '+' || event.key === '=') { event.preventDefault(); setZoom(camera.zoom + 0.1); }
  if (event.key === '-') { event.preventDefault(); setZoom(camera.zoom - 0.1); }
  if (event.key === 'Home' || event.key === '0') { event.preventDefault(); resetCamera(); }
});
document.querySelector('#zoom-out').addEventListener('click', () => setZoom(camera.zoom - 0.1));
document.querySelector('#zoom-in').addEventListener('click', () => setZoom(camera.zoom + 0.1));
document.querySelector('#zoom-reset').addEventListener('click', resetCamera);

function setSection(section, { focus = false, updateHash = true } = {}) {
  if (!tabs.some(tab => tab.dataset.section === section)) section = 'packaging';
  const changed = section !== activeSection;
  if (changed && sectionReferences[activeSection]) savedCameras.set(activeSection, { ...camera });
  if (changed && sectionReferences[section]) {
    for (const tile of rendered.values()) { tile.querySelector('video')?.pause(); tile.remove(); }
    rendered.clear();
    references = sectionReferences[section];
    fieldItems = composeField();
    Object.assign(camera, savedCameras.get(section) || { x: 0, y: 0, zoom: innerWidth < 700 ? 0.85 : 1 });
  }
  activeSection = section;
  if (sectionReferences[section]) document.querySelector(`#${section}-panel`).append(board);
  note.hidden = !sectionReferences[section];
  document.querySelector('#packaging-direction').hidden = section !== 'packaging';
  document.querySelector('#merchandising-direction').hidden = section !== 'merchandising';
  document.querySelector('#irl-direction').hidden = section !== 'irl';
  board.setAttribute('aria-label', `Infinite ${section} reference canvas`);
  tabs.forEach(tab => {
    const selected = tab.dataset.section === section;
    tab.setAttribute('aria-selected', String(selected)); tab.tabIndex = selected ? 0 : -1;
    if (selected && focus) tab.focus({ preventScroll: true });
  });
  panels.forEach(panel => { panel.hidden = panel.id !== `${section}-panel`; });
  for (const tile of rendered.values()) {
    const video = tile.querySelector('video');
    if (video) sectionReferences[section] ? video.play().catch(() => {}) : video.pause();
  }
  document.querySelector('#reference-count').textContent = sectionReferences[section] ? `${references.length} references` : 'awaiting references';
  document.querySelector('#canvas-hint').hidden = !sectionReferences[section];
  document.querySelector('#canvas-tools').hidden = !sectionReferences[section];
  document.querySelector('.skip-link').href = `#${section}-panel`;
  if (updateHash) history.replaceState(null, '', `#${section}`);
  requestRender();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => setSection(tab.dataset.section));
  tab.addEventListener('keydown', event => {
    let nextIndex;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = tabs.length - 1;
    if (nextIndex !== undefined) { event.preventDefault(); setSection(tabs[nextIndex].dataset.section, { focus: true }); }
  });
});
document.querySelector('.wordmark').addEventListener('click', event => { event.preventDefault(); setSection('packaging'); resetCamera(); });

function showReference(index) {
  activeReference = (index + references.length) % references.length;
  const reference = references[activeReference];
  viewerVideo.pause();
  viewerImage.hidden = reference.type === 'video'; viewerVideo.hidden = reference.type !== 'video';
  if (reference.type === 'video') {
    viewerVideo.setAttribute('aria-label', reference.alt);
    viewerVideo.src = `./assets/${reference.file}`; viewerVideo.poster = `./assets/${reference.poster}`; viewerVideo.play().catch(() => {});
  } else {
    viewerImage.src = `./assets/${reference.file}`; viewerImage.alt = reference.alt; viewerImage.width = reference.width; viewerImage.height = reference.height;
  }
  viewerCount.textContent = `${String(activeReference + 1).padStart(2, '0')} / ${references.length}`;
  viewerCaption.textContent = reference.title;
}
function openReference(index, source) {
  lastReferenceButton = source; showReference(index); document.body.classList.add('viewer-is-open'); viewer.showModal(); closeButton.focus({ preventScroll: true });
}
closeButton.addEventListener('click', () => viewer.close());
document.querySelector('#viewer-prev').addEventListener('click', () => showReference(activeReference - 1));
document.querySelector('#viewer-next').addEventListener('click', () => showReference(activeReference + 1));
viewer.addEventListener('keydown', event => {
  if ((event.key === 'ArrowLeft' || event.key === 'ArrowRight') && event.target !== viewerVideo) {
    event.preventDefault(); showReference(activeReference + (event.key === 'ArrowRight' ? 1 : -1));
  }
});
viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
viewer.addEventListener('close', () => {
  viewerVideo.pause(); document.body.classList.remove('viewer-is-open');
  if (lastReferenceButton?.isConnected) lastReferenceButton.focus({ preventScroll: true }); else board.focus({ preventScroll: true });
});
window.addEventListener('resize', requestRender);
window.addEventListener('hashchange', () => { const hash = location.hash.slice(1); if (tabs.some(tab => tab.dataset.section === hash)) setSection(hash, { updateHash: false }); });
setSection(location.hash.slice(1) || 'packaging', { updateHash: false });
