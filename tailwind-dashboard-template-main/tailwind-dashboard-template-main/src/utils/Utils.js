// export const formatValue = (value) => Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD',
//   maximumSignificantDigits: 3,
//   notation: 'compact',
// }).format(value);

// export const formatThousands = (value) => Intl.NumberFormat('en-US', {
//   maximumSignificantDigits: 3,
//   notation: 'compact',
// }).format(value);

// export const getCssVariable = (variable) => {
//   return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
// };

// const adjustHexOpacity = (hexColor, opacity) => {
//   // Remove the '#' if it exists
//   hexColor = hexColor.replace('#', '');

//   // Convert hex to RGB
//   const r = parseInt(hexColor.substring(0, 2), 16);
//   const g = parseInt(hexColor.substring(2, 4), 16);
//   const b = parseInt(hexColor.substring(4, 6), 16);

//   // Return RGBA string
//   return `rgba(${r}, ${g}, ${b}, ${opacity})`;
// };

// const adjustHSLOpacity = (hslColor, opacity) => {
//   // Convert HSL to HSLA
//   return hslColor.replace('hsl(', 'hsla(').replace(')', `, ${opacity})`);
// };

// const adjustOKLCHOpacity = (oklchColor, opacity) => {
//   // Add alpha value to OKLCH color
//   return oklchColor.replace(/oklch\((.*?)\)/, (match, p1) => `oklch(${p1} / ${opacity})`);
// };

// export const adjustColorOpacity = (color, opacity) => {
//   if (color.startsWith('#')) {
//     return adjustHexOpacity(color, opacity);
//   } else if (color.startsWith('hsl')) {
//     return adjustHSLOpacity(color, opacity);
//   } else if (color.startsWith('oklch')) {
//     return adjustOKLCHOpacity(color, opacity);
//   } else {
//     throw new Error('Unsupported color format');
//   }
// };

// export const oklchToRGBA = (oklchColor) => {
//   // Create a temporary div to use for color conversion
//   const tempDiv = document.createElement('div');
//   tempDiv.style.color = oklchColor;
//   document.body.appendChild(tempDiv);
  
//   // Get the computed style and convert to RGB
//   const computedColor = window.getComputedStyle(tempDiv).color;
//   document.body.removeChild(tempDiv);
  
//   return computedColor;
// };


// Format value as compact USD currency
export const formatValue = (value) =>
  Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 3,
    notation: 'compact',
  }).format(value);

// Format value as compact number (e.g., 1.2K, 3M)
export const formatThousands = (value) =>
  Intl.NumberFormat('en-US', {
    maximumSignificantDigits: 3,
    notation: 'compact',
  }).format(value);

// Get a CSS variable from root
export const getCssVariable = (variable) =>
  getComputedStyle(document.documentElement).getPropertyValue(variable).trim();

// Adjust opacity for hex colors
const adjustHexOpacity = (hexColor, opacity) => {
  hexColor = hexColor.replace('#', '');
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

// Adjust opacity for HSL colors
const adjustHSLOpacity = (hslColor, opacity) => {
  return hslColor.replace('hsl(', 'hsla(').replace(')', `, ${opacity})`);
};

// Adjust opacity for OKLCH colors
const adjustOKLCHOpacity = (oklchColor, opacity) => {
  return oklchColor.replace(/oklch\((.*?)\)/, (_, p1) => `oklch(${p1} / ${opacity})`);
};

// Convert OKLCH to RGBA via temporary DOM element
export const oklchToRGBA = (oklchColor) => {
  const tempDiv = document.createElement('div');
  tempDiv.style.color = oklchColor;
  document.body.appendChild(tempDiv);
  const computedColor = getComputedStyle(tempDiv).color;
  document.body.removeChild(tempDiv);
  return computedColor;
};

// Adjust color opacity for various formats with fallback
export const adjustColorOpacity = (color, opacity, fallbackColor = '#8b5cf6') => {
  const finalColor = color?.trim() || fallbackColor;

  try {
    if (finalColor.startsWith('#')) {
      return adjustHexOpacity(finalColor, opacity);
    } else if (finalColor.startsWith('hsl')) {
      return adjustHSLOpacity(finalColor, opacity);
    } else if (finalColor.startsWith('oklch')) {
      return adjustOKLCHOpacity(finalColor, opacity);
    } else {
      // Try resolving any named color or rgb() to rgba()
      const tempDiv = document.createElement('div');
      tempDiv.style.color = finalColor;
      document.body.appendChild(tempDiv);
      const computedColor = getComputedStyle(tempDiv).color;
      document.body.removeChild(tempDiv);

      if (!computedColor || computedColor === 'rgba(0, 0, 0, 0)') {
        // Fallback if invalid
        return adjustHexOpacity(fallbackColor, opacity);
      }

      // Convert to rgba(x, y, z, opacity)
      return computedColor.replace('rgb', 'rgba').replace(')', `, ${opacity})`);
    }
  } catch (error) {
    console.warn(`adjustColorOpacity error: ${error.message}`);
    return adjustHexOpacity(fallbackColor, opacity);
  }
};























// export const formatValue = (value) =>
//   Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//     maximumSignificantDigits: 3,
//     notation: 'compact',
//   }).format(value);

// export const formatThousands = (value) =>
//   Intl.NumberFormat('en-US', {
//     maximumSignificantDigits: 3,
//     notation: 'compact',
//   }).format(value);

// export const getCssVariable = (variable) => {
//   return getComputedStyle(document.documentElement)
//     .getPropertyValue(variable)
//     .trim();
// };

// const adjustHexOpacity = (hexColor, opacity) => {
//   hexColor = hexColor.replace('#', '');
//   const r = parseInt(hexColor.substring(0, 2), 16);
//   const g = parseInt(hexColor.substring(2, 4), 16);
//   const b = parseInt(hexColor.substring(4, 6), 16);
//   return `rgba(${r}, ${g}, ${b}, ${opacity})`;
// };

// const adjustHSLOpacity = (hslColor, opacity) => {
//   return hslColor.replace('hsl(', 'hsla(').replace(')', `, ${opacity})`);
// };

// const adjustOKLCHOpacity = (oklchColor, opacity) => {
//   return oklchColor.replace(
//     /oklch\((.*?)\)/,
//     (match, p1) => `oklch(${p1} / ${opacity})`
//   );
// };

// export const adjustColorOpacity = (color, opacity) => {
//   if (!color) throw new Error('Color is undefined');

//   if (color.startsWith('#')) {
//     return adjustHexOpacity(color, opacity);
//   } else if (color.startsWith('hsl')) {
//     return adjustHSLOpacity(color, opacity);
//   } else if (color.startsWith('oklch')) {
//     return adjustOKLCHOpacity(color, opacity);
//   } else {
//     // Fallback: handle any CSS color (name, rgb, etc.)
//     const tempDiv = document.createElement('div');
//     tempDiv.style.color = color;
//     document.body.appendChild(tempDiv);
//     const computedColor = window.getComputedStyle(tempDiv).color;
//     document.body.removeChild(tempDiv);

//     if (!computedColor || computedColor === 'rgba(0, 0, 0, 0)') {
//       throw new Error(`Unsupported color format: ${color}`);
//     }

//     // Convert rgb(x, y, z) to rgba(x, y, z, opacity)
//     const rgba = computedColor.replace('rgb', 'rgba').replace(')', `, ${opacity})`);
//     return rgba;
//   }
// };

// export const oklchToRGBA = (oklchColor) => {
//   const tempDiv = document.createElement('div');
//   tempDiv.style.color = oklchColor;
//   document.body.appendChild(tempDiv);
//   const computedColor = window.getComputedStyle(tempDiv).color;
//   document.body.removeChild(tempDiv);
//   return computedColor;
// };


















// export const formatValue = (value) =>
//   Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//     maximumSignificantDigits: 3,
//     notation: 'compact',
//   }).format(value);

// export const formatThousands = (value) =>
//   Intl.NumberFormat('en-US', {
//     maximumSignificantDigits: 3,
//     notation: 'compact',
//   }).format(value);

// export const getCssVariable = (variable) => {
//   return getComputedStyle(document.documentElement)
//     .getPropertyValue(variable)
//     .trim();
// };

// const adjustHexOpacity = (hexColor, opacity) => {
//   hexColor = hexColor.replace('#', '');
//   const r = parseInt(hexColor.substring(0, 2), 16);
//   const g = parseInt(hexColor.substring(2, 4), 16);
//   const b = parseInt(hexColor.substring(4, 6), 16);
//   return `rgba(${r}, ${g}, ${b}, ${opacity})`;
// };

// const adjustHSLOpacity = (hslColor, opacity) => {
//   return hslColor.replace('hsl(', 'hsla(').replace(')', `, ${opacity})`);
// };

// const adjustOKLCHOpacity = (oklchColor, opacity) => {
//   return oklchColor.replace(
//     /oklch\((.*?)\)/,
//     (match, p1) => `oklch(${p1} / ${opacity})`
//   );
// };

// export const adjustColorOpacity = (color, opacity, fallbackColor = '#8b5cf6') => {
//   // Use fallback if color is undefined or null
//   const finalColor = color || fallbackColor;

//   if (finalColor.startsWith('#')) {
//     return adjustHexOpacity(finalColor, opacity);
//   } else if (finalColor.startsWith('hsl')) {
//     return adjustHSLOpacity(finalColor, opacity);
//   } else if (finalColor.startsWith('oklch')) {
//     return adjustOKLCHOpacity(finalColor, opacity);
//   } else {
//     // Fallback: handle any CSS color (name, rgb, etc.)
//     const tempDiv = document.createElement('div');
//     tempDiv.style.color = finalColor;
//     document.body.appendChild(tempDiv);
//     const computedColor = window.getComputedStyle(tempDiv).color;
//     document.body.removeChild(tempDiv);

//     if (!computedColor || computedColor === 'rgba(0, 0, 0, 0)') {
//       // If still invalid, use fallback
//       return adjustHexOpacity(fallbackColor, opacity);
//     }

//     // Convert rgb(x, y, z) to rgba(x, y, z, opacity)
//     const rgba = computedColor.replace('rgb', 'rgba').replace(')', `, ${opacity})`);
//     return rgba;
//   }
// };

// export const oklchToRGBA = (oklchColor) => {
//   const tempDiv = document.createElement('div');
//   tempDiv.style.color = oklchColor;
//   document.body.appendChild(tempDiv);
//   const computedColor = window.getComputedStyle(tempDiv).color;
//   document.body.removeChild(tempDiv);
//   return computedColor;
// };
