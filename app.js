const fallbackImages = {
  city: "assets/bauman.jpg",
  blackLake: "assets/black-lake.jpg",
  impressions: "https://xn--80adaggbbyjrxfpl9a0du.xn--p1ai/assets/landmark-palace-H0v0CGAa.webp",
  bauman: "assets/bauman.jpg",
  roero: "assets/roero.jpg",
  peterburgskaya: "assets/peterburgskaya.jpg",
  kamal: "assets/kamal.jpg",
  sloboda: "assets/sloboda.jpg",
  marjani: "assets/marjani.jpg",
  library: "assets/library.jpg",
  palace: "assets/palace.jpg"
};

const stops = [
  {
    id: "luggage",
    kind: "logistics",
    label: "Зелёный старт",
    title: "От камеры хранения до парка «Чёрное озеро»",
    place: "ул. Чернышевского, 24/23",
    time: "10:40-11:00",
    duration: "15-20 минут",
    coords: [55.79078, 49.10775],
    query: "ул. Чернышевского 24/23 Казань Татпрокат",
    note: "Сдаём вещи в точке с вывеской «Татпрокат», напротив ресторана «Приют Холостяка», и дальше идём налегке.",
    vibe: "Быстро, практично, рядом с домом на Чернышевского 33.",
    routeNote: "Дальше идём не просто к парку, а к входу у Дзержинского, 6Б, чтобы пройти Чёрное озеро целиком.",
    shots: [
      ["Общее фото", "Сделать быстрый кадр “мы стартуем” у двери или на углу улицы."],
      ["Деталь дня", "Чемоданы сданы, руки свободны: кадр с кофе или картой в руках."],
      ["Навигация", "Сфотографировать вывеску «Татпрокат» и ориентир «Приют Холостяка» на случай возврата."]
    ],
    photo: fallbackImages.blackLake
  },
  {
    id: "black-lake",
    kind: "walk",
    label: "Инсталляции",
    title: "Через парк «Чёрное озеро» до Дворца впечатлений",
    place: "ул. Дзержинского, 6Б",
    time: "11:00-11:45",
    duration: "40-45 минут",
    coords: [55.795828, 49.113529],
    query: "улица Дзержинского 6Б Казань Чёрное озеро",
    note: "Заходим со стороны Дзержинского, 6Б и проходим парк целиком: вход, аллеи, арка, водоём и выход в сторону Ленинского сада.",
    vibe: "Теперь это не точка у парка, а полноценный проход через Чёрное озеро.",
    routeNote: "После парка забредаем в Ленинский сад, проходим Университетскую как красивый транзит и финишируем точно у Дворца впечатлений на Баумана, 31/12.",
    via: [
      { name: "арка Чёрного озера", coords: [55.79386, 49.11742] },
      { name: "Ленинский сад", coords: [55.79352, 49.12619] },
      { name: "Университетская улица", coords: [55.78832, 49.12323] }
    ],
    shots: [
      ["Арка", "Поставить группу симметрично в проходе арки."],
      ["Аллея", "Снять движение со спины, чтобы маршрут выглядел живым."],
      ["Лавочки", "Кадр сидя, без позирования, будто это обложка маленького путешествия."]
    ],
    photo: fallbackImages.impressions
  },
  {
    id: "bauman",
    kind: "walk",
    label: "Сладкая пауза",
    title: "Из Дворца впечатлений до Roero",
    place: "Петербургская улица, 25",
    time: "11:55-13:10",
    duration: "1-1,2 часа",
    coords: [55.7898, 49.1171],
    query: "Дворец впечатлений Баумана 31/12 Казань",
    yandexUrl: "https://yandex.ru/maps/43/kazan/house/ulitsa_baumana_31_12/YEAYdwZnSEEOQFtvfXt5eHtqZA==/",
    note: "Доходим до Roero, выдыхаем после первой части прогулки и наслаждаемся вкусной сладкой паузой: десерты, кофе, красивые витрины и спокойные фото.",
    vibe: "Маленькая награда после Дворца впечатлений: можно сесть, перекусить и набраться сил перед продолжением маршрута.",
    routeNote: "После Дворца впечатлений идём к Петербургской через площадь Тукая: это короткий и понятный переход.",
    via: [
      { name: "площадь Тукая", coords: [55.78644, 49.12342] }
    ],
    shots: [
      ["Вывески", "Искать вывески и витрины на фоне движения улицы."],
      ["Зеркала и свет", "Снимать отражения и силуэты, лучше по одной-две девушки в кадре."],
      ["Инсталляции", "Выбирать самые яркие комнаты и снимать вертикально для сторис."],
      ["Вход", "После выхода сделать общий кадр на Баумана у фасада."]
    ],
    photo: fallbackImages.roero
  },
  {
    id: "peterburgskaya",
    kind: "walk",
    label: "Театр и парк",
    title: "От Roero до театра Камала через Парк Тысячелетия",
    place: "ул. Татарстан, 1",
    time: "13:10-13:40",
    duration: "30 минут",
    coords: [55.784459, 49.127404],
    query: "театр Камала улица Татарстан 1 Казань",
    note: "Идём от Roero через Парк Тысячелетия к театру Камала: можно пройтись по зелёной зоне, выйти к площади у театра и поймать первые виды на Кабан.",
    vibe: "После сладкой паузы возвращаемся в прогулочный ритм: парк, открытая площадь, театр и вода рядом.",
    routeNote: "К Камала идём от Roero через Парк Тысячелетия: это по пути к Кабану и намного приятнее прямого перехода по улице.",
    via: [
      { name: "Парк Тысячелетия", coords: [55.78462, 49.11908] }
    ],
    shots: [
      ["Парк Тысячелетия", "Снять проход через зелёную зону, чтобы переход выглядел не просто дорогой."],
      ["Театр Камала", "Сделать кадр на площади у театра, оставив в кадре геометрию здания."],
      ["Кабан", "Поймать первый вид на воду перед следующим переходом к слободе."]
    ],
    photo: fallbackImages.kamal
  },
  {
    id: "kamal-kaban",
    kind: "water",
    label: "Вода и колорит",
    title: "От театра Камала до Каюма Насыри, 17",
    place: "ул. Татарстан, 1 → ул. Каюма Насыри, 17",
    time: "13:50-14:35",
    duration: "40-45 минут",
    coords: [55.78273, 49.1175],
    query: "Каюма Насыри 17 Казань Аль-Марджани",
    yandexUrl: "https://yandex.com/maps/43/kazan/house/ulitsa_kayuma_nasyri_17/YEAYdwZnQEICQFtvfXt2eHRnYA%3D%3D/",
    routeEnd: {
      title: "Каюма Насыри, 17",
      coords: [55.779845, 49.117975]
    },
    note: "Идём от театра Камала через набережную Кабана в сердце Старо-Татарской слободы — к Каюма Насыри, 17 и мечети Аль-Марджани.",
    vibe: "Один цельный красивый переход: вода, старые фасады, мечеть и пешеходная улица слободы.",
    routeNote: "Здесь объединены бывшие точки Камала/Кабан и Старо-Татарская слобода. Финиш сегмента — Каюма Насыри, 17, а не улица Марджани.",
    via: [
      { name: "набережная Кабана", coords: [55.78162, 49.11804] },
      { name: "Старо-Татарская слобода", coords: [55.779019, 49.118267] },
      { name: "улица Каюма Насыри", coords: [55.78072, 49.11858] }
    ],
    shots: [
      ["Отражения", "Снять людей на фоне воды, оставив половину кадра под небо."],
      ["Каюма Насыри", "Искать резные фасады, вывески и тихие пешеходные ракурсы."],
      ["Аль-Марджани", "Кадр аккуратно с расстояния, чтобы влезли минарет и линия улицы."]
    ],
    photo: fallbackImages.sloboda
  },
  {
    id: "lunch-walk",
    kind: "meal",
    label: "Обед",
    displayNumber: "05.75",
    title: "0.75 (обед): от Каюма Насыри, 17 до «Гусь» / «Татарская усадьба»",
    place: "ул. Каюма Насыри, 17 → ул. Шигабутдина Марджани, 8/10",
    time: "14:35-15:45",
    duration: "переход + обед",
    coords: [55.779845, 49.117975],
    query: "Гусь Марджани 10 Татарская усадьба Марджани 8 Казань",
    note: "От мечети Аль-Марджани и Каюма Насыри, 17 идём к двум вариантам обеда: «Татарская усадьба» на Марджани, 8 или «Гусь» на Марджани, 10.",
    vibe: "Короткий переход внутри слободы: можно выбрать ресторан по настроению и наличию столика.",
    routeNote: "Сначала проходим к «Татарской усадьбе» на Шигабутдина Марджани, 8, затем буквально рядом — «Гусь» на Шигабутдина Марджани, 10.",
    via: [
      { name: "Татарская усадьба, Марджани 8", coords: [55.78028, 49.1175] }
    ],
    routeEnd: {
      title: "Гусь / Татарская усадьба",
      coords: [55.7799, 49.11794]
    },
    shots: [
      ["Марджани", "Снять тихую улицу с вывесками ресторанов и водой рядом."],
      ["Выбор места", "Кадр у входа в «Гусь» или «Татарскую усадьбу» до посадки."],
      ["Перед обедом", "Общее фото без спешки, пока группа ещё не расселась."]
    ],
    photo: fallbackImages.marjani
  },
  {
    id: "lunch",
    kind: "walk",
    label: "Прогулка",
    title: "От Зайни Султана / Марджани до Национальной библиотеки",
    place: "район ул. Зайни Султана и ул. Шигабутдина Марджани → ул. Пушкина, 86",
    time: "15:45-16:30",
    duration: "35-45 минут",
    coords: [55.779965, 49.114912],
    query: "улица Зайни Султана Казань Гусь Татарская усадьба",
    note: "После обеда стартуем от района ресторанов у улиц Зайни Султана и Шигабутдина Марджани и идём в сторону Национальной библиотеки.",
    vibe: "Послеобеденный переход без второго «обеда» в названии: спокойно возвращаемся к Казанке.",
    routeNote: "Идём через Булак и Ленинский сад к Национальной библиотеке. Это длиннее прямого варианта, зато красивее и разнообразнее.",
    via: [
      { name: "протока Булак", coords: [55.78755, 49.11318] },
      { name: "Ленинский сад", coords: [55.79352, 49.12619] }
    ],
    shots: [
      ["Перед входом", "Кадр у вывески до посадки за стол."],
      ["Стол", "Снять общий стол сверху, без лиц крупным планом."],
      ["Окно/веранда", "Если есть светлое место, посадить группу ближе к окну."]
    ],
    photo: fallbackImages.library
  },
  {
    id: "library",
    kind: "view",
    label: "Виды",
    title: "От Национальной библиотеки до Дворца земледельцев и Парка Земледельцев",
    place: "ул. Пушкина, 86",
    time: "16:00-16:30",
    duration: "25 минут",
    coords: [55.801598, 49.125675],
    query: "Национальная библиотека Татарстана Казань",
    routeEnd: {
      title: "Парк Земледельцев",
      coords: [55.80108, 49.11461]
    },
    note: "Современная архитектура, вид на Казанку и хорошая точка после обеда.",
    vibe: "Контраст к слободе: стекло, воздух, река.",
    routeNote: "К Дворцу земледельцев идём через вид на Казанку, а финальной точкой сегмента ставим Парк Земледельцев рядом с дворцом.",
    via: [
      { name: "вид на Казанку", coords: [55.79904, 49.12464] },
      { name: "Дворец земледельцев", coords: [55.800427, 49.111939] }
    ],
    shots: [
      ["Архитектура", "Снимать снизу вверх, чтобы здание выглядело масштабнее."],
      ["Казанка", "Группа боком к реке, не перекрывая линию воды."],
      ["Парк", "Дойти до зелёной зоны у дворца и сделать спокойный финальный кадр."]
    ],
    photo: fallbackImages.palace
  },
  {
    id: "farmers-palace",
    kind: "finale",
    label: "Финал",
    title: "Финал у Парка Земледельцев: дальше такси к яхте",
    place: "Парк Земледельцев, рядом с Дворцом земледельцев",
    time: "16:40-17:05",
    duration: "финальная точка",
    coords: [55.80108, 49.11461],
    query: "Парк Земледельцев Казань",
    note: "Нажмите на «Завершить маршрут», чтобы закрыть прогулку и увидеть финальное поздравление.",
    vibe: "Финальный городской кадр перед водой, яхтой и заслуженным выдохом.",
    routeNote: "Это последняя точка пешего маршрута. Можно сделать финальные фото у дворца и парка.",
    shots: [
      ["Фасад", "Последний общий кадр с Дворцом земледельцев на фоне."],
      ["Парк", "Снять спокойный кадр в зелёной зоне, будто прогулка мягко закончилась."],
      ["Перед такси", "Финальное селфи: маршрут пройден, дальше только яхта."]
    ],
    photo: fallbackImages.palace
  }
];

