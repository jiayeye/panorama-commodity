<template>
  <div>
    <div id="textDiv">
      <text id="errorText" v-if="showErrorInfo">加载失败，请检查资源</text>
    </div>
    <canvas id="threeCanvas" ref="threeCanvas"></canvas>
    <progress id="progress" v-if="showProgress" :value="progressValue" max="100"></progress>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OutlineEffect } from "three/examples/jsm/effects/OutlineEffect";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";

let camera,
  scene,
  scene_selectObjects,
  scene_front,
  renderer,
  controls,
  tickId,
  scale,
  objects,
  effect,
  raycaster,
  skyboxFront,
  skyboxBack
  ;

const option = {
  maskImageUrl: 'https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/MaskImages/2022_10_31_2px.png',
  model: 'xyj'
};
export default {
  props: {
    modelUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showErrorInfo: false,
      showProgress: false,
      progressValue: 0,
    };
  },
  mounted() {
    this.initScene(this.modelUrl);
  },
  methods: {
    initScene(modelUrl) {
      scale = 1;
      objects = [];
      // reset
      this.destroy();

      // 相机far
      const cameraMaxDistance = 12000;

      // 添加透视相机，设置fov、初始位置
      camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        30,
        cameraMaxDistance
      );

      camera.position.set(0, 0, 1);

      // 添加场景及颜色
      scene = new THREE.Scene();
      // scene.background = new THREE.Color(0xffffff);

      scene_selectObjects = new THREE.Scene();
      scene_front = new THREE.Scene();
      // scene_selectObjects.background = new THREE.Color(0xffffff);

      // 添加光源
      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
      hemiLight.position.set(0, 2000, 0);
      hemiLight.intensity = 0.8;
      scene.add(hemiLight);
      const hemiLight1 = new THREE.HemisphereLight(0xffffff, 0x444444);
      hemiLight1.position.set(0, 2000, 0);
      hemiLight1.intensity = 0.8;
      scene_selectObjects.add(hemiLight1);
      const hemiLight2 = new THREE.HemisphereLight(0xffffff, 0x444444);
      hemiLight1.position.set(0, 2000, 0);
      hemiLight1.intensity = 0.8;
      scene_front.add(hemiLight2);

      // 设置直射光
      const dirLight = new THREE.DirectionalLight(0xdddddd);
      dirLight.castShadow = false;
      dirLight.intensity = 0.2;
      dirLight.position.set(0, 1000, 1000);
      scene.add(dirLight);
      const dirLight1 = new THREE.DirectionalLight(0xdddddd);
      dirLight1.castShadow = false;
      dirLight1.intensity = 0.2;
      dirLight1.position.set(0, 1000, 1000);
      scene_selectObjects.add(dirLight1);
      const dirLight2 = new THREE.DirectionalLight(0xdddddd);
      dirLight1.castShadow = false;
      dirLight1.intensity = 0.2;
      dirLight1.position.set(0, 1000, 1000);
      scene_front.add(dirLight2);






      // 添加WebGLRenderer，设置size
      renderer = new THREE.WebGLRenderer({
        canvas: this.$refs.threeCanvas,
        antialias: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth * scale, window.innerHeight * scale);
      renderer.shadowMap.enabled = false;

      // 添加相机控制器
      controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.0;
      controls.enablePan = false;
      controls.target.set(0, 0, 0);

      // 加载进度manager
      const manager = new THREE.LoadingManager();
      const loader = new FBXLoader(manager);
      // 洗衣机
      loader.load(
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/save_fbx/CF067T004-海尔-滚筒-干衣机-10kg-HGS100-306.fbx",
        (object) => {
          object.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = false;
              child.receiveShadow = false;
            }
            child.userData.parent = object;
          });
          // 设置object position
          object.position.set(3052 + 430 / 2 + 581 / 2, - 411 * 2 - 180, -600 / 2);
          // object.position.set(0, 0, 0);
          object.rotation.set(0, -Math.PI / 2, 0);
          object.name = 'xyj';
          // 添加object到场景里
          scene.add(object);
          objects.push(object);
        }
      );

      // 除湿机
      loader.load(
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/save_fbx/AJ0261M07-模型.fbx",
        (object) => {
          object.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = false;
              child.receiveShadow = false;
            }
            child.userData.parent = object;
          });
          // 设置object position
          object.position.set(3052 + 430 / 2 + 581 / 2, - 411 * 2 - 180, -600 / 2 - 100);
          // object.position.set(0, 0, 0);
          object.rotation.set(-Math.PI / 2, 0, -Math.PI / 2);
          object.name = 'csj';
          object.visible = false;
          // 添加object到场景里
          scene.add(object);
          objects.push(object);
        }
      );


      // px = right
      // nx = left
      // py = top
      // ny = bottom
      // pz = front
      // nz = back
      const textures = [];
      const px = new THREE.TextureLoader().load(
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/withoutXYJ/_r.jpg"
      );
      const nx = new THREE.TextureLoader().load(
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/withoutXYJ/_l.jpg"
      );
      const py = new THREE.TextureLoader().load(
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/withoutXYJ/_u.jpg"
      );
      const ny = new THREE.TextureLoader().load(
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/withoutXYJ/_d.jpg"
      );
      const pz = new THREE.TextureLoader().load(
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/withoutXYJ/_f.jpg"
      );
      const nz = new THREE.TextureLoader().load(
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/withoutXYJ/_b.jpg"
      );
      textures.push(px);
      textures.push(nx);
      textures.push(py);
      textures.push(ny);
      textures.push(pz);
      textures.push(nz);
      const materials = [];
      for (let i = 0; i < 6; i++) {
        materials.push(new THREE.MeshBasicMaterial({ map: textures[i] }));
      }
      const skyboxBack = new THREE.Mesh(
        new THREE.BoxGeometry(12000, 12000, 12000),
        materials
      );
      skyboxBack.geometry.scale(1, 1, -1);
      scene.add(skyboxBack);




      // px = right
      // nx = left
      // py = top
      // ny = bottom
      // pz = front
      // nz = back
      const textures1 = [];
      const px1 = new THREE.TextureLoader().load(
        option.maskImageUrl
      );
      const nx1 = new THREE.TextureLoader().load(
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/withXYJ/_l.jpg"
      );
      const py1 = new THREE.TextureLoader().load(
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/withXYJ/_u.jpg"
      );
      const ny1 = new THREE.TextureLoader().load(
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/withXYJ/_d.jpg"
      );
      const pz1 = new THREE.TextureLoader().load(
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/withXYJ/_f.jpg"
      );
      const nz1 = new THREE.TextureLoader().load(
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/withXYJ/_b.jpg"
      );
      textures1.push(px1);
      textures1.push(nx1);
      textures1.push(py1);
      textures1.push(ny1);
      textures1.push(pz1);
      textures1.push(nz1);
      const materials1 = [];
      function vertexShader() {
        return `
          varying vec2 vUv;

          void main() {
            vUv = uv; 

            vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * modelViewPosition; 
          }
        `
      }

      function fragmentShader() {
        return `
          uniform sampler2D  tex; 
          uniform sampler2D  texMask; 
          // uniform float threshold;
          varying vec2 vUv;
        
          void main() {
            vec4 pixelMask = texture2D(texMask, vUv);
            vec4 pixel = texture2D(tex, vUv);
            //  vec4 temp = pixel1 - pixel;
            //  float alpha = temp.x * temp.x + temp.y * temp.y + temp.z * temp.z;
            //  if(alpha < threshold) {
            //   alpha = 1.0;
            //  }else {
            //   alpha = 0.0;
            //   // discard;
            //  }

            // if(pixelMask.w < 0.95) {
            //   discard;
            // }
            // gl_FragColor = vec4(pixelMask.xyz, 1);

            // use mask alpha and pixel rgb
            gl_FragColor = vec4(pixel.xyz, pixelMask.w);
            // gl_FragColor = pixelMask;
          }
        `
      }
      let customMat;
      for (let i = 0; i < 6; i++) {
        if (i === 0) {
          let uniforms = {
            tex: { type: 't', value: textures[i] },
            texMask: { type: 't', value: textures1[i] },
            // threshold: { value: option.threshold }
          };
          customMat = new THREE.ShaderMaterial({
            uniforms: uniforms,
            fragmentShader: fragmentShader(),
            vertexShader: vertexShader(),
          });
          // 设置半透明模式
          customMat.transparent = true;
          materials1.push(customMat);
        } else {
          materials1.push(new THREE.MeshBasicMaterial({ map: textures1[i] }));
        }
      }
      const skyboxFront = new THREE.Mesh(
        new THREE.BoxGeometry(1000, 1000, 1000),
        materials1
      );
      skyboxFront.geometry.scale(1, 1, -1);
      scene_front.add(skyboxFront);

      // const gui = new GUI();
      // gui
      //   .add(option, "threshold", 0.0001, 0.1)
      //   .step(0.0001)
      //   .onChange((value) => {
      //     if(customMat) {
      //       customMat.uniforms.threshold.value = value;
      //     }
      //   });

      const gui = new GUI();
      gui
        .add(option, 'maskImageUrl')
        .onChange((value) => {
          console.log(value);
          if (customMat) {
            const imageMask = new THREE.TextureLoader().load(value);
            customMat.uniforms.texMask.value = imageMask;
          }
        });


      gui
        .add(option, 'model', ['xyj', 'csj'])
        .onChange((value) => {
          objects.forEach((obj) => {
            if (obj.name === value) {
              obj.visible = true;
            } else {
              obj.visible = false;
            }
          });
        });

      // 创建线框效果
      effect = new OutlineEffect(renderer, {
        defaultThickness: 0.003,
        defaultColor: [0, 0, 1],
      });

      raycaster = new THREE.Raycaster();

      // 监听窗口reszie事件
      window.addEventListener("resize", this.onWindowResize);
      // 监听窗口reszie事件
      window.addEventListener("mousedown", this.onMouseDown);
      // 设置tick
      this.animate();

      document.addEventListener("click", this.onClick);
    },

    // 加载进度
    onProgress(xhr) {
      if (xhr.lengthComputable) {
        const percentComplete = (xhr.loaded / xhr.total) * 100;
        this.progressValue = Math.round(percentComplete, 2);
        // console.log("model " + Math.round(percentComplete, 2) + "% downloaded");
      }
    },

    // 加载失败回掉
    onError(error) {
      console.log(error.message);
      this.showProgress = false;
      this.$refs.threeCanvas.hidden = true;
      this.showErrorInfo = true;
    },

    // 重置窗口大小
    onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      // 更新相机投影矩阵
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth * scale, window.innerHeight * scale);
    },

    // 鼠标点击事件
    onMouseDown() {
      controls.autoRotate = false;
    },

    // 点击事件
    onClick(event) {
      event.preventDefault();
      const mouse = new THREE.Vector2();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersections = raycaster.intersectObjects(objects, true);
      if (intersections[0]) {
        objects.forEach((obj) => {
          scene.remove(obj);
          scene_selectObjects.remove(obj);
        });
        objects.forEach((obj) => {
          scene.add(obj);
        });
        scene.remove(intersections[0].object.userData.parent);
        scene_selectObjects.add(intersections[0].object.userData.parent);
      }
    },

    // 每帧调用
    animate() {
      // 清除背景色

      // 获取callback handler
      tickId = requestAnimationFrame(this.animate);
      // 更新control状态
      controls.update();

      // 保证渲染顺序skyboxBack->objects->skyboxFront
      // 渲染skboxback
      renderer.render(scene, camera);
      renderer.autoClear = false;

      // 渲染描边物体
      effect.autoClear = renderer.autoClear;
      effect.render(scene_selectObjects, camera);

      // 渲染skyboxfront
      renderer.render(scene_front, camera);
      renderer.autoClear = true;
      effect.autoClear = true;
    },
    // 清空场景
    destroy() {
      // 使用handler取消每帧调用
      cancelAnimationFrame(tickId);
      // 移除resize监听
      window.removeEventListener("resize", this.onWindowResize);
      // 移除mouseDown监听
      window.removeEventListener("mousedown", this.onMouseDown);
      if (renderer) {
        renderer.domElement.addEventListener("dblclick", null, false); //remove listener to render
        renderer.forceContextLoss();
      }
      renderer = null;
      scene = null;
      scene_selectObjects = null;
      camera = null;
      controls = null;
    },
  },

  beforeDestroy() {
    console.log("beforeDestroy");
    // 清除场景
    this.destroy();
  },
};
</script>

<style scoped>
#three {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}

#progress {
  width: 40%;
  height: 2rem;
  position: fixed;
  left: 30%;
  top: 47%;
}

#textDiv {
  position: fixed;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  top: 46%;
}
</style>
