const aframe = require('aframe');
const extras = require('aframe-extras');
extras.controls.registerAll();
require('aframe-bmfont-text-component');

//Adds OrbitControls to aframe.THREE instance
require('./three-extras/OrbitControls');

require('./components/grid');
require('./components/axishelper');
require('./components/orbit-controls');
require('./components/bargraph');


window.aframe = aframe;

