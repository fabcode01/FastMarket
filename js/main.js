var menuLogin = document.getElementById('loginContainer')
var menuCart = document.getElementById('cartContainer')
var btnAddCart = document.getElementById('btnAddCart')


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
    },100)
    

       
    }
} )



//

btnAddCart.addEventListener('click', ()=>{
    btnAddCart.style.widows = 'black'
})


//Adicionar itens ao carrinho

    function adicionarProdutoNoCarrinho(Id, urlImg, descProduto, preco){

        var elementosItem = [
            `${Id}`,
            `${urlImg}`,
            `${descProduto}`,
            `${preco}`
        ]

        
        alerta('add')
        document.getElementById('cartEmpty').style.display = 'none'
        

        var qntItems = document.getElementById('qntProduto')
  
        if(document.getElementById('qntProduto').innerHTML > 0){
            document.getElementById('cartEmpty').style.display = 'none'
        }
        
        if(document.getElementById(`${Id}`) !== null){
            document.querySelector(`#${Id} .qntItens`).innerHTML ++
            
        } else {
            const cartIcon = document.getElementById('cart')
            cartIcon.classList.add('shake-animation')

            var qntProdutos = Id
            qntItems.innerHTML ++

            document.getElementById('cartProdutos').innerHTML +=  `

                <div class="item" id="${Id}">
                                <img src="${urlImg}" alt="" class="itemImg">

                                <p class="itemDesc">${descProduto}</p>

                                


                                <span class='qntItens' id="${Id}">1</span>
                                <p class="itemPreco">${preco}</p>
                                <span class="material-symbols-outlined" onclick="removerProdutoDoCarrinho(${elementosItem[0]})">do_not_disturb_on</span>
                                </span>

                                

                                
                </div>`
        
        }

    }

    
//remover itens do carrinho
    function removerProdutoDoCarrinho(removeId){
        if(removeId[1].innerHTML == 1){
           removeId[0].remove()
           document.getElementById('qntProduto').innerHTML --
           alerta('rem')

           


           if(document.getElementById('qntProduto').innerHTML == 0){
            document.getElementById('cart').classList.remove('shake-animation')
            document.getElementById('cartEmpty').style.display = 'flex'
           }

        } else {
            removeId[1].innerHTML --
        }


    }




   




//alerta remvoer, adicionar e funcao

function alerta(acao){
    var alert = document.getElementById('alert')
    let alertIcon = document.getElementById('alertIcon')
    let msgAlert = document.getElementById('descAlert')

    if (acao === 'add'){
        alert.style.display = 'flex'
        alertIcon.innerHTML = 'check'
        alertIcon.style.backgroundColor = 'green'
        msgAlert .innerHTML = 'item adicionado ao carrinho'

    
    } else if(acao === 'rem') {
        alert.style.display = 'flex'
        alertIcon.innerHTML = 'delete'
        alertIcon.style.backgroundColor = 'red'
        msgAlert .innerHTML = 'item removido do carrinho'
    } else if(acao === 'ilus'){
        alert.style.display = 'flex'
        alertIcon.innerHTML = 'error'
        alertIcon.style.backgroundColor = 'yellow'
        msgAlert .innerHTML = 'função ilustrativa :)'
    }

    let interval = setInterval(()=>{
        alert.style.display = 'none'
        clearInterval(interval)
        
    }, 1000)



}

//Botao Back-To-Top
var backTopButton = document.getElementById('back-to-top')
backTopButton.addEventListener('click',()=>{
    window.scrollTo(0,0)
})
window.addEventListener('scroll', ()=>{
    if(this.window.scrollY >= 500){
       
        backTopButton.style.display = 'flex'
    } else {
        backTopButton.style.display = 'none'
    }
    console.log(window.scrollY)

})


