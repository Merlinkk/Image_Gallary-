// Character Slider
const char1 = document.getElementById('char1')
const char2 = document.getElementById('char2')
const char3 = document.getElementById('char3')
const char4 = document.getElementById('char4')
const next = document.getElementById('next')
const back = document.getElementById('back')

char2.style.display = 'none'
char3.style.display = 'none'
char4.style.display = 'none'
var mode = 1

next.onclick = () =>{
    if(mode>=0 && mode<4){
        mode++
    }
    console.log(mode)
    switch(mode){
        case 1:
            char1.style.display = ""
            char2.style.display = "none"
            char3.style.display = "none"
            char4.style.display = "none"
            break;
        case 2:
            char1.style.display = "none"
            char2.style.display = ""
            char3.style.display = "none"
            char4.style.display = "none"
            break;
        case 3:
            char1.style.display = "none"
            char2.style.display = "none"
            char3.style.display = ""
            char4.style.display = "none"
            break;
        case 4:
            char1.style.display = "none"
            char2.style.display = "none"
            char3.style.display = "none"
            char4.style.display = ""
            break;
    }
}
back.onclick = () =>{
    if(mode>1 && mode<=4){
        mode--
    }
    console.log(mode)
    switch(mode){
        case 1:
            char1.style.display = ""
            char2.style.display = "none"
            char3.style.display = "none"
            char4.style.display = "none"
            break;
        case 2:
            char1.style.display = "none"
            char2.style.display = ""
            char3.style.display = "none"
            char4.style.display = "none"
            break;
        case 3:
            char1.style.display = "none"
            char2.style.display = "none"
            char3.style.display = ""
            char4.style.display = "none"
            break;
        case 4:
            char1.style.display = "none"
            char2.style.display = "none"
            char3.style.display = "none"
            char4.style.display = ""
            break;
    }
}

// NPC slider
const npc1 = document.getElementById('npc1')
const npc2 = document.getElementById('npc2')
const npc3 = document.getElementById('npc3')
const npc4 = document.getElementById('npc4')
const npc5 = document.getElementById('npc5')
const npc6 = document.getElementById('npc6')
const next1 = document.getElementById('next1')
const back1 = document.getElementById('back1')

npc2.style.display = "none"
npc3.style.display = "none"
npc4.style.display = "none"
npc5.style.display = "none"
npc6.style.display = "none"
var slider=1;

next1.onclick = () =>{
    if(slider>=0 && slider<6){
        slider++
    }
    console.log(slider)
    switch(slider){
        case 1:
            npc1.style.display = ""
            npc2.style.display = "none"
            npc3.style.display = "none"
            npc4.style.display = "none"
            npc5.style.display = "none"
            npc6.style.display = "none"
            break;
        case 2:
            npc1.style.display = "none"
            npc2.style.display = ""
            npc3.style.display = "none"
            npc4.style.display = "none"
            npc5.style.display = "none"
            npc6.style.display = "none"
            break;
        case 3:
            npc1.style.display = "none"
            npc2.style.display = "none"
            npc3.style.display = ""
            npc4.style.display = "none"
            npc5.style.display = "none"
            npc6.style.display = "none"
            break;
        case 4:
            npc1.style.display = "none"
            npc2.style.display = "none"
            npc3.style.display = "none"
            npc4.style.display = ""
            npc5.style.display = "none"
            npc6.style.display = "none"
            break;
        case 5:
            npc1.style.display = "none"
            npc2.style.display = "none"
            npc3.style.display = "none"
            npc4.style.display = "none"
            npc5.style.display = ""
            npc6.style.display = "none"
            break;
        case 6:
            npc1.style.display = "none"
            npc2.style.display = "none"
            npc3.style.display = "none"
            npc4.style.display = "none"
            npc5.style.display = "none"
            npc6.style.display = ""
            break;
    }
}
back1.onclick = () =>{
    if(slider>1 && slider<=6){
        slider--
    }
    console.log(slider)
    switch(slider){
        case 1:
            npc1.style.display = ""
            npc2.style.display = "none"
            npc3.style.display = "none"
            npc4.style.display = "none"
            npc5.style.display = "none"
            npc6.style.display = "none"
            break;
        case 2:
            npc1.style.display = "none"
            npc2.style.display = ""
            npc3.style.display = "none"
            npc4.style.display = "none"
            npc5.style.display = "none"
            npc6.style.display = "none"
            break;
        case 3:
            npc1.style.display = "none"
            npc2.style.display = "none"
            npc3.style.display = ""
            npc4.style.display = "none"
            npc5.style.display = "none"
            npc6.style.display = "none"
            break;
        case 4:
            npc1.style.display = "none"
            npc2.style.display = "none"
            npc3.style.display = "none"
            npc4.style.display = ""
            npc5.style.display = "none"
            npc6.style.display = "none"
            break;
        case 5:
            npc1.style.display = "none"
            npc2.style.display = "none"
            npc3.style.display = "none"
            npc4.style.display = "none"
            npc5.style.display = ""
            npc6.style.display = "none"
            break;
        case 6:
            npc1.style.display = "none"
            npc2.style.display = "none"
            npc3.style.display = "none"
            npc4.style.display = "none"
            npc5.style.display = "none"
            npc6.style.display = ""
            break;
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      onEscapeKeyPressed();
    }
  });

const cross = document.getElementById('cross')
const blur = document.getElementById('blur')



const infoDiv = document.getElementById('popup')
infoDiv.style.display = 'none'
const img = document.getElementById('img')

function pointMe(url){
    console.log(url)
    infoDiv.style.display = ''
    img.setAttribute('src', url);
    blur.style.filter = 'blur(5px)'
    blur.style.zIndex = '-99' 

}

function onEscapeKeyPressed(){
    popup.style.display = 'none'
    blur.style.filter = ''
    blur.style.zIndex = '' 
    
}

cross.onclick = () =>{
    popup.style.display = 'none'
    blur.style.filter = ''
    blur.style.zIndex = '' 
}