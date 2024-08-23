import { createTransitionConfig, transitions } from "ssgoi"

export const config = createTransitionConfig({
  transitions: [
    {
      from: "/",
      to: "/templates/*",
      transitions: transitions.fade(),
    },
  ],
  defaultTransition: transitions.fade(),
})
