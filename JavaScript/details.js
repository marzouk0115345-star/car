




// دالة لجلب البيانات بناءً على الـ ID من الرابط
function loadCarDetails() {
    const params = new URLSearchParams(window.location.search);
    const carId = params.get('id');

    fetch("New cars.json") // تأكد إن ملف الـ JSON في نفس المجلد
        .then(response => response.json())
        .then(cars => {
            const car = cars.find(c => c.ID == carId);
            if (car) renderPage(car);
        });
}

function renderPage(car) {
    const container = document.getElementById('car-details-container');
    container.innerHTML = `
        <div class="top-section">
            <div class="gallery-wrapper">
                <div class="main-img-box">
                    <img src="${car.image[0]}" id="main-display-img">
                </div>
                <div class="thumb-list">
                    ${car.image.map(img => `<img src="${img}" onclick="document.getElementById('main-display-img').src='${img}'">`).join('')}
                </div>
            </div>

            <div class="specs-wrapper">
                <h2 class="name" style="color:#0f172a; margin-bottom:10px;">${car.name}</h2>
                
            <div class="spec-item">
                    <div class="spec-text"><h4>سعر السيارة</h4><p>${car.price}</p></div>
                    <i class="fas fa-tags"></i>
                </div>

                
                <div class="spec-item">
                    <div class="spec-text"><h4>حالة السيارة</h4><p>${car.status}</p></div>
                    <i class="fas fa-certificate"></i>
                </div>
                <div class="spec-item">
                    <div class="spec-text"><h4>ناقل الحركة</h4><p>${car.transmission}</p></div>
                    <i class="fas fa-cog"></i>
                </div>
                <div class="spec-item">
                    <div class="spec-text"><h4>المحرك</h4><p>${car.engine}</p></div>
                    <i class="fas fa-engine"></i>
                </div>
                <div class="spec-item">
                    <div class="spec-text"><h4>السرعة القصوى</h4><p>${car.Speed}</p></div>
                    <i class="fas fa-tachometer-alt"></i>
                </div>
            </div>
        </div>

        <div class="bottom-section">
            <div class="desc-card">
                <h3><i class="fas fa-file-alt"></i> وصف السيارة</h3>
                <p style="line-height: 1.8; color: #475569; margin-top: 15px;">
                    سيارة ${car.name} موديل ${car.year} بحالة ${car.status}. 
                    تتميز بمحرك ${car.engine} ونظام وقود ${car.fuel}. 
                    السيارة مجهزة بكافة كماليات الفئة الخاصة بها وتوفر تجربة قيادة ممتازة.
                </p>
            </div>

          

<div class="contact-card">
    <div class="user-avatar">
        <img src="/photo/mang.jpeg" alt="Mohamed Morsi">
    </div>
    
    <p>تواصل مع الوكيل <strong>Mohamed Morsi</strong></p>
    <p style="font-size: 13px; color: #64748b;">وكيل معتمد: Vida Automotive</p>
    
    <a href="tel:+201143348241" class="btn-action btn-phone">
        <i class="fas fa-phone-alt"></i> تواصل فون
    </a>
    <a href="https://chat.whatsapp.com/GPWTOkzQAjr5WQvrGZKP7R" class="btn-action btn-whatsapp">
        <i class="fab fa-whatsapp"></i> واتساب
    </a>
</div>
        </div>
    `;
}

window.onload = loadCarDetails;