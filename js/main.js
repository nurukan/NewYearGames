'use strict';

{
    // const totalBtn = 6;
    // let attemptCount = 0;
    // const atari = Math.floor(Math.random()*totalBtn);

    // const btnContainer = document.getElementById('btn-container');
    

    // for(let i = 0; i < totalBtn; i++){
    //     const div = document.createElement('div');
    //     div.classList.add('circle');

    //     div.textContent = i;
    //     div.style.color =  '#fcfcfc';
    //     div.style.textShadow = `
    //     -1px -1px 0 #a1bdbf,
    //      1px -1px 0 #a1bdbf,
    //     -1px  1px 0 #a1bdbf,
    //      1px  1px 0 #a1bdbf`;
    // }
   
    // function handleClick(count,button){
    //     attemptCount++;

    //     if(count === atari){
    //         setTimeout(function(){
    //             location.reload();
    //         },1000);
    //     }else{
    //         div.disabled = true;
    //         div.textContent = 'もう一回';
    //         if(attemptCount === totalBtn){
    //             setTimeout(function(){
    //                 location.reload();
    //             },1000);
    //         }
    //     }
    // }

    // }
    const totalBtn = 6;
    let attemptCount = 0;

    const atari = Math.floor(Math.random()*10);

    for(let i = 1; i <= totalBtn; i++){
        const div = document.createElement('div');
        div.classList.add('circle');

        div.textContent = i;
        div.style.color =  '#fcfcfc';
        div.style.textShadow = `
        -1px -1px 0 #a1bdbf,
         1px -1px 0 #a1bdbf,
        -1px  1px 0 #a1bdbf,
         1px  1px 0 #a1bdbf`;
        div.style.cursor = 'pointer';

        div.addEventListener('click', ()=> {
            attemptCount++;

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
                if(attemptCount === totalBtn){
                    const allBtns = document.querySelectorAll('.circle');
                    allBtns.forEach(function(event){
                        event.style.transition = 'opacity 2s';
                        event.style.opacity = '0';
                    });
                    setTimeout(function(){
                        location.reload();
                    },2200);
                   
            }
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


