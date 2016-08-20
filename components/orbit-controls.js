var aframe = require('aframe');
var THREE = aframe.THREE;
var isMobile = aframe.utils.isMobile();

aframe.registerComponent('orbit-controls', {
    // dependencies: ['position', 'quaternion'],

    schema: {},

    init: function () {
        this.proxy = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
        this.proxy.position.z = 20;
        this.controls = new THREE.OrbitControls(this.proxy);

        this.controls.minPolarAngle = 0; // radians
        this.controls.maxPolarAngle = Math.PI; // radians

        // How far you can orbit horizontally, upper and lower limits.
        // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
        this.controls.minAzimuthAngle = - Infinity; // radians
        this.controls.maxAzimuthAngle = Infinity; // radians

    },

    update: function (oldData) {
        this.controls.update();
        this.el.object3D.position.copy(this.proxy.position);
        this.el.object3D.quaternion.copy(this.proxy.quaternion);
    },

    tick: function (t) {
        this.update();
    }
});
