
const searchInput = document.getElementById("search-text");
const resultadoDiv = document.getElementById("resultado"); 
const lupa = document.getElementById("lupa")

  lupa.addEventListener('click', ()=>{
    const value = searchInput.value
    const formatado = formatString(`Você buscou por: '${value}'`);
    resultadoDiv.innerText = formatado;
  })


function formatString(value) {
  return value.toUpperCase().trim();
}