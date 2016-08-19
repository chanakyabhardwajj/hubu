const aframe = require('aframe');

aframe.registerComponent('grid', {
    schema: {
        size: { default: 5 },
        step: { default: 50 },
        // linewidth: { default: 2 },
        colorCenterLine: { default: 0x444444 },
        colorGrid: { default: 0x888888 }
    },

    /**
     * Called once when component is attached. Generally for initial setup.
     */
    init: function () {
        let scene = this.el.object3D;
        let data = this.data;

        let divisions = data.step;
        let size = data.size;
        let color1 = new THREE.Color(data.colorCenterLine);
        let color2 = new THREE.Color(data.colorGrid);

        let center = divisions / 2;
        let step = (size * 2) / divisions;
        let linewidth = 1;//data.linewidth;
        let vertices = [], colors = [];

        for (let i = 0, j = 0, k = - size; i <= divisions; i++ , k += step) {
            vertices.push(- size, 0, k, size, 0, k);
            vertices.push(k, 0, - size, k, 0, size);

            let color = i === center ? color1 : color2;

            color.toArray(colors, j); j += 3;
            color.toArray(colors, j); j += 3;
            color.toArray(colors, j); j += 3;
            color.toArray(colors, j); j += 3;
        }

        let geometry = new THREE.BufferGeometry();
        geometry.addAttribute('position', new THREE.Float32Attribute(vertices, 3));
        geometry.addAttribute('color', new THREE.Float32Attribute(colors, 3));

        let material = new THREE.LineBasicMaterial({ vertexColors: THREE.VertexColors, linewidth: linewidth, opacity: 0.6 });
        let mesh = new THREE.LineSegments(geometry, material);
        mesh.name = "grid";
        scene.add(mesh);
    },

    remove: function () {
        let scene = this.el.object3D;
        scene.remove(scene.getObjectByName("grid"));
    }
});