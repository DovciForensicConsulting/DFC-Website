import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  // -----------------------------------------------------------------
  // 1. Global system settings
  // -----------------------------------------------------------------
  cssVarsRoot: ":where(:root, :host)",
  cssVarsPrefix: "bold",               // → var(--bold-colors-primary)
  preflight: true,                     // keep Chakra’s reset
  strictTokens: true,                  // forces you to use tokens only

  // -----------------------------------------------------------------
  // 2. Global styles (reset + base)
  // -----------------------------------------------------------------
globalCss: {
  "html, body": {
    margin: 0,
    padding: 0,
    fontFeatureSettings: "'liga' 1, 'kern' 1",
  },
  body: {
    bg: "background",
    color: "text",
    lineHeight: "base",
    fontFamily: "body",
  },
  "*::selection": {
    bg: "primary.500",
    color: "white",
  },

  // REMOVES ALL OUTLINES ON CLICK
  "*, *::before, *::after": {
    outline: "none !important",
    boxShadow: "none !important",
  },

  // OPTIONAL: BETTER KEYBOARD ACCESSIBILITY
  "*:focus-visible": {
    outline: "2px solid",
    outlineColor: "primary",
    outlineOffset: "2px",
    borderRadius: "sm",
  },
},

  // -----------------------------------------------------------------
  // 3. Breakpoints (mobile-first)
  // -----------------------------------------------------------------
  theme: {
    breakpoints: {
      sm: "40em",   // 640px
      md: "48em",   // 768px
      lg: "64em",   // 1024px
      xl: "80em",   // 1280px
      "2xl": "96em", // 1536px
    },

    // -----------------------------------------------------------------
    // 4. Tokens – colors, spacing, radii, shadows, fonts
    // -----------------------------------------------------------------
    tokens: {
      colors: {
        // Brand
        deep_gray: { value: "#252523" },
        golden_wheat: { value: "#A39274" },
        soft_wheat: { value: "#DFD8C8" },
        light_white: { value: "#FFFFFF" },
        


        // HIGH-CONTRAST GRAY SCALE
        gray: {
            50:  { value: "#FAFAFA" }, // Very light (background)
            100: { value: "#F5F5F5" },
            200: { value: "#E5E5E5" },
            300: { value: "#D4D4D4" },
            400: { value: "#A3A3A3" },
            500: { value: "#737373" },
            600: { value: "#525252" },
            700: { value: "#404040" },
            800: { value: "#262626" },
            900: { value: "#171717" }, // Near black
        },

        // Color Scheme //
        pub_layout_bg: { value: "colors.golden_wheat" },
        pub_layout_title_text: { value: "colors.soft_wheat" },
        pub_layout_body_text: { value: "colors.deep_gray" },
        pub_layout_body_text_light: { value: "colors.soft_wheat" },

        // Navbar
        navbar_bg: { value: "{colors.deep_gray}" },
        navbar_icon: {value: "{colors.golden_wheat}"},
        navbar_title: {value: "{colors.golden_wheat}"},
        navbar_navlink: {value: "{colors.soft_wheat}"},
        navbar_navlink_active: {value: "{colors.golden_wheat}"},

        // Hero Banner
        hero_title: {value: "{colors.soft_wheat}"},

        // CTA Button
        cta_button_color: { value: "{colors.deep_gray}" },
        cta_button_color_active: { value: "{colors.golden_wheat}"},
        cta_button_title: { value: "{colors.soft_wheat}" },

        // Cards
        card1_bg: {value: "{colors.deep_gray}"},
        card1_title: {value: "{colors.soft_wheat}"},


        // SEMANTIC – HIGH CONTRAST
        background: { value: "{colors.gray.50}" },
        surface:    { value: "{colors.white}" },
        surfaceAlt: { value: "{colors.gray.100}" },
        text:       { value: "{colors.gray.900}" },     // Dark text
        textLight:  { value: "{colors.gray.700}" },
        muted:      { value: "{colors.gray.600}" },
        border:     { value: "{colors.gray.300}" },
        },

      fonts: {
        heading: { value: "'Bebas Neue', sans-serif" },
        body: { value: "'Merriweather', serif" },
        mono: { value: "Lato, Monaco, sans-serif" },
      },

      fontSizes: {
        xs: { value: "0.75rem" },
        sm: { value: "0.875rem" },
        md: { value: "1rem" },
        lg: { value: "1.125rem" },
        xl: { value: "1.25rem" },
        "2xl": { value: "1.5rem" },
        "3xl": { value: "1.875rem" },
        "4xl": { value: "2.25rem" },
        "5xl": { value: "3rem" },
        "6xl": { value: "3.75rem" },
      },

      fontWeights: {
        normal: { value: 400 },
        medium: { value: 500 },
        semibold: { value: 600 },
        bold: { value: 700 },
        extrabold: { value: 800 },
      },

      lineHeights: {
        normal: { value: "1.5" },
        base: { value: "1.6" },
        tall: { value: "1.8" },
      },

      radii: {
        none: { value: "0" },
        sm: { value: "0.125rem" },
        md: { value: "0.375rem" },
        lg: { value: "0.5rem" },
        xl: { value: "0.75rem" },
        full: { value: "9999px" },
      },

      shadows: {
        sm: { value: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)" },
        md: { value: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)" },
        lg: { value: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)" },
        xl: { value: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" },
        inner: { value: "inset 0 2px 4px 0 rgba(0,0,0,0.06)" },
      },

      spacing: {
        0: { value: "0rem" },
        1: { value: "0.25rem" },
        2: { value: "0.5rem" },
        3: { value: "0.75rem" },
        4: { value: "1rem" },
        5: { value: "1.25rem" },
        6: { value: "1.5rem" },
        8: { value: "2rem" },
        10: { value: "2.5rem" },
        12: { value: "3rem" },
        16: { value: "4rem" },
        20: { value: "5rem" },
        24: { value: "6rem" },
        32: { value: "8rem" },
      },
    },

    // -----------------------------------------------------------------
    // 5. Semantic tokens (theme-aware)
    // -----------------------------------------------------------------
    semanticTokens: {
      colors: {
        primary: { value: "{colors.primary}" },
        secondary: { value: "{colors.secondary}" },
        danger: { value: "#E53E3E" },
        success: { value: "#38A169" },
        warning: { value: "#D69E2E" },
      },
    },

    // -----------------------------------------------------------------
    // 6. Text & Layer styles (typography shortcuts)
    // -----------------------------------------------------------------
    textStyles: {
      h1: {
        fontSize: { base: "4xl", md: "5xl" },
        fontWeight: "normal",
        color: "{colors.soft_wheat}",
        lineHeight: "tall",
        letterSpacing: "-0.02em",
      },
      h2: {
        fontSize: { base: "3xl", md: "4xl" },
        fontWeight: "bold",
        lineHeight: "tall",
      },
      caption: {
        fontSize: "xs",
        fontWeight: "medium",
        color: "muted",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
      },
    },

    // -----------------------------------------------------------------
    // 7. Recipes – reusable component patterns
    // -----------------------------------------------------------------
    recipes: {
      button: {
        base: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "semibold",
          borderRadius: "md",
          transition: "all 0.2s ease",
          _disabled: { opacity: 0.6, cursor: "not-allowed" },
        },
        variants: {
          solid: {
            primary: {
              bg: "primary",
              color: "white",
              _hover: { bg: "primary/90" },
              _active: { bg: "primary/80" },
            },
            secondary: {
              bg: "secondary",
              color: "white",
              _hover: { bg: "secondary/90" },
            },
          },
          outline: {
            primary: {
              border: "2px solid",
              borderColor: "primary",
              color: "primary",
              bg: "transparent",
              _hover: { bg: "primary/5" },
            },
          },
          ghost: {
            primary: {
              color: "primary",
              bg: "transparent",
              _hover: { bg: "primary/10" },
            },
          },
        },
        sizes: {
          sm: { px: 3, h: 8, fontSize: "sm" },
          md: { px: 4, h: 10, fontSize: "md" },
          lg: { px: 6, h: 12, fontSize: "lg" },
        },
        defaultVariants: { variant: "solid", color: "primary", size: "md" },
      },

      card: {
        base: {
          bg: "surface",
          borderRadius: "lg",
          boxShadow: "md",
          overflow: "hidden",
          transition: "transform 0.2s, box-shadow 0.2s",
          _hover: { transform: "translateY(-4px)", boxShadow: "lg" },
        },
      },

      container: {
        base: {
          width: "100%",
          mx: "auto",
          px: { base: 4, md: 6, lg: 8 },
          maxW: "container.xl",
        },
      },
    },
  },
});

// -----------------------------------------------------------------
// 8. Create the system
// -----------------------------------------------------------------
export const system = createSystem(defaultConfig, config);