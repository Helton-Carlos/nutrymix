import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export function breakpoints() {
  const breakpoints = useBreakpoints(breakpointsTailwind);

  const xs = breakpoints.smaller('sm')
  const sm = breakpoints.between('sm', 'lg')
  const lg = breakpoints.between('lg', '2xl')

  return {
    xs,
    sm,
    lg,
  };
}