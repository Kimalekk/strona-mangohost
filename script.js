/* =========================================================
   KONFIGURACJA – podmień link do swojego serwera Discord
   ========================================================= */
const DISCORD_URL = "https://dc.mangohost.pl";
const PANEL_URL = "https://panel.mangohost.pl";

/* ---------- oferta ---------- */
const PLANS = {
  pakiety: [
    { id: "mini", name: "Mango Mini", color: "#22c55e", price: 20, ram: "4 GB", cpu: "2", disk: "30 GB" },
    { id: "standard", name: "Mango Standard", color: "#facc15", price: 40, ram: "8 GB", cpu: "4", disk: "60 GB" },
    { id: "pro", name: "Mango Pro", color: "#ff8a00", price: 80, ram: "16 GB", cpu: "8", disk: "120 GB", popular: true },
    { id: "extreme", name: "Mango Extreme", color: "#ef4444", price: 150, ram: "32 GB", cpu: "16", disk: "250 GB" },
  ],
};
const CATEGORY_NAMES = { pakiety: "Pakiet" };

const REVIEWS = [
  ["Kacper", "Mango Standard", "Przeniosłem serwer z innego hostingu i TPS w końcu stoi na 20. Wsparcie odpisało w 3 minuty."],
  ["Ola", "Mango Mini", "Panel bardzo intuicyjny, serwer postawiony w minutę. Polecam każdemu, kto ma dość laggów."],
  ["Bartek", "Mango Extreme", "Ryzen 9 mieli jak szalony, a atak DDoS w zeszłym tygodniu w ogóle nie był odczuwalny."],
  ["Wiktor", "Mango Pro", "Najlepszy stosunek ceny do jakości jaki widziałem. 40 graczy online i zero problemów."],
  ["Natalia", "Mango Standard", "Instalacja modpacka jednym kliknięciem – bajka. Ekipa na Discordzie mega pomocna."],
  ["Filip", "Mango Pro", "Stabilnie od 8 miesięcy, uptime jak w opisie. Ceny bardzo uczciwe."],
  ["Szymon", "Mango Extreme", "Postawiliśmy sieć z BungeeCordem, wszystko śmiga. Backupy uratowały nam tyłek po grieferze."],
  ["Julia", "Mango Mini", "Mały serwer survival dla ekipy – działa bez zarzutu, a support tłumaczy wszystko krok po kroku."],
  ["Michał", "Mango Pro", "Event na 80 graczy i TPS ani drgnął. Szybka konfiguracja i świetny kontakt. Zostaję na dłużej."],
  ["Kuba", "Mango Mini", "Serwer dla ekipy znajomych – tani, szybki i bez kombinowania. 10/10."],
];

/* ---------- ikony (rysowane, pomarańczowe) ---------- */
const ICONS = {
  cpu: '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
  ram: '<path d="M3 7h18v9H3z"/><path d="M7 10v3M11 10v3M15 10v3M19 10v3M3 16v3M21 16v3M7 16v2M11 16v2M15 16v2"/>',
  disk: '<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="12" cy="11" r="4"/><circle cx="12" cy="11" r=".6"/><path d="M7 17h2M16 17h1"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  box: '<path d="M21 8 12 3 3 8v8l9 5 9-5V8z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
  chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8M8 13h5"/>',
  close: '<path d="M18 6 6 18M6 6l12 12"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  headset: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="2.5" y="14" width="4" height="6" rx="1.5"/><rect x="17.5" y="14" width="4" height="6" rx="1.5"/><path d="M19.5 20c0 1.5-2 2-5 2"/>',
  refresh: '<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>',
  cart: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',
  clipboard: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
  pickaxe: '<path d="M3 21 13.5 10.5"/><path d="M5 5c4-3 10-3 14 1-1-1-4-1-6 1l-2 2"/><path d="M19 19c3-4 3-10-1-14 1 1 1 4-1 6l-2 2"/>',
  star: '<path d="m12 2 3 6.5 7 .8-5.2 4.8 1.4 7L12 17.6 5.8 21l1.4-7L2 9.3l7-.8L12 2z"/>',
  cloud: '<path d="M17.5 19H8a5 5 0 1 1 1-9.9A6 6 0 0 1 20.5 11a4 4 0 0 1-3 8z"/>',
  swords: '<path d="M14.5 17.5 3 6V3h3l11.5 11.5M13 19l6-6M16 16l4 4M19 21l2-2"/><path d="M9.5 6.5 13 3h3v3l-3.5 3.5M5 14l4 4M7 17l-3 3M3 19l2 2"/>',
  diamond: '<path d="M6 3h12l4 6-10 12L2 9l4-6z"/><path d="M2 9h20M12 21 8 9l4-6 4 6-4 12"/>',
  tornado: '<path d="M21 4H3M18 8H6M19 12H9M16 16h-6M11 20H9"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>',
  bolt: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
};
const icon = (name) =>
  `<svg class="ico-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ""}</svg>`;
