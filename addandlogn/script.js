let imageData = "";

const imageInput = document.getElementById('image');
const preview = document.getElementById('preview');

imageInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imageData = e.target.result;
            preview.src = imageData;
            preview.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});

function validateRegex(value, pattern) {
    return pattern.test(value);
}

function submitData() {
      const currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
        alert("يجب تسجيل الدخول أولاً");
        return;
    }
    const year = document.getElementById('year').value;
    const phone = document.getElementById('phone').value;

    const yearRegex = /^\d{4}$/;
    const phoneRegex = /^01[0-9]{9}$/;

    if (!validateRegex(year, yearRegex)) {
        alert("سنة الصنع لازم تكون 4 أرقام");
        return;
    }

    if (!validateRegex(phone, phoneRegex)) {
        alert("رقم الهاتف غير صحيح");
        return;
    }

    const car = {
         id: Date.now(),

    userId: currentUser.id,
        اسم: document.getElementById('name').value,
        ماركة: document.getElementById('brand').value,
        حالة: document.getElementById('status').value,
        سعر: document.getElementById('price').value,
        سنة: Number(year),
        محرك: document.getElementById('engine').value,
        وقود: document.getElementById('fuel').value,
        اسطوانات: Number(document.getElementById('cylinders').value),
        سرعة: document.getElementById('speed').value,
        ناقل_الحركة: document.getElementById('transmission').value,
        صورة: imageData,

        محافظة: document.getElementById('governorate').value,
        منطقة: document.getElementById('area').value,
        هاتف: phone
    };

    let cars = JSON.parse(localStorage.getItem("cars")) || [];
    cars.push(car);
    localStorage.setItem("cars", JSON.stringify(cars));

    document.getElementById('output').textContent = JSON.stringify(car, null, 2);

    alert("تم حفظ البيانات بنجاح ✅");
    location.href='/index.html';
}
let data = JSON.parse(localStorage.getItem("cars") || []);

console.log(data);