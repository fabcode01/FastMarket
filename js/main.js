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



//controle de interação do botao de adicionar

btnAddCart.addEventListener('click', ()=>{
    btnAddCart.style.widows = 'black'
})



class produto{
    constructor(Id, urlImg, descProduto, preco){
    this.Id = Id
    this.urlImg = urlImg
    this.descProduto = descProduto
    this.preco = preco

}



    adicionarProdutoNoCarrinho(Id, urlImg, descProduto, preco){

        alerta('add')
    document.getElementById('cartEmpty').style.display = 'none'
    

    
    var qntItems = document.getElementById('qntProduto')
    

    

    if(document.getElementById('qntProduto').innerHTML > 0){
        document.getElementById('cartEmpty').style.display = 'none'
    }
    
    if(document.getElementById(`${Id}`) !== null){
        document.querySelector(`#${Id} .qntItens`).innerHTML ++
      } else {
        qntItems.innerHTML ++
        document.getElementById('cartProdutos').innerHTML += `

            <span class="item" id="${Id}">
                            <img src="${urlImg}" alt="" class="itemImg">

                            <p class="itemDesc">${descProduto}</p>

                            


                            <span class='qntItens'>1</span>
                            <span class="material-symbols-outlined" onclick="removerProdutoDoCarrinho(${Id})">delete</span>
                            </span>

                            <p class="itemPreco">${preco}</p>

                            
            </span>`
      }

      
      

     
    }

}

let Produto = new produto()
   
function removerProdutoDoCarrinho(Id){
    console.log(Id)


    /*if (document.querySelector(`span[class='qntItens']`).innerHTML == 0){
        Id.remove()
    } else{
        document.querySelector(`span[class='qntItens']`).innerHTML -- 
    }*/
    
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

    
    } else {
        alert.style.display = 'flex'
        alertIcon.innerHTML = 'delete'
        alertIcon.style.backgroundColor = 'red'
        msgAlert .innerHTML = 'item removido do carrinho'
    }

    let interval = setInterval(()=>{
        alert.style.display = 'none'
        clearInterval(interval)
        
    }, 1000)



}


