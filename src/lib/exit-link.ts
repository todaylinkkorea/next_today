export const EXIT_LINK_REL = 'nofollow noopener';

export function exitHref(url: string): string {
  return '/exit?url=' + encodeURIComponent(url);
}
