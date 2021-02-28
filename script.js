function func(){
    var checkbox;
    checkbox=document.getElementById('one');
    if (checkbox.checked) {
        alert('Ок.');
    }
    else {
        alert('Вы не приняли условия пользовательского соглашения!');
    }
}