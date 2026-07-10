


//======================
/**
 * دالة جلب البيانات باستخدام XMLHttpRequest
 */
function loadCarsData() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET","New cars.json", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var cars = JSON.parse(xhr.responseText);
      renderCards(cars);
    }
  };
  xhr.send();
}

/**
 * دالة بناء الكروت داخل الـ DOM
 */
function renderCards(cars) {
  var container = document.getElementById("cars-wrapper");
  var htmlContent = "";
const myPhoneNumber = "01143348241";
const whatsapp="https://chat.whatsapp.com/GPWTOkzQAjr5WQvrGZKP7R";
  cars.forEach(function (car) {
    htmlContent += `
            <div class="card">
          
                <div class="card-img-wrapper">

                    <img src="${car.image[0] }" alt="${car.name}" loading="lazy">
                </div>
                <div class="card-content">
                    <h3 class="car-name">${car.name}</h3>
                    <p class="car-details">${car.year} | ${car.Speed} كم | ${car.fuel}</p>
                    <div class="car-price">${car.price} جنيه</div>
   <button onclick="addToFavorites(${car.ID || car.id})">

    ❤️ إضافة للمفضلة

</button>
                </div>
                <div class="card-actions">
                    <button class="btn btn-call"><a href="tel:${myPhoneNumber}" class="btn btn-call">
                        📞 اتصال
                    </a></button>
                    <button class="btn btn-whatsapp" onclick="location.href='https://chat.whatsapp.com/GPWTOkzQAjr5WQvrGZKP7R'">💬 واتساب</button>
                </div>
                    <a href="details.html?id=${car.ID}" class="btn btn-details">التفاصيل</a>

                
            </div>
        `;
  });

  container.innerHTML = htmlContent;
}





/**
 * دالة التحكم في حركة السهم
 * @param {number} direction - (1 لليسار، -1 لليمين)
 */
function scrollSlider(direction) {
  const wrapper = document.getElementById("cars-wrapper");
  const cardWidth = 320; // عرض الكرت (300) + الـ Gap (20)

  wrapper.scrollBy({
    left: direction * cardWidth,
    behavior: "smooth",
  });
}

// بدء التشغيل عند تحميل الصفحة
window.onload = loadCarsData;



//===========================


function addToFavorites(carId){

    const currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

    if(!currentUser){

        alert("سجل دخول أولاً");

        return;
    }

    let favorites =
    JSON.parse(localStorage.getItem("favorites"))
    || [];

    // تحويل القيم لأرقام
    carId = Number(carId);

    // البحث
    const exists = favorites.some(f => {

        return Number(f.userId) === Number(currentUser.id)

        &&

        Number(f.carId) === carId;
    });

    if(exists){

        alert("العربية موجودة بالفعل");

        return;
    }

    favorites.push({

        userId: Number(currentUser.id),

        carId: carId
    });

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    alert("تمت الإضافة ❤️");
    console.log("carId =", carId);
console.log(favorites);
}







function calculateInstallment() {
    // جلب القيم من المدخلات
    const price = parseFloat(document.getElementById('carPrice').value);
    const downPayment = parseFloat(document.getElementById('downPayment').value);
    const months = parseInt(document.getElementById('months').value);
    
    // التحقق من صحة البيانات
    if (isNaN(price) || isNaN(downPayment) || price <= downPayment) {
        alert("يرجى إدخال مبالغ صحيحة (المقدم يجب أن يكون أقل من سعر السيارة)");
        return;
    }

    // المبلغ المتبقي للقسط
    const loanAmount = price - downPayment;
    
    // حساب الفائدة (مثال: فائدة بسيطة 10% سنوياً)
    const annualInterestRate = 0.10; 
    const totalInterest = loanAmount * annualInterestRate * (months / 12);
    
    // إجمالي المبلغ مع الفائدة
    const totalWithInterest = loanAmount + totalInterest;
    
    // القسط الشهري
    const monthlyInstallment = totalWithInterest / months;

    // عرض النتيجة
    const resultBox = document.getElementById('resultBox');
    const monthlyAmountDisplay = document.getElementById('monthlyAmount');
    
    monthlyAmountDisplay.innerText = Math.round(monthlyInstallment).toLocaleString();
    resultBox.style.display = 'block';
}


