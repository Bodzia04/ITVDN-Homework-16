         /*
        Задание 1:
        1. При нажатии на кнопку "Зарегистрироваться" (не используя события click) выведите с помощью alert
        информацию, которую ввел пользователь в поля login и password.
        2. В момент, когда поле ввода login получает фокус, покажите подсказку, которая находится в span#loginHint
           В момент, когда фокус получает поле ввода password - подсказку span#passwordHint
        */

let form = document.forms[0];
let loginHint = document.querySelector('#loginHint');
let passwordHint = document.querySelector('#passwordHint')

form.addEventListener('submit', function(e){
    let loginUser = form.loginInput.value;
    let passwordUser = form.passwordInput.value;
    alert('Login: ' + loginUser + "\n" +  'Password: ' + passwordUser);
});
// Login
form.loginInput.addEventListener('focus', function(){
    loginHint.style.display = 'inline-block';
});

form.loginInput.addEventListener('blur', function(){
    loginHint.style.display = 'none';
});
//Password
form.passwordInput.addEventListener('focus', function(){
    passwordHint.style.display = 'inline-block';
});

form.passwordInput.addEventListener('blur', function(){
    passwordHint.style.display = 'none';
});
    