let obrazky = document.querySelectorAll(".fotogalerie img")
obrazky.forEach(obrazek => obrazek.addEventListener("click",zvetsiObrazek))


let pozadi = document.createElement("div")
pozadi.style.backgroundColor = "rgb(62, 62, 62, 0.6)"
pozadi.style.width = "100%"
pozadi.style.height = "calc(100vh - 7rem)"
pozadi.style.display = "none"
pozadi.style.justifyContent = "center"
pozadi.style.alignItems = "center"
pozadi.style.position = "fixed"
pozadi.style.zIndex = 1
pozadi.style.overflow = "auto"
pozadi.style.bottom = 0

pozadi.addEventListener("click",function() {
  document.body.removeChild(pozadi)
})

document.body.appendChild(pozadi)


let zvetsenyObrazek = document.createElement("img")





function zvetsiObrazek() {
  if(window.innerWidth > 600) {

    zvetsenyObrazek.src = this.src
    console.log(this.src);
      
      pozadi.style.display = "flex"
      
      pozadi.appendChild(zvetsenyObrazek)
  
      document.body.appendChild(pozadi)
  }
    
}