const traducoes = {
  en: {
    navHome: "Home",
    navPortifolio: "Portfolio",
    navSobre: "About",
    navContato: "Contact",
    homeDescricao:
      "Full stack web developer focused on fast, responsive, and stylish websites.",
    portifolioTitulo: "Check out my previous work",
    portifolioDescricao1: "Item 1. Lorem",
    portifolioDescricao2: "Item 12. Lorem",
    portifolioDescricao3: "Item 13. Lorem",
    sobreTitulo: "About... about me and the world",
    sobreSobre1:
      "My name is Lucas Pompeu de Pontes and I am 24 years old. I speak English and Portuguese, and I'm proud to be Brazilian.",
    sobreSobre2:
      "I've always heard that technology advances quickly — but living it is something else. As a child, I imagined what the world would be like in 30 years. Today, I can barely say what it will be like by the end of the year.",
    sobreSobre3:
      "Facing this constant change is challenging. I've been afraid of falling behind, of not keeping up with new technologies, of getting lost in an idealized past. But I understood that evolving is part of my role as a person and a programmer.",
    sobreSobre4:
      "I chose not to become obsolete. If I don’t know something, I learn. If it changes, I adapt.",
    sobreSobre5:
      "I haven't reached my peak yet. Even though perfection is impossible to achieve, I aim for it, because by always striving for an unattainable goal, I ensure I never become stagnant.",
    contatoTitulo: "Contact",
    contatoSubtitulo: "Feel free to reach out or just check my social media :3",

    contatoEmail: "Send me an email",
    contatoZap: "Message me on Whatsapp",
    contatoLinkedin: "Visit my Linkedin",
    contatoGithub: "See my projects on Github",
  },
  pt: {
    navHome: "Home",
    navPortifolio: "Portifolio",
    navSobre: "Sobre",
    navContato: "Contato",
    homeDescricao:
      "Desenvolvedor web full stack, focado em fazer sites rápidos, responsivos e sem nunca faltar estilo.",
    portifolioTitulo: "Confira aqui meus trabalhos anteriores",
    portifolioDescricao1: "Item 1. Lorem",
    portifolioDescricao2: "Item 12. Lorem",
    portifolioDescricao3: "Item 13. Lorem",
    sobreTitulo: "Sobre... sobre mim e o mundo",
    sobreSobre1:
      "Meu nome é Lucas Pompeu de Pontes e tenho 24 anos. Falo inglês e português e tenho orgulho de ser brasileiro.",
    sobreSobre2:
      "Sempre ouvi dizer que a tecnologia avança rápido — mas viver isso é diferente. Quando era criança, imaginava como seria o mundo em 30 anos. Hoje, mal sei dizer como será até o fim do ano.",
    sobreSobre3:
      "Encarar essa mudança constante é desafiador. Já tive medo de ficar para trás, de não acompanhar as novas tecnologias, de me perder em um passado idealizado. Mas entendi que evoluir é parte do meu papel como pessoa e programador.",
    sobreSobre4:
      "Escolhi não me tornar obsoleto. Se eu não souber algo, aprendo. Se mudar, me adapto.",
    sobreSobre5:
      "Ainda não atingi meu ápice. Apesar de ser impossível atingir a perfeição, eu a tenho como meta, pois dessa forma, ao sempre buscar alcançar um objetivo inalcançável, eu garanto que nunca ficarei estagnado.",
    contatoTitulo: "Contato",
    contatoSubtitulo:
      "Fique à vontade para entrar em contato comigo ou apenas olhar minhas redes sociais :3",
    contatoEmail: "Me mande um email",
    contatoZap: "Fale comigo no zap",
    contatoLinkedin: "Visite meu Linkedin",
    contatoGithub: "Veja meus projetos no github",
  },
};

function tradutor(trad) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (traducoes[trad] && traducoes[trad][key]) {
      el.textContent = traducoes[trad][key];
    }
  });
}

let currentLang;
let userLang = navigator.language || navigator.userLanguage;

userLang = userLang.startsWith("pt") ? "pt" : "en";


tradutor(userLang);
currentLang = userLang;
const toggleBtn = document.querySelector(".pt-en");

toggleBtn.textContent = currentLang === "en" ? "🌐 PT" : "🌐 EN";



document.querySelector(".pt-en").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "pt" : "en";
  tradutor(currentLang);
  toggleBtn.textContent = currentLang === "en" ? "🌐 PT" : "🌐 EN";
});

