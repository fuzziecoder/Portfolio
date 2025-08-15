'use client';
import { useEffect, useRef } from 'react';

interface Pointer {
  id: number;
  texcoordX: number;
  texcoordY: number;
  prevTexcoordX: number;
  prevTexcoordY: number;
  deltaX: number;
  deltaY: number;
  down: boolean;
  moved: boolean;
  color: number[];
}

interface Config {
  SIM_RESOLUTION: number;
  DYE_RESOLUTION: number;
  CAPTURE_RESOLUTION: number;
  DENSITY_DISSIPATION: number;
  VELOCITY_DISSIPATION: number;
  PRESSURE: number;
  PRESSURE_ITERATIONS: number;
  CURL: number;
  SPLAT_RADIUS: number;
  SPLAT_FORCE: number;
  SHADING: boolean;
  COLOR_UPDATE_SPEED: number;
  PAUSED: boolean;
  BACK_COLOR: { r: number; g: number; b: number };
  TRANSPARENT: boolean;
}

interface WebGLExtensions {
  formatRGBA: { internalFormat: number; format: number } | null;
  formatRG: { internalFormat: number; format: number } | null;
  formatR: { internalFormat: number; format: number } | null;
  halfFloatTexType: number;
  supportLinearFiltering: boolean;
}

interface WebGLContext {
  gl: WebGLRenderingContext | WebGL2RenderingContext;
  ext: WebGLExtensions;
}

function isWebGL2Context(gl: WebGLRenderingContext | WebGL2RenderingContext): gl is WebGL2RenderingContext {
  return 'beginQuery' in gl;
}

function SplashCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize pointer
    const pointer: Pointer = {
      id: -1,
      texcoordX: 0,
      texcoordY: 0,
      prevTexcoordX: 0,
      prevTexcoordY: 0,
      deltaX: 0,
      deltaY: 0,
      down: false,
      moved: false,
      color: [0, 0, 0],
    };

    // Event handlers
    const handlePointerDown = (e: PointerEvent) => {
      pointer.id = e.pointerId;
      pointer.down = true;
      pointer.moved = false;
      pointer.texcoordX = e.clientX / window.innerWidth;
      pointer.texcoordY = 1.0 - e.clientY / window.innerHeight;
      pointer.prevTexcoordX = pointer.texcoordX;
      pointer.prevTexcoordY = pointer.texcoordY;
      pointer.deltaX = 0;
      pointer.deltaY = 0;
      pointer.color = [Math.random(), Math.random(), Math.random()];
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!pointer.down) return;

      pointer.prevTexcoordX = pointer.texcoordX;
      pointer.prevTexcoordY = pointer.texcoordY;
      pointer.texcoordX = e.clientX / window.innerWidth;
      pointer.texcoordY = 1.0 - e.clientY / window.innerHeight;
      pointer.deltaX = pointer.texcoordX - pointer.prevTexcoordX;
      pointer.deltaY = pointer.texcoordY - pointer.prevTexcoordY;
      pointer.moved = Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0;

      if (pointer.moved) {
        // Create splash effect
        const x = e.clientX;
        const y = e.clientY;
        const radius = 50;
        
        // Create gradient
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `rgba(${pointer.color[0] * 255}, ${pointer.color[1] * 255}, ${pointer.color[2] * 255}, 0.8)`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        // Draw circle
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();

        // Add fade effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (pointer.id === e.pointerId) {
        pointer.down = false;
      }
    };

    // Add event listeners
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerup', handlePointerUp);

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 50,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
      }}
    >
      <canvas
        ref={canvasRef}
        id="fluid"
        style={{
          width: '100vw',
          height: '100vh',
          display: 'block',
        }}
      />
    </div>
  );
}

export default SplashCursor; 