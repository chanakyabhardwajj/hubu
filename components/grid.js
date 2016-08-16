const aframe = require('aframe');

aframe.registerComponent('grid', {
    schema: {
        size: { default: 10 },
        step: { default: 5 },
        linewidth: { default: 2 },
        colorCenterLine: { default: 0x444444 },
        colorGrid: { default: 0x888888 }
    },

    /**
     * Called once when component is attached. Generally for initial setup.
     */
    init: function () {
        var scene = this.el.object3D;
        var data = this.data;

        var divisions = data.step;
        var size = data.size;
        var color1 = new THREE.Color(data.colorCenterLine);
        var color2 = new THREE.Color(data.colorGrid);

        var center = divisions / 2;
        var step = (size * 2) / divisions;
        var linewidth = data.linewidth;
        var vertices = [], colors = [];

        for (var i = 0, j = 0, k = - size; i <= divisions; i++ , k += step) {
            vertices.push(- size, 0, k, size, 0, k);
            vertices.push(k, 0, - size, k, 0, size);

            var color = i === center ? color1 : color2;

            color.toArray(colors, j); j += 3;
            color.toArray(colors, j); j += 3;
            color.toArray(colors, j); j += 3;
            color.toArray(colors, j); j += 3;
        }

        var geometry = new THREE.BufferGeometry();
        geometry.addAttribute('position', new THREE.Float32Attribute(vertices, 3));
        geometry.addAttribute('color', new THREE.Float32Attribute(colors, 3));

        var material = new THREE.LineBasicMaterial({ vertexColors: THREE.VertexColors, linewidth: linewidth, opacity: 0.6 });
        var mesh = new THREE.LineSegments(geometry, material);
        mesh.name = "grid";
        scene.add(mesh);
    },

    remove: function () {
        var scene = this.el.object3D;
        scene.remove(scene.getObjectByName("grid"));
    }
});