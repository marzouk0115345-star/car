
function loadData() {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'datashow.json', true);

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText);
                    renderCards(data);
                }
            };
            xhr.send();
        }

        function renderCards(data) {
            var grid = document.getElementById('dealers-grid');
            
            data.forEach((item, index) => {
                var card = document.createElement('div');
                card.className = 'card';
                // تأخير الأنيميشن لكل كارت عشان يظهروا ورا بعض بشكل شيك
                card.style.animationDelay = (index * 0.1) + 's';
                card.classList.add('show-card');
                
                card.onclick = () => window.location.href = item.link;

                card.innerHTML = `
                    <div class="logo-box">
                        <img src="${item.img}" alt="${item.name}">
                    </div>
                    <h3>${item.name}</h3>
                    <div class="stats">
                        <div class="stat-item">جديدة <b>${item.numnew}</b></div>
                        <div class="stat-item">مستعملة <b>${item.numused}</b></div>
                    </div>
                    <div class="actions">
                        <a href="tel:${item.phon}" class="btn-call" onclick="event.stopPropagation()">
                             تواصل معنا
                        </a>
                        <a href="${item.link}" class="btn-arrow">←</a>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        window.onload = loadData;