var aframe = require('aframe');

aframe.registerComponent('axis', {
  schema: {
    dir: { type: 'string', default: 'x' },
    label: { type: 'string', default: 'x' },
    color: { type: 'color', default: 0xffcc00 },
    length: { type: 'number', default: 5 },
    linewidth: { type: 'number', default: 1.5 },
    dashSize: { type: 'number', default: 0.5 },
    gapSize: { type: 'number', default: 0.25 },
  },

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {
    var scene = this.el.object3D;
    var data = this.data;
    var mat = new THREE.LineDashedMaterial({ linewidth: data.linewidth, color: data.color, dashSize: data.dashSize, gapSize: data.gapSize });

    var dest;
    switch (data.dir) {
      case "x":
        dest = new THREE.Vector3(0 + data.length, 0, 0);
        break;
      case "y":
        dest = new THREE.Vector3(0, 0 + data.length, 0);
        break;
      case "z":
        dest = new THREE.Vector3(0, 0, 0 + data.length);
        break;
    }

    var geom = new THREE.Geometry();
    geom.vertices.push(new THREE.Vector3(0, 0, 0), dest);
    geom.computeLineDistances();
    var axis = new THREE.Line(geom, mat, THREE.LinePieces);

    axis.name = "axis";
    scene.add(axis);
  },

  remove: function () {
    var scene = this.el.object3D;
    scene.remove(scene.getObjectByName("axis"));
  }
});