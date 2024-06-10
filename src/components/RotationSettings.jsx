import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

function RotationSetting(ref, isRotating, setIsRotating, viewport) {
    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = useRef(0.95);

    const handlePointerDown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        lastX.current = clientX;
    };

    const handlePointerUp = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);
    };

    const handlePointerMove = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (isRotating) {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const delta = (clientX - lastX.current) / viewport.width;
            ref.current.rotation.y += delta * 0.01 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
            setIsRotating(true);
            ref.current.rotation.y -= 0.01 * Math.PI;
        } else if (e.key === 'ArrowRight') {
            setIsRotating(true);
            ref.current.rotation.y += 0.01 * Math.PI;
        }
    };

    const handleKeyUp = (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            setIsRotating(false);
        }
    };

    useEffect(() => {
        if (ref.current) {
            const currentRef = ref.current;

            currentRef.addEventListener('pointerdown', handlePointerDown);
            currentRef.addEventListener('pointerup', handlePointerUp);
            currentRef.addEventListener('pointermove', handlePointerMove);
            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('keyup', handleKeyUp);

            return () => {
                currentRef.removeEventListener('pointerdown', handlePointerDown);
                currentRef.removeEventListener('pointerup', handlePointerUp);
                currentRef.removeEventListener('pointermove', handlePointerMove);
                window.removeEventListener('keydown', handleKeyDown);
                window.removeEventListener('keyup', handleKeyUp);
            };
        }
    }, [isRotating]);

    useFrame(() => {
        if (ref.current) {
            if (!isRotating) {
                rotationSpeed.current *= dampingFactor.current;
                if (Math.abs(rotationSpeed.current) < 0.001) {
                    rotationSpeed.current = 0;
                } else {
                    ref.current.rotation.y += rotationSpeed.current;
                }
            }
        }
    });
}

export default RotationSetting;