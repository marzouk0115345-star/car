let carsData = [];

const brandLogos = {
    Ford: "images/ford.png",
    Renault: "images/renault.png",
    Mercedes: "images/mercedes.png",
    Honda: "images/honda.png",
    Nissan: "images/nissan.png",
    Mazda: "images/mazda.png",
    Peugeot: "images/peugeot.png",
    Subaru: "images/subaru.png",
    Volvo: "images/volvo.png",
    "Land Rover": "images/landrover.png",
    Hyundai: "images/hyundai.png",
    Toyota: "images/toyota.png",
    Kia: "images/kia.png",
    Chevrolet: "images/chevrolet.png",
    Volkswagen: "images/volkswagen.png"
};

fetch("New cars.json")
    .then(res => res.json())
    .then(data => {
        carsData = data;
        displayBrands();
        displayAllCars();
    })
    .catch(err => console.log(err));


// عرض الماركات
function displayBrands() {
    const container = document.getElementById("brandsContainer");
    container.innerHTML = "";

    const brands = [...new Set(carsData.map(car => car.brand))];

    brands.forEach(brand => {
        const count = carsData.filter(car => car.brand === brand).length;

        const card = document.createElement("div");
        card.className = "brand-card";

        card.innerHTML = `
            <img src="${brandLogos[brand] || 'images/default.png'}">
            <h3>${brand}</h3>
            <p>(${count})</p>
        `;

        card.onclick = () => {
            document.querySelectorAll(".brand-card")
                .forEach(c => c.classList.remove("active"));

            card.classList.add("active");
            displayCarsByBrand(brand);
        };

        container.appendChild(card);
    });
}


// عرض كل العربيات
function displayAllCars() {
    const container = document.getElementById("carsContainer");
    container.innerHTML = "";

    carsData.forEach((car) => {
        createCarCard(car, container);
    });
}


// فلترة حسب الماركة
function displayCarsByBrand(brand) {
    const container = document.getElementById("carsContainer");
    container.innerHTML = "";

    const filteredCars = carsData.filter(car => car.brand === brand);

    filteredCars.forEach((car) => {
        createCarCard(car, container);
    });
}


// كارت العربية
function createCarCard(car, container) {
    const card = document.createElement("div");
    card.className = "car-card";

    card.innerHTML = `
        <img src="${car.image[0]}" alt="${car.name}">
        <h3>${car.name}</h3>
        <p class="price">${car.price}</p>
        <a  class="details" href="../details.html?id=${car.ID}" class="btn btn-details">التفاصيل</a>

        `;

    card.onclick = () => showDetails(car);

    container.appendChild(card);
}


// تفاصيل العربية
function showDetails(car) {
    const modal = document.getElementById("modal");
    const details = document.getElementById("carDetails");

    details.innerHTML = `
        <img src="${car.image[0]}">

        <div class="details-info">
            <h2>${car.name}</h2>
            <p><strong>السعر:</strong> ${car.price}</p>
            <p><strong>الموديل:</strong> ${car.year}</p>
            <p><strong>المحرك:</strong> ${car.engine}</p>
            <p><strong>الوقود:</strong> ${car.fuel}</p>
            <p><strong>عدد السلندرات:</strong> ${car.cylinders}</p>
            <p><strong>السرعة:</strong> ${car.Speed}</p>
            <p><strong>ناقل الحركة:</strong> ${car.transmission}</p>

            <button class="details-contact-btn" onclick="showContactForm()">
                تواصل معنا
            </button>

            <div id="contactFormContainer"></div>
        </div>
    `;

    modal.style.display = "block";
}


// إظهار الفورم
function showContactForm() {
    const container = document.getElementById("contactFormContainer");

    container.innerHTML = `
        <div class="contact-form-box">
            <input type="text" id="userName" placeholder="اكتب اسمك">
            <input type="text" id="userPhone" placeholder="اكتب رقم الموبايل">
            <button onclick="submitContactForm()">إرسال</button>
        </div>
    `;
}


// validation
function submitContactForm() {
    const name = document.getElementById("userName").value.trim();
    const phone = document.getElementById("userPhone").value.trim();

    const nameRegex = /^[A-Za-zا-ي ]+$/;
    const phoneRegex = /^[0-9]+$/;

    if (!nameRegex.test(name)) {
        alert("الاسم يجب أن يحتوي على حروف فقط");
        return;
    }

    if (!phoneRegex.test(phone)) {
        alert("رقم الهاتف يجب أن يحتوي على أرقام فقط");
        return;
    }

    alert("تم إرسال البيانات وسيتم التواصل معك قريبًا");
}


// غلق الـ modal
document.getElementById("closeBtn").onclick = () => {
    document.getElementById("modal").style.display = "none";
};

window.onclick = function(e) {
    if(e.target.id === "modal"){
        document.getElementById("modal").style.display = "none";
    }
};


// البحث
document.getElementById("searchInput").addEventListener("input", function () {
    const value = this.value.toLowerCase();

    document.querySelectorAll(".brand-card").forEach(card => {
        const name = card.querySelector("h3").innerText.toLowerCase();

        card.style.display = name.includes(value)
            ? "block"
            : "none";
    });
});


// زر التواصل الأساسي
document.getElementById("contactBtn").onclick = function () {
    alert("سيتم التواصل معكم قريبًا");
};