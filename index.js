const aframe = require('aframe');
const extras = require('aframe-extras');
extras.controls.registerAll();
require('aframe-bmfont-text-component');
// require('aframe-orbit-controls-component');

//Add meshline plugin to the THREE instance inside aframe.
// require('./three-extras/MeshLine')(aframe.THREE);

//Adds TrackballControls to aframe.THREE instance
// require('./three-extras/TrackballControls');

//Adds OrbitControls to aframe.THREE instance
require('./three-extras/OrbitControls');

require('./components/grid');
require('./components/gridhelper');
require('./components/axishelper');
// require('./components/trackball-controls');
require('./components/orbit-controls');

window.aframe = aframe;

