import { WallpaperEffect } from 'styles/styled';
import * as THREE from 'three';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
import colorCycle from './colorCycle';

export type VantaCloudsSettings = {
  speed: number;
  skyColor: number;
  cloudColor: number;
  cloudShadowColor: number;
  sunColor: number;
  sunGlareColor: number;
  sunlightColor: number;
};

const disableControls = {
  mouseControls: true,
  touchControls: false,
  gyroControls: false
};

const isWebGL = typeof WebGLRenderingContext !== 'undefined';

const vantaClouds =
  (settings: VantaCloudsSettings): WallpaperEffect =>
  (element) => {
    const vantaEffect =
      element && isWebGL
        ? CLOUDS({
            el: element,
            THREE,
            ...disableControls,
            ...settings
          })
        : undefined;
    if (vantaEffect) {
      const { stop: stopColorCycle } = colorCycle(settings.skyColor, (color) =>
        vantaEffect.setOptions({ color })
      );

      vantaEffect.onDestroy = stopColorCycle;
    }

    return () => vantaEffect?.destroy?.();
  };

export default vantaClouds;

