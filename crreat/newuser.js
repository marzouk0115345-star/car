function register() {

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const city = document.getElementById("city").value.trim();
    const area = document.getElementById("area").value.trim();
    const password = document.getElementById("password").value.trim();

    const msg = document.getElementById("msg");

    const nameRegex = /^[A-Za-z\s\u0600-\u06FF]{3,}$/;
    const phoneRegex = /^01[0-2,5]{1}[0-9]{8}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // validation
    if (!nameRegex.test(name)) {
        msg.innerText = "❌ اسم غير صحيح";
        return;
    }

    if (!phoneRegex.test(phone)) {
        msg.innerText = "❌ رقم الهاتف غير صحيح";
        return;
    }

    if (!emailRegex.test(email)) {
        msg.innerText = "❌ البريد الإلكتروني غير صحيح";
        return;
    }

    if (password.length < 6) {
        msg.innerText = "❌ كلمة المرور لازم 6 حروف على الأقل";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // منع التكرار
    let exists = users.find(u =>
        u.phone === phone || u.email === email
    );

    if (exists) {
        msg.innerText = "❌ الحساب موجود بالفعل";
        return;
    }

    const user = {

    id: Date.now(),
        name,
        phone,
        email,
        city,
        area,
        password
    };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    msg.style.color = "green";
    msg.innerText = "✅ تم إنشاء الحساب بنجاح";
}

let users = JSON.parse(localStorage.getItem("users")) || [];

console.log(users);