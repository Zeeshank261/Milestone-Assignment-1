const car = document.querySelector('img');
        let topPos = 0;
        let leftPos = 0;
        const moveCar = (e) => {
            if (e.key === 'ArrowUp') {
                topPos -= 5;
                if (topPos < 0) {
                    topPos = 0;
                }
                car.style.top = `${topPos}px`;
                car.style.transform = 'rotate(-90deg)';
            } else if (e.key === 'ArrowDown') {
                topPos += 5;
                if (topPos > window.innerHeight - car.height) {
                    topPos = window.innerHeight - car.height;
                }
                car.style.top = `${topPos}px`;
                car.style.transform = 'rotate(90deg)';
            } else if (e.key === 'ArrowLeft') {
                leftPos -= 5;
                if (leftPos < 0) {
                    leftPos = 0;
                }
                car.style.left = `${leftPos}px`;
                car.style.transform = 'rotate(180deg)';
            } else if (e.key === 'ArrowRight') {
                leftPos += 5;
                if (leftPos > window.innerWidth - car.width) {
                    leftPos = window.innerWidth - car.width;
                }
                car.style.left = `${leftPos}px`;
                car.style.transform = 'rotate(0deg)';
            }
        }
        document.addEventListener('keydown', moveCar);