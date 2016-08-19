const aframe = require('aframe');

aframe.registerComponent('axis', {
  schema: {
    dir: { type: 'string', default: 'x' },
    label: { type: 'string', default: 'x' },
    color: { type: 'color', default: 0xffcc00 },
  },

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {
    var scene = this.el.object3D;
    var data = this.data;

    var size = data.size;

    var axishelper = new THREE.AxisHelper(size);
    axishelper.name = "axis";
    scene.add(axishelper);
  },

  remove: function () {
    var scene = this.el.object3D;
    scene.remove(scene.getObjectByName("axis"));
  }
});