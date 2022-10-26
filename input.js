(function() {
    document.querySelector('input').addEventListener('keydown', function(e) {
      if (e.keyCode === 13) {
        // можете делать все что угодно со значением текстового поля
        window.location.href = 'https://yandex.ru/search/?text='+document.getElementById('input').value
      }
    });
  })();

function search() {
  var text = document.getElementById('input').value
  if (text!=""){
    window.location.href = 'https://yandex.ru/search/?text=' + text;
  }
    
};