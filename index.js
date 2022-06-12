// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];


const newEntry=[]

function writeCards(entryArray,eventName){
    for (let i = 0; i < stringArray.length; i++){
        newEntry.push(`Thank you, ${entryArray[i]}, for the wonderful ${eventName} gift!`);
        

    } 
    return newEntry;
}

function wrapGifts(gifts) {
    let i = 0; 
    while (i < gifts.length){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
    }
    return gifts;
}

function countDown (count){
    let i = count;
    while(i>=0){
        console.log(i);
        i++;
    }
}

countDown(10);