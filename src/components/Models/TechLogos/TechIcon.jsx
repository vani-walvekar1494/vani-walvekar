import React, { useEffect, Suspense } from 'react';
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return <div style={{ color: 'red' }}>Failed to load 3D model.</div>;
        }
        return this.props.children;
    }
}

const TechIconContent = ({ model }) => {
    const scene = useGLTF(model.modelPath);

    useEffect(() => {
        if (model.name === 'Interactive Developer') {
            scene.scene.traverse((child) => {
                if (child.isMesh && child.name === 'object_5') {
                    child.material = new THREE.MeshStandardMaterial({ color: 'white' });
                }
            });
        }
    }, [scene, model.name]);

    return (
        <Canvas
            gl={{ preserveDrawingBuffer: true }}
            onCreated={({ gl }) => {
                gl.setClearColor(new THREE.Color(0, 0, 0), 0); // Transparent background
            }}
        >
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Environment preset="city" />
            <OrbitControls enableZoom={false} />
            <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
                <group scale={model.scale} rotation={model.rotation}>
                    <primitive object={scene.scene} />
                </group>
            </Float>
        </Canvas>
    );
};

const TechIcon = (props) => {
    return (
        <ErrorBoundary>
            <Suspense fallback={<div>Loading 3D model...</div>}>
                <TechIconContent {...props} />
            </Suspense>
        </ErrorBoundary>
    );
};

export default TechIcon;
