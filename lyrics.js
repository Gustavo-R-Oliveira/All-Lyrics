function getLyrics(artista, musica) {
  return fetch(`https://api.lyrics.ovh/v1/${artista}/${musica}`);
}

function enviarFormulario() {
  const loader = `<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`;
  const letra = document.querySelector("#letra");
  const artista = document.querySelector("#artista").value;
  const musica = document.querySelector("#musica").value;
  letra.innerHTML = loader;
  getLyrics(artista, musica)
    .then((data) => data.json())
    .then((res) => {
      if (res.lyrics) {
        letra.innerHTML = res.lyrics;
      } else {
        letra.innerHTML = "Letra não encontrada ;-;";
      }
    })
    .catch(() => {
      letra.innerHTML = "Ops. Por favor preencha os campos :D";
    });
}

function mudarModo() {
  document.querySelector("html").classList.toggle("darkMode");
}
