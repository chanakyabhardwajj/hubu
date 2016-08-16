const aframe = require('aframe');

aframe.registerComponent('gridhelper', {
  schema: {
    size: { default: 10 },
    step: { default: 1 },
    colorCenterLine: { default: 0x000000 },
    colorGrid: { default: 0x77B6EA }
  },

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {
    var scene = this.el.object3D;
    var data = this.data;

    var size = data.size;
    var step = data.step;
    var colorCenterLine = data.colorCenterLine;
    var colorGrid = data.colorGrid;

    var gridHelper = new THREE.GridHelper(size, step);
    gridHelper.setColors(colorCenterLine, colorGrid);
    gridHelper.name = "gridHelper";
    scene.add(gridHelper);
  },

  remove: function () {
    var scene = this.el.object3D;
    scene.remove(scene.getObjectByName("gridHelper"));
  }
});