const aframe = require('aframe');
const THREE = aframe.THREE;
let coordinates = AFRAME.utils.coordinates;

aframe.registerComponent('bargraph', {
    schema: {
        data: {
            // default: [{
            //     pos: new THREE.Vector3(1, 1, 1),
            //     val: 3
            // }],
            type: 'array'
        },
        color: {
            default: "#ffcc01",
            type: 'color'
        },
        stringify: function defaultStringify (value) {
            return JSON.stringify(value);
        },
        parse: function numberParse (value) {
            return JSON.parse(value);
        }
    },

    update: function (oldData) {
        let data = this.data.data;
        let color = this.data.color;
        // let bars = new THREE.Object3D();

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
                x: pos.x,
                y: pos.y + val + 0.2,
                z: pos.z
            });

            // bars.add(bar.object3D);
            this.el.appendChild(bar);
        });
    },

    remove: function () {
        // this.el.removeObject3D('bars');
    }
});