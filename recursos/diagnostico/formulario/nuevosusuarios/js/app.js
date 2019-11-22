function registrar(){
    
var email = document.getElementById('email').value;
var contrasena = document.getElementById('contrasena').value;

firebase.initializeApp(firebaseConfig);
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC1MNtrK9PRCUx-bJqDEYs8rLlfW7jpML4",
  authDomain: "usuarios-7a4f6.firebaseapp.com",
  databaseURL: "https://usuarios-7a4f6.firebaseio.com",
  projectId: "usuarios-7a4f6",
  storageBucket: "",
  messagingSenderId: "729894080791",
  appId: "1:729894080791:web:b76f42675fb88502"
};


firebase.auth().createUserWithEmailAndPassword(email, contrasena)
.catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    
    
    // ...
  });

}
