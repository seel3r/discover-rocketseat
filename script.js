function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto selfie de Sérgio Seeler fazendo um dois com os dedos.")
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png")
  }
}
