const translations = {
  uk: {
    home: "Головна",
    giveaways: "Розіграші",
    leaders: "Лідери",
    warframe: "Warframe",
    auth: "Авторизація",
    rights: "Всі права захищені.",
    welcome: "Ласкаво просимо до спільноти Crystalyte",
    desc: "Слідкуй за стрімами, бери участь у розіграшах та піднімайся в таблиці лідерів!",
    giveawayTitle: "🎁 Поточні розіграші",
    giveawayDesc: "Бери участь у розіграшах прямо під час стріму! Перевіряй оновлення тут.",
    wf-news: "📰 Новини Warframe",
    wf-desc: "Скоро тут будуть оновлення, білди та корисна інформація.",
    player: "Гравець",
    points: "Бали"
  },
  ru: {
    home: "Главная",
    giveaways: "Розыгрыши",
    leaders: "Лидеры",
    warframe: "Warframe",
    auth: "Авторизация",
    rights: "Все права защищены.",
    welcome: "Добро пожаловать в сообщество Crystalyte",
    desc: "Следи за стримами, участвуй в розыгрышах и поднимайся в таблице лидеров!",
    giveawayTitle: "🎁 Текущие розыгрыши",
    giveawayDesc: "Участвуй в розыгрышах прямо на стриме! Проверяй обновления здесь.",
    wf-news: "📰 Новости Warframe",
    wf-desc: "Скоро здесь появятся обновления, билды и полезная информация.",
    player: "Игрок",
    points: "Очки"
  },
  en: {
    home: "Home",
    giveaways: "Giveaways",
    leaders: "Leaders",
    warframe: "Warframe",
    auth: "Login",
    rights: "All rights reserved.",
    welcome: "Welcome to the Crystalyte Community",
    desc: "Follow the streams, join giveaways, and climb the leaderboard!",
    giveawayTitle: "🎁 Current Giveaways",
    giveawayDesc: "Join giveaways during the stream! Check updates here.",
    wf-news: "📰 Warframe News",
    wf-desc: "Soon you’ll find updates, builds, and info here.",
    player: "Player",
    points: "Points"
  }
};

const langSelect = document.getElementById("language-select");
const elements = document.querySelectorAll("[data-key]");

function changeLanguage(lang) {
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem("lang", lang);
}

langSelect.addEventListener("change", (e) => changeLanguage(e.target.value));

const savedLang = localStorage.getItem("lang") || "uk";
langSelect.value = savedLang;
changeLanguage(savedLang);