const renderIcons = (root = document) =>
  root.querySelectorAll("i.ico[data-ico]").forEach((el) => { el.innerHTML = icon(el.dataset.ico); });
renderIcons();

/* ---------- helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const fmt = (n) => n.toLocaleString("pl-PL", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " zł";
const findPlan = (id) => {
  for (const [cat, list] of Object.entries(PLANS)) {
    const p = list.find((x) => x.id === id);
    if (p) return { ...p, cat };
  }
};

$("#year").textContent = new Date().getFullYear();
$$("[data-discord]").forEach((a) => { a.href = DISCORD_URL; a.target = "_blank"; a.rel = "noopener"; });
$$(`a[href="${PANEL_URL}"]`).forEach((a) => { a.target = "_blank"; a.rel = "noopener"; });

/* ---------- nav ---------- */
const nav = $("#nav");
addEventListener("scroll", () => nav.classList.toggle("is-scrolled", scrollY > 10), { passive: true });
$("#burger").addEventListener("click", () => nav.classList.toggle("menu-open"));
$$("#navLinks a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("menu-open")));

const sections = ["oferta", "antyddos", "opinie", "faq"].map((id) => document.getElementById(id));
addEventListener("scroll", () => {
  let current = null;
  sections.forEach((s) => { if (s.getBoundingClientRect().top < 160) current = s.id; });
  $$(".nav__link").forEach((l) => l.classList.toggle("is-active", !!current && l.getAttribute("href") === `#${current}` && (current !== "oferta" || l.dataset.tabLink === activeTab)));
}, { passive: true });

/* ---------- podmieniane słowo w hero ---------- */
(() => {
  const el = $("#rotator");
  const words = ["szybki", "bezpieczny", "tani", "stabilny", "soczysty"];
  let i = 0;
  setInterval(() => {
    el.classList.add("out");
    setTimeout(() => {
      i = (i + 1) % words.length;
      el.textContent = words[i];
      el.classList.remove("out");
      el.classList.add("in");
      void el.offsetWidth;
      el.classList.remove("in");
    }, 300);
  }, 2200);
})();

/* ---------- mango reaguje na kliknięcie ---------- */
$("#mango").addEventListener("click", (e) => {
  const m = e.currentTarget;
  m.classList.remove("wiggle"); void m.offsetWidth; m.classList.add("wiggle");
});

/* ---------- counters ---------- */
function animateCount(el) {
  const target = parseFloat(el.dataset.count);
  const decimals = parseInt(el.dataset.decimals || "0", 10);
  const suffix = el.dataset.suffix || "";
  const dur = 2200;
  const start = performance.now();
  const step = (now) => {
    const t = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - t, 4);
    const v = target * eased;
    el.textContent = v.toLocaleString("pl-PL", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ---------- reveal on scroll ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add("is-in");
    $$("[data-count]", e.target).forEach((c) => { if (!c.dataset.done) { c.dataset.done = 1; animateCount(c); } });
    if (e.target.matches("[data-count]") && !e.target.dataset.done) { e.target.dataset.done = 1; animateCount(e.target); }
    io.unobserve(e.target);
  });
}, { threshold: 0.15 });
$$(".reveal, .stats, .ddos__list").forEach((el) => io.observe(el));
// stagger
$$(".why__list .reveal, .faq .reveal").forEach((el, i) => (el.style.transitionDelay = `${(i % 6) * 70}ms`));

