






const currentUser =
JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {

    window.location.href = "/addandlogn/login.html";
}

// بيانات المستخدم

document.getElementById("name").value =
currentUser.name || "";

document.getElementById("phone").value =
currentUser.phone || "";

document.getElementById("email").value =
currentUser.email || "";

document.getElementById("city").value =
currentUser.city || "";

document.getElementById("area").value =
currentUser.area || "";

document.getElementById("userName").innerText =
currentUser.name;

document.getElementById("firstLetter").innerText =
currentUser.name.charAt(0).toUpperCase();


// تعديل

function enableEdit(){

    document
    .querySelectorAll("input")
    .forEach(input => {

        input.disabled = false;
    });
}


// حفظ

function saveData(){

    let users =
    JSON.parse(localStorage.getItem("users"))
    || [];

    const index =
    users.findIndex(u => u.id === currentUser.id);

    users[index].name =
    document.getElementById("name").value;

    users[index].phone =
    document.getElementById("phone").value;

    users[index].email =
    document.getElementById("email").value;

    users[index].city =
    document.getElementById("city").value;

    users[index].area =
    document.getElementById("area").value;

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    localStorage.setItem(
        "currentUser",
        JSON.stringify(users[index])
    );

    alert("تم حفظ التعديلات ✅");
}


// سيارات المستخدم

const cars =
JSON.parse(localStorage.getItem("cars"))
|| [];

const myCars =
cars.filter(car => car.userId === currentUser.id);

const container =
document.getElementById("myCars");
myCars.forEach(car => {

    container.innerHTML += `

    <div class="flip-card">

        <div class="flip-card-inner" id="card-${car.id}">

<div class="flip-card-front">

    <div class="car-image">

        <img src="${car.صورة}" alt="${car.اسم}">

    </div>

    <div class="car-info">

        <h2>${car.اسم}</h2>

        <span class="price">
            ${car.سعر}
        </span>

        <div class="specs">

            <span>${car.سنة}</span>

            <span>${car.وقود}</span>

            <span>${car.محرك}</span>

        </div>

        <button
        class="details-btn"
        onclick="toggleCard(${car.id})">

            عرض التفاصيل

        </button>

    </div>

</div>
    <div class="flip-card-back">

    <h2 class="details-title">
        تفاصيل السيارة
    </h2>

    <div class="details-grid">

        <div class="field">
            <label>اسم السيارة</label>
            <input id="name-${car.id}" value="${car.اسم}">
        </div>

        <div class="field">
            <label>الماركة</label>
            <input id="brand-${car.id}" value="${car.ماركة}">
        </div>

        <div class="field">
            <label>الحالة</label>
            <input id="status-${car.id}" value="${car.حالة}">
        </div>

        <div class="field">
            <label>السعر</label>
            <input id="price-${car.id}" value="${car.سعر}">
        </div>

        <div class="field">
            <label>سنة الصنع</label>
            <input id="year-${car.id}" value="${car.سنة}">
        </div>

        <div class="field">
            <label>المحرك</label>
            <input id="engine-${car.id}" value="${car.محرك}">
        </div>

        <div class="field">
            <label>نوع الوقود</label>
            <input id="fuel-${car.id}" value="${car.وقود}">
        </div>

        <div class="field">
            <label>عدد الأسطوانات</label>
            <input id="cylinders-${car.id}" value="${car.اسطوانات}">
        </div>

        <div class="field">
            <label>السرعة</label>
            <input id="speed-${car.id}" value="${car.سرعة}">
        </div>

        <div class="field">
            <label>ناقل الحركة</label>
            <input id="transmission-${car.id}" value="${car.ناقل_الحركة}">
        </div>

        <div class="field">
            <label>المحافظة</label>
            <input id="gov-${car.id}" value="${car.محافظة}">
        </div>

        <div class="field">
            <label>المنطقة</label>
            <input id="area-${car.id}" value="${car.منطقة}">
        </div>

        <div class="field">
            <label>رقم الهاتف</label>
            <input id="phone-${car.id}" value="${car.هاتف}">
        </div>

    </div>

    <div class="card-buttons">

        <button
        class="save-btn"
        onclick="updateCar(${car.id})">
            حفظ
        </button>

        <button
        class="delete-btn"
        onclick="deleteCar(${car.id})">
            حذف
        </button>

        <button
        class="back-btn"
        onclick="toggleCard(${car.id})">
            رجوع
        </button>

    </div>

</div>

    </div>

    `;
});





function toggleCard(id){

    document
    .getElementById(`card-${id}`)
    .classList.toggle("flipped");
}

