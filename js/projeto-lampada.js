function acenderLampada(){
    foto.setAttribute("src", "imagens/lampada-real-on.png")
    foto.setAttribute("alt", "lampada ligada")

    
    document.body.style.background = "radial-gradient(#fff, #e6d411, #272626 )"

}

function apagarLampada(){
    foto.setAttribute("src", "imagens/lampada-real-off.png")
    foto.setAttribute("alt", "lampada apagada")

    document.body.style.background = "linear-gradient(#272626)"

}

function quebrarLampada(){
    foto.setAttribute("src", "imagens/lampada-real-quebrada.png")
    foto.setAttribute("alt", "Lampada quebrada")
    let botoes1 = document.getElementById("acender")
    botoes1.style.display="none"
    let botoes2 = document.getElementById("apagar")
    botoes2.style.display="none"
    
    let trocarLampada= window.document.getElementById("restaurar")
    trocarLampada.style.display="block"  

    document.body.style.background = "radial-gradient(#272626)"
}

function lampadaNormal(){
    foto.setAttribute("src", "imagens/lampada-real-off.png")
    foto.setAttribute("alt", "Lampada quebrada")
    let botoes1 = document.getElementById("acender")
    botoes1.style.display="block"
    let botoes2 = document.getElementById("apagar")
    botoes2.style.display="block"
    
    let trocarLampada= window.document.getElementById("restaurar")
    trocarLampada.style.display="none" 
}

acender.addEventListener("click", acenderLampada)
apagar.addEventListener("click", apagarLampada)
foto.addEventListener("click", quebrarLampada)
restaurar.addEventListener("click", lampadaNormal)