/* ---------- live attack counter ---------- */
(() => {
  const el = $("#liveAttacks");
  const now = new Date();
  let n = 120 + now.getHours() * 37 + now.getMinutes();
  let shown = 0;
  const run = () => {
    const step = () => {
      shown += Math.ceil((n - shown) / 12);
      el.textContent = shown.toLocaleString("pl-PL");
      if (shown < n) requestAnimationFrame(step);
    };
    step();
    setInterval(() => {
      n += 1 + Math.floor(Math.random() * 3);
      shown = n;
      el.textContent = n.toLocaleString("pl-PL");
      el.animate([{ transform: "scale(1.15)", color: "#ffc94a" }, { transform: "scale(1)" }], { duration: 400 });
    }, 2800);
  };
  new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { run(); o.disconnect(); } }).observe(el);
})();

/* ---------- reviews ---------- */
(() => {
  const card = ([name, product, text]) => `
    <article class="review">
      <div class="review__top">
        <div class="review__avatar">${name[0]}</div>
        <div><div class="review__name">${name}</div><div class="review__meta">${product}</div></div>
        <div class="stars">★★★★★</div>
      </div>
      <p>${text}</p>
    </article>`;
  const half = Math.ceil(REVIEWS.length / 2);
  const a = REVIEWS.slice(0, half).map(card).join("");
  const b = REVIEWS.slice(half).map(card).join("");
  // duplikujemy, żeby pętla marquee była płynna
  $("#reviewsA").innerHTML = a + a;
  $("#reviewsB").innerHTML = b + b;
})();

/* ---------- marquee partners duplicate ---------- */
(() => {
  const t = $(".marquee__track");
  t.innerHTML += t.innerHTML;
})();

/* ---------- tabs + plans ---------- */
const plansEl = $("#plans");
const pill = $("#tabsPill");
let activeTab = "pakiety";

function movePill() {
  const btn = $(`.tab[data-tab="${activeTab}"]`);
  pill.style.left = btn.offsetLeft + "px";
  pill.style.width = btn.offsetWidth + "px";
}

function renderPlans() {
  plansEl.innerHTML = PLANS.pakiety.map((p, i) => `
    <article class="plan ${p.popular ? "is-popular" : ""}" style="--i:${i}; --c:${p.color}">
      ${p.popular ? '<span class="plan__tag">hit!</span>' : ""}
      <div class="plan__name"><span class="plan__dot"></span>${p.name}</div>
      <div class="plan__price">${p.price} zł <small>/ mies.</small></div>
      <ul>
        <li><span>RAM</span><b>${p.ram}</b></li>
        <li><span>vCPU</span><b>${p.cpu}</b></li>
        <li><span>Dysk</span><b>${p.disk}</b></li>
        <li><span>AntyDDoS</span><b class="plan__check">${icon("check")}</b></li>
      </ul>
      <button class="btn ${p.popular ? "btn--primary" : "btn--ghost"} btn--block" data-add="${p.id}" type="button">Dodaj do koszyka</button>
    </article>`).join("");
}

function setTab(tab) {
  activeTab = tab;
  $$(".tab").forEach((t) => t.classList.toggle("is-active", t.dataset.tab === tab));
  $$("[data-panel]").forEach((p) => (p.hidden = p.dataset.panel !== tab));
  movePill();
  if (tab === "pakiety") renderPlans();
}
$$(".tab").forEach((t) => t.addEventListener("click", () => setTab(t.dataset.tab)));
$$("[data-tab-link]").forEach((a) => a.addEventListener("click", () => setTab(a.dataset.tabLink)));
addEventListener("resize", movePill);
document.fonts.ready.then(movePill);
setTab("pakiety");

/* ---------- cart ---------- */
let cart = [];
try { cart = JSON.parse(localStorage.getItem("mango-cart") || "[]"); } catch { cart = []; }
const save = () => { try { localStorage.setItem("mango-cart", JSON.stringify(cart)); } catch {} };

function renderCart() {
  cart = cart.filter((c) => findPlan(c.id));
  const items = $("#cartItems");
  const count = cart.reduce((s, c) => s + c.qty, 0);
  const total = cart.reduce((s, c) => s + findPlan(c.id).price * c.qty, 0);

  const badge = $("#cartBadge");
  badge.textContent = count;
  badge.classList.toggle("is-visible", count > 0);
  $("#cartTotal").textContent = fmt(total);
  $("#checkout").disabled = count === 0;

  if (!count) {
    items.innerHTML = `<div class="cart__empty"><img src="assets/logo.png" alt=""><b>pusto tu…</b>Wrzuć jakiś pakiet z oferty.</div>`;
    return;
  }
  items.innerHTML = cart.map((c) => {
    const p = findPlan(c.id);
    return `
      <div class="cart-item">
        <div class="cart-item__info"><strong>${p.name}</strong><small>${CATEGORY_NAMES[p.cat]} · ${fmt(p.price)}</small></div>
        <div class="qty">
          <button type="button" data-dec="${c.id}" aria-label="Mniej">−</button>
          <span>${c.qty}</span>
          <button type="button" data-inc="${c.id}" aria-label="Więcej">+</button>
        </div>
        <div class="cart-item__price">${fmt(p.price * c.qty)}</div>
      </div>`;
  }).join("");
}

function addToCart(id, btn) {
  const item = cart.find((c) => c.id === id);
  item ? item.qty++ : cart.push({ id, qty: 1 });
  save();
  flyToCart(btn);
  setTimeout(renderCart, 650);

  const original = btn.textContent;
  btn.classList.add("is-added");
  btn.innerHTML = `${icon("check")} Dodano`;
  setTimeout(() => { btn.classList.remove("is-added"); btn.textContent = original; }, 1400);
  toast(`Dodano „${findPlan(id).name}” do koszyka`, "cart");
}

function flyToCart(from) {
  const target = $("#cartOpen").getBoundingClientRect();
  const r = from.getBoundingClientRect();
  const dot = document.createElement("div");
  dot.className = "fly";
  dot.style.left = r.left + r.width / 2 - 15 + "px";
  dot.style.top = r.top + r.height / 2 - 15 + "px";
  document.body.appendChild(dot);
  requestAnimationFrame(() => {
    const dx = target.left + target.width / 2 - (r.left + r.width / 2);
    const dy = target.top + target.height / 2 - (r.top + r.height / 2);
    dot.style.transform = `translate(${dx}px, ${dy}px) scale(.5) rotate(360deg)`;
    dot.style.opacity = ".3";
  });
  setTimeout(() => {
    dot.remove();
    const b = $("#cartOpen");
    b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump");
  }, 750);
}

plansEl.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-add]");
  if (btn) addToCart(btn.dataset.add, btn);
});
$("#cartItems").addEventListener("click", (e) => {
  const inc = e.target.closest("[data-inc]");
  const dec = e.target.closest("[data-dec]");
  if (!inc && !dec) return;
  const id = (inc || dec).dataset[inc ? "inc" : "dec"];
  const item = cart.find((c) => c.id === id);
  if (inc) item.qty++;
  else if (--item.qty <= 0) cart = cart.filter((c) => c.id !== id);
  save(); renderCart();
});

const openCart = () => document.body.classList.add("cart-open");
const closeCart = () => document.body.classList.remove("cart-open");
$("#cartOpen").addEventListener("click", openCart);
$("#cartClose").addEventListener("click", closeCart);
$("#overlay").addEventListener("click", closeCart);
addEventListener("keydown", (e) => e.key === "Escape" && closeCart());

$("#checkout").addEventListener("click", async () => {
  if (!cart.length) return;
  const lines = cart.map((c) => {
    const p = findPlan(c.id);
    return `• ${c.qty}× ${CATEGORY_NAMES[p.cat]} – ${p.name} (${fmt(p.price * c.qty)})`;
  });
  const total = cart.reduce((s, c) => s + findPlan(c.id).price * c.qty, 0);
  const summary = `Zamówienie MangoHost\n${lines.join("\n")}\nRazem: ${fmt(total)} / mies.`;
  try { await navigator.clipboard.writeText(summary); toast("Skopiowano zamówienie – wklej je w tickecie!", "clipboard"); } catch {}
  setTimeout(() => window.open(DISCORD_URL, "_blank", "noopener"), 600);
});

let toastTimer;
function toast(msg, ico) {
  const t = $("#toast");
  t.innerHTML = (ico ? icon(ico) : "") + `<span></span>`;
  t.querySelector("span").textContent = msg;
  t.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("is-visible"), 2400);
}

renderCart();
