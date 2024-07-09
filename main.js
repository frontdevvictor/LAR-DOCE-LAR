// const loading = document.querySelector('#loader')

const canvas = document.querySelector('.webgl')
const scene = new THREE.scene()
const textureLoader = new THREE.TextureLoader()
const sizes = {
    widht: window.innerWidth,
    height: window.innerHeight
}

// Base camera
const camera = new THREE.PerspectiveCamera(15, sizes.width / sizes.height, 0.1, 100)
camera.position.x = -14
camera.position.y = 6
camera.position.z = 16
scene.add(camera)

//Controls
const controls = new THREE.OrbitControls(camera, canvas)
