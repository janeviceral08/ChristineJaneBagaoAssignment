const table = [
    "Maizani", "27", "F", 1, 1,
    "Angelica", "43", "F", 18, 1,
    "Bryan", "64", "M", 1, 2,
    "Luke", "23", "M", 2, 2,
    "Lyka", "43", "F", 13, 2,
    "Cyril", "52", "M", 14, 2,
    "Krisel", "18", "F", 15, 2,
    "Dianne", "64", "F", 16, 2,
    "Jhay", "32", "M", 17, 2,
    "Julius", "53", "M", 18, 2,
    "Lorena", "53", "F", 1, 3,
    "Rutchie", "32", "F", 2, 3,
    "Jane", "53", "F", 13, 3,
    "Gavryle", "63", "M", 14, 3,
    "Joy", "45", "F", 15, 3,
    "Elmer", "42", "M", 16, 3,
    "Joeram", "31", "M", 17, 3,
    "Jumar", "38", "M", 18, 3,
    "Juvy", "32", "F", 1, 4,
    "Odette", "20", "F", 2, 4,
    "Alkim", "52", "M", 3, 4,
    "Maria", "17", "F", 4, 4,
    "Che", "26", "F", 5, 4,
    "Reni", "27", "M", 6, 4,
    "Emman", "37", "M", 7, 4,
    "Chrizel", "32", "F", 8, 4,
    "Ritchel", "26", "F", 9, 4,
    "Elva", "28", "F", 10, 4,
    "Alres", "19", "M", 11, 4,
    "Sean", "26", "M", 12, 4,
    "Faith", "29", "F", 13, 4,
    "Xyrus", "19", "M", 14, 4,
    "Aubrey", "23", "F", 15, 4,
    "Shemee", "32", "F", 16, 4,
    "Jason", "24", "M", 17, 4,
    "Ritchard", "32", "M", 18, 4,
    "Niana", "25", "F", 1, 5,
    "Eduardo", "26", "M", 2, 5,
    "Princess", "16", "F", 3, 5,
    "Gwen", "18", "F", 4, 5,
    "Heldie", "43", "M", 5, 5,
    "James", "52", "M", 6, 5,
    "Paul", "51", "M", 7, 5,
    "Rodel", "42", "M", 8, 5,
    "Alfred", "26", "M", 9, 5,
    "Trisha", "29", "F", 10, 5,
    "Ranjit", "25", "M", 11, 5,
    "Novie", "31", "F", 12, 5,
    "Melva", "22", "F", 13, 5,
    "Jenelyn", "23", "F", 14, 5,
    "Christian", "26", "M", 15, 5,
    "Jodelyn", "45", "F", 16, 5,
    "Prince", "22", "M", 17, 5,
    "Mike", "49", "M", 18, 5,
    "Rico", "48", "M", 1, 6,
    "Honey", "48", "F", 2, 6,
    "Roy", "30", "M", 4, 9,
    "Rap", "55", "M", 5, 9,
    "Romelito", "31", "M", 6, 9,
    "Cindy", "41", "F", 7, 9,
    "Zaid", "33", "M", 8, 9,
    "Alberto", "17", "M", 9, 9,
    "Kevin", "29", "M", 10, 9,
    "Ella", "36", "F", 11, 9,
    "Joven", "46", "M", 12, 9,
    "Jedrick", "22", "M", 13, 9,
    "Roland", "53", "M", 14, 9,
    "Jevic", "21", "M", 15, 9,
    "Shayne", "29", "F", 16, 9,
    "Marry", "18", "F", 17, 9,
    "Jason", "55", "M", 18, 9,
    "Gencelett", "25", "F", 4, 6,
    "Kevin", "28", "M", 5, 6,
    "Pauline", "20", "F", 6, 6,
    "Ernie", "24", "M", 7, 6,
    "Klevin", "26", "M", 8, 6,
    "Jennifer", "33", "F", 9, 6,
    "Audrey", "35", "F", 10, 6,
    "Mhar", "28", "M", 11, 6,
    "Joliven", "18", "M", 12, 6,
    "Ryssa", "25", "F", 13, 6,
    "Jeraldin", "41", "F", 14, 6,
    "Ladi", "16", "F", 15, 6,
    "Genesis", "19", "M", 16, 6,
    "Susan", "22", "F", 17, 6,
    "Potter", "23", "M", 18, 6,
    "Kien", "37", "M", 1, 7,
    "Allan", "25", "M", 2, 7,
    "Nerio", "19", "M", 4, 10,
    "Clowiee", "33", "M", 5, 10,
    "Rienajane", "19", "F", 6, 10,
    "Jackelou", "41", "F", 7, 10,
    "Adams", "55", "M", 8, 10,
    "Reign", "18", "F", 9, 10,
    "Xyra", "26", "F", 10, 10,
    "Iren", "61", "F", 11, 10,
    "Jepjep", "28", "M", 12, 10,
    "Jedelyn", "22", "F", 13, 10,
    "Jhon", "37", "M", 14, 10,
    "Alastor", "32", "M", 15, 10,
    "James", "27", "M", 16, 10,
    "Thomas", "25", "M", 17, 10,
    "Rick", "34", "M", 18, 10,
    "Jhon", "21", "M", 4, 7,
    "Javier", "33", "M", 5, 7,
    "Austin", "26", "M", 6, 7,
    "Liam", "35", "M", 7, 7,
    "Roland", "10", "M", 8, 7,
    "Tucker", "24", "M", 9, 7,
    "Tyler", "26", "M", 10, 7,
    "Alex", "31", "F", 11, 7,
    "Paolo", "23", "M", 12, 7,
    "Anna", "21", "F", 13, 7,
    "Sandro", "23", "M", 14, 7,
    "Luena", "34", "F", 15, 7,
    "Jacquelyn", "29", "F", 16, 7,
    "Jhon", "23", "M", 17, 7,
    "Jed", "24", "M", 18, 7
];

