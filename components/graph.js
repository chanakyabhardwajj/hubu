const aframe = require('aframe');
const THREE = aframe.THREE;
let coordinates = AFRAME.utils.coordinates;

aframe.registerComponent('graph', {
    schema: {
        shape: {
            type: 'string',
            default: 'bar'
        },
        data: {
            default: [{
                x: 1,
                y: 1,
                z: 1,
                val: 7,
                label: "some label",
                strokeColor: "#ffcc01",
                labelColor: "#00ff00"
            }],
            type: 'array'
        }
    },

    init: function () {
        this.bars = document.createElement('a-entity');
        this.el.appendChild(this.bars);
    },

    update: function (oldData) {
        let data = this.data.data;

        while (this.bars.firstChild) {
            this.bars.removeChild(this.bars.firstChild);
        }

        data.forEach((d, i) => {
            let bar = document.createElement('a-box');
            bar.setAttribute('material', `color: ${d.strokeColor};`)
            bar.setAttribute('height', d.val);
            bar.setAttribute('width', 0.1);
            bar.setAttribute('depth', 0.1);
            bar.setAttribute('position', new THREE.Vector3(d.x, d.y, d.z));

            let txt = document.createElement('a-entity');
            txt.setAttribute('bmfont-text', `text: ${d.label}`);
            txt.setAttribute('color', '#fff');
            txt.setAttribute('look-at', "[camera]");
            bar.appendChild(txt);
            txt.setAttribute('position', {
                x: 0,
                y: d.val/2 + 0.1,
                z: 0
            });

            this.bars.appendChild(bar);
        });
    },

    remove: function () {
        this.el.removeChild(this.bars);
    }
});