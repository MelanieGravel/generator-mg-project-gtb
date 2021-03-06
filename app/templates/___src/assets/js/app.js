/**
 * Bundle Scripts
 */

// Debugging
const _debug = false
window._debug = _debug

if (_debug === true) {
  console.log('Debugging is: true')
  const html = document.getElementsByTagName('html')[0]
  html.classList.add('dev', 'debug')
}


// Polyfills
import 'svgxuse'


// Scripts
import './scripts/example'
import './scripts/bodyclass'
// import './scripts/lazyloading'
// import './scripts/pagetransition'
// import './scripts/photoswipe'
// import './scripts/waypoints.anime'
