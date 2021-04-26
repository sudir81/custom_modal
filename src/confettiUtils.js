const identity = x => x;
const stripPixels = x => parseInt(x.replace("px", ""), 10);
export const SETTINGS = [
  ["angle", 90, 0, 360, 1, identity, identity],
  ["spread", 360, 0, 360, 1, identity, identity],
  ["startVelocity", 40, 1, 100, 1, identity, identity],
  ["elementCount", 1500, 5, 200, 1, identity, identity],
  ["dragFriction", 0.12, 0.01, 1, 0.02, identity, identity],
  ["duration", 2000, 100, 10000, 10, identity, identity],
  ["stagger", 3, 0, 50, 1, identity, identity],
  ["width", "10px", 1, 100, 1, value => `${value}px`, stripPixels],
  ["height", "10px", 1, 100, 1, value => `${value}px`, stripPixels],
  ["perspective", "2000px", 0, 1000, 1, value => `${value}px`, stripPixels]
];

export const colorPresets = [
  ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  ["#000", "#333", "#666"],
  ["#000", "#f00"],
  ["#f00", "#0f0", "#00f"]
];