function updateCar(id){

    let cars =
    JSON.parse(localStorage.getItem("cars"))
    || [];

    const index =
    cars.findIndex(car =>

        Number(car.id) === Number(id)
    );

    if(index === -1) return;

 cars[index].اسم =
document.getElementById(`name-${id}`).value;

cars[index].ماركة =
document.getElementById(`brand-${id}`).value;

cars[index].حالة =
document.getElementById(`status-${id}`).value;

cars[index].سعر =
document.getElementById(`price-${id}`).value;

cars[index].سنة =
document.getElementById(`year-${id}`).value;

cars[index].محرك =
document.getElementById(`engine-${id}`).value;

cars[index].وقود =
document.getElementById(`fuel-${id}`).value;

cars[index].اسطوانات =
document.getElementById(`cylinders-${id}`).value;

cars[index].سرعة =
document.getElementById(`speed-${id}`).value;

cars[index].ناقل_الحركة =
document.getElementById(`transmission-${id}`).value;

cars[index].محافظة =
document.getElementById(`gov-${id}`).value;

cars[index].منطقة =
document.getElementById(`area-${id}`).value;

cars[index].هاتف =
document.getElementById(`phone-${id}`).value;

    localStorage.setItem(
        "cars",
        JSON.stringify(cars)
    );

    alert("تم حفظ التعديل");
}

function deleteCar(id){

    if(!confirm("حذف السيارة؟"))
        return;

    let cars =
    JSON.parse(localStorage.getItem("cars"))
    || [];

    cars = cars.filter(car =>

        Number(car.id) !== Number(id)
    );

    localStorage.setItem(
        "cars",
        JSON.stringify(cars)
    );

    location.reload();
}


//المفضله 
// ===============================
// إضافة للمفضلة
// ===============================

function addToFavorites(carId){

    console.log(carId);

    const currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

    if(!currentUser){

        alert("يجب تسجيل الدخول أولاً");

        return;
    }

    let favorites =
    JSON.parse(localStorage.getItem("favorites"))
    || [];

    // تحويل لأرقام
    carId = Number(carId);

    // منع التكرار
    const exists = favorites.some(f =>

        Number(f.userId) ===
        Number(currentUser.id)

        &&

        Number(f.carId) === carId
    );

    if(exists){

        alert("العربية موجودة بالفعل بالمفضلة");

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

    alert("تمت الإضافة للمفضلة ❤️");
}



function loadFavorites(){

    const favorites =
    JSON.parse(localStorage.getItem("favorites"))
    || [];

    const myFavorites =
    favorites.filter(f =>

        Number(f.userId) ===
        Number(currentUser.id)
    );

    const favContainer =
    document.getElementById("favoriteCars");

    favContainer.innerHTML = "";

    if(myFavorites.length === 0){

        favContainer.innerHTML =
        "<h3>لا توجد سيارات بالمفضلة</h3>";

        return;
    }

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "../New cars.json", true);

    xhr.onreadystatechange = function(){

        if(xhr.readyState === 4 && xhr.status === 200){

            const cars =
            JSON.parse(xhr.responseText);

            const favoriteCars =
            cars.filter(car =>

                myFavorites.some(f =>

                    Number(f.carId) ===
                    Number(car.ID)
                )
            );

            if(favoriteCars.length === 0){

                favContainer.innerHTML =
                "<h3>لم يتم العثور على السيارات</h3>";

                return;
            }

            favoriteCars.forEach(car => {
              console.log(car);

                favContainer.innerHTML += `

                    <div class="car-card">

                        <img src="${car.image[0]}" alt="${car.name}">

                        <div class="car-info">

                            <h3>${car.name}</h3>

                            <p>${car.price}</p>

                        </div>
                    <a   class="details" href="/details.html?id=${car.ID}" class="btn btn-details">التفاصيل</a>

                    </div>

                `;
            });

        }
    };

    xhr.send();
}

// Logout

function logout(){

    localStorage.removeItem("currentUser");

    window.location.href = "/index.html";
}
// ===============================
// التنقل بين الصفحات
// ===============================

function showProfile(){

    document.getElementById("profileSection").style.display = "block";
    document.getElementById("favoritesSection").style.display = "none";
    document.getElementById("myCarsSection").style.display = "none";
}

function showFavorites(){

    document.getElementById("profileSection").style.display = "none";
    document.getElementById("favoritesSection").style.display = "block";
    document.getElementById("myCarsSection").style.display = "none";
    

    loadFavorites();
}

function showMyCars(){

    document.getElementById("profileSection").style.display = "none";
    document.getElementById("favoritesSection").style.display = "none";

    document.getElementById("myCarsSection").style.display = "block";
}





