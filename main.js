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
controls.enableDamping = true
constrols.enableZoom = true
controls.enablePan = true
controls.minDistance = 10
controls.maxDistance = 22
// controls.maxDistance = 35

controls.minPolarAngle = Math.PI / 5
controls.maxPolarAngle = Math.PI / 2

// Renderer
const renderer = new THREE.webGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.outputEncoding = THREE.sRGBEncoding

// Top
const light = new THREE.DirectionalLight( '#ffffff', 3 )
scene.add( light )
light.position.set(0,3,0)
light.intensity = 1.5

// // Left
const light2 = new THREE.DirectionalLight( '#ffffff', 3 )
scene.add ( light )
light2.position.set(-4,0,-2)
light2.intensity = 1.5

// //Right 
const light3 = new THREE.DirectionalLight ( '#ffffff', 3 )
scene.add( light3 )
light3.position.set(4,1,2)
light3.intensity = .5

// // Front
const light4 = new THREE.DirectionalLight( '#ffffff', 3 )
scene.add( light4 )
light4.position.set(0,0,3)
light.intensity = .6

// Back
const light5 = new THREE.DirectionalLight ('#ffffff', 4 )
scene.add( light5 )
light5.position.set(0,0,-5)
light5.intensity = 1

const rectLight = new THREE.RectAreaLight( 0xffffff, .9, 10, 10)
rectLight.position.set( 0, 2, 0)
rectLight.lookAt( 0, 0, 0)
scene.add( rectLight )

// Materials
const bakedTexture = textureLoader.load('https://rawcdn.githack.com/ricardoolivaalonso/ThreeJS-Room12/cecbd1c77333b3c9ee23bb1eb41dee395e14ca3e/dist/baked.jpg')
bakedTexture.flipY = false
bakedTexture.encoding = THREE.sRGBEncoding

const normalTexture = textureLoader.load('https://rawcdn.githack.com/ricardoolivaalonso/ThreeJS-Room12/cecbd1c77333b3c9ee23bb1eb41dee395e14ca3e/dist/normal.jpg')
normalTexture.flipY = false
normalTexture.encoding = THREE.sRGBEncoding

const occlusionTexture = textureLoader.load('https://rawcdn.githack.com/ricardoolivaalonso/ThreeJS-Room12/cecbd1c77333b3c9ee23bb1eb41dee395e14ca3e/dist/occlusion.jpg')
occlusionTexture.flipY = false
occlusionTexture.encoding = THREE.sRGBEncoding

const bakedMaterial = new THREE.MeshStandardMaterial({
    map: bakedTexture,
    normalMap: normalTexture,
    aoMap: occlusionTexture,
    side: THREE.DoubleSide,
})

const metalicMaterial = new THREE.MeshStandardMaterial({
    map: bakedMaterial,
    side: THREE.DoubleSide,
})