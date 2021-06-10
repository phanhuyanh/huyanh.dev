<template>
  <div class="particles">
    <div id="particles-js" style="height: 100vh; width: 100%;"></div>
    <div class="document">
      <h4>particles.js</h4>
      <a href="https://vincentgarreau.com/particles.js/" target="_blank">Doc</a>
    </div>
  </div>
</template>

<script>
import 'particles.js'

const particles = {
  "particles": {
      "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
      },
      "color": {
          "value": "#ffffff"
      },
      "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
        }
      },
      // size point
      "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
      },
      // style line linked point
      "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#12dd9a",
          "opacity": 0.5,
          "width": 1
      },
      "move": {
          "enable": true,
          "speed": 10,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
          }
      }
  },
  "interactivity": {
      "detect_on": "canvas",
      "events": {
          "onhover": {
              "enable": false,  // enable hover
              "mode": "repulse" // bubble, grab, repulse
          },
          "onclick": {
              "enable": true, // enable click
              "mode": "push" // push, remove, bubble, repulse
          },
          "resize": true
      },
      "modes": {
          "grab": {
              "distance": 400,
              "line_linked": {
                  "opacity": 1
              }
          },
          "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
          },
          "repulse": {
              "distance": 200,
              "duration": 0.4
          },
          "push": {
              "particles_nb": 4
          },
          "remove": {
              "particles_nb": 2
          }
      }
  },
  "retina_detect": true
}

export default {
  mounted() {
    window.particlesJS("particles-js", particles, function() {
      console.log('callback - particles.js config loaded')
    })
  }
}
</script>

<style>
.document {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  z-index: 10000;
  color: #333;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  opacity: .01;
}

.document h4 {
  color: #333;
  margin-bottom: 8px;
  font-size: 32px;
}

.document a {
  text-decoration: none;
  color: blue;
  font-size: 26px;
}


body {
	margin: 0;
	font: normal 75% Arial, Helvetica, sans-serif;
}

canvas {
	display: block;
	vertical-align: bottom;
}


/* ---- particles.js container ---- */

#particles-js {
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: #161616;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 50% 50%;
}


/* ---- stats.js ---- */

.count-particles {
	background: #000022;
	position: absolute;
	top: 48px;
	left: 0;
	width: 80px;
	color: #13E8E9;
	font-size: .8em;
	text-align: left;
	text-indent: 4px;
	line-height: 14px;
	padding-bottom: 2px;
	font-family: Helvetica, Arial, sans-serif;
	font-weight: bold;
}

.js-count-particles {
	font-size: 1.1em;
}

#stats,
.count-particles {
	-webkit-user-select: none;
	margin-top: 5px;
	margin-left: 5px;
}

#stats {
	border-radius: 3px 3px 0 0;
	overflow: hidden;
}

.count-particles {
	border-radius: 0 0 3px 3px;
}
</style>