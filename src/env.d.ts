/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@modyfi/vite-plugin-yaml/modules" />

import type { string } from "astro:schema";
import type { CompatibilityItem } from "./types";

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
          items: CompatibilityItem[];
          url?: string;
        }[];
      }
    | {
        type: "features";
        features: FeatureItem[];
      }
      | {
        type: 'contact-form';
        turnstileSiteKey: string;
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
