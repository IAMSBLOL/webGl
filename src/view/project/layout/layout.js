import React, { Component } from 'react';
import './layout.module.scss';
import { Scene, PerspectiveCamera, WebGLRenderer, CubeGeometry, MeshLambertMaterial, Mesh, DirectionalLight } from 'three';
const scene = new Scene();

const camera = new PerspectiveCamera(15, window.innerWidth / window.innerHeight, 1, 1000);

const renderer = new WebGLRenderer();

class Layout extends Component {
    componentDidMount () {
        this.start()
    }

    start=() => {
        console.log(scene)
        console.log(camera)
        console.log(renderer)
        this.initThree()
        this.initLight()
        this.initCamera()
        this.initCube()
    }

    initThree=() => {
        renderer.setSize(this.webgl.offsetWidth, this.webgl.offsetHeight);
        this.webgl.appendChild(renderer.domElement);
        renderer.setClearColor(0xFFFFFF, 1.0);
    }

    initLight=() => {
        // var light = new AmbientLight('F8F8FF');
        // light.position.set(100, 100, 200);
        // scene.add(light);

        const light2 = new DirectionalLight('#7B68EE', 1);
        // 位置不同，方向光作用于物体的面也不同，看到的物体各个面的颜色也不一样
        light2.position.set(0, 0, 1);
        scene.add(light2);
    }

    initCamera=() => {
        camera.position.x = 1;
        camera.position.y = 1;
        camera.position.z = 9;
        camera.up.x = 1;
        camera.up.y = 1;
        camera.up.z = 0;
    }

    initCube=() => {
        this.initCuBe1()
        this.initCuBe2()
    }

    initCuBe1=() => {
        var material = new MeshLambertMaterial({ color: 'white' });

        var geometry = new CubeGeometry(1, 1, 1);
        console.log(geometry, 15)
        var cube = new Mesh(geometry, material);
        cube.position.y = 1;

        scene.add(cube);
        cube.rotation.y += 50;
        // cube.rotation.y += 0.1;
        // cube1.rotation.x += 0.2;
        // cube1.rotation.y += 0.05;
        renderer.render(scene, camera);
    }

    initCuBe2=() => {
        var geometry1 = new CubeGeometry(1, 1, 1);
        var material1 = new MeshLambertMaterial({ color: 'white' });
        var cube1 = new Mesh(geometry1, material1);
        scene.add(cube1);
        // cube1.rotation.y += 70;
        // renderer.render(scene, camera);
        function render1 () {
            // requestAnimationFrame(render1);
            cube1.rotation.y += 50;
            // cube.rotation.y += 0.1;
            // cube1.rotation.x += 0.2;
            // cube1.rotation.y += 0.05;
            renderer.render(scene, camera);
        }
        render1()
    }
    render () {
        return (
            <div styleName='Layout' className='Layout'>
                <div className='webgl' ref={e => { this.webgl = e }}>123</div>
            </div>
        );
    }
}

export default Layout;
