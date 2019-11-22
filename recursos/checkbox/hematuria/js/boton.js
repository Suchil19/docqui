function ir(){
     var paginas = ["http://www.google.com", "http://facebook.com",];
     var i = Math.floor(Math.random() * paginas.length);
     location.href = paginas[i];
}