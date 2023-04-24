const firebaseConfig = {
    apiKey: "AIzaSyBXYxCPmpLtn7Q8cv6TFqci7t6OoA_WrLY",
    authDomain: "proyecto94-5246c.firebaseapp.com",
    databaseURL: "https://proyecto94-5246c-default-rtdb.firebaseio.com",
    projectId: "proyecto94-5246c",
    storageBucket: "proyecto94-5246c.appspot.com",
    messagingSenderId: "243267843734",
    appId: "1:243267843734:web:cf47d262cfa1837c4674b7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innetHTML="Bienvenido " + user_name;

  function addRoom()
  {
    room_name=document.getElementById("room_name").value;
    firebase.database().red("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location("index.html")
  }
  function getData() 
  {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    //Inicia código
    console.log("nombre de salas"+Room_names);
    row="<div class='room_name' id="+Room_names + "onclick='redirectToRoomName(this.id)'>"+Room_names + "</div><hr>"
    document.getElementById("output").innerHTML+=row();
    //Termina código
    });});}
    getData();
    function redirectToRoomName(name)
    {
        console.log(name);
        localStorage.setItem("room_name",name);
        window.location("Kwitter_page.html");
    }