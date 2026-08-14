  const lyrics = [
            "Baato-baato me hi, khwabo-khwabo me hi mere qareeb hai tu",
            "Teri talab mujhko, teri talab, jaana, ho to kabhi ru-ba-ru",
            "Shor-sharaba jo seene me hai mere, kaise bayaan mai karu?",
            "Haal jo mеra hai, mai kis ko batau?",
            "Mere sahiba, dil na kiraaye ka, thoda to sambhalo na",
            "Nazuk hai yеh, toot jaata hai",
            "Sahiba, neende-veende aaye na,",
            "raate kaati jaaye na",
            "Tera hi khayal din-rain aata hai"
        ];

       
        const durations = [0.2, 0.3, 0.1, 0.1, 0.7, 1.0, 1, 0.1, 2.0];

        const colors = [
            "rgb(82, 8, 23)",     // deep wine red
            "rgb(120, 30, 60)",   // romantic plum
            "rgb(176, 60, 92)",   // rose mauve
            "rgb(250, 195, 210)", // blush pink
            "rgb(60, 25, 70)"     // deep purple dusk
        ];

        let currentIndex = 0;

        function typewrite() {
            if (currentIndex >= lyrics.length) return;

            const line = lyrics[currentIndex];
            const bg = colors[Math.floor(Math.random() * colors.length)];
            const holdDuration = durations[currentIndex];

            document.body.style.backgroundColor = bg;
            const textEl = document.getElementById('text');
            textEl.style.opacity = 1;
            textEl.textContent = '';

            let i = 0;
            const interval = setInterval(() => {
                textEl.textContent = line.substring(0, i + 1);
                i++;
                if (i >= line.length) {
                    clearInterval(interval);
                    setTimeout(() => {
                        fadeOut();
                    }, holdDuration * 1000);
                }
            }, 70); // char_delay = 0.07s
        }

        function fadeOut() {
            const textEl = document.getElementById('text');
            textEl.style.opacity = 0;
            setTimeout(() => {
                currentIndex++;
                typewrite();
            }, 1000); // Fade duration ~1s
        }

        // Start the animation
        typewrite();