let camera, scene, renderer, controls, composer;
var hblur, vblur;
let targets = {simple: [], table: [], sphere: [], helix: [], grid: []};

init();
animate();

function init() {

    initCamera();

    initScene();

    initObjects();

    addClickListeners();

    initRenderer();

    initTrackbarControls();

    transform(targets.table, 2000);

    window.addEventListener('resize', onWindowResize, false);

}

function initCamera() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

}

function initScene() {

    scene = new THREE.Scene();

}

function initRenderer() {

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);
}

function initObjects() {

    simpleObjectsLayout();
    generateGeometricLayouts();

}

function addClickListeners() {

    addClickListener(targets.table, 'table');
    addClickListener(targets.sphere, 'sphere');
    addClickListener(targets.helix, 'helix');
    addClickListener(targets.grid, 'grid');

}

function simpleObjectsLayout() {

    for (let i = 0; i < table.length; i += 5) {

        let object = new THREE.CSS3DObject(htmlElement(table, i));
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;

        scene.add(object);
        targets.simple.push(object);
        tableLayout(table, i);

    }

}

function htmlElement(table, i) {
    let element = document.createElement('div');
    element.className = 'element';
   element.style.backgroundColor =table[i + 2] == 'F'? 'rgba(255, 0, 128, 0.5)':'rgba(125,164,195, 0.25)'
   // element.style.boxShadow  = 'rgba(255, 0, 128, 0.5)'
    element.style["boxShadow"]  = table[i + 2] == 'F'? '0px 0px 12px rgba(255, 0, 128, 0.5)':'0px 0px 12px rgba(125,164,195, 0.25)'
//eldocument.getElementById("element").ement.style.cssText = `background-color: 'rgba(255, 0, 128, 0.5)'; box-shadow: 'rgba(255, 0, 128, 0.5)'`;

    let symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.textContent = table[i];
    element.appendChild(symbol);

    let details = document.createElement('div');
    details.className = 'details';
    details.innerHTML = table[i + 1] + '<br>' + table[i + 2];
    element.appendChild(details);

    element.addEventListener('click', ()=>elementClickHandler(i), false);

    return element;
}

function elementClickHandler(i){

    transform(targets.table,1000);

    new TWEEN.Tween(targets.simple[i / 5].position)
        .to({
            x: 0,
            y: 0,
            z: 2500
        }, Math.random() * 2000 + 2000)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

    new TWEEN.Tween(this)
        .to({}, 2000 * 2)
        .onUpdate(render)
        .start();
}

function tableLayout(table, index) {

    let object = new THREE.Object3D();

    object.position.x = (table[index + 3] * 140) - 1330;
    object.position.y = -(table[index + 4] * 180) + 990;
    targets.table.push(object);

}

function addClickListener(target, elementId) {

    const button = document.getElementById(elementId);

    button.addEventListener('click', function () {
        transform(target, 2000);
    }, false);

}

function initTrackbarControls() {
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);
}

function generateGeometricLayouts() {

    let sphereVector = new THREE.Vector3();
    let helixVector = new THREE.Vector3();

    for (let i = 0, l = targets.simple.length; i < l; i++) {
        addSphereObject(sphereVector, i, l);
        addHelixObject(helixVector, i);
        addGridObject(i);
    }

}

function addSphereObject(sphereVector, index, length) {

    const phi = Math.acos(-1 + (2 * index) / length);
    const theta = Math.sqrt(length * Math.PI) * phi;
    let object = new THREE.Object3D();

    object.position.setFromSphericalCoords(800, phi, theta);

    sphereVector.copy(object.position).multiplyScalar(2);

    object.lookAt(sphereVector);

    targets.sphere.push(object);
}

function addHelixObject(helixVector, index) {

    const theta = index * 0.175 + Math.PI;
    const y = -(index * 8) + 450;
    let object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(900, theta, y);

    helixVector.x = object.position.x * 2;
    helixVector.y = object.position.y;
    helixVector.z = object.position.z * 2;

    object.lookAt(helixVector);

    targets.helix.push(object);
}

function addGridObject(index) {

    let object = new THREE.Object3D();
    object.position.x = ((index % 5) * 400) - 800;
    object.position.y = (-(Math.floor(index / 5) % 5) * 400) + 800;
    object.position.z = (Math.floor(index / 25)) * 1000 - 2000;
    targets.grid.push(object);

}

function transform(target, duration) {

    TWEEN.removeAll();

    for (let i = 0; i < targets.simple.length; i++) {
        let object = targets.simple[i];
        let targetObject = target[i];
        transformObjectPosition(object, targetObject, duration);
        transformObjectRotation(object, targetObject, duration);
    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function transformObjectPosition(object, targetObject, duration) {

    new TWEEN.Tween(object.position)
        .to({
            x: targetObject.position.x,
            y: targetObject.position.y,
            z: targetObject.position.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function transformObjectRotation(object, targetObject, duration) {

    new TWEEN.Tween(object.rotation)
        .to({
            x: targetObject.rotation.x,
            y: targetObject.rotation.y,
            z: targetObject.rotation.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();

}

function render() {

    renderer.render(scene, camera);

}

function animate() {

    requestAnimationFrame(animate);
    TWEEN.update();
    controls.update();
    composer.render();
}
