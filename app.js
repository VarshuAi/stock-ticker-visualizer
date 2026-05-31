
            const grid = document.getElementById('stock-chart');
            const price = document.getElementById('st-price');
            let vals = [60, 80, 75, 95, 110, 105, 120];
            
            function renderStock() {
                grid.innerHTML = '';
                vals.forEach(h => {
                    const bar = document.createElement('div');
                    bar.className = 'chart-bar';
                    bar.style.height = `${h}%`;
                    grid.appendChild(bar);
                });
            }
            setInterval(() => {
                const change = (Math.random() - 0.5) * 4;
                const newPrice = (180 + change).toFixed(2);
                price.innerText = `$${newPrice}`;
                vals.shift();
                vals.push(Math.round(50 + Math.random()*50));
                renderStock();
            }, 2000);
            renderStock();
        