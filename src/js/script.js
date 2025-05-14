/*aqui eu defino as variáveis*/
/*eu uso const e escolho um nome q eu vá tanto lembrar quanto enteder o q significa para a variavel, 
ent eu puxo a classe do html q a variavel vai segurar. document vai puxar no documento atual, como eu carreguei 
esse script no index, ele vai procurar dentro do index. Ent o querySelector puxa o item com tal nome, no caso eu to puxando as classes que quero. Uso o All para quando é mais de uma classe sendo puxada*/
const menuBtn = document.querySelector(".menu");
const navList = document.querySelector(".navbar ul");
const itens = document.querySelectorAll(".carrosel-item");
const descricao = document.querySelectorAll(".descricao");
const paginas = document.querySelectorAll(".paginacao .pagina");
const btnAnte = document.querySelector(".anterior");
const btnProx = document.querySelector(".proximo");

const navLinks = document.querySelectorAll(".navbar ul li a");
/*aqui é pro carrosel, pra definir qual o index atual do carrosel, como o nome obviamente se explica*/
let indexAtual = 0;
/*è bom deixar o primeiro mostrando por aqui. tanto pra definir a imagem qnt o botao atual*/
itens[indexAtual].classList.add("ativo");
descricao[indexAtual].classList.add("ativo");
paginas[indexAtual].classList.add("ativo");

menuBtn.addEventListener("click", () => { 
  navList.classList.toggle("show");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navList.classList.remove("show");
  });
});

paginas.forEach((pagina) => {
  /*paginação, para clicar e mudar as imagens */
  pagina.addEventListener("click", () => {
    const index = parseInt(pagina.dataset.index);

    itens.forEach((item) => item.classList.remove("ativo"));
    descricao.forEach((desc) => desc.classList.remove("ativo"));
    paginas.forEach((p) => p.classList.remove("ativo"));
    itens[index].classList.add("ativo");
    descricao[index].classList.add("ativo");

    paginas.forEach((p) => p.classList.remove("ativo"));
    pagina.classList.add("ativo");

    indexAtual = index;
  });
});

btnAnte.addEventListener("click", () => {
  indexAtual = (indexAtual - 1 + itens.length) % itens.length;

  itens.forEach((item) => item.classList.remove("ativo"));
  itens[indexAtual].classList.add("ativo");

  paginas.forEach((p) => p.classList.remove("ativo"));
  paginas[indexAtual].classList.add("ativo");
});

btnProx.addEventListener("click", () => {
  indexAtual = (indexAtual + 1 + itens.length) % itens.length;

  itens.forEach((item) => item.classList.remove("ativo"));
  itens[indexAtual].classList.add("ativo");

  paginas.forEach((p) => p.classList.remove("ativo"));
  paginas[indexAtual].classList.add("ativo");
});
