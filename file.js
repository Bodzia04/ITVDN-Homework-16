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

        /*
        Задание 3:
        Доработайте валидацию формы. Поле ввода Email не должно содержать значения
        admin@example.com, superuser@example.com и user@example.com
        Во время ввода значений в поле ввода email выполняйте проверку введенного значения и если
        значение совпадает с запрещенным, выводите сообщение об этом рядом с полем ввода.
        Проверку выполняйте на событие input
        */

// const form = document.forms[0];
// const inputsIsValidate = {
//     firstName: false,
//     lastName: false,
//     email: false,
//     password: false,
//     passwordConfirm: false,
//     checkbox: false
// };

// form.addEventListener("submit", function (e) {
//     if(!inputsIsValidate.email){
//         e.preventDefault();
//     }else{
//         alert('Форма була відправлена');  
//     } 
// });

// form.passwordConfirmInput.addEventListener("input", function () {
//     if (form.passwordConfirmInput.value != form.passwordInput.value) {
//         form.passwordConfirmInput.setCustomValidity("Пароль и подтверждение пароля не совпадают.");
//         form.passwordInput.setCustomValidity("Пароль и подтверждение пароля не совпадают.");
//     }
//     else {
//         form.passwordConfirmInput.setCustomValidity(""); 
//         form.passwordInput.setCustomValidity("");
//     }
// });

// let blockedEmails = ['admin@example.com','superuser@example.com','user@example.com'];
// let blockedEmailError = document.querySelector('#blockedEmailError');
// let email;
// form.emailInput.addEventListener('input', function(){
//     email = form.emailInput.value;
//     if(blockedEmails.indexOf(email) != -1){
//         form.emailInput.setAttribute('invalid', true);
//         blockedEmailError.textContent = 'Email ' + email + ' не может использоваться при регестрации';
//         form.emailInput.style.border = '1px solid red';
//     }
//     else{
//         blockedEmailError.textContent = '';
//         form.emailInput.style.border = '1px solid green'
//     }
// });

// form.firstNameInput.addEventListener('blur', function(){
//     if (form.firstNameInput.validity.valid) {
//         inputsIsValidate.firstName = true;
//     } else {
//         inputsIsValidate.firstName = false;
//     }
// });
// form.lastNameInput.addEventListener('blur', function(){
//     if (form.lastNameInput.validity.valid) {
//         inputsIsValidate.lastName = true;
//     } else {
//         inputsIsValidate.lastName = false;
//     }
// });
// form.emailInput.addEventListener('blur', function(){
//     let isBlockedEmail = blockedEmails.indexOf(email) != -1;
//     if (form.emailInput.validity.valid && !isBlockedEmail) {
//         inputsIsValidate.email = true;

