export interface TechLogo {
  name: string;
  svg: string;
}

export interface Props {
  /* Logos to display. Defaults to built-in tech logos if omitted. */
  logos?: TechLogo[];
  /* Scroll speed preset. Default: 'medium' */
  speed?: "slow" | "medium" | "fast";
  /* Scroll direction. Default: 'left' */
  direction?: "left" | "right";
  /* Pause animation on hover. Default: true */
  pauseOnHover?: boolean;
  /* Section label above the ticker. Default: 'Trusted by teams at' */
  label?: string;
}
