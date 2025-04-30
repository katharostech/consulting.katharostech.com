/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@modyfi/vite-plugin-yaml/modules" />

import type { string } from "astro:schema";
import type { CompatibilityItem } from "./types";

declare global {
  interface Window {
    /** Incomplete types from: https://github.com/apvarun/toastify-js/tree/master?tab=readme-ov-file#api */
    Toastify(options: {
      text: string;
      className?: string;
      style?: {
        background?: string;
      };
      offset?: {
        x?: number;
        y?: number;
      };
      gravity?: "top" | "bottom";
      position?: "left" | "right";
    }): { showToast(): void };
  }
}

declare module "~/config.yaml" {
  import type { FeatureItem } from "./types";
  type Section = { id: string; title: string; lead: string } & (
    | {
        type: "content";
        icon?: string;
        links?: { label: string; url: string; icon?: string }[];
      }
    | {
        type: "compatibility";
        lists: {
          title: string;
          items: CompatibilityItem[];
          url?: string;
        }[];
      }
    | {
        type: "features";
        features: FeatureItem[];
      }
    | {
        type: "contact-form";
        turnstileSiteKey: string;
        contactBackend: string;
      }
  );
  const value: {
    title: string;
    description: string;
    heroText: string;
    sections: Section[];
  };
  export default value;
}