//         form.emailInput.setAttribute('invalid', true);
//     } else {
//         inputsIsValidate.email = false;
//     }
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////

        /*
        Задание 4:
        Добавьте валидацию данных со следующими правилами:
        Все поля формы обязательные для ввода
        balance - значение должно быть больше 1000
        email - значение должно быть в формате электронного адреса
        age - значение должно быть больше 18

        Для предотвращения перегрузки страницы отменяйте действие по умолчанию, обрабатывая 
        событие submit.
        */

        let users = [
            {
                balance: '1250.89',
                age: 24,
                name: {
                    first: 'Golden',
                    last: 'Clements'
                },
                company: 'EWAVES',
                email: 'golden.clements@ewaves.io'
            },
            {
                balance: '3637.94',
                age: 23,
                name: {
                    first: 'Francis',
                    last: 'Hebert'
                },
                company: 'XPLOR',
                email: 'francis.hebert@xplor.biz'
            },
            {
                balance: '1106.44',
                age: 31,
                name: {
                    first: 'Hale',
                    last: 'Cross'
                },
                company: 'EARTHPURE',
                email: 'hale.cross@earthpure.us'
            },
            {
                balance: '2502.43',
                age: 25,
                name: {
                    first: 'Delores',
                    last: 'Sykes'
                },
                company: 'ASSITIA',
                email: 'delores.sykes@assitia.com'
            },
            {
                balance: '3651.54',
                age: 21,
                name: {
                    first: 'Ryan',
                    last: 'Bolton'
                },
                company: 'MOLTONIC',
                email: 'ryan.bolton@moltonic.biz'
            },
            {
                balance: '1345.79',
                age: 21,
                name: {
                    first: 'Carey',
                    last: 'Schwartz'
                },
                company: 'UXMOX',
                email: 'carey.schwartz@uxmox.info'
            },
            {
                balance: '3261.11',
                age: 30,
                name: {
                    first: 'Trevino',
                    last: 'Mullins'
                },
                company: 'TERRASYS',
                email: 'trevino.mullins@terrasys.org'
            },
            {
                balance: '1659.17',
                age: 20,
                name: {
                    first: 'Gilliam',
                    last: 'Mendez'
                },
                company: 'ZENTHALL',
                email: 'gilliam.mendez@zenthall.tv'
            },
            {
                balance: '2340.54',
                age: 32,
                name: {
                    first: 'Brewer',
                    last: 'Vargas'
                },
                company: 'QIMONK',
                email: 'brewer.vargas@qimonk.co.uk'
            },
            {
                balance: '1736.91',
                age: 24,
                name: {
                    first: 'Newman',
                    last: 'Wynn'
                },
                company: 'VISALIA',
                email: 'newman.wynn@visalia.name'
            }
        ];

        // класс для вывода информации в UL
        class ListService {
            selectedData;
            data;
            listElement;

            constructor(data, listElement, displayFn) {
                this.data = data;
                this.listElement = listElement;

                for (let index = 0; index < data.length; index++) {
                    const currentData = data[index];

                    let li = document.createElement("li");
                    li.textContent = displayFn(currentData);
                    currentData.id = index; // для каждого пользователя указываем id, который совпадает с id в разметке
                    li.dataset.id = index;

                    this.listElement.append(li);
                }
            }

            select(id) {
                this.selectedData = this.data.filter(x => x.id == id)[0];
                this.deselectAll();

                const index = this.data.indexOf(this.selectedData);
                this.listElement.children[index].classList.add("selected");
            }

            deselectAll() {
                for (let i = 0; i < this.listElement.children.length; i++) {
                    const child = this.listElement.children[i];
                    child.classList.remove("selected");
                }
            }

            // удаление данных из разметки и массива
            deleteSelectedItem() {
                const index = this.data.indexOf(this.selectedData);
                if (index != -1) {
                    this.listElement.children[index].remove();
                    this.data.splice(index, 1);
                }
            }
        }

        // Класс для работы с формой, редактирующей информацию о пользователе
        class UserFormService {
            currentUser;
            form;

            constructor(form) {
                this.form = form;
            }

            fillForm(user) {
                this.currentUser = user;

                this.form.firstName.value = user.name.first;
                this.form.lastName.value = user.name.last;
                this.form.companyName.value = user.company;
                this.form.balance.value = user.balance;
                this.form.email.value = user.email;
                this.form.age.value = user.age;
            }

            saveForm() {
                this.currentUser.name.first = this.form.firstName.value;
                this.currentUser.name.last = this.form.lastName.value;
                this.currentUser.company = this.form.companyName.value;
                this.currentUser.balance = this.form.balance.value;
                this.currentUser.email = this.form.email.value;
                this.currentUser.age = this.form.age.value;
            }

            // очистка формы
            resetForm() {
                this.form.reset();
            }
        }

        let userList = document.querySelector("#userList");
        let saveButton = document.querySelector("#saveButton");
        let deleteButton = document.querySelector("#deleteButton");

        let listService = new ListService(users, userList, x => x.name.first + " " + x.name.last);
        let formService = new UserFormService(document.forms[0]);

        userList.addEventListener("click", function (e) {
            if (e.target.tagName != "LI") return;

            const userNumber = e.target.dataset.id;
            listService.select(userNumber);
            formService.fillForm(listService.selectedData);
        });

        saveButton.addEventListener("click", function () {
            formService.saveForm();
        });

        document.forms[0].addEventListener("submit", function (e) {
            formService.saveForm();
            e.preventDefault();
        });

        // удаляем и очищаем форму
        deleteButton.addEventListener("click", function () {
            listService.deleteSelectedItem();
            formService.resetForm();
        });

///////////////////////////////////////////////////////////////////////////////////////////////////////////
    

    

    