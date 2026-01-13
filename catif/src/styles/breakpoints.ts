export const BREAKPOINTS = {
    xs: 0,
    sm: 481,
    md: 768,
    lg: 980,
    xl: 1200,
} as const

export const mq = {
    smUp: `@media (min-width: ${BREAKPOINTS.sm}px)`,
    mdUp: `@media (min-width: ${BREAKPOINTS.md}px)`,
    lgUp: `@media (min-width: ${BREAKPOINTS.lg}px)`,
    xlUp: `@media (min-width: ${BREAKPOINTS.xl}px)`,
    smDown: `@media (max-width: ${BREAKPOINTS.sm - 1}px)`,
    mdDown: `@media (max-width: ${BREAKPOINTS.md - 1}px)`,
    lgDown: `@media (max-width: ${BREAKPOINTS.lg - 1}px)`,
    xlDown: `@media (max-width: ${BREAKPOINTS.xl - 1}px)`,
} as const
