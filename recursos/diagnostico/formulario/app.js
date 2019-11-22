function registrar(){
    console.log('diste un click')
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    console.log(email);
    console.log(password);

    

    var firebaseConfig = {
        apiKey: "AIzaSyDP-8gS20xz2n-YycAADgutqaYTcFRzrBM",
        authDomain: "base-docqui.firebaseapp.com",
        databaseURL: "https://base-docqui.firebaseio.com",
        projectId: "base-docqui",
        storageBucket: "",
        messagingSenderId: "728820310276",
        appId: "1:728820310276:web:afeede0eea55d043"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
       
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
}