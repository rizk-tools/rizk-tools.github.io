export const ssr = true;
export const prerender = true;

// This ensures that the base path is properly handled during prerendering
import { base } from '$app/paths';
export { base };
