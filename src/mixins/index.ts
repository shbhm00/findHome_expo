import { Dimensions, PixelRatio } from 'react-native';

// Get the device screen dimensions
let WINDOW_WIDTH: number = Dimensions.get('screen').width;
let WINDOW_HEIGHT: number = Dimensions.get('screen').height;

// Base guideline dimensions for mobile devices
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

// Handle landscape mode
if (WINDOW_HEIGHT < WINDOW_WIDTH) {
  WINDOW_WIDTH = Dimensions.get('screen').height;
  WINDOW_HEIGHT = Dimensions.get('screen').width;
}

// Calculate scale for width
const scale: number = WINDOW_WIDTH / guidelineBaseWidth;

// Memoization function with generic types
const memoize = <T extends (...args: any[]) => any>(fn: T): T => {
  const cache: Record<string, ReturnType<T>> = {};
  return ((...args: Parameters<T>) => {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  }) as T;
};

// Normalize width based on screen size
const normalize = memoize((size: number): number => {
  const scaledWidth = Math.floor((WINDOW_WIDTH / guidelineBaseWidth) * size);
  return scaledWidth < 1 ? 1 : scaledWidth;
});

// Normalize height based on screen size
const normalizeHeight = memoize((size: number): number => {
  const scaledHeight = Math.floor((WINDOW_HEIGHT / guidelineBaseHeight) * size);
  return scaledHeight < 1 ? 1 : scaledHeight;
});

// Normalize font size based on screen size and pixel ratio
const normalizeFont = memoize((size: number): number => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize) - 2);
});

// Normalize width specifically for width dimensions
const normalizeWidth = memoize((size: number): number => {
  const scaledWidth = Math.floor((WINDOW_WIDTH / guidelineBaseWidth) * size);
  return scaledWidth < 1 ? 1 : scaledWidth;
});

// Export dimensions and normalization functions
export {
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
  normalize,
  normalizeHeight,
  normalizeFont,
  normalizeWidth,
};
