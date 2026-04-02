'use client';

import { useEffect, useRef } from 'react';

export default function GlobeHero() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    let isActive = true;
    let rafId = 0;
    let visibility: (() => void) | null = null;
    let onMove: ((event: MouseEvent) => void) | null = null;
    let resize: (() => void) | null = null;
    let destroyScene: (() => void) | null = null;

    (async () => {
      const [THREE, { default: gsap }] = await Promise.all([import('three'), import('gsap')]);
      if (!isActive) {
        return;
      }

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
      camera.position.set(0, 0.1, 6.6);

      const group = new THREE.Group();
      scene.add(group);

      const base = new THREE.Mesh(
        new THREE.CylinderGeometry(2.5, 2.9, 0.26, 64),
        new THREE.MeshStandardMaterial({
          color: '#f8fbff',
          metalness: 0.28,
          roughness: 0.32
        })
      );
      base.position.y = -1.45;
      group.add(base);

      const baseRing = new THREE.Mesh(
        new THREE.TorusGeometry(2.35, 0.035, 24, 120),
        new THREE.MeshBasicMaterial({ color: '#8ec2ff', transparent: true, opacity: 0.9 })
      );
      baseRing.rotation.x = Math.PI / 2;
      baseRing.position.y = -1.2;
      group.add(baseRing);

      const barHeights = [1.15, 1.75, 2.45, 3.1, 3.9];
      const bars: Array<{ position: { y: number }; geometry: { dispose: () => void }; material: { dispose: () => void } }> = [];
      const barGroup = new THREE.Group();
      barGroup.position.y = -1.15;
      group.add(barGroup);

      barHeights.forEach((height, index) => {
        const bar = new THREE.Mesh(
          new THREE.BoxGeometry(0.48, height, 0.48),
          new THREE.MeshStandardMaterial({
            color: index === barHeights.length - 1 ? '#5aa8ff' : '#dfeeff',
            emissive: index === barHeights.length - 1 ? '#9bd0ff' : '#eaf4ff',
            emissiveIntensity: index === barHeights.length - 1 ? 0.28 : 0.08,
            metalness: 0.18,
            roughness: 0.32
          })
        );
        bar.position.set(-1.4 + index * 0.72, height / 2, 0);
        bars.push(bar);
        barGroup.add(bar);
      });

      const linePoints = [
        new THREE.Vector3(-1.65, -0.4, 0.3),
        new THREE.Vector3(-0.9, 0.1, 0.22),
        new THREE.Vector3(-0.2, 0.45, 0.12),
        new THREE.Vector3(0.7, 1.25, 0.05),
        new THREE.Vector3(1.65, 2.25, -0.08)
      ];

      const curve = new THREE.CatmullRomCurve3(linePoints);
      const lineGeometry = new THREE.TubeGeometry(curve, 80, 0.045, 12, false);
      const line = new THREE.Mesh(
        lineGeometry,
        new THREE.MeshStandardMaterial({
          color: '#2f9bff',
          emissive: '#8dc9ff',
          emissiveIntensity: 0.36,
          metalness: 0.16,
          roughness: 0.22
        })
      );
      group.add(line);

      const arrow = new THREE.Mesh(
        new THREE.ConeGeometry(0.13, 0.34, 18),
        new THREE.MeshStandardMaterial({
          color: '#2f9bff',
          emissive: '#8dc9ff',
          emissiveIntensity: 0.36,
          metalness: 0.14,
          roughness: 0.22
        })
      );
      arrow.rotation.z = -Math.PI / 4;
      arrow.position.set(1.74, 2.33, -0.08);
      group.add(arrow);

      const coin = new THREE.Mesh(
        new THREE.CylinderGeometry(0.68, 0.68, 0.18, 42),
        new THREE.MeshStandardMaterial({
          color: '#ffffff',
          emissive: '#f2f8ff',
          emissiveIntensity: 0.18,
          metalness: 0.24,
          roughness: 0.18
        })
      );
      coin.rotation.x = Math.PI / 2.6;
      coin.position.set(1.68, -0.08, -0.38);
      group.add(coin);

      const coinRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.68, 0.03, 16, 100),
        new THREE.MeshBasicMaterial({ color: '#7cbcff', transparent: true, opacity: 0.9 })
      );
      coinRing.position.copy(coin.position);
      coinRing.rotation.y = Math.PI / 6;
      group.add(coinRing);

      const particlesGeometry = new THREE.BufferGeometry();
      const count = 320;
      const positions = new Float32Array(count * 3);

      for (let i = 0; i < count; i += 1) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 7;
        positions[i3 + 1] = (Math.random() - 0.1) * 4.8;
        positions[i3 + 2] = (Math.random() - 0.5) * 2.8;
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particles = new THREE.Points(
        particlesGeometry,
        new THREE.PointsMaterial({
          color: '#9ccfff',
          size: 0.022,
          transparent: true,
          opacity: 0.85
        })
      );
      scene.add(particles);

      const ambient = new THREE.AmbientLight('#d7ecff', 1.2);
      const key = new THREE.DirectionalLight('#ffffff', 1.4);
      key.position.set(3, 3, 4);
      const fill = new THREE.PointLight('#a6d3ff', 1.4, 20);
      fill.position.set(-3, 2, 2);
      scene.add(ambient, key, fill);

      gsap.fromTo(group.scale, { x: 0.86, y: 0.86, z: 0.86 }, { x: 1, y: 1, z: 1, duration: 1.1, ease: 'power2.out' });
      gsap.fromTo(canvas, { opacity: 0 }, { opacity: 1, duration: 0.9, ease: 'power2.out' });

      resize = () => {
        const parent = canvas.parentElement;
        if (!parent) return;

        const width = parent.clientWidth;
        const height = Math.max(parent.clientHeight, 360);
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      resize();
      window.addEventListener('resize', resize);

      let isVisible = true;
      let targetX = 0;
      let targetY = 0;

      onMove = (event: MouseEvent) => {
        const rect = wrapper?.getBoundingClientRect();
        if (!rect) {
          return;
        }

        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        targetX = px * 0.45;
        targetY = py * 0.22;
      };

      wrapper?.addEventListener('mousemove', onMove);

      const animate = () => {
        if (!isActive || !isVisible) return;

        bars.forEach((bar, index) => {
          bar.position.y += (barHeights[index] / 2 + Math.sin(Date.now() * 0.001 + index * 0.5) * 0.02 - bar.position.y) * 0.08;
        });

        group.rotation.y += (targetX - group.rotation.y) * 0.04;
        group.rotation.x += (-targetY - group.rotation.x) * 0.04;
        baseRing.rotation.z += 0.004;
        coin.rotation.z += 0.005;
        coinRing.rotation.z -= 0.006;
        particles.rotation.y += 0.0008;
        renderer.render(scene, camera);
        rafId = requestAnimationFrame(animate);
      };

      visibility = () => {
        isVisible = !document.hidden;
        if (isVisible) {
          rafId = requestAnimationFrame(animate);
        } else {
          cancelAnimationFrame(rafId);
        }
      };

      document.addEventListener('visibilitychange', visibility);
      rafId = requestAnimationFrame(animate);

      destroyScene = () => {
        base.geometry.dispose();
        (base.material as { dispose: () => void }).dispose();
        baseRing.geometry.dispose();
        (baseRing.material as { dispose: () => void }).dispose();
        bars.forEach((bar) => {
          bar.geometry.dispose();
          (bar.material as { dispose: () => void }).dispose();
        });
        line.geometry.dispose();
        (line.material as { dispose: () => void }).dispose();
        arrow.geometry.dispose();
        (arrow.material as { dispose: () => void }).dispose();
        coin.geometry.dispose();
        (coin.material as { dispose: () => void }).dispose();
        coinRing.geometry.dispose();
        (coinRing.material as { dispose: () => void }).dispose();
        particlesGeometry.dispose();
        (particles.material as { dispose: () => void }).dispose();
        renderer.dispose();
      };
    })();

    return () => {
      isActive = false;
      cancelAnimationFrame(rafId);
      if (visibility) {
        document.removeEventListener('visibilitychange', visibility);
      }
      if (resize) {
        window.removeEventListener('resize', resize);
      }
      if (onMove) {
        wrapper?.removeEventListener('mousemove', onMove);
      }
      destroyScene?.();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative h-[360px] w-full md:h-[520px]">
      <canvas ref={canvasRef} className="h-full w-full drop-shadow-[0_0_60px_rgba(47,155,255,0.16)]" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-blue-100/70 via-white/10 to-transparent" />
    </div>
  );
}
