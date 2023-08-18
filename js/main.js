var menuLogin = document.getElementById('loginContainer')
var menuCart = document.getElementById('cartContainer')

//funcao abre e fecha os menus
function hideMenu(selecionado){
    if(selecionado == 2 && menuLogin.checkVisibility() === false){
        menuCart.style.display = 'none'
        menuLogin.style.display = 'flex'
    } else {
        menuLogin.style.display = 'none'
    }


    if(selecionado == 1 && menuCart.checkVisibility() === false){
        menuLogin.style.display = 'none'
        menuCart.style.display = 'flex'
    } else{
        menuCart.style.display = 'none'
    }
    
}

//fechar o menu quando clicar fora 

document.getElementById('main').addEventListener('mouseenter',() => {
    if(menuLogin.checkVisibility() === true || menuCart.checkVisibility() === true){
        let time = setInterval(() => {
            menuLogin.style.display = 'none'
            menuCart.style.display = 'none'
            clearInterval(time)
    },500)
    

       
    }
} )

