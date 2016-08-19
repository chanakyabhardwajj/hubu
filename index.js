const aframe = require('aframe');
const extras = require('aframe-extras');
extras.controls.registerAll();
require('aframe-bmfont-text-component');
require('aframe-look-at-component');

//Adds OrbitControls to aframe.THREE instance
require('./three-extras/OrbitControls');

//Adds MeshLine to aframe.THREE instance
require('./three-extras/MeshLine');

require('./components/grid');
require('./components/axishelper');
require('./components/orbit-controls');
require('./components/graph');




window.aframe = aframe;

