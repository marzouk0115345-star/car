// const car = document.getElementById('car-sprite');
// const form = document.getElementById('carForm');
// const message = document.getElementById('status-msg');

// window.onload = function() {
//     startJsAnimation();

//     const saved = localStorage.getItem('storedUserName');
//     if (saved) {
//         message.innerText = "Welcome back, " + saved;
//     }
// };

// function startJsAnimation() {
//     let currentX = -400;
//     const stopPoint = (window.innerWidth / 2) - 290;

//     const driveTimer = setInterval(function() {
//         if (currentX >= stopPoint) {
//             clearInterval(driveTimer);
//         } else {
//             currentX += 8;
//             car.style.left = currentX + 'px';
//         }
//     }, 10);
// }

// const nameRegex = /^[A-Za-z\s]+$/;
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const phoneRegex = /^01[0-2,5]{1}[0-9]{8}$/;

// form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     const name = document.getElementById('userName').value.trim();
//     const contact = document.getElementById('userContact').value.trim();
//     const type = document.querySelector('input[name="contactType"]:checked').value;

//     if (!nameRegex.test(name)) {
//         message.innerText = "❌ Name must contain letters only";
//         return;
//     }

//     if (type === "email") {
//         if (!emailRegex.test(contact)) {
//             message.innerText = "❌ Invalid Email format";
//             return;
//         }
//     } else {
//         if (!phoneRegex.test(contact)) {
//             message.innerText = "❌ Invalid Phone number";
//             return;
//         }
//     }

//     localStorage.setItem('storedUserName', name);
//     localStorage.setItem('storedContact', contact);

//     message.innerText = "Success! Data Saved for " + name;
// });


const car = document.getElementById('car-sprite');

const form = document.getElementById('carForm');

const message = document.getElementById('status-msg');

window.onload = function () {

    startJsAnimation();

    // لو فيه مستخدم داخل بالفعل
    const currentUser =
        JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {

        message.innerText =
            "Welcome back, " + currentUser.name;
    }
};

function startJsAnimation() {

    let currentX = -400;

    const stopPoint =
        (window.innerWidth / 2) - 290;

    const driveTimer = setInterval(function () {

        if (currentX >= stopPoint) {

            clearInterval(driveTimer);

        } else {

            currentX += 8;

            car.style.left = currentX + 'px';
        }

    }, 10);
}

// const nameRegex =
// /^[A-Za-z\s\u0600-\u06FF]{3,}$/;

const emailRegex =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phoneRegex =
/^01[0-2,5]{1}[0-9]{8}$/;

form.addEventListener('submit', function (e) {

    e.preventDefault();

    const password =
        document.getElementById('password')
        .value.trim();

    const contact =
        document.getElementById('userContact')
        .value.trim();

    const type =
        document.querySelector(
            'input[name="contactType"]:checked'
        ).value;

    // validation

    // if (!nameRegex.test(name)) {

    //     message.innerText =
    //     "❌ الاسم غير صحيح";

    //     return;
    // }

    if (type === "email") {

        if (!emailRegex.test(contact)) {

            message.innerText =
            "❌ البريد الإلكتروني غير صحيح";

            return;
        }

    } else {

        if (!phoneRegex.test(contact)) {

            message.innerText =
            "❌ رقم الهاتف غير صحيح";

            return;
        }
    }

    // users
    let users =
    JSON.parse(localStorage.getItem("users"))
    || [];

    // البحث عن المستخدم
    const foundUser = users.find(u =>

        // u.name?.trim() === name
        u.password === password

        &&

        (
            u.phone?.trim() === contact ||

            u.email?.trim() === contact
        )
    );

    // لو الحساب غير موجود
    if (!foundUser) {

        message.innerText =
        "❌ الحساب غير موجود";

        return;
    }

    // تسجيل الدخول
    localStorage.setItem(
        "currentUser",
        JSON.stringify(foundUser)
    );

    message.style.color = "green";

    message.innerText =
    "✅ Welcome " + foundUser.name;

    // الانتقال للصفحة الرئيسية
    window.location.href = "../index.html";
});