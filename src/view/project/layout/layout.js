import React, { Component } from 'react';
import './layout.module.scss';
import greenBg from '../../../../public/images/icon/lsbg.png'
import greenTv from '../../../../public/images/icon/lstv.png'
import greenXinhao from '../../../../public/images/icon/lslz.png'
import lsxh from '../../../../public/images/icon/lsxh.png'
import qianhuangBG from '../../../../public/images/icon/qhbg.png'
import qianhuangBi from '../../../../public/images/icon/qhgb.png'
import qianhuangHouse from '../../../../public/images/icon/qhfz.png'
import qianhuangMaozi from '../../../../public/images/icon/qhyb.png'
import qianlanBG from '../../../../public/images/icon/qlbg.png'
import qianlanRen from '../../../../public/images/icon/qlfz.png'
import qianlanStar from '../../../../public/images/icon/qlxx.png'
import qlxt from '../../../../public/images/icon/qlxt.png'
import shenlanBG from '../../../../public/images/icon/slbg.png'
import shenlanUser from '../../../../public/images/icon/slyh.png'
import shenlanXitong from '../../../../public/images/icon/slxt.png'

import { Scene,
    PerspectiveCamera,
    WebGLRenderer,

    PlaneGeometry,
    BoxBufferGeometry,

    MeshLambertMaterial,
    Mesh,
    DirectionalLight,

    GridHelper,
    AmbientLight,

    MeshBasicMaterial,

    Group,

    TextureLoader
} from 'three';
const scene = new Scene();

const camera = new PerspectiveCamera(70, 1, 0.1, 1000);

const renderer = new WebGLRenderer({ antialias: true, alpha: true });

class Layout extends Component {
    constructor () {
        super()
        this.preTime = 0
        this.initImg()
    }

    componentDidMount () {
        console.log(TextureLoader, 'TextureLoader');
        const support = (function () {
            try {
                var canvas = document.createElement('canvas');
                return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
            } catch (e) {
                return false;
            }
        })()
        console.log(support, 'support')
        this.start()
        window.addEventListener('resize', () => {
            camera.aspect = this.webgl.offsetWidth / this.webgl.offsetHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(this.webgl.offsetWidth, this.webgl.offsetHeight);
        }, false);
    }

    start=() => {
        this.initThree()
        this.initCamera()
        this.initLight()
        // this.initGrid()
        // this.initPlane()
        this.initCube()
        this.animation()
    }

    initThree=() => {
        renderer.setSize(this.webgl.offsetWidth, this.webgl.offsetHeight);
        this.webgl.appendChild(renderer.domElement);
        renderer.setClearColor(0xEEEEEE, 0.0);
        // renderer.shadowMapEnabled = true;
        // renderer.shadowMap.enabled = true;
    }

    initLight=() => {
        const ambientLight = new AmbientLight(0xffffff, 0.52);
        const directionalLight = new DirectionalLight(0xffffff, 0.75);
        // const light = new SpotLight(0xffffff);

        // light.position.set(0, 400, 0);

        // // 告诉平行光需要开启阴影投射

        // light.castShadow = true;

        // scene.add(light);

        directionalLight.position.set(-0, 150, 150).normalize();

        // Set up shadow properties for the light
        ambientLight.castShadow = true;
        directionalLight.castShadow = true;

        // directionalLight.shadow.mapSize.width = 500;
        // directionalLight.shadow.mapSize.height = 500;

        scene.add(ambientLight);
        scene.add(directionalLight);
    }

    initCamera=() => {
        camera.position.z = 300;
        camera.position.x = -20;
        camera.position.y = 140;
        // camera.lookAt({
        //     x: 50,
        //     y: 50,
        //     z: 0
        // })
    }

    initGrid =() => {
        var helper = new GridHelper(1000, 50, 'blue', 'yellow');
        helper.position.y = -50;
        scene.add(helper);
    }

    initCube=() => {
        this.initCuBe()
    }

    initPlane=() => {
        // 底部平面

        var planeGeometry = new PlaneGeometry(1000, 1000);

        var planeMaterial = new MeshBasicMaterial({ color: 0xEEEEEE });

        var plane = new Mesh(planeGeometry, planeMaterial);

        plane.rotation.x = -0.5 * Math.PI;

        plane.position.y = -0;

        // 告诉底部平面需要接收阴影

        plane.receiveShadow = true;

        scene.add(plane);
    }

