const searchInput = document.getElementById("searchInput");
const container = document.getElementById("carsContainer");

let cars = [];

// جلب البيانات من json
fetch("New cars.json")
  .then(res => res.json())
  .then(data => {
    cars = data;
  });


// البحث
searchInput.addEventListener("input", function () {

  const value = this.value.toLowerCase().trim();

  // لو البحث فاضي امسح العربيات
  if (value === "") {
    container.innerHTML = "";
    return;
  }

  // فلترة
  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(value) ||
    car.brand.toLowerCase().includes(value)
  );


filteredCars.forEach(car => {

  container.innerHTML += `

    <div class="car-card">

      <img src="${car.image}" alt="${car.name}">

      <div class="car-info">

        <h2>${car.name}</h2>

        <h3>${car.price} EGP</h3>

        <div class="buttons">

          <!-- زر المكالمة -->
          <a href="tel:${car.phone}" class="call-btn">
            <i class="fa-solid fa-phone"></i>
            مكالمة
          </a>

          <!-- زر واتساب -->
          <a href="https://wa.me/2${car.phone}" target="_blank" class="whatsapp-btn">
            <i class="fa-brands fa-whatsapp"></i>
            واتساب
          </a>

        </div>

        <!-- زر التفاصيل -->
       
  <a href="details.html?id=${car.ID}" class="btn btn-details">التفاصيل</a>
      </div>

    </div>

  `;
});

});