//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyCdEfFIDwhFsPyeOWTy-VmblIRgMjLvLPE",
  authDomain: "kwitter-app-7e04b.firebaseapp.com",
  databaseURL: "https://kwitter-app-7e04b-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-7e04b",
  storageBucket: "kwitter-app-7e04b.appspot.com",
  messagingSenderId: "851693682077",
  appId: "1:851693682077:web:81daf0d46c16a65f094374"
};
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
   
   function addRoom() 
   {
     Room_name = document.getElementById("room_name").Value;

     firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
     });

     localStorage.setItem("room_name", room_name);

     window.location = "kwitter_page.html"
  
    }
// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData()
 {
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
       Room_names = childKey; 
       console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row; }); }); }
getData();

function logout() 
{ 
localStorage.removeItem("user_name");
localStorage.removeItem("room_name"); 
window.location = "kwitter.html";
}

function redirectToRoomName(name)
{ 
  console.log(name);
 localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
 }


