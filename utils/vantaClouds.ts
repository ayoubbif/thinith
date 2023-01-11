import React from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import {
  VantaCloudsSettings,
  wallpaperEffect,
} from "../types/styles/wallpaper";

const disableControls = {
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
};

const vantaClouds =
  (settings: VantaCloudsSettings): wallpaperEffect =>
  (desktopRef: React.RefObject<HTMLElement>) => {
    const vantaEffect = CLOUDS({
      el: desktopRef.current,
      THREE,
      ...disableControls,
      ...settings,
    });

    return () => {
      vantaEffect.destroy();
    };
  };
export default vantaClouds;