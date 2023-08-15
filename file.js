         /*
        Задание 1:
        1. При нажатии на кнопку "Зарегистрироваться" (не используя события click) выведите с помощью alert
        информацию, которую ввел пользователь в поля login и password.
        2. В момент, когда поле ввода login получает фокус, покажите подсказку, которая находится в span#loginHint
           В момент, когда фокус получает поле ввода password - подсказку span#passwordHint
        */

// let form = document.forms[0];
// let loginHint = document.querySelector('#loginHint');
// let passwordHint = document.querySelector('#passwordHint')

// form.addEventListener('submit', function(e){
//     let loginUser = form.loginInput.value;
//     let passwordUser = form.passwordInput.value;
//     alert('Login: ' + loginUser + "\n" +  'Password: ' + passwordUser);
// });
// // Login
// form.loginInput.addEventListener('focus', function(){
//     loginHint.style.display = 'inline-block';
// });

// form.loginInput.addEventListener('blur', function(){
//     loginHint.style.display = 'none';
// });
// //Password
// form.passwordInput.addEventListener('focus', function(){
//     passwordHint.style.display = 'inline-block';
// });

// form.passwordInput.addEventListener('blur', function(){
//     passwordHint.style.display = 'none';
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////

        /*
        Задание 2:
        Добавьте валидацию формы:
        Поле ввода логина обязательное и должно содержать не менее 4 символов
        Поле ввода пароля должно содержать строковое значение, состоящие не менее чем из 6 символов букв в нижнем и верхнем 
        регистре, цифры и спец символа.

        Проверку нужно организовать с помощью встроенной валидации.
        Регулярное выражение для проверки пароля - (?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*]).{6,}
        */
        // let form = document.forms[0];

        // form.addEventListener('submit', function(e){
        //     let loginUser = form.loginInput.value;
        //     let passwordUser = form.passwordInput.value;
        //     alert('Login: ' + loginUser + "\n" +  'Password: ' + passwordUser);
        // });
        
///////////////////////////////////////////////////////////////////////////////////////////////////////////

const form = document.forms[0];
const inputsIsValidate = {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    passwordConfirm: false,
    checkbox: false
};

form.addEventListener("submit", function (e) {
    if(!inputsIsValidate.email){
        e.preventDefault();
    }else{
        alert('Форма була відправлена');  
    } 
});

form.passwordConfirmInput.addEventListener("input", function () {
    if (form.passwordConfirmInput.value != form.passwordInput.value) {
        form.passwordConfirmInput.setCustomValidity("Пароль и подтверждение пароля не совпадают.");
        form.passwordInput.setCustomValidity("Пароль и подтверждение пароля не совпадают.");
    }
    else {
        form.passwordConfirmInput.setCustomValidity(""); 
        form.passwordInput.setCustomValidity("");
    }
});

/*
Задание 3:
Доработайте валидацию формы. Поле ввода Email не должно содержать значения
admin@example.com, superuser@example.com и user@example.com
Во время ввода значений в поле ввода email выполняйте проверку введенного значения и если
значение совпадает с запрещенным, выводите сообщение об этом рядом с полем ввода.
Проверку выполняйте на событие input
*/

let blockedEmails = ['admin@example.com','superuser@example.com','user@example.com'];
let blockedEmailError = document.querySelector('#blockedEmailError');
let email;
form.emailInput.addEventListener('input', function(){
    email = form.emailInput.value;
    if(blockedEmails.indexOf(email) != -1){
        form.emailInput.setAttribute('invalid', true);
        blockedEmailError.textContent = 'Email ' + email + ' не может использоваться при регестрации';
        form.emailInput.style.border = '1px solid red';
    }
    else{
        blockedEmailError.textContent = '';
        form.emailInput.style.border = '1px solid green'
    }
});

form.firstNameInput.addEventListener('blur', function(){
    if (form.firstNameInput.validity.valid) {
        inputsIsValidate.firstName = true;
    } else {
        inputsIsValidate.firstName = false;
    }
});
form.lastNameInput.addEventListener('blur', function(){
    if (form.lastNameInput.validity.valid) {
        inputsIsValidate.lastName = true;
    } else {
        inputsIsValidate.lastName = false;
    }
});
form.emailInput.addEventListener('blur', function(){
    let isBlockedEmail = blockedEmails.indexOf(email) != -1;
    if (form.emailInput.validity.valid && !isBlockedEmail) {
        inputsIsValidate.email = true;

        form.emailInput.setAttribute('invalid', true);
    } else {
        inputsIsValidate.email = false;
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////

    

    