const areCriptografa = document.querySelector('[data-area-criptografa]')
const areaDecriptografada = document.querySelector('[data-area-descriptografa]')

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


function btnEncriptar(){
      const textoEncriptado = encriptar(areCriptografa.value)
      areaDecriptografada.value = textoEncriptado;
      areCriptografa.value = ""
}

function encriptar(stringEncriptada){
      
      let matrizCodigo = [["e" , "enter"] , ["i" ,  "imes"] , ["a" ,  "ai"] , ["o" , "ober"] , ["u" , "ufat"]]
      stringEncriptada = stringEncriptada.toLowerCase();

      for(let i=0; i < matrizCodigo.length; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
                  stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            }
      }
      tiraImagen()
      return stringEncriptada
}

function btnDesencriptar(){
      const textoDesencriptado = desencriptar(areCriptografa.value)
      areaDecriptografada.value = textoDesencriptado;
      areCriptografa.value = ""
}

function desencriptar(stringDesencriptada){
      
      let matrizCodigo = [["e" , "enter"] , ["i" ,  "imes"] , ["a" ,  "ai"] , ["o" , "ober"] , ["u" , "ufat"]]
      stringDesencriptada = stringDesencriptada.toLowerCase();

      for(let i=0; i < matrizCodigo.length; i++){
            if(stringDesencriptada.includes(matrizCodigo[i][1])){
                  stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
            }
      }
      tiraImagen()
      return stringDesencriptada
}

function tiraImagen(){

      areaDecriptografada.classList.remove('decriptografa-Img')

}



function btnCopia(){
     
     let valorResultado = areaDecriptografada.value
     navigator.clipboard.writeText(valorResultado)

     

      if(tiraImagen){
            areaDecriptografada.classList.add('decriptografa-Img')
      }

     areaDecriptografada.value = ""
           
}

// -selecionar o texto na area resultado
// -transferir este valor para o clipboard
// -limpa o campo copiado