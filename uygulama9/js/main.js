var btnjs = document.querySelectorAll('.btn');
var yenijs = document.querySelector('.yeniden');
var isaretler = ['✊','✋','✌'];
var oyuncujs = 0;
var bilgisayarjs = 0;
for(let i=0; i<btnjs.length; i++)
{
yenijs.addEventListener('click',yenifunc)
function yenifunc(){
    btnjs[i].disabled=false;
    document.querySelector('.p1').textContent='✊✋✌';
        document.querySelector('.p2').textContent='✊✋✌';
        document.querySelector('.sonuc').textContent='';
        oyuncujs=0;
        bilgisayarjs=0;
    }
    
    btnjs[i].addEventListener('click',btnfunc);
    function btnfunc(){
        var sonucjs = document.querySelector('.sonuc');
        var random = Math.floor(Math.random()*3);
        document.querySelector('.p1').textContent=isaretler[i];
        document.querySelector('.p2').textContent=isaretler[random];
        if(isaretler[i]==isaretler[random])
        {
            console.log('berabere');
        }
        else if(isaretler[i]=='✌' && isaretler[random]=='✋'||
                isaretler[i]=='✋' && isaretler[random]=='✊'||
                isaretler[i]=='✊' && isaretler[random]=='✌')
        oyuncujs=oyuncujs+1;
        else
        bilgisayarjs=bilgisayarjs+1;
        console.log('Kaybettin.')
        document.querySelector('.oyuncu').textContent=String(oyuncujs);
        document.querySelector('.bilgisayar').textContent=String(bilgisayarjs);
        if(oyuncujs==3){for(let i=0; i<btnjs.length; i++){btnjs[i].disabled=true;} sonucjs.textContent='Kazandınız';}
        if(bilgisayarjs==3){for(let i=0; i<btnjs.length; i++){btnjs[i].disabled=true;} sonucjs.textContent='Kaybettiniz';}  

    }
}
