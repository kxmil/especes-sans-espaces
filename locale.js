let locale = "fr",
logo = document.querySelector('#logo'),
button = document.querySelector('button');

const translations = {

  // EN

  "en": {

    "h1": "Study day in the framework of the Modular Laboratory 2022/2023",

    "header-p": "For this study day around the project Species Without Spaces, Thomas Pausz invites speakers whose interdisciplinary practices use ecological fiction (or eco-fiction) as an engine for research and creation.",

  },

  // FR

  "fr": {

    "h1": "Journée d’étude dans le cadre du Laboratoire Modulaire 2022/2023",

    "header-p": "Pour cette journée d'étude autour du projet Espèces Sans Espaces, Thomas Pausz invite des intervenants dont les pratiques interdisciplinaires utilisent la fiction écologique (ou éco fiction) comme moteur de recherche et de création.",

  },

};

document.addEventListener("DOMContentLoaded", () => {

  localeSwitcher()

});

button.addEventListener("click", () => {
  if (locale === "fr"){
    locale = "en"
  } else {
    locale = "fr"
  }
  localeSwitcher()
})

function localeSwitcher() {
  document

  .querySelectorAll("[data-i18n-key]")

  .forEach(translateElement);

  logo.src = "img/logo_" + locale + ".svg"
}

function translateElement(element) {

  const key = element.getAttribute("data-i18n-key");

  const translation = translations[locale][key];

  element.innerText = translation;

  console.log("Content Translated")

}