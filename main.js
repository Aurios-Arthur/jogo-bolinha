document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag == 'p'){
        someCirculo();
        incluiBolinhas();
    } else {
        console.log('ta errado!')
    }
})  

let pontos = 0;

function someCirculo () {
   const sumir = document.querySelector('.redCircle')
   sumir.remove();
    pontos++;
   console.log(pontos)
   contador(pontos)
}

function contador (pontos){
    const contar = document.querySelector('#contador')
    contar.innerHTML = `Contador: ${pontos}`
}

function incluiBolinhas() {
    const bolinhas = document.querySelector('#bolinhas');
    
    
    const bolinha = document.createElement('p');
    bolinha.classList.add('redCircle');
    bolinha.textContent = ' ';
    
    
    const posX = Math.random() * 90; 
    const posY = Math.random() * 90; 
    
    // Adicionar o estilo para posicionamento e aparência
    bolinha.style.position = 'absolute';
    bolinha.style.left = `${posX}vw`;
    bolinha.style.top = `${posY}vh`;
    bolinha.style.background = 'red';
    bolinha.style.width = '100px'; 
    bolinha.style.height = '100px';
    bolinha.style.borderRadius = '50%';

    
    bolinhas.appendChild(bolinha);

    
    setTimeout(() => {
        bolinha.remove();
    }, 5000); 

}



incluiBolinhas()