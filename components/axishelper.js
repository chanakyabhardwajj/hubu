const aframe = require('aframe');

aframe.registerComponent('axishelper', {
  schema: {
    size: { default: 5 }
  },

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {
    var scene = this.el.object3D;
    var data = this.data;

    var size = data.size;

    var axishelper = new THREE.AxisHelper(size);
    axishelper.name = "axisHelper";
    scene.add(axishelper);
  },

  remove: function () {
    var scene = this.el.object3D;
    scene.remove(scene.getObjectByName("axisHelper"));
  }
});