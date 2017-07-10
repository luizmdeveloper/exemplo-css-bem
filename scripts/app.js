var botaoHamburger = document.querySelector(".js-botao-navegacao");

botaoHamburger.onclick = function(){
	var menu = document.querySelector(".js-menu");
	menu.classList.toggle('menu--exibido');
}