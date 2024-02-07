import * as THREE from "three";

// drawing lines
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement)

// camera
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth/window.innerHeight,
    1,
    1000
)

camera.position.set(0,0,100)
camera.lookAt(0,0,0)

const scene = new THREE.Scene()

const material = new THREE.LineBasicMaterial({ color: 0x0000ff })

const point = []
point.push(new THREE.Vector3(-10,0,0))
point.push(new THREE.Vector3(0,10,0))
point.push(new THREE.Vector3(10,0,0))

const geometry = new THREE.BufferGeometry().setFromPoints(point)

const line = new THREE.Line(geometry,material)

scene.add(line)

renderer.render(scene,camera)