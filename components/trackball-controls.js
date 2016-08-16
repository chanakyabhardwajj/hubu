const aframe = require('aframe');
const THREE = aframe.THREE;
var isMobile = aframe.utils.isMobile();

aframe.registerComponent('trackball-controls', {
    dependencies: ['position', 'quaternion'],

    schema: {},

    init: function () {
        this.proxy = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
        this.proxy.position.z = 20;


        this.controls = new THREE.TrackballControls(this.proxy);

        this.controls.panSpeed = 0.8;
        this.controls.zoomSpeed = 1.2;
        this.controls.rotateSpeed = 1.0;

        this.controls.noZoom = false;
        this.controls.noPan = false;

        this.controls.staticMoving = true;
        this.controls.dynamicDampingFactor = 0.3;

        this.controls.keys = [65, 83, 68];
    },

    update: function (oldData) {
        this.controls.update();
        this.el.setAttribute('position', this.proxy.position);
        this.el.setAttribute('quaternion', this.proxy.quaternion);
    },

    tick: function (t) {
        this.update();
    },
});
