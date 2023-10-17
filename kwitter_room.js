
const config = {
  apiKey: "AIzaSyBH2kg20hGGverJ1avrveHbke6ELuo_qA8",
  authDomain: "lets-chat-b6c04.firebaseapp.com",
  databaseURL: "https://lets-chat-b6c04-default-rtdb.firebaseio.com",
  projectId: "lets-chat-b6c04",
  storageBucket: "lets-chat-b6c04.appspot.com",
  messagingSenderId: "188241974324",
  appId: "1:188241974324:web:21b6ead9f4b2616e98e661"
};

firebase.initializeApp(config);
    

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
