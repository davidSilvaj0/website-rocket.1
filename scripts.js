// função para abrir ou fechar o menu (smartphone)

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu()
{
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');

    const txtMenu = document.getElementById('menuIcon');

    if(menu.classList =='active')
    {
        txtMenu.innerHTML = 'close';
        txtMenu.style.transition = '2s';
        txtMenu.style.color = 'white';
    }
    else{
        txtMenu.innerHTML = 'arrow_drop_down_circle'
        txtMenu.style.transition = '2s';
        txtMenu.style.color = '#9aa0a0';
    }

}

btnMobile.addEventListener('click', toggleMenu)



/* function openMenu(){
    //     if ( menu.style.display == 'block')
    //     {
    //         menu.style.display= 'none';
    //     }
    //     else
    //     {
    //         menu.style.display= 'block';
    //     }   
    // }

    // função para o menu nao desaparecer quando o resize muda
    // function onchangeSize(){
    //     if(window.innerWidth>=768){
    //         menu.style.display = "block";
    //     }
        
    //     else{
    //         menu.style.display = "none";
    //     }
    // }

    // função do botão de dar scroll para o topo da página

    //
*/

//Funcao para o botao para puxar para cima
const buttonUP = document.querySelector("#btnUp");
buttonUP.addEventListener("click",function (){
    

    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
});