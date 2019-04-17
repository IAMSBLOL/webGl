import React, { Component } from 'react';
import './layout.module.scss';
// import ali from '../../../../public/images/ali.png'
// import wx from '../../../../public/images/wx.png'
// import bd from '../../../../public/images/bd.png'
// import fb from '../../../../public/images/fb.png'
// import tc from '../../../../public/images/tc.png'
// import BOX from '../../../../public/images/box.png'
import { Scene,
    PerspectiveCamera,
    WebGLRenderer,

    BoxGeometry,
    // MeshStandardMaterial,
    Mesh,
    DirectionalLight,
    // BoxGeometry,
    // Object3D,
    GridHelper,
    AmbientLight,
    // MeshNormalMaterial,
    MeshLambertMaterial,
    // RepeatWrapping,
    Group,
    // TextureLoader,
    // LinearFilter
} from 'three';
const scene = new Scene();

const camera = new PerspectiveCamera(70, 1, 0.1, 1000);

const renderer = new WebGLRenderer({ antialias: true, alpha: true });

class Layout extends Component {
    constructor () {
        super()
        this.preTime = 0
    }

    componentDidMount () {
        this.start()
        window.addEventListener('resize', () => {
            camera.aspect = this.webgl.offsetWidth / this.webgl.offsetHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(this.webgl.offsetWidth, this.webgl.offsetHeight);
        }, false);
    }

    start=() => {
        console.log(scene)
        console.log(camera)
        console.log(renderer)
        this.initThree()
        this.initCamera()
        this.initLight()
        // this.initGrid()
        this.initCube()
        this.animation()
    }

    initThree=() => {
        renderer.setSize(this.webgl.offsetWidth, this.webgl.offsetHeight);
        this.webgl.appendChild(renderer.domElement);
        renderer.setClearColor(0xEEEEEE, 0.0);
        renderer.shadowMapEnabled = true;
    }

    initLight=() => {
        const ambientLight = new AmbientLight(0xFFFFFF, 0.44);
        const directionalLight = new DirectionalLight(0xffffff, 0.85);
        directionalLight.position.set(-20, 150, 150).normalize();

        // Set up shadow properties for the light

        directionalLight.castShadow = true;

        directionalLight.shadow.mapSize.width = 500;
        directionalLight.shadow.mapSize.height = 500;

        scene.add(ambientLight);
        scene.add(directionalLight);
    }

    initCamera=() => {
        camera.position.z = 460;
        camera.position.x = 0;
        camera.position.y = 60;
        // camera.lookAt({
        //     x: 50,
        //     y: 50,
        //     z: 0
        // })
    }

    initGrid =() => {
        var helper = new GridHelper(1000, 50, 'red', 'yellow', 'blue');
        helper.position.y = -50;
        // helper.rotation.y = 45;
        scene.add(helper);
        // renderer.render(scene, camera);
    }

    initCube=() => {
        // this.initCuBe1()
        this.initCuBe()
    }

    initCuBe=() => {
        // var values = [];

        var cubes = [];

        var original = [];

        var color = false;

        var colors = [ '#F4F5F9', '#4E86FA', '#4E86FA', '#00A339', '#00A339', '#E78E5C', '#E78E5C',
            '#F4F5F9', '#E78E5C', '#E78E5C', '#00A339', '#F4F5F9', '#FAC367', '#F4F5F9',
            '#F4F5F9', '#E78E5C', '#FAC367', '#00A339', '#00A339', '#FAC367' ];

        // const imglist = [BOX, BOX, BOX, BOX, BOX, BOX]

        var group = new Group();
        var group1 = new Group()
        var group2 = new Group()
        var group0 = new Group()

        for (let i = 0; i < 3; i++) {
            if (!cubes[i]) {
                cubes[i] = [];
                original[i] = [];
            }

            for (let j = 0; j < 3; j++) {
                if (!cubes[i][j]) {
                    cubes[i][j] = [];
                    original[i][j] = [];
                }

                for (let t = 0; t < 3; t++) {
                    color = colors[Math.floor(Math.random() * colors.length)];

                    // var loader = new TextureLoader();
                    // loader.setPath('/public/images/');
                    // var texture = loader.load(
                    //     imglist[Math.floor(Math.random() * imglist.length)]
                    // );

                    // texture.minFilter = LinearFilter
                    // texture.wrapS = RepeatWrapping;
                    // texture.wrapT = RepeatWrapping;
                    // texture.repeat.set(1, 1);
                    const BOXG = new BoxGeometry(40, 40, 40)
                    // BOXG.faces = imglist
                    cubes[i][j][t] = new Mesh(
                        BOXG,
                        new MeshLambertMaterial({

                            // map: texture,
                            // skinning: true,
                            alphaTest: 1,
                            color: color,
                            // blendDstAlpha: 6
                            // alphaMap: texture,
                            // aoMap: texture
                            // combine: 2
                        })
                    );

                    cubes[i][j][t].overdraw = true;

                    cubes[i][j][t].position.x = i * 45 + Math.random() * 10;
                    cubes[i][j][t].position.y = j * 45 + Math.random() * 10;
                    cubes[i][j][t].position.z = t * 45 + Math.random() * 10;

                    original[i][j][t] = {
                        x: i * 50,
                        y: j * 50,
                        z: t * 50,
                    };

                    if (j === 0) {
                        if (i === 1 && t === 1) {
                            this.bottomCube = cubes[i][j][t]
                        }
                        group0.add(cubes[i][j][t])
                    } else if (j === 1) {
                        group1.add(cubes[i][j][t])
                        if (i === 0 && t === 2) {
                            this.topCube = cubes[i][j][t]
                        }
                    } else {
                        if (i === 1 && t === 2) {

                        } else {
                            group2.add(cubes[i][j][t])
                        }
                    }
                }
            }
        }
        group.add(group0);
        group.add(group1);
        group.add(group2);

        group2.rotation.y = 0.15
        group1.rotation.y = 0.15

        group.position.x = 0
        group.position.y = -70
        group.position.z = 20
        group.rotation.x = -0.17 * Math.PI
        group.rotation.y = -0.27 * Math.PI

        this.topCube.position.z += 60
        this.topCube.position.x -= 20
        this.topCube.position.y += 50
        this.topCube.rotation.x += 0.3
        this.topCube.rotation.y += 0.3

        this.bottomCube.position.x += 80
        this.bottomCube.position.y -= 60
        this.bottomCube.position.z -= 80

        console.log(group)
        this.group = group
        this.cubes = cubes
        scene.add(group);
    }

    animation=(time) => {
        // console.log(time)
        requestAnimationFrame(this.animation)
        if (Math.floor(time / 1000) % 2 === 0) {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    for (let t = 0; t < 3; t++) {
                        this.cubes[i][j][t].position.x += 0.1;
                        this.cubes[i][j][t].position.y += 0.1;
                        this.cubes[i][j][t].position.z += 0.1;
                    }
                }
            }
        } else {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    for (let t = 0; t < 3; t++) {
                        this.cubes[i][j][t].position.x -= 0.1;
                        this.cubes[i][j][t].position.y -= 0.1;
                        this.cubes[i][j][t].position.z -= 0.1;
                    }
                }
            }
        }

        this.topCube.rotation.x += 0.05
        this.bottomCube.rotation.x += 0.05
        // this.bottomCube.rotation.y += 0.05
        // this.bottomCube.rotation.z += 0.05

        renderer.render(scene, camera);
    }
    render () {
        return (
            <div styleName='Layout' className='Layout'>
                <div className='webgl' ref={e => { this.webgl = e }} />
            </div>
        );
    }
}

export default Layout;
