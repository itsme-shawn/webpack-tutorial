// Entry(입구) 파일

import hello from './hello.js'
import world from './world.js'
import css from './style.css'

document.querySelector('#root').innerHTML = `${world} ${hello}`
console.log('css', css)