import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 30;

        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);

        // Gold wireframe material
        const material = new THREE.MeshBasicMaterial({
            color: 0xD4AF37,
            wireframe: true,
            transparent: true,
            opacity: 0.15,
        });

        // Create floating geometry meshes
        const meshes = [];
        const geometries = [
            new THREE.IcosahedronGeometry(1.2, 0),
            new THREE.OctahedronGeometry(1.0, 0),
            new THREE.TetrahedronGeometry(1.1, 0),
            new THREE.IcosahedronGeometry(0.8, 1),
        ];

        for (let i = 0; i < 60; i++) {
            const geo = geometries[Math.floor(Math.random() * geometries.length)];
            const mesh = new THREE.Mesh(geo, material.clone());

            mesh.position.x = (Math.random() - 0.5) * 80;
            mesh.position.y = (Math.random() - 0.5) * 50;
            mesh.position.z = (Math.random() - 0.5) * 40 - 10;

            mesh.rotation.x = Math.random() * Math.PI;
            mesh.rotation.y = Math.random() * Math.PI;

            mesh.userData = {
                rotationSpeedX: (Math.random() - 0.5) * 0.005,
                rotationSpeedY: (Math.random() - 0.5) * 0.005,
                floatSpeed: Math.random() * 0.001 + 0.0005,
                floatOffset: Math.random() * Math.PI * 2,
                originalY: mesh.position.y,
            };

            scene.add(mesh);
            meshes.push(mesh);
        }

        // Mouse parallax
        const mouse = { x: 0, y: 0 };
        const handleMouseMove = (e) => {
            mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
            mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Resize handler
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Animation loop
        const clock = new THREE.Clock();
        let animId;
        const animate = () => {
            animId = requestAnimationFrame(animate);
            const elapsed = clock.getElapsedTime();

            // Parallax camera
            camera.position.x += (mouse.x * 3 - camera.position.x) * 0.05;
            camera.position.y += (-mouse.y * 2 - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            // Rotate and float each mesh
            meshes.forEach((mesh) => {
                mesh.rotation.x += mesh.userData.rotationSpeedX;
                mesh.rotation.y += mesh.userData.rotationSpeedY;
                mesh.position.y =
                    mesh.userData.originalY +
                    Math.sin(elapsed * mesh.userData.floatSpeed * 60 + mesh.userData.floatOffset) * 2;
            });

            renderer.render(scene, camera);
        };
        animate();

        // Cleanup
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
            geometries.forEach(g => g.dispose());
            material.dispose();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
        />
    );
};

export default ThreeBackground;
