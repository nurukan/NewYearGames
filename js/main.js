'use strict';

{
    const atari = Math.floor(Math.random()*10);

    for(let i = 1; i <= 6; i++){
        const div = document.createElement('div');

        div.classList.add('circle');

        div.textContent = i;
        div.style.color =  '#fcfcfc';
        div.style.textShadow = `
        -1px -1px 0 #a1bdbf,
         1px -1px 0 #a1bdbf,
        -1px  1px 0 #a1bdbf,
         1px  1px 0 #a1bdbf`;

        div.addEventListener('click', ()=> {

            if(i === atari){
                div.classList.add('atari');
                div.textContent = '大吉';
                div.style.color =  '#faedf0';
                div.style.textShadow = `
               -1px -1px 0 #b81233,
                1px -1px 0 #b81233,
                -1px  1px 0 #b81233,
                1px  1px 0 #b81233`;
              
            }else{
                div.classList.add('hazure');
                div.textContent = 'もう一回！';
            }
        });
        
        const backgroundSquare = document.querySelector('.background_square'); 

        backgroundSquare.appendChild(div);
        console.log(div);

    }



    const today = document.querySelector('.today');

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth()+1;
    const day = now.getDate();

    today.textContent = `${year}年${month}月${day}日`;

}


