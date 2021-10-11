var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyCcMmf6higVGVvFF1nLGmwD-HnA2gmqfbU",
    authDomain: "roomfiler.firebaseapp.com",
    databaseURL: "https://roomfiler.firebaseio.com",
    projectId: "roomfiler",
    storageBucket: "roomfiler.appspot.com",
    messagingSenderId: "148702402208"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


