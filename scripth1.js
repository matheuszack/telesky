const btn = document.querySelector(".button");

 btn.classList.add("button--loading");
 btn.classList.remove("button--loading");
 

 let mensagem = document.querySelector(".mensagem") ;

// mostra a mensagem
function showMessage(){   
   mensagem.style.display = "block";   
 }
// esconde a mensagem
function hideMessage(){
  mensagem.style.display = "none"; 
}




const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')

    // ############################################ ORLANDO ############################################ //
    document.getElementById("container").classList.toggle('dark')
    // ############################################ ORLANDO ############################################ //

});






// ############################################ ORLANDO ############################################ //

// Checar se a página começou ou completou o carregamento // 
document.addEventListener('readystatechange', event => {

  if (event.target.readyState === "interactive") { 
    window.localStorage.setItem('pagina', 'carregando');
    checar_modo_escuro()
  }
 
  if (event.target.readyState === "complete") {
    window.localStorage.setItem('pagina', 'concluido');
  }
});


// Checar o último estado do modo escuro (e aplicar) // 
function checar_modo_escuro() {
  if (window.localStorage.getItem('modo_noturno') == "ligado") {
    document.getElementById("ball").click()
  }
}


// Registrar estado do modo escuro ao clicar no botão // 
chk.addEventListener('change', () => {

  if (window.localStorage.getItem('pagina') != "carregando") {

    if (window.localStorage.getItem('modo_noturno') == "ligado") {
      window.localStorage.setItem('modo_noturno', 'desligado')
    }
    else {
      window.localStorage.setItem('modo_noturno', 'ligado')
    }
  }
}
);
