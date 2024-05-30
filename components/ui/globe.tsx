'use client';

import { cn } from '@/lib/utils';
import createGlobe, { COBEOptions } from 'cobe';
import { useCallback, useEffect, useRef } from 'react';
import { useSpring } from 'react-spring';

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [52.4037, 8.9196], size: 0.1 },
    { location: [52.3759, 9.732], size: 0.1 },
    { location: [48.1351, 11.582], size: 0.09 },
    { location: [52.3676, 4.9041], size: 0.09 },
    { location: [24.4539, 54.3773], size: 0.09 },
    { location: [40.7128, -74.006], size: 0.09 },
    { location: [29.7604, -95.3698], size: 0.1 },
    { location: [30.2672, -97.7431], size: 0.09 },
    { location: [32.7767, -96.797], size: 0.09 },
    { location: [47.6062, -122.3321], size: 0.09 },
    { location: [34.0522, -118.2437], size: 0.1 },
    { location: [37.7749, -122.4194], size: 0.09 },
    { location: [39.7392, -104.9903], size: 0.09 },
    { location: [34.6937, 135.5023], size: 0.09 },
    { location: [43.0618, 141.3545], size: 0.09 },
    { location: [1.3521, 103.8198], size: 0.09 },
    { location: [14.9942, 103.1029], size: 0.09 },
    { location: [14.881, 103.4933], size: 0.09 },
    { location: [18.7883, 98.9853], size: 0.1 },
    { location: [9.512, 100.0139], size: 0.09 },
    { location: [48.2082, 16.3738], size: 0.09 },
    { location: [49.8175, 15.473], size: 0.09 },
    { location: [45.4642, 9.19], size: 0.09 },
    { location: [47.3769, 8.5417], size: 0.09 },
    { location: [43.222, 76.8512], size: 0.09 },
    { location: [55.7558, 37.6173], size: 0.09 },
    { location: [59.9311, 30.3609], size: 0.09 },
    { location: [41.8781, -87.6298], size: 0.09 },
    { location: [11.9404, 108.4583], size: 0.09 },
    { location: [37.4563, 126.7052], size: 0.09 },
  ],
};

export default function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  const updatePointerInteraction = (value: any) => {
    pointerInteracting.current = value;
    canvasRef.current!.style.cursor = value ? 'grabbing' : 'grab';
  };

  const updateMovement = (clientX: any) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      api.start({ r: delta / 200 });
    }
  };

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005;
      state.phi = phi + r.get();
      state.width = width * 2;
      state.height = width * 2;
    },
    [pointerInteracting, phi, r],
  );

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    });

    setTimeout(() => (canvasRef.current!.style.opacity = '1'));
    return () => globe.destroy();
  }, []);

  return (
    <div
      className={cn(
        'absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]',
        className,
      )}
    >
      <canvas
        className={cn(
          'h-full w-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]',
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current,
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
