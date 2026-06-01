/** Public Lottie JSON assets (served from `/lottie/...`). */
export const LOTTIE = {
  robot: "/lottie/robot.json",
  robot3: "/lottie/robot3.json",
  aiText: "/lottie/ai-text%20animation.json",
  aiSphere: "/lottie/ai-spehere-animation.json",
  worldMap: "/lottie/world%20map.json",
  wave: "/lottie/wave-aniamtion.json",
} as const;

/** Native comp size (w/h) for layout aspect-ratio boxes. */
export const LOTTIE_ASPECT = {
  robot: "500/394",
  robot3: "952/784",
  aiText: "1/1",
  aiSphere: "316.81/319.05",
  worldMap: "1/1",
  wave: "1/1",
} as const;

/** Hero coach animation — swap asset here without touching layout CSS. */
export const HERO_LOTTIE_SRC = LOTTIE.robot3;
export const HERO_LOTTIE_ASPECT = LOTTIE_ASPECT.robot3;
