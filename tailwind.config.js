/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "error-container": "#ffdad6",
                      "on-background": "#191c1b",
                      "on-surface": "#191c1b",
                      "surface-container-low": "#f3f4f1",
                      "on-primary-fixed": "#002114",
                      "on-secondary-container": "#5a6560",
                      "background": "#f9faf7",
                      "surface": "#f9faf7",
                      "primary": "#005f41",
                      "on-secondary-fixed-variant": "#3f4944",
                      "surface-container-highest": "#e2e3e0",
                      "surface-dim": "#d9dad8",
                      "on-tertiary-container": "#ffeacb",
                      "secondary-fixed-dim": "#bec9c3",
                      "on-error-container": "#93000a",
                      "inverse-on-surface": "#f0f1ee",
                      "surface-variant": "#e2e3e0",
                      "secondary": "#56615c",
                      "tertiary-container": "#8c6400",
                      "on-tertiary-fixed-variant": "#5e4200",
                      "inverse-primary": "#7bd9ad",
                      "primary-fixed-dim": "#7bd9ad",
                      "surface-container": "#edeeeb",
                      "on-surface-variant": "#3e4943",
                      "surface-bright": "#f9faf7",
                      "outline-variant": "#bdc9c1",
                      "outline": "#6e7a72",
                      "surface-container-lowest": "#ffffff",
                      "tertiary-fixed-dim": "#f8bd45",
                      "on-tertiary-fixed": "#271900",
                      "on-tertiary": "#ffffff",
                      "on-primary": "#ffffff",
                      "on-secondary-fixed": "#141e1a",
                      "inverse-surface": "#2e312f",
                      "surface-tint": "#006c4a",
                      "on-primary-fixed-variant": "#005137",
                      "primary-container": "#087a55",
                      "secondary-fixed": "#dae5de",
                      "tertiary": "#6d4d00",
                      "on-secondary": "#ffffff",
                      "tertiary-fixed": "#ffdea7",
                      "error": "#ba1a1a",
                      "surface-container-high": "#e7e8e6",
                      "on-error": "#ffffff",
                      "primary-fixed": "#97f5c8",
                      "on-primary-container": "#a5ffd3",
                      "secondary-container": "#d7e2dc"
              },
              "borderRadius": {
                      "DEFAULT": "0.125rem",
                      "lg": "0.25rem",
                      "xl": "0.5rem",
                      "full": "0.75rem"
              },
              "spacing": {
                      "stack-lg": "48px",
                      "stack-sm": "12px",
                      "container-max": "1280px",
                      "stack-md": "24px",
                      "gutter": "24px",
                      "margin-mobile": "16px",
                      "base": "8px",
                      "margin-desktop": "48px"
              },
              "fontFamily": {
                      "headline-md": ["Public Sans"],
                      "body-lg": ["Public Sans"],
                      "display-lg-mobile": ["Public Sans"],
                      "display-lg": ["Public Sans"],
                      "body-md": ["Public Sans"],
                      "headline-sm": ["Public Sans"],
                      "label-caps": ["Public Sans"]
              },
              "fontSize": {
                      "headline-md": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                      "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                      "display-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "700"}],
                      "display-lg": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                      "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                      "headline-sm": ["24px", {"lineHeight": "1.4", "fontWeight": "600"}],
                      "label-caps": ["12px", {"lineHeight": "1.0", "letterSpacing": "0.05em", "fontWeight": "700"}]
              }
            }
          }
        ,
  plugins: [require("@tailwindcss/forms")]
};
