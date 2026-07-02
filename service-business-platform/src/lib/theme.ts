import { client } from "@/config/client";
import { lawnTheme } from "@/themes/lawn";

export function getTheme() {
  switch (client.theme) {
    case "lawn":
      return lawnTheme;

    default:
      return lawnTheme;
  }
}