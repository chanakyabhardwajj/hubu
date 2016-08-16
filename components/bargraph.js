const aframe = require('aframe');
const THREE = aframe.THREE;
let coordinates = AFRAME.utils.coordinates;

aframe.registerComponent('bargraph', {
    schema: {
        data: {
            default: [{
                pos: new THREE.Vector3(1, 1, 1),
                val: 3
            }],
            type: 'array',
            stringify: function (value) {
                return JSON.stringify(value);
            },
            parse: function (value) {
                return JSON.parse(value);
            }
        },
        color: {
            default: "#ffcc01",
            type: 'color'
        }
    },

    init: function() {
        this.bars = document.createElement('a-entity');
        this.el.appendChild(this.bars);
    },

    update: function (oldData) {
        let data = this.data.data;
        let color = this.data.color;

        while (this.bars.firstChild) {
            this.bars.removeChild(this.bars.firstChild);
        }

        data.forEach((d, i) => {
            let pos = d.pos;
            let val = d.val;

            let bar = document.createElement('a-box');
            bar.setAttribute('material', `color: ${color}; roughness: 1; metalness: 0;`)
            bar.setAttribute('height', val);
            bar.setAttribute('width', 0.2);
            bar.setAttribute('depth', 0.2);
            bar.setAttribute('position', pos);

            let txt = document.createElement('a-entity');
            txt.setAttribute('bmfont-text', `text: ${val}`);
            txt.setAttribute('look-at', "[camera]");
            bar.appendChild(txt);
            txt.setAttribute('position', {
                x: 0,
                y: val + 0.1,
                z: 0
            });

            this.bars.appendChild(bar);
        });        
    },

    remove: function () {
        this.el.removeChild(this.bars);
    }
});