    initImg=() => {
        this.img3DBG = [
            new Array(6).fill(qianhuangBG),
            new Array(6).fill(shenlanBG),
            new Array(6).fill(qianlanBG),
            new Array(6).fill(greenBg),
        ]
        this.imgMap = {
            '002': [qianhuangHouse, qianhuangBi, qianhuangHouse, qianhuangBG, qianhuangBi, qianhuangBG],
            '102': [qianlanRen, qianlanBG, qianlanRen, qianlanBG, qianlanRen, qianlanRen],
            '202': [qianhuangMaozi, qianhuangBi, qianhuangHouse, qianhuangBG, qianhuangHouse, qianhuangBG],
            '012': [greenBg, greenTv, lsxh, lsxh, greenTv, greenBg],
            '112': [shenlanBG, shenlanBG, shenlanBG, shenlanBG, shenlanXitong, shenlanBG],
            '212': [qianlanBG, qianlanBG, qianlanStar, qianlanBG, qianlanStar, qianlanStar],
            '022': [shenlanBG, shenlanUser, shenlanBG, shenlanBG, shenlanUser, shenlanUser],
            '222': [qianhuangHouse, qianhuangBi, qianhuangHouse, qianhuangBi, qianhuangMaozi, qianhuangBG],
            '201': [qlxt, qianlanBG, qianlanBG, qianlanBG, qianlanBG, qlxt],
            '200': [greenXinhao, greenBg, greenXinhao, greenBg, greenBg, greenBg],
            '211': new Array(6).fill(qianlanBG),
            '210': new Array(6).fill(shenlanBG),
            '221': new Array(6).fill(shenlanBG),
            '220': new Array(6).fill(qianlanBG),
            '100': new Array(6).fill(shenlanBG),
            '000': new Array(6).fill(qianhuangBG),
            '001': new Array(6).fill(shenlanBG),
            '101': [greenBg, greenBg, greenBg, greenBg, greenTv, greenBg],
        }
    }

    initmaterials=(i, j, t, random) => {
        // 遍历图片添加到材质里
        // let materials = []
        const key = `${i}${j}${t}`

        return this.imgMap.hasOwnProperty(key) ? this.imgMap[key] : this.img3DBG[random]
    }

    initCuBe=() => {
        var cubes = [];

        var original = [];

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

                const index = Math.floor(Math.random() * this.img3DBG.length)

                for (let t = 0; t < 3; t++) {
                    const BOXG = new BoxBufferGeometry(30, 30, 30)
                    let materials = []
                    const src = this.initmaterials(i, j, t, index)
                    for (let img = 0; img < 6; img++) {
                        materials.push(
                            new MeshLambertMaterial({
                                map: new TextureLoader().load(src[img],
                                    function () {}, function () {
                                        // renderer.render(scene, camera);
                                    }),
                            })
                        )
                    }

                    // BOXG.faces = imglist
                    cubes[i][j][t] = new Mesh(
                        BOXG,
                        materials
                    );

                    cubes[i][j][t].overdraw = true;

                    cubes[i][j][t].position.x = i * 35 + Math.random() * 5;
                    cubes[i][j][t].position.y = j * 35 + Math.random() * 5;
                    cubes[i][j][t].position.z = t * 35 + Math.random() * 5;

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

        group2.rotation.y = 0.27
        group1.rotation.y = 0.27
        group0.rotation.y = 0.03

        group.position.x = 0
        group.position.y = 70
        group.position.z = 0
        group.rotation.x = -0.17 * Math.PI
        group.rotation.y = -0.3 * Math.PI

        group.castShadow = true;

        this.topCube.position.z += 60
        this.topCube.position.x -= 20
        this.topCube.position.y += 10
        this.topCube.rotation.x += 0.3
        this.topCube.rotation.y += 0.3

        this.bottomCube.position.x += 50
        this.bottomCube.position.y -= 40
        this.bottomCube.position.z -= 75
        this.bottomCube.castShadow = true;

        this.group = group
        this.cubes = cubes
        scene.add(group);
    }

    animation=(time) => {
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
        // this.group.rotation.y += 0.01
        this.topCube.rotation.x += 0.01
        this.bottomCube.rotation.z += 0.01
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
