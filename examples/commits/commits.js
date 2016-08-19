function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getWeekNumber(dt) {
    var d = new Date(+dt);
    d.setHours(0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    return Math.ceil((((d - new Date(d.getFullYear(), 0, 1)) / 8.64e7) + 1) / 7);
}

let contribs = fetch("https://api.github.com/repos/facebook/react/stats/contributors").then(res => {
    res.json().then((res) => {
        let data = [];
        res.reverse().some((r, i) => {
            r.weeks.some((week,k) => {
                data.push({
                    pos: {
                        x: i,
                        y: 0,
                        z: getWeekNumber(new Date(week.w * 1000)) / 8
                    },
                    val: week.c/10,
                    color: getRandomColor()
                });
                return k == 3;
            });

            return i == 3;
        });

        let scene = document.querySelector('a-scene');
        if (scene.hasLoaded) {
            run();
        } else {
            scene.addEventListener('loaded', run);
        }

        function run() {
            var entity = scene.querySelector('#myBarGraph');
            entity.setAttribute('bargraph', 'data', data);
        }
    })

}, err => {
    console.log("Failed to fetch contirbutors' data");
    throw new Error(err);
})