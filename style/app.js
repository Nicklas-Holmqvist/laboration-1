
/** My namn through the story*/
let myName 

/** Reload the page to reset all inputs for a new game*/
function restartGame() {
    location.reload();
}

// Function to get my name and som funny answer

/** Button to get the name from input*/
document.querySelector('#chooseName').addEventListener('click', getMyName);

/** Reload the page to reset all inputs for a new game*/
const myNameText = document.querySelector('#myName');
document.querySelector('.to-part-3').style.visibility = 'hidden';

function getMyName() {

    const myNameText = document.querySelector('#myNameIs');   
    myName = document.querySelector('#myNameInput').value;
    console.log(myName)    

    if (myName == "Claptrap" || myName == "claptrap") {
         document.querySelector('#myNameIs').innerText = "Du kan ju inte vara mig!"
     }

     else if (myName == "David" || myName == "david") {
         document.querySelector('#myNameIs').innerText = "Hehe, inte så troligt!"
     }

     else if (myName == "Tsourdox" || myName == "tsourdox") {
         document.querySelector('#myNameIs').innerText = "Är det du som heter David? Då får du välja ett nytt namn!"
     }

     else if (myName == "" || myName == " ") {
         document.querySelector('#myNameIs').innerText = "Vad är det för ett namn?"
     }

     else {
        myNameText.innerText = "Hej " + myName + ", det var ju ett fint namn. Men jag får se om jag kan komma ihåg det!"     
        document.querySelector('.to-part-3').style.visibility = 'visible';
        document.querySelector('#chooseName').style.display = 'none';
        document.querySelector('#myNameInput').readOnly = true;
    }
}

// Välj status, Vek eller Klippa

document.querySelector('#chooseStatus').addEventListener('click', playerMorningStatus);

document.querySelector('.to-part-4').style.visibility = 'hidden';
function playerMorningStatus() {

    const myStatus = document.querySelector('#isStatus').value;

    if (myStatus == "Vek" || myStatus == "vek") {
        document.querySelector('#myStatus').innerText = "Oj oj oj..." + myName + " det är tyvärr inte tufft nog!!!";
        myStatus.value = "";
    }

    else if (myStatus == "Klippa" || myStatus == "klippa") {
        document.querySelector('#myStatus').innerText = "Intressant " + myName + ", nu får de allt se upp!"
        document.querySelector('.to-part-4').style.visibility = 'visible';
        document.querySelector('#chooseStatus').style.display = 'none';
        document.querySelector('#isStatus').readOnly = true;
    }

    else {
        document.querySelector('#myStatus').innerText = "Vaa?"
        myStatus.value = "";
    }
}

// Kassaskåpet
document.querySelector('#lockUp').addEventListener('click', lockUp)

document.querySelector('.to-part-7').style.visibility = 'hidden';

const lockUpResult = document.querySelector('#lockIsUp');

function lockUp() {
    const getSafeNr = document.querySelector('#getNumber').value;

    if ( getSafeNr == 7274) {
        lockUpResult.innerText = myName + ", testa vänd på siffrorna! 7 kanske är 1 eller 2?";
    }

    else if ( getSafeNr == 1214) {
        lockUpResult.innerText = "Du är nästan där, lite till!";
    }

    else if ( getSafeNr == 1224) {
        lockUpResult.innerText = "Äntligen! Nu ska vi se vad " + myName + " har att leka med!";
        document.querySelector('.to-part-7').style.visibility = 'visible';
        document.querySelector('#lockUp').style.display = 'none';
        document.querySelector('#getNumber').readOnly = true;
    }
    else {
        lockUpResult.innerText = "Rösten talar till " + myName + " - testa 1224!";
    }
}

// Välj vapen

document.querySelector('#chooseWeaponScene').addEventListener('click', playerWeapon);

const inputWeapon = document.querySelector('#whatWeapon');
const textWeapon = document.querySelector('#textWeapon');

function playerWeapon() {

    const whatWeapon = document.querySelector('#whatWeapon').value;

    if (whatWeapon == "Pistol" || whatWeapon == "pistol") {
        nextPartToPistolRegret()
        textWeapon.innerText = "";

    }
    else if (whatWeapon == "Shotgun" || whatWeapon == "shotgun") {
        nextPartToShotgunRegret()
        textWeapon.innerText = "";

    }
    else if (whatWeapon == "PSG" || whatWeapon == "psg") {
        nextPartToPsgRegret()
        textWeapon.innerText = "";

    }
    else if (whatWeapon == "Fatman" || whatWeapon == "fatman") {
        nextPartToFatmanRegret()
        textWeapon.innerText = "";
    }    
    else {
        textWeapon.innerText = "Det är tyvärr inget vapen!!!"
    }
}

document.querySelector('#part-1-2').addEventListener('click', nextPart2);
document.querySelector('#part-2-3').addEventListener('click', nextPart3);
document.querySelector('#part-3-4').addEventListener('click', nextPart4);
document.querySelector('#part-4-5').addEventListener('click', nextPart5);
document.querySelector('#part-5-6').addEventListener('click', nextPart6);
document.querySelector('#part-6-7').addEventListener('click', nextPart7);

document.querySelector('#part-8-7').addEventListener('click', nextPartIfShotgunRegretYes);
document.querySelector('#part-8-9').addEventListener('click', nextPart8);
document.querySelector('#part-9-10').addEventListener('click', nextPart9);
document.querySelector('#part-10-20').addEventListener('click', nextPart10);

document.querySelector('#part-11-7').addEventListener('click', nextPartIfPistolRegretYes);
document.querySelector('#part-11-12').addEventListener('click', nextPart11);
document.querySelector('#part-12-13').addEventListener('click', nextPart12);
document.querySelector('#part-13-20').addEventListener('click', nextPart13);

