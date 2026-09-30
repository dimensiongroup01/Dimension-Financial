'use client';

import { useEffect, useRef } from 'react';

const heroChartDescription =
  'Decorative 3D financial graphic showing rising bar columns and an upward trend line.';

export default function GlobeHero() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let rafId = 0;

    (async () => {
      const THREE = await import('three');

      // ✅ LIGHTWEIGHT RENDERER
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.2));

      const scene = new THREE.Scene();

      // ✅ ORTHOGRAPHIC CAMERA (PARALLEL LOOK)
      const aspect = canvas.clientWidth / canvas.clientHeight;
      const camera = new THREE.OrthographicCamera(
        -3 * aspect,
        3 * aspect,
        3,
        -3,
        0.1,
        100
      );
      camera.position.set(0, 0, 6);
      camera.lookAt(0, 0, 0);

      const group = new THREE.Group();
      scene.add(group);

      // ✅ BASE (SMALLER)
      const base = new THREE.Mesh(
        new THREE.CylinderGeometry(2.2, 2.4, 0.2, 64),
        new THREE.MeshStandardMaterial({
          color: '#f5f9ff',
          roughness: 0.3
        })
      );
      base.position.y = -1.2;
      group.add(base);

      // ✅ BARS (PARALLEL + CLEAN)
      const barHeights = [1, 1.6, 2.2, 2.8, 3.4];
      const barGroup = new THREE.Group();
      barGroup.position.y = -1.1;
      group.add(barGroup);

      barHeights.forEach((height, index) => {
        const bar = new THREE.Mesh(
          new THREE.BoxGeometry(0.4, height, 0.4),
          new THREE.MeshStandardMaterial({
            color: index === 4 ? '#4f9cff' : '#dbeafe',
            roughness: 0.25,
            metalness: 0.1
          })
        );

        // PERFECT ALIGNMENT
        bar.position.set(index * 0.65 - 1.3, height / 2, 0);
        barGroup.add(bar);
      });

      // ✅ STRAIGHT LINE (NO DEPTH)
      const points = [
        new THREE.Vector3(-1.5, -0.3, 0),
        new THREE.Vector3(-0.8, 0.2, 0),
        new THREE.Vector3(-0.1, 0.6, 0),
        new THREE.Vector3(0.7, 1.4, 0),
        new THREE.Vector3(1.5, 2.2, 0)
      ];

      const curve = new THREE.CatmullRomCurve3(points);
      const lineGeometry = new THREE.TubeGeometry(curve, 50, 0.04, 8, false);

      const line = new THREE.Mesh(
        lineGeometry,
        new THREE.MeshStandardMaterial({
          color: '#3b82f6',
          emissive: '#93c5fd',
          emissiveIntensity: 0.2
        })
      );

      group.add(line);

      // ✅ LIGHTING (SOFT)
      const ambient = new THREE.AmbientLight('#ffffff', 1);
      const light = new THREE.DirectionalLight('#ffffff', 1.2);
      light.position.set(2, 3, 4);

      scene.add(ambient, light);

      // ✅ RESIZE
      const resize = () => {
        const parent = canvas.parentElement;
        if (!parent) return;

        const width = parent.clientWidth;
        const height = parent.clientHeight;

        renderer.setSize(width, height, false);

        const aspect = width / height;
        camera.left = -3 * aspect;
        camera.right = 3 * aspect;
        camera.top = 3;
        camera.bottom = -3;

        camera.updateProjectionMatrix();
      };

      resize();
      window.addEventListener('resize', resize);

      // ✅ SIMPLE ANIMATION (NO ROTATION)
      const animate = () => {
        line.rotation.z += 0.002; // subtle motion
        renderer.render(scene, camera);
        rafId = requestAnimationFrame(animate);
      };

      animate();
    })();

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="
        relative 
        h-[100px]        /* 👈 REDUCED SIZE */
        sm:h-[260px] 
        md:h-[200px]     /* 👈 was 520px */
        w-full 
        max-w-[500px]    /* 👈 CONTROL WIDTH */
        mx-auto
      "
    >
      <canvas
        ref={canvasRef}
        role="img"
        aria-label={heroChartDescription}
        className="h-full w-full"
      />

      {/* SOFT OVERLAY */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-50/60 to-transparent" />
    </div>
  );
}