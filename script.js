var difficulty = prompt("Enter difficulty from 1 to 3")
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Used like so
var higharchy = [0,11,12,1,2,3,4,5,6,7,13,8,9,10]
var lowestvalidcard = null
var middlecards = []
var deck = ["c01","c02","c03","c04","c05","c06","c07","c08","c09","c10","c11","c12","c13","h01","h02","h03","h04","h05","h06","h07","h08","h09","h10","h11","h12","h13","s01","s02","s03","s04","s05","s06","s07","s08","s09","s10","s11","s12","s13","d01","d02","d03","d04","d05","d06","d07","d08","d09","d10","d11","d12","d13"];
deck = shuffle(deck);
deck = shuffle(deck)
var middlecard = null
var ocastle1 = deck[0]
deck.shift()
var ocastle2 = deck[0]
deck.shift()
var ocastle3 = deck[0]
deck.shift()
var pcastle1 = deck[0]
deck.shift()
var pcastle2 = deck[0]
deck.shift()
var pcastle3 = deck[0]
deck.shift()
var opponentcards = deck.slice(0,7)
deck.splice(0,7)
var mycards = deck.slice(0,7)
deck.splice(0,7)
var i;
for (i = 0; i < mycards.length; i++) { 
 
var card = document.createElement("img");
card.src = "carddeck/" + mycards[i] +".png";
card.setAttribute("id",mycards[i])
card.setAttribute("width",138);
card.setAttribute("height",188);
card.setAttribute("onclick","playCard(this.id)")
document.getElementById("playercards").appendChild(card);
}
function drawcard(){
  var card = document.createElement("img");
  card.src = "carddeck/" + deck[0] +".png";
  card.setAttribute("id",deck[0])
  card.setAttribute("width",138);
  card.setAttribute("height",188);
  card.setAttribute("onclick","playCard(this.id)")
  document.getElementById("playercards").appendChild(card);
  mycards.push(deck[0])
  deck.shift();

}
function playCard(cardval){
 if (middlecard == null){
   var mid = document.createElement("img");
    mid.src = "carddeck/" +cardval+".png";
    mid.setAttribute("value",cardval)
    mid.setAttribute("id","mid")
    mid.setAttribute("width",138);
    mid.setAttribute("height",188);
    document.getElementById("playdeck").appendChild(mid);
    document.getElementById(cardval).remove();
    middlecard = cardval
    var playedcard = mycards.indexOf(cardval)
    mycards.splice(playedcard,1);}
    else {
      if (higharchy[Number(cardval.slice(1,3))] >= higharchy[Number(middlecard.slice(1,3))]){
        document.getElementById("mid").src = "carddeck/"+cardval+".png";
        middlecard = cardval
        middlecards.push(cardval)
        var playedcard = mycards.indexOf(cardval)
        mycards.splice(playedcard,1);
        document.getElementById(cardval).remove();
        if (Number(middlecard.slice(1,3)) == 10){
            middlecard = null
            deck = deck.concat(middlecards)
            deck = shuffle(deck)
            middlecards = []
            document.getElementById('mid').remove();

          }

      }
    }
    if (difficulty > 2){
alert("this is hard")
    }
    else {
      var e;
      var opponentmove;
      if (middlecard == null){
        middlecard == opponentcards[0]
      }
      else{
      for (o=0; o < opponentcards.length;o++){
        if (higharchy[Number(middlecard.slice(1,3))]<= 
        higharchy[Number(opponentcards[o].slice(1,3))]){
        lowestvalidcard = opponentcards[o]}}
      if (lowestvalidcard == null){
        opponentcards.push(deck[0]);
        deck.shift();}
        else{
        for (e = 0; e < opponentcards.length; e++){
          if (higharchy[Number(lowestvalidcard.slice(1,3))] > higharchy[Number(opponentcards[e].slice(1,3))] >= higharchy[Number(middlecard.slice(1,3))]){
          lowestvalidcard = opponentcards[e]
          }
        }
         document.getElementById("mid").src = "carddeck/"+lowestvalidcard+".png";
          middlecard= lowestvalidcard
          middlecards.push(lowestvalidcard)
          opponentcards.splice(Number(opponentcards.indexOf(lowestvalidcard)),1)

          document.getElementById("aihand").innerHTML = opponentcards.length
          if (Number(middlecard.slice(1,3)) == 10){
            middlecard = null
            deck = deck.concat(middlecards)
            deck = shuffle(deck)
            middlecards = []
            document.getElementById('mid').remove();

          }
      }
          

    
    }
 
}}
   setInterval(function(){ document.getElementById("aihand").innerHTML = opponentcards.length
;
if (opponentcards.length == 0){
  alert ("Ai wins.")
  location.reload();
}
if (mycards.length == 0){
  alert ("You win.")
  location.reload();
} }, 1000);
