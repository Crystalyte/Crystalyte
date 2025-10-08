const translations = {
  uk: {
    home: "Головна",
    giveaways: "Розіграші",
    leaders: "Лідери",
    warframe: "Warframe",
    auth: "Авторизація",
    welcome: "Ласкаво просимо до Crystalyte Stream Community",
    description: "Тут ви знайдете розіграші, лідерів та новини Warframe!",
    rights: "Всі права захищені."
  },
  ru: {
    home: "Главная",
    giveaways: "Розыгрыши",
    leaders: "Лидеры",
    warframe: "Warframe",
    auth: "Авторизация",
    welcome: "Добро пожаловать в Crystalyte Stream Community",
    description: "Здесь вы найдете розыгрыши, лидеров и новости Warframe!",
    rights: "Все права защищены."
  },
  en: {
    home: "Home",
    giveaways: "Giveaways",
    leaders: "Leaders",
    warframe: "Warframe",
    auth: "Login",
    welcome: "Welcome to Crystalyte Stream Community",
    description: "Here you can find giveaways, top players, and Warframe news!",
    rights: "All rights reserved."
  }
};

const select = document.getElementById("language-select");
const elements = document.querySelectorAll("[data-key]");

select.addEventListener("change", () => {
  const lang = select.value;
  localStorage.setItem("language", lang);
  setLanguage(lang);
});

function setLanguage(lang) {
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "uk";
  select.value = savedLang;
  setLanguage(savedLang);
});