const storageKey = "kazan-route-pages-v3";
const saved = new Set(JSON.parse(localStorage.getItem(storageKey) || "[]"));
const app = document.querySelector("#app");

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function stopUrl(stop) {
  return `#${stop.id}`;
}

function displayStep(stop, index) {
  return stop.displayNumber || String(index + 1).padStart(2, "0");
}

function mapSearchUrl(stop) {
  if (stop.yandexUrl) {
    return stop.yandexUrl;
  }

  return `https://yandex.ru/maps/?text=${encodeURIComponent(stop.query)}`;
}

function routePoints(from, to) {
  return [from, ...(from.via || []).map((point) => ({ coords: point.coords })), to];
}

function routeUrl(from, to, mode = "pd") {
  const rtext = routePoints(from, to).map((point) => `${point.coords[0]},${point.coords[1]}`).join("~");
  return `https://yandex.ru/maps/43/kazan/?mode=routes&rtext=${encodeURIComponent(rtext)}&rtt=${mode}`;
}

function routeWidgetUrl(from, to, mode = "pd") {
  const centerLat = (from.coords[0] + to.coords[0]) / 2;
  const centerLon = (from.coords[1] + to.coords[1]) / 2;
  const rtext = routePoints(from, to).map((point) => `${point.coords[0]},${point.coords[1]}`).join("~");
  const z = mode === "pd" ? 14 : 11;
  return `https://yandex.ru/map-widget/v1/?ll=${centerLon}%2C${centerLat}&mode=routes&rtext=${encodeURIComponent(rtext)}&rtt=${mode}&z=${z}`;
}

function placeWidgetUrl(stop) {
  return `https://yandex.ru/map-widget/v1/?ll=${stop.coords[1]}%2C${stop.coords[0]}&z=16&pt=${stop.coords[1]}%2C${stop.coords[0]}%2Cpm2rdm`;
}

function persist() {
  localStorage.setItem(storageKey, JSON.stringify([...saved]));
}

function progressData() {
  const done = stops.filter((stop) => saved.has(stop.id)).length;
  return { done, total: stops.length, percent: Math.round((done / stops.length) * 100) };
}

function nextStop() {
  return stops.find((stop) => !saved.has(stop.id)) || stops[stops.length - 1];
}

function scrollToProgressSlowly(duration = 260) {
  const target = document.querySelector(".status");
  const start = window.scrollY || document.documentElement.scrollTop;
  const targetTop = target ? target.getBoundingClientRect().top + start - 10 : 0;
  const startTime = performance.now();
  const distance = targetTop - start;

  if (Math.abs(distance) <= 2) {
    return;
  }

  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    window.scrollTo(0, Math.round(start + distance * eased));

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

function scheduleProgressScroll() {
  window.requestAnimationFrame(() => {
    scrollToProgressSlowly();
  });
}

function showCelebration() {
  document.querySelector(".celebration")?.remove();

  const celebration = document.createElement("div");
  celebration.className = "celebration";
  celebration.innerHTML = `
    <div class="celebration__confetti" aria-hidden="true">
      <span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
    <article class="celebration__card" role="dialog" aria-modal="true" aria-labelledby="celebrationTitle">
      <p class="section-kicker">Маршрут завершён</p>
      <h2 id="celebrationTitle">Девочки, вы большие молодцы</h2>
      <p>Очень надеюсь, что маршрут не сломал вам голову, а наоборот помог красиво погулять и наделать много фоточек.</p>
      <p>Дальше вызывайте такси к своей яхте: пешком долговато идти. Но если вдруг в запасе есть пара часов и много сил, можно попытаться :)</p>
      <button class="primary-button" type="button" data-close-celebration>Ура, закрыть</button>
    </article>
  `;

  document.body.append(celebration);
  celebration.querySelector("[data-close-celebration]").focus();

  celebration.addEventListener("click", (event) => {
    if (event.target === celebration || event.target.closest("[data-close-celebration]")) {
      celebration.remove();
    }
  });
}

function layout(content, activeId = "") {
  const { done, total, percent } = progressData();
  const next = nextStop();
  app.innerHTML = `
    <header class="hero">
      <div class="hero__image"></div>
      <nav class="topbar">
        <a href="#home">Вернуться в главное меню</a>
      </nav>
      <div class="hero__content">
        <p class="eyebrow">4-5 часов пешком + яхта в 18:00</p>
        <h1>Казань налегке</h1>
        <p>Каждый чекпоинт открывается отдельным экраном: карта, адрес, путь дальше и идеи для фото.</p>
      </div>
    </header>
    <main>
      <section class="status">
        <div>
          <p class="section-kicker">Прогресс</p>
          <h2>${done} из ${total} пройдено</h2>
        </div>
        <div class="progress"><span style="width:${percent}%"></span></div>
        <a class="primary-button" href="${stopUrl(next)}">Продолжить</a>
      </section>
      ${content}
    </main>
    <footer>Отметки сохраняются в браузере этого устройства.</footer>
  `;

  if (activeId) {
    document.body.dataset.page = "detail";
  } else {
    document.body.dataset.page = "home";
  }
}

function renderHome() {
  const next = nextStop();
  layout(`
    <section class="next-panel">
      <div>
        <p class="section-kicker">Куда сейчас</p>
        <h2>${next.title}</h2>
        <p>${next.time}. ${next.note}</p>
      </div>
      <a class="primary-button" href="${stopUrl(next)}">Открыть чекпоинт</a>
    </section>

    <section class="route-shell" id="home">
      <div class="section-heading">
        <p class="section-kicker">Маршрут</p>
        <h2>Пункты дня</h2>
      </div>
      <div class="route-grid">
        ${stops.map((stop, index) => `
          <a class="route-card ${saved.has(stop.id) ? "is-done" : ""} ${next.id === stop.id ? "is-next" : ""}" href="${stopUrl(stop)}">
            <span class="route-card__number">${displayStep(stop, index)}</span>
            <span class="route-card__label">${stop.label}</span>
            <strong>${stop.title}</strong>
            <small>${stop.time} · ${stop.duration}</small>
          </a>
        `).join("")}
      </div>
    </section>

    <section class="tips" id="tips">
      <article>
        <h3>Пешая логика</h3>
        <p>Маршрут не ведёт прямыми линиями: внутри переходов есть проходные места вроде Кремлёвской улицы, площади Тукая, Каюма Насыри, Булака и видов на Казанку.</p>
      </article>
      <article>
        <h3>К яхте</h3>
        <p>Пешая часть заканчивается у Парка Земледельцев рядом с дворцом. Дальше лучше вызвать такси к яхте с запасом по времени.</p>
      </article>
      <article>
        <h3>Фото</h3>
        <p>На странице каждого пункта есть идеи кадров, чтобы девочки не думали на месте, что именно снять.</p>
      </article>
    </section>
  `);
}

function renderStop(stop) {
  const index = stops.findIndex((item) => item.id === stop.id);
  const previous = stops[index - 1];
  const next = stops[index + 1];
  const isTaxiSegment = stop.kind === "finish" || stop.kind === "taxi";
  const mapTarget = stop.routeEnd || next;
  const completeLabel = next
    ? (saved.has(stop.id) ? "Перейти дальше" : "Отметить и перейти дальше")
    : (saved.has(stop.id) ? "Маршрут завершён" : "Завершить маршрут");
  const mapUrl = mapTarget ? routeWidgetUrl(stop, mapTarget, isTaxiSegment ? "auto" : "pd") : placeWidgetUrl(stop);

  layout(`
    <section class="detail-hero">
      <div class="detail-hero__copy">
        <a class="back-link" href="#home">Назад к маршруту</a>
        <p class="section-kicker">${displayStep(stop, index)} · ${stop.label}</p>
        <h2>${stop.title}</h2>
        <p>${stop.vibe}</p>
        <div class="chips">
          <span>${stop.time}</span>
          <span>${stop.duration}</span>
          <span>${stop.place}</span>
        </div>
      </div>
      <div class="detail-hero__photo" style="background-image:url('${stop.photo}')"></div>
    </section>

    <section class="detail-layout">
      <article class="detail-card">
        <p class="section-kicker">Что здесь делать</p>
        <h3>${stop.note}</h3>
        <p>${stop.routeNote}</p>
        ${stop.via?.length ? `<div class="passby"><span>По пути дальше</span>${stop.via.map((point) => `<b>${point.name}</b>`).join("")}</div>` : ""}
        <div class="action-row">
          <a class="secondary-button" href="${mapSearchUrl(stop)}" target="_blank" rel="noreferrer">Открыть адрес</a>
          ${previous ? `<a class="secondary-button" href="${stopUrl(previous)}">Предыдущий пункт</a>` : ""}
          <button class="primary-button checkpoint-button" type="button" id="completeStop">${completeLabel}</button>
        </div>
      </article>

      <article class="map-card">
        <div class="map-card__head">
          <span>${mapTarget ? (isTaxiSegment ? "Переезд к следующему пункту" : "Пеший путь по сегменту") : "Точка на карте"}</span>
          ${mapTarget ? `<small>${mapTarget.title}</small>` : `<small>Финиш маршрута</small>`}
        </div>
        <iframe title="Карта ${stop.title}" loading="lazy" src="${mapUrl}"></iframe>
      </article>
    </section>

    <section class="shots">
      <div class="section-heading">
        <p class="section-kicker">Идеи кадров</p>
        <h2>Что снять здесь</h2>
      </div>
      <div class="shots-grid">
        ${stop.shots.slice(0, 3).map(([title, text]) => `
          <article>
            <span>${title}</span>
            <p>${text}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `, stop.id);

  scheduleProgressScroll();

  document.querySelector("#completeStop").addEventListener("click", () => {
    saved.add(stop.id);
    persist();
    if (next) {
      window.location.hash = stopUrl(next);
    } else {
      const allDone = progressData().done === stops.length;
      renderStop(stop);
      if (allDone) {
        showCelebration();
      }
    }
  });
}

function render() {
  const id = window.location.hash.replace("#", "");
  if (!id || id === "home" || id === "route" || id === "tips") {
    renderHome();
    return;
  }

  const stop = stops.find((item) => item.id === id);
  if (stop) {
    renderStop(stop);
  } else {
    window.location.hash = "home";
  }
}

window.addEventListener("hashchange", render);
render();
