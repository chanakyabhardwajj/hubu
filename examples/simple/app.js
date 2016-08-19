const data = [
    {
        x: 0, y: 0, z: 4, val: 3, label: "1st", strokeColor: "#00ff00", labelColor: "#ffffff"
    },
    // {
    //     x: 1, y: 0, z: 4, val: 1, label: "2nd", strokeColor: "#00ff00", labelColor: "#ffffff"
    // },
    // {
    //     x: 2, y: 0, z: -1, val: 2, label: "3rd", strokeColor: "#00ff00", labelColor: "#ffffff"
    // },
    // {
    //     x: 3, y: 0, z: -2, val: 5, label: "4th", strokeColor: "#00ff00", labelColor: "#ffffff"
    // },
];

let scene = document.querySelector('a-scene');
if (scene.hasLoaded) {
    run();
} else {
    scene.addEventListener('loaded', run);
}

function run() {
    let graph = scene.querySelector('#myGraph');
    graph.setAttribute('graph', 'data', data);
}