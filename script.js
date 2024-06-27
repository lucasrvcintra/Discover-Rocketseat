function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar img
  const img = document.querySelector('#profile img')

  //substituir a img
  if(html.classList.contains('light')){
    //se tiver light mode, adicionar img light
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    //se nao, manter img atual
    img.setAttribute('src', './assets/avatar.png')

      }

}
