let cars = [];

async function loadCars(){

    const res = await fetch("elecars.json");

    cars = await res.json();

    renderBrands();

    renderCars(cars, document.getElementById("allCars"));
}

window.onload = () => {

    loadCars();

    slider();
};



/* ================= */
/* BRANDS */
/* ================= */

function renderBrands(){

    const container = document.getElementById("brands");

    container.innerHTML = "";

    const unique = [...new Map(cars.map(c => [c.brand, c])).values()];

    unique.forEach(b => {

        container.innerHTML += `

        <div class="brand" onclick="filterCars('${b.brand}')">

            <img src="${b.brandImage}">

            <h3>${b.brand}</h3>

        </div>

        `;
    });
}



/* ================= */
/* FILTER */
/* ================= */

function filterCars(brand){

    const filtered = cars.filter(c => c.brand === brand);

    document.getElementById("filterTitle").innerText = brand;

    renderCars(filtered, document.getElementById("filteredCars"));
}



/* ================= */
/* RENDER CARDS */
/* ================= */

function renderCars(data, container){

    container.innerHTML = "";

    data.forEach(car => {

        container.innerHTML += `

        <div class="card">

            <div class="inner">



                <!-- FRONT -->

                <div class="front">

                    <img src="${car.image[0]}">

                    <div class="info">

                        <h3>${car.name}</h3>

                        <p class="price">${car.price}</p>
                            <div class="actions">

        <a href="https://wa.me/201000000000"
        class="whatsapp"
        onclick="event.stopPropagation()">

            واتساب

        </a>



        <a href="tel:01000000000"
        class="call"
        onclick="event.stopPropagation()">

            اتصال

        </a>

    </div>
<div class="detels"><h1 class="detelsuesd">التفاصيل</h1></div>
                    </div>

                </div>



                <!-- BACK -->

                <div class="back">

                    <h3>${car.name}</h3>

         







<div id="status" class="spec">
    <span>الحالة</span>
    <span>${car.status}</span>
</div>



<div id="price" class="spec">
    <span>السعر</span>
    <span>${car.price}</span>
</div>



<div id="year" class="spec">
    <span>السنة</span>
    <span>${car.year}</span>
</div>



<div id="motor" class="spec">
    <span>الموتور</span>
    <span>${car.engine}</span>
</div>



<div id="fuel" class="spec">
    <span>الطاقة</span>
    <span>${car.fuel}</span>
</div>



<div id="cylinders" class="spec">
    <span>السلندرات</span>
    <span>${car.cylinders}</span>
</div>



<div id="speed" class="spec">
    <span>السرعة</span>
    <span>${car.Speed}</span>
</div>



<div id="transmission" class="spec">
    <span>الفتيس</span>
    <span>${car.transmission}</span>
</div>

                </div>



            </div>

        </div>

        `;
    });

    flip();
}



/* ================= */
/* FLIP */
/* ================= */

function flip(){

    document.querySelectorAll(".card").forEach(card => {

        card.onclick = () => {

            card.classList.toggle("flipped");
        };
    });
}



/* ================= */
/* SLIDER */
/* ================= */

function slider(){

    const slider = document.getElementById("allCars");

    document.getElementById("next").onclick = () => {

        slider.scrollLeft += 350;
    };

    document.getElementById("prev").onclick = () => {

        slider.scrollLeft -= 350;
    };
}