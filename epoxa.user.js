// ==Userscript==
// @name legendsgame_bot
// @description бот для какой-то игры
// @author vk.com/it256
// @include http://epoxa.mobi/*
// ==/Userscript==
(function(){
if(location.href.match('epoxa.mobi')) {
speed=1;
//ТЕКСТ
function legendsFindText(tx) {if(document.body.innerHTML.match(tx)) {return true;} else {return false;}}
//ССЫЛКИ
function legendsFindLink(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].text.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
function legendsFindLinkA(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].text==tx) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
function legendsFindLinkEnd(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].text.match(tx)) {l=document.links[i].href;}} if(l!=0) {return l;} else {return false;}}
function legendsFindLinkD(tx,bx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].innerHTML.match(bx)&&document.links[i].text.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
//function legendsFindLinkD(tx,bx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].innerHTML.match(bx)&&document.links[i].text.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
function legendsFindLinker(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].href.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
/*Переход по ссылке с интервалом*/
function legendsLink(tx, sec) {if(tx!="") {setTimeout(function(){location.href=tx;}, sec);}}
/*Проверка значения хранилища*/
function legendsIsStorage(name, tx) {if(localStorage.getItem(name)==tx) { return true; } else { return false;}}
function legendsCoord(hh) {for(var i=0;i<document.getElementsByTagName('b').length;i++){if(document.getElementsByTagName('b')[i].innerHTML.match("/")){var sdf=document.getElementsByTagName('b')[i].innerHTML;var hgf=sdf.split('/');y=parseInt(hgf[0]);x=parseInt(hgf[1]);i=document.getElementsByTagName('b').length;}}if(hh=="x") {return x;} if(hh=="y") {return y;}}
/*Назначение для хранилища*/
function legendsSet(name, tx) {if(localStorage.setItem(name, tx)) { return true; } else { return false;}}
function legendsI(name, tx) {document.getElementById(name).innerHTML=tx;}
function legendsClick(tx, sec) {for(var q=0;q<document.forms.length;q++){for(var y=0;y<document.forms[q].elements.length;y++){if (document.forms[q].elements[y].value.match(tx)){var go = document.forms[q].elements[y];setTimeout(function(){go.click();}, sec);}}}}
function legends(a, z) {var num=(Math.floor(Math.random() * (a - z)) + z); return num;}
function time(){ return Math.round(new Date().getTime() / 1000);}
if(legendsFindText('Мой герой')&&!legendsFindText('Главная')){
    //Смотрим на плюсы
    if(legendsFindLinkD('Сражения','lime')&&localStorage.getItem('tm')<time()) {//Идём в сражения
        legendsLink(legendsFindLink("Сражения"), 50/speed);
    }
    else if(legendsFindLinkD('Грот великанов','lime')) {//Идём в грот
        legendsLink(legendsFindLink("Грот великанов"), 50/speed);
    }
    else if(legendsFindLinkD('Подземелье','lime')) {//Идём в подземку
        legendsLink(legendsFindLink("Подземелье"), 50/speed);
    }
    else if(legendsFindLinkD('Арена','lime')) {//Идём на арену
        legendsLink(legendsFindLink("Арена"), 50/speed);
    }
    else if(legendsFindLinkD('Выживание','lime')) {//Идём в выжива
        legendsLink(legendsFindLink("Выживание"), 50/speed);
    }
    else if(legendsFindLinkD('Поход','lime')) {//Идём в поход
        legendsLink(legendsFindLink("Поход"), 50/speed);
    } else {
        legendsLink(legendsFindLink("Земли"), 50/speed);
    }



}else{//Обрабатываем локации
    if(legendsFindText('Причащение кровью')&&legendsFindText('Стена доблести')){//Это это сражения
     if(legendsFindLinkD('Олимп','lime')) {//Идём в выжива
        legendsLink(legendsFindLink("Олимп"), 50/speed);
     }else{
        legendsSet('tm', (time()+600));
        legendsLink(legendsFindLink("Главная"), 5000);
     }
    }

        if(legendsFindText('Олимп')){//Это это Олимп

    if(legendsFindText('Боев осталось')&&legendsFindText('Олимп')){//Это это Олимп
        legendsLink(legendsFindLink("Поиск противника"), 50/speed);
    }
    else if(legendsFindText('Обновить')&&legendsFindText('Олимп')&&legendsFindText('Противников')){//Это это Олимп
        legendsLink(legendsFindLink("Обновить"), 1000);
        legendsSet('pb', 0);
    }else if(legendsFindLinker('use_spell')&&legendsFindText('Олимп')) {//Сам бой
    a1 = 'use_spell=1';
    a2 = 'use_spell=2';
    a3 = 'use_spell=3';
    a4 = 'use_spell=4';
    if(legendsIsStorage('pb', 0)) {
        legendsLink(legendsFindLinker(a4), 1);
        legendsSet('pb', 1);
    }
    else if(legendsIsStorage('pb', 1)) {
        legendsLink(legendsFindLinker(a1), 4000);
        legendsSet('pb', 2);
    }
    else if(legendsIsStorage('pb', 2)) {
        legendsLink(legendsFindLinker(a3), 1000);
        legendsSet('pb', 3);
    }
    else if(legendsIsStorage('pb', 3)) {
        legendsLink(legendsFindLinker(a2), 1000);
        legendsSet('pb', 4);
    }
    else if(legendsIsStorage('pb', 4)) {
        legendsLink(legendsFindLinker(a2), 1000);
        legendsSet('pb', 5);
    }
    else if(legendsIsStorage('pb', 5)) {
        legendsLink(legendsFindLinker(a2), 1000);
        legendsSet('pb', 0);
    }
    
    } 
    else if(legendsFindText('До начала боя осталось')&&legendsFindLink('Обновить')) {
        legendsLink(legendsFindLink("Обновить"), 1000);
    }

    }//Олимп
     if(legendsFindText('Грот великанов')&&legendsFindLink('Главная')){//Это грот
     if(legendsFindLink('Вступить')) {//Идём в выжива
        legendsLink(legendsFindLink("Вступить"), 50/speed);
     } else if(legendsFindLink('Закрыто')&&legendsFindText('Сумма параметров')&&!legendsFindLink('Вступить')){
        legendsLink(legendsFindLink("Главная"), 50/speed);
     }else if(legendsFindText('Участников')&&legendsFindLink("Обновить")){
        legendsLink(legendsFindLink("Обновить"), 3000);
        legendsSet('pb', 0);
     }else if(legendsFindText('Одолейте')&&legendsFindLink("Обновить")){
        legendsLink(legendsFindLink("Обновить"), 1000);
     }else if(legendsFindText('Вы были убиты')&&legendsFindLink("Обновить")){
        legendsLink(legendsFindLink("Обновить"), 1000);
     }else if(legendsFindLinker('use_spell')){
    a1 = 'use_spell=1';
    a2 = 'use_spell=2';
    a3 = 'use_spell=3';
    a4 = 'use_spell=4';
    if(legendsIsStorage('pb', 0)) {
        legendsLink(legendsFindLinker(a4), 1);
        legendsSet('pb', 1);
    }
    else if(legendsIsStorage('pb', 1)) {
        legendsLink(legendsFindLinker(a1), 4000);
        legendsSet('pb', 2);
    }
    else if(legendsIsStorage('pb', 2)) {
        legendsLink(legendsFindLinker(a3), 1000);
        legendsSet('pb', 3);
    }
    else if(legendsIsStorage('pb', 3)) {
        legendsLink(legendsFindLinker(a2), 1000);
        legendsSet('pb', 4);
    }
    else if(legendsIsStorage('pb', 4)) {
        legendsLink(legendsFindLinker(a2), 1000);
        legendsSet('pb', 5);
    }
    else if(legendsIsStorage('pb', 5)) {
        legendsLink(legendsFindLinker(a2), 1000);
        legendsSet('pb', 0);
}
}
}//Грот
     if(legendsFindText('Подземелье')&&legendsFindLink('Главная')){//Это подземка
     if(legendsFindLink('Начать бой')) {//Идём в выжива
         legendsSet('pb', 0);
        legendsLink(legendsFindLink("Начать бой"), 50/speed);
     }else if(!legendsFindLink('Начать бой')&&legendsFindLink('Пропустить')) {//Идём в выжива
         legendsSet('pb', 0);
        legendsLink(legendsFindLink("Главная"), 50/speed);
     }else if(legendsFindLinker('use_spell')){
    a1 = 'use_spell=1';
    a2 = 'use_spell=2';
    a3 = 'use_spell=3';
    a4 = 'use_spell=4';
    if(legendsIsStorage('pb', 0)) {
        legendsLink(legendsFindLinker(a4), 8000);
        legendsSet('pb', 1);
    }
    else if(legendsIsStorage('pb', 1)) {
        legendsLink(legendsFindLinker(a2), 8000);
        legendsSet('pb', 2);
    }
    else if(legendsIsStorage('pb', 2)) {
        legendsLink(legendsFindLinker(a3), 8000);
        legendsSet('pb', 3);
    }
    else if(legendsIsStorage('pb', 3)) {
        legendsLink(legendsFindLinker(a1), 8000);
        legendsSet('pb', 4);
    }
    else if(legendsIsStorage('pb', 4)) {
        legendsLink(legendsFindLinker(a1), 8000);
        legendsSet('pb', 5);
    }
    else if(legendsIsStorage('pb', 5)) {
        legendsLink(legendsFindLinker(a3), 8000);
        legendsSet('pb', 0);
    }
}
}//Подземка
     if(legendsFindText('Арена')&&legendsFindLink('Главная')){//Это подземка
     if(legendsFindLink('Сразиться')) {//Идём в выжива
        legendsSet('pb', 0);
        legendsLink(legendsFindLink("Сразиться"), 50/speed);        
     }else if(legendsFindLinker('use_spell')){

    a1 = 'use_spell=1';
    a2 = 'use_spell=2';
    a3 = 'use_spell=3';
    a4 = 'use_spell=4';
    if(legendsIsStorage('pb', 0)) {
        legendsLink(legendsFindLinker(a4), 80);
        legendsSet('pb', 1);
    }
    else if(legendsIsStorage('pb', 1)) {
        legendsLink(legendsFindLinker(a2), 80);
        legendsSet('pb', 2);
    }
    else if(legendsIsStorage('pb', 2)) {
        legendsLink(legendsFindLinker(a3), 80);
        legendsSet('pb', 3);
    }
    else if(legendsIsStorage('pb', 3)) {
        legendsLink(legendsFindLinker(a1), 80);
        legendsSet('pb', 4);
    }
    else if(legendsIsStorage('pb', 4)) {
        legendsLink(legendsFindLinker(a1), 80);
        legendsSet('pb', 5);
    }
    else if(legendsIsStorage('pb', 5)) {
        legendsLink(legendsFindLinker(a3), 80);
        legendsSet('pb', 0);
    }
}else{
          legendsLink(legendsFindLink("Главная"), 50/speed);  
}
}
     if(legendsFindText('Выживание')&&legendsFindLink('Главная')){//Это подземка
    if(legendsFindLink('Отправиться')) {//Идём в выжива
        legendsSet('pb', 0);
        legendsLink(legendsFindLink("Отправиться"), 50/speed);        
     }








}

if(location.href.match('survival')){
     if(legendsFindLinker('use_spell')){
    a1 = 'use_spell=1';
    a2 = 'use_spell=2';
    a3 = 'use_spell=3';
    a4 = 'use_spell=4';
    if(legendsIsStorage('pb', 0)) {
        legendsLink(legendsFindLinker(a4), 8000);
        legendsSet('pb', 1);
    }
    else if(legendsIsStorage('pb', 1)) {
        legendsLink(legendsFindLinker(a2), 8000);
        legendsSet('pb', 2);
    }
    else if(legendsIsStorage('pb', 2)) {
        legendsLink(legendsFindLinker(a3), 8000);
        legendsSet('pb', 3);
    }
    else if(legendsIsStorage('pb', 3)) {
        legendsLink(legendsFindLinker(a1), 8000);
        legendsSet('pb', 4);
    }
    else if(legendsIsStorage('pb', 4)) {
        legendsLink(legendsFindLinker(a1), 8000);
        legendsSet('pb', 5);
    }
    else if(legendsIsStorage('pb', 5)) {
        legendsLink(legendsFindLinker(a3), 8000);
        legendsSet('pb', 0);
    }
     }
}
var d = new Date();
if(d.getMinutes()==59&&(d.getHours()==2||d.getHours()==4||d.getHours()==6||d.getHours()==8||d.getHours()==10||d.getHours()==12||d.getHours()==16||d.getHours()==14||d.getHours()==18||d.getHours()==20||d.getHours()==22)){
if(!location.href.match('massbattle'))legendsLink(legendsFindLinker(a3), 100);
else{
  if(legendsFindText('Причащение кровью')){
      alert('d');
if(legendsFindLink('Вступить')){
        legendsLink(legendsFindLink('Вступить'), 800);
        legendsSet('pb', 0);
}else if(legendsFindLink('Обновить')){
        legendsLink(legendsFindLink('Обновить'), 5000);
}
}
}
}
if(location.href.match('massbattle')){
if(legendsFindLinker('use_spell')){
    a1 = 'use_spell=1';
    a2 = 'use_spell=2';
    a3 = 'use_spell=3';
    a4 = 'use_spell=4';
    if(legendsIsStorage('pb', 0)) {
        legendsLink(legendsFindLinker(a4), 1);
        legendsSet('pb', 1);
    }
    else if(legendsIsStorage('pb', 1)) {
        legendsLink(legendsFindLinker(a1), 4000);
        legendsSet('pb', 2);
    }
    else if(legendsIsStorage('pb', 2)) {
        legendsLink(legendsFindLinker(a3), 1000);
        legendsSet('pb', 3);
    }
    else if(legendsIsStorage('pb', 3)) {
        legendsLink(legendsFindLinker(a2), 1000);
        legendsSet('pb', 4);
    }
    else if(legendsIsStorage('pb', 4)) {
        legendsLink(legendsFindLinker(a2), 1000);
        legendsSet('pb', 5);
    }
    else if(legendsIsStorage('pb', 5)) {
        legendsLink(legendsFindLinker(a2), 1000);
        legendsSet('pb', 0);
}
}else{
            legendsLink(legendsFindLink('Главная'), 5000);
}
}
    



if(legendsFindText('Вы устали, отдохните чтобы продолжить')) legendsLink(legendsFindLink('Главная'), 100);




     if(location.href.match('lands')&&legendsFindLink('Главная')){//Это подземка
     if(legends(1,30)==2) legendsLink(legendsFindLink('Главная'), 100);
  if(legendsFindLink('Продолжить')){
        legendsLink(legendsFindLink('Продолжить'), 300);
}else if(legendsFindLink('Обновить')){
            legendsLink(legendsFindLink("Обновить"), 1000);    
}else if(legendsFindLink('Войти')){
            legendsLink(legendsFindLink("Войти"), 1000);    
} else  if(legendsFindLinker('use_spell')){




    a1 = 'use_spell=1';
    a2 = 'use_spell=2';
    a3 = 'use_spell=3';
    a4 = 'use_spell=4';
    if(legendsIsStorage('pb', 0)) {
        legendsLink(legendsFindLinker(a4), 1);
        legendsSet('pb', 1);
    }
    else if(legendsIsStorage('pb', 1)) {
        legendsLink(legendsFindLinker(a1), 4000);
        legendsSet('pb', 2);
    }
    else if(legendsIsStorage('pb', 2)) {
        legendsLink(legendsFindLinker(a3), 1000);
        legendsSet('pb', 3);
    }
    else if(legendsIsStorage('pb', 3)) {
        legendsLink(legendsFindLinker(a2), 1000);
        legendsSet('pb', 4);
    }
    else if(legendsIsStorage('pb', 4)) {
        legendsLink(legendsFindLinker(a2), 1000);
        legendsSet('pb', 5);
    }
    else if(legendsIsStorage('pb', 5)) {
        legendsLink(legendsFindLinker(a2), 1000);
        legendsSet('pb', 0);
}
}


}
     if(legendsFindText('Поход')&&legendsFindLink('Главная')){//Это подземка
     if(legendsFindLinker('use_spell')){
    a1 = 'use_spell=1';
    a2 = 'use_spell=2';
    a3 = 'use_spell=3';
    a4 = 'use_spell=4';
    if(legendsIsStorage('pb', 0)) {
        legendsLink(legendsFindLinker(a4), 8000);
        legendsSet('pb', 1);
    }
    else if(legendsIsStorage('pb', 1)) {
        legendsLink(legendsFindLinker(a2), 8000);
        legendsSet('pb', 2);
    }
    else if(legendsIsStorage('pb', 2)) {
        legendsLink(legendsFindLinker(a3), 8000);
        legendsSet('pb', 3);
    }
    else if(legendsIsStorage('pb', 3)) {
        legendsLink(legendsFindLinker(a1), 8000);
        legendsSet('pb', 4);
    }
    else if(legendsIsStorage('pb', 4)) {
        legendsLink(legendsFindLinker(a1), 8000);
        legendsSet('pb', 5);
    }
    else if(legendsIsStorage('pb', 5)) {
        legendsLink(legendsFindLinker(a3), 8000);
        legendsSet('pb', 0);
    }
     }else {
         legendsLink(legendsFindLink("Начать бой"), 50/speed);
         legendsLink(legendsFindLinkD("Отправиться"), 50/speed);
         legendsLink(legendsFindLinkD("Главная"), 1000);
}


}



}
     if(legendsFindLink('Забрать награду')) {//Идём в выжива
        legendsLink(legendsFindLink("Забрать награду"), 50/speed);
     }
     if(legendsFindLink('Пропустить за')) {//Идём в выжива
        legendsLink(legendsFindLink("Главная"), 50/speed);
     }
    
    
}






})();
