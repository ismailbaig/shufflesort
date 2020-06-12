
var shuffle = function() {

    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    doShuffule(arr);
    var c = document.getElementById('prntContainer').children;
    for (i = 0; i < c.length; i++) {
        c[i].innerText = arr[i];
    }    
}

var sort = function() {

    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var c = document.getElementById('prntContainer').children;
    for (i = 0; i < c.length; i++) {
        c[i].innerText = arr[i];
    }
}


function doShuffule(array) {
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