document.querySelector('#part-14-7').addEventListener('click', nextPartIfPsgRegretYes);
document.querySelector('#part-14-15').addEventListener('click', nextPart14);
document.querySelector('#part-15-16').addEventListener('click', nextPart15);
document.querySelector('#part-16-20').addEventListener('click', nextPart16);

document.querySelector('#part-17-7').addEventListener('click', nextPartIfFatmanRegretYes);
document.querySelector('#part-17-18').addEventListener('click', nextPart17);
document.querySelector('#part-18-19').addEventListener('click', nextPart18);
document.querySelector('#part-19-20').addEventListener('click', nextPart19);

document.querySelector('#yesPlease').addEventListener('click', yesPlease);
document.querySelector('#noHell').addEventListener('click', noHell);
document.querySelector('#part-20-1').addEventListener('click', restartGame);

// Scene changeBtn

const startScreen = document.querySelector('#part-1').style.marginLeft = '0';

// Intro before choices

function nextPart2() {
    const partOneHeight = document.querySelector('#part-1').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-2').style.marginLeft = "0";
}
function nextPart3() {
    const partOneHeight = document.querySelector('#part-2').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-3').style.marginLeft = "0";
}
function nextPart4() {
    const partOneHeight = document.querySelector('#part-3').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-4').style.marginLeft = "0";
}
function nextPart5() {
    const partOneHeight = document.querySelector('#part-4').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-5').style.marginLeft = "0";
}
function nextPart6() {
    const partOneHeight = document.querySelector('#part-5').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-6').style.marginLeft = "0";
}
function nextPart7() {
    const partOneHeight = document.querySelector('#part-6').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-7').style.marginLeft = "0";
}

// Weapon choices

// Shotgun scenes

function nextPartToShotgunRegret() {
    const partOneHeight = document.querySelector('#part-7').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-8').style.marginLeft = "0";
}

// Shotgun change firearm
// Change weapon
function nextPartIfShotgunRegretYes() {
    const partOneHeight = document.querySelector('#part-8').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-7').style.marginLeft = "0";
}
// Continue
function nextPart8() {
    const partOneHeight = document.querySelector('#part-8').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-9').style.marginLeft = "0";
}
function nextPart9() {
    const partOneHeight = document.querySelector('#part-9').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-10').style.marginLeft = "0";
}
function nextPart10() {
    const partOneHeight = document.querySelector('#part-10').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-20').style.marginLeft = "0";
}

// Pistol scenes

function nextPartToPistolRegret() {
    const partOneHeight = document.querySelector('#part-7').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-11').style.marginLeft = "0";
}

// Pistol change firearm
// Change weapon
function nextPartIfPistolRegretYes() {
    const partOneHeight = document.querySelector('#part-11').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-7').style.marginLeft = "0";
}
// Continue
function nextPart11() {
    const partOneHeight = document.querySelector('#part-11').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-12').style.marginLeft = "0";
}
function nextPart12() {
    const partOneHeight = document.querySelector('#part-12').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-13').style.marginLeft = "0";
}
function nextPart13() {
    const partOneHeight = document.querySelector('#part-13').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-20').style.marginLeft = "0";
}

// PSG scenes

function nextPartToPsgRegret() {
    const partOneHeight = document.querySelector('#part-7').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-14').style.marginLeft = "0";
}

// PSG change firearm
// Change weapon
function nextPartIfPsgRegretYes() {
    const partOneHeight = document.querySelector('#part-14').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-7').style.marginLeft = "0";
}
// Continue
function nextPart14() {
    const partOneHeight = document.querySelector('#part-14').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-15').style.marginLeft = "0";
}
function nextPart15() {
    const partOneHeight = document.querySelector('#part-15').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-16').style.marginLeft = "0";
}
function nextPart16() {
    const partOneHeight = document.querySelector('#part-16').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-20').style.marginLeft = "0";
}

// Fatman scenes

function nextPartToFatmanRegret() {
    const partOneHeight = document.querySelector('#part-7').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-17').style.marginLeft = "0";
}

// Fatman change firearm
// Change weapon
function nextPartIfFatmanRegretYes() {
    const partOneHeight = document.querySelector('#part-17').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-7').style.marginLeft = "0";
}
// Continue
function nextPart17() {
    const partOneHeight = document.querySelector('#part-17').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-18').style.marginLeft = "0";
}
function nextPart18() {
    const partOneHeight = document.querySelector('#part-18').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-19').style.marginLeft = "0";
}
function nextPart19() {
    const partOneHeight = document.querySelector('#part-19').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-20').style.marginLeft = "0";
}



document.querySelector('#part-20-1').style.visibility = "hidden";

function yesPlease() {
    document.querySelector('#textFinal').innerText = "Du tar ölen och lutar dig tillbaka å börjar halsa den."
    document.querySelector('#textFinal2').innerText = "- Va fan var det där för en dröm!?"
    document.querySelector('#yesPlease').style.display = "none";
    document.querySelector('#noHell').style.display = "none";
    document.querySelector('#part-20-1').style.visibility = "visible";    
}

function noHell() {
    document.querySelector('#textFinal').innerText = "Du lyfter dig upp ur barstolen och börjar gå mot dörren."
    document.querySelector('#textFinal2').innerText = "- Va fan var det i den ölen!?"
    document.querySelector('#textFinal3').innerText = "Frågade " + myName + " bartendern innan han steg ut till Sanctuarys stökiga gator."
    document.querySelector('#yesPlease').style.display = "none";
    document.querySelector('#noHell').style.display = "none";
    document.querySelector('#part-20-1').style.visibility = "visible";
}

