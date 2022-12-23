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
  skyboxBack,
  customMat;
const option = {
  maskImageUrl:
    "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/MaskImages/20221116.png",
  model: "xiyiji",
  model1: "tv",
  model2: "chouyouyanji",
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
      // 添加透视相机，设置fov、初始位置, 酷家乐全景渲染图默认fov是90
      camera = new THREE.PerspectiveCamera(
        90,
        window.innerWidth / window.innerHeight,
        30,
        cameraMaxDistance
      );
      camera.position.set(0, 0, 0);
      // 添加场景及颜色
      scene = new THREE.Scene();
      // scene.background = new THREE.Color(0xffffff);
      scene_selectObjects = new THREE.Scene();
      scene_front = new THREE.Scene();
      // scene_selectObjects.background = new THREE.Color(0xffffff);
      // 添加光源
      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
      hemiLight.position.set(0, 3000, 0);
      hemiLight.intensity = 1.15;
      scene.add(hemiLight);
      const hemiLight1 = new THREE.HemisphereLight(0xffffff, 0x444444);
      hemiLight1.position.set(0, 3000, 0);
      hemiLight1.intensity = 1.0;
      scene_selectObjects.add(hemiLight1);
      const hemiLight2 = new THREE.HemisphereLight(0xffffff, 0x444444);
      hemiLight1.position.set(0, 3000, 0);
      hemiLight1.intensity = 1.25;
      scene_front.add(hemiLight2);
      // 设置直射光
      const dirLight = new THREE.DirectionalLight(0xdddddd);
      dirLight.castShadow = false;
      dirLight.intensity = 0.8;
      dirLight.position.set(0, 2000, 2000);
      scene.add(dirLight);
      const dirLight1 = new THREE.DirectionalLight(0xdddddd);
      dirLight1.castShadow = false;
      dirLight1.intensity = 0.8;
      dirLight1.position.set(0, 2000, 2000);
      scene_selectObjects.add(dirLight1);
      const dirLight2 = new THREE.DirectionalLight(0xdddddd);
      dirLight1.castShadow = false;
      dirLight1.intensity = 0.8;
      dirLight1.position.set(0, 2000, 2000);
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
      controls.autoRotate = false;
      controls.autoRotateSpeed = 1.0;
      controls.enablePan = false;
      // 朝后
      // controls.target.set(0, 0, 1.0);
      // 朝右
      controls.target.set(1.0, 0, 0);
      camera.updateProjectionMatrix();
      // 加载进度manager
      const manager = new THREE.LoadingManager();
      const loader = new FBXLoader(manager);
      // 洗衣机
      loader.load(
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/save_fbx/CF067T004-海尔-滚筒-干衣机-10kg-HGS100-306.fbx",
        (object) => {
          const normalObject = this.createNormalizeObject(object);
          object.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = false;
              child.receiveShadow = false;
            }
            child.userData.parent = normalObject;
          });
          // 设置object position
          normalObject.position.set(-1620 - 200, -700 * 2 - 100, 3700 - 100);
          normalObject.rotation.set(0, Math.PI / 2, 0);
          normalObject.name = "xiyiji";
          // 添加object到场景里
          scene.add(normalObject);
          objects.push(normalObject);

          // 相机朝后
          // controls.target.set(0, 0, 0.1);
          // controls.update();
          // camera.updateProjectionMatrix();

          // 计算2d包围盒
          // const points = this.getBoundingbox2D(normalObject, camera);
          // console.log('back-洗衣机:');
          // console.log(points);
        }
      );
      // 除湿机
      // loader.load(
      //   "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/save_fbx/AJ0261M07-模型.fbx",
      //   (object) => {
      //     const normalObject = this.createNormalizeObject(object);
      //     normalObject.traverse((child) => {
      //       if (child.isMesh) {
      //         child.castShadow = false;
      //         child.receiveShadow = false;
      //       }
      //       child.userData.parent = normalObject;
      //     });
      //     // 设置object position
      //     normalObject.position.set(-1620, -700 * 2, 3700);
      //     normalObject.rotation.set(0, Math.PI / 2, 0);
      //     normalObject.name = "chushiji";
      //     normalObject.visible = false;
      //     // 添加object到场景里
      //     scene.add(normalObject);
      //     objects.push(normalObject);
      //   }
      // );
      // 立式空调
      loader.load(
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/model/lishikongtiao_bai.FBX",
        (object) => {
          const normalObject = this.createNormalizeObject(object);
          object.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = false;
              child.receiveShadow = false;
            }
            child.userData.parent = normalObject;
          });
          // 设置object position
          normalObject.position.set(-1620 - 200, -700 * 2 - 100, 3700 - 100);
          normalObject.rotation.set(0, Math.PI / 2, 0);
          normalObject.name = "lishikongtiao";
          normalObject.visible = false;
          // 添加object到场景里
          scene.add(normalObject);
          objects.push(normalObject);
        }
      );
      // 电视
      loader.load(
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/model/TV.FBX",
        (object) => {
          const normalObject = this.createNormalizeObject(object);
          object.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = false;
              child.receiveShadow = false;
            }
            child.userData.parent = normalObject;
          });
          // 设置object position
          normalObject.position.set(2320, -600, 3700);
          normalObject.rotation.set(0, -Math.PI / 2, 0);
          normalObject.name = "tv";
          // 添加object到场景里
          scene.add(normalObject);
          objects.push(normalObject);
        }
      );
      // 电视1
      loader.load(
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/model/dianshi_zuo.FBX",
        (object) => {
          const normalObject = this.createNormalizeObject(object);
          object.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = false;
              child.receiveShadow = false;
            }
            child.userData.parent = normalObject;
          });
          // 设置object position
          normalObject.position.set(2220, -700, 3700);
          normalObject.rotation.set(0, -Math.PI / 2, 0);
          normalObject.name = "tv1";
          normalObject.visible = false;
          // 添加object到场景里
          scene.add(normalObject);
          objects.push(normalObject);
        }
      );
      // 抽油烟机
      loader.load(
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/model/chouyouyanji.FBX",
        (object) => {
          const normalObject = this.createNormalizeObject(object);
          object.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = false;
              child.receiveShadow = false;
            }
            child.userData.parent = normalObject;
          });
          // 设置object position
          normalObject.position.set(2320, 800, 2150);
          normalObject.rotation.set(0, -Math.PI / 2, 0);
          normalObject.name = "chouyouyanji";
          normalObject.visible = false;
          // 添加object到场景里
          scene.add(normalObject);
          objects.push(normalObject);
        }
      );
      // 空调
      loader.load(
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/model/kongtiao_jin.FBX",
        (object) => {
          const normalObject = this.createNormalizeObject(object);
          object.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = false;
              child.receiveShadow = false;
            }
            child.userData.parent = normalObject;
          });
          // 设置object position
          normalObject.position.set(2320, 900, 2150);
          normalObject.rotation.set(0, -Math.PI / 2, 0);
          normalObject.name = "kongtiao";
          normalObject.visible = true;
          // 添加object到场景里
          scene.add(normalObject);
          objects.push(normalObject);

          // 相机朝后
          // controls.target.set(0, 0, 0.1);
          // 相机朝右
          // controls.target.set(0.0, 0, 1.0);
          // controls.update();
          // camera.updateProjectionMatrix();

          // 计算2d包围盒
          const points = this.getBoundingbox2D(normalObject, camera);
          console.log('right-空调:');
          console.log(points);
        }
      );
      // background cubemap
      // px = right
      // nx = left
      // py = top
      // ny = bottom
      // pz = front
      // nz = back
      const textures = [];
      const px = new THREE.TextureLoader().load(
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/bg_multi_HighRes/_r.jpg"
      );
      const nx = new THREE.TextureLoader().load(
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/bg_multi_HighRes/_l.jpg"
      );
      const py = new THREE.TextureLoader().load(
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/bg_multi_HighRes/_u.jpg"
      );
      const ny = new THREE.TextureLoader().load(
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/bg_multi_HighRes/_d.jpg"
      );
      const pz = new THREE.TextureLoader().load(
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/bg_multi_HighRes/_f.jpg"
      );
      const nz = new THREE.TextureLoader().load(
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/bg_multi_HighRes/_b.jpg"
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
      // https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/MaskImages/multi_commodity/keting.png
      //  https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/withXYJ_HighRes/_d.jpg
      this.createPlane(
        "back",
        new THREE.Vector3(0, 0, 3000),
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/MaskImages/multi_commodity/keting.png"
      );
      this.createPlane(
        "right",
        new THREE.Vector3(2000, 0, 0),
        "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/MaskImages/multi_commodity/frontMask.png"
      );
      // scene_front.add(skyboxFront);
      const gui = new GUI();
      gui.add(option, "maskImageUrl").onChange((value) => {
        console.log(value);
        if (customMat) {
          const imageMask = new THREE.TextureLoader().load(value);
          customMat.uniforms.texMask.value = imageMask;
        }
      });
      gui.add(option, "model", ["xiyiji", "lishikongtiao"]).onChange((value) => {
        objects.forEach((obj) => {
          if (obj.name === "xiyiji" || obj.name === "lishikongtiao") {
            if (obj.name === value) {
              obj.visible = true;
            } else {
              obj.visible = false;
            }
          }
        });
      });
      gui.add(option, "model1", ["tv", "tv1"]).onChange((value) => {
        objects.forEach((obj) => {
          if (obj.name === "tv" || obj.name === "tv1") {
            if (obj.name === value) {
              obj.visible = true;
            } else {
              obj.visible = false;
            }
          }
        });
      });
      gui.add(option, "model2", ["chouyouyanji", "kongtiao"]).onChange((value) => {
        objects.forEach((obj) => {
          if (obj.name === "chouyouyanji" || obj.name === "kongtiao") {
            if (obj.name === value) {
              obj.visible = true;
            } else {
              obj.visible = false;
            }
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
    createPlane(direction, position, url) {
      if (direction === "back") {
        // px = right
        // nx = left
        // py = top
        // ny = bottom
        // pz = front
        // nz = back
        const maskUrl = new THREE.TextureLoader().load(url);
        const backUrl = new THREE.TextureLoader().load(
          "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/bg_multi_HighRes/_b.jpg"
        );
        function vertexShader() {
          return `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * modelViewPosition;
          }
        `;
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
            gl_FragColor = vec4(pixel.xyz, pixelMask.w);
          }
        `;
        }
        let uniforms = {
          tex: { type: "t", value: backUrl },
          texMask: { type: "t", value: maskUrl },
          // threshold: { value: option.threshold }
        };
        customMat = new THREE.ShaderMaterial({
          uniforms: uniforms,
          fragmentShader: fragmentShader(),
          vertexShader: vertexShader(),
        });
        // 设置半透明模式
        customMat.transparent = true;
        const plane = new THREE.Mesh(new THREE.PlaneGeometry(), customMat);
        plane.rotation.set(0, Math.PI, 0);
        plane.position.set(position.x, position.y, position.z);
        plane.scale.set(position.z * 2, position.z * 2, position.z * 2);
        scene_front.add(plane);
      } else if (direction === 'right') {
        const maskUrl = new THREE.TextureLoader().load(url);
        const backUrl = new THREE.TextureLoader().load(
          "https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/bg_multi_HighRes/_r.jpg"
        );
        function vertexShader() {
          return `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * modelViewPosition;
          }
        `;
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
            gl_FragColor = vec4(pixel.xyz, pixelMask.w);
          }
        `;
        }
        let uniforms = {
          tex: { type: "t", value: backUrl },
          texMask: { type: "t", value: maskUrl },
          // threshold: { value: option.threshold }
        };
        customMat = new THREE.ShaderMaterial({
          uniforms: uniforms,
          fragmentShader: fragmentShader(),
          vertexShader: vertexShader(),
        });
        // 设置半透明模式
        customMat.transparent = true;
        const plane = new THREE.Mesh(new THREE.PlaneGeometry(), customMat);
        plane.rotation.set(0, -Math.PI / 2, 0);
        plane.position.set(position.x, position.y, position.z);
        plane.scale.set(position.x * 2, position.x * 2, position.x * 2);
        scene_front.add(plane);
      }
    },
    // 获取屏幕空间boundingbox
    getBoundingbox2D(object, camera) {
      const points = [];
      // 获取包围盒
      const bbox = new THREE.Box3().setFromObject(object, true);
      // front-left-up
      const frontLeftUp = new THREE.Vector3(bbox.min.x, bbox.max.y, bbox.max.z);
      points.push(frontLeftUp);

      // front-left-down
      const frontLeftDown = new THREE.Vector3(bbox.min.x, bbox.min.y, bbox.max.z);
      points.push(frontLeftDown);

      // front-right-up
      const frontRightUp = new THREE.Vector3(bbox.max.x, bbox.max.y, bbox.max.z);
      points.push(frontRightUp);

      // front-right-down
      const frontRightDown = new THREE.Vector3(bbox.max.x, bbox.min.y, bbox.max.z);
      points.push(frontRightDown);

      // back-left-up
      const backLeftUp = new THREE.Vector3(bbox.min.x, bbox.max.y, bbox.min.z);
      points.push(backLeftUp);

      // back-left-down
      const backLeftDown = new THREE.Vector3(bbox.min.x, bbox.min.y, bbox.min.z);
      points.push(backLeftDown);

      // back-right-up
      const backRightUp = new THREE.Vector3(bbox.max.x, bbox.max.y, bbox.min.z);
      points.push(backRightUp);

      // back-right-down
      const backRightDown = new THREE.Vector3(bbox.max.x, bbox.min.y, bbox.min.z);
      points.push(backRightDown);


      // 显示包围盒
      const boxHelper = new THREE.BoxHelper(object, 0xff0000);
      boxHelper.update();
      scene.add(boxHelper);

      const min = new THREE.Vector2(+Infinity, +Infinity);
      const max = new THREE.Vector2(-Infinity, -Infinity);
      debugger;
      points.forEach((point) => {
        const ndcPoint = point.project(camera);
        const tempX = (ndcPoint.x + 1) * 0.5;
        const tempY = -(ndcPoint.y - 1) * 0.5;

        min.x = tempX < min.x ? tempX : min.x;
        min.y = tempY < min.y ? tempY : min.y;

        max.x = tempX > max.x ? tempX : max.x;
        max.y = tempY > max.y ? tempY : max.y;
      });

      const retPoints = [];
      retPoints.push(new THREE.Vector2(min.x, min.y));
      retPoints.push(new THREE.Vector2(min.x, max.y));
      retPoints.push(new THREE.Vector2(max.x, min.y));
      retPoints.push(new THREE.Vector2(max.x, max.y));

      return retPoints;
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
    createNormalizeObject(object) {
      // 获取包围盒
      const bbox = new THREE.Box3().setFromObject(object, true);
      // 根据包围盒设置设置物体中心点为（0，0，0）
      const ret = new THREE.Object3D();
      ret.add(object);
      object.position.set(
        -(bbox.min.x + bbox.max.x) / 2,
        -bbox.min.y,
        -(bbox.min.z + bbox.max.z) / 2
      );
      return ret;
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