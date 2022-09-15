const textarea = document.querySelector('textarea');

textarea.addEventListener("keyup", e =>{
  textarea.style.height = "auto";
  let scHeight = e.target.scrollHeight;
  textarea.style.height = `${scHeight}px`;
});

let mensagem = document.getElementById("mensagem");
let wordcounter = document.getElementById("wordcounter");

mensagem.addEventListener('keyup', function(){
  let char = mensagem.value.split('');
  wordcounter.innerText = char.length;
})
