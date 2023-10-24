import { breakpoints } from "./screens";

export const layout = {
  containerMaxWidht: breakpoints.desktop + "px",
  gutter: "1.5rem",
} as const;

export const spacing = {
  components: {
    smaller: ".3rem",
    small: ".5rem",
    medium: "1rem",
    large: "1.25rem",
    larger: "1.5rem",
    xlarger: "2rem",
    xxlarger: "2.5rem",
  },
  sections: {
    smaller: "1.5rem",
    small: "2rem",
    medium: "3rem",
    large: "4rem",
    larger: "5rem",
  },
} as const;

export const font = {
  sizes: {
    smaller: ".75rem",
    small: ".875rem",
    average: ".925rem",
    default: "1rem",
    large: "1.25rem",
    larger: "1.5rem",
    xlarger: "2rem",
    xxlarger: "2.5rem",
  },
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

export const borderRadius = {
  smaller: ".25rem",
  small: ".5rem",
  medium: ".75rem",
  large: "1rem",
  larger: "1.25rem",
  xlarger: "1.5rem",
  pill: "9999px",
  circle: "100%",
} as const;

export const buttonSizes = {
  smaller: "2rem",
  small: "2.25rem",
  default: "3rem",
};

export const fieldSizes = {
  small: "2.375rem",
  medium: "3rem",
  large: "3.375rem",
} as const;

export const zIndex = {
  navbar: 100,
  sidebar: 105,
  menuMobile: 110,
  modals: 115,
} as const;

export const transition = {
  fast: ".15s",
  default: ".2s",
  slow: ".3s",
} as const;
