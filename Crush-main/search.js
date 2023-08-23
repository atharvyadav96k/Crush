function search(){
    var searchValue = document.getElementById('search').value;
    if(searchValue){
        window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(searchValue);
    }
}

