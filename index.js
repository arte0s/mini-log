(() => {

    window.addEventListener('load', () => {

        const cs = document.getElementById('colors');

        cs.addEventListener('click', () => {

            document.body.classList.toggle('dark-mode');
            cs.value = cs.value == 'Dark' ? 'Light' : 'Dark';
        });

        const cn = document.getElementById('content');

        (async () => {

            // const resp = await fetch('http://127.0.0.1:8080/');
            const resp = await fetch('./data.json');
            const texts = await resp.json();
            console.log(texts);

            cn.innerHTML = '';

            texts.forEach(elem => {

                const cellTime = document.createElement('div');
                cellTime.textContent = elem.time;

                const cellText = document.createElement('div');
                cellText.textContent = elem.text;

                const row = document.createElement('div');
                row.appendChild(cellTime);
                row.appendChild(cellText);

                cn.appendChild(row);
            });
        })();
    });
})();
