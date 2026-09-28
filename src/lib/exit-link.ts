export const EXIT_LINK_REL = 'nofollow noopener';

export function exitHref(url: string): string {
  return '/exit?url=' + encodeURIComponent(url);
}

export function isSafeHttpUrl(url: string): boolean {
  const trimmedUrl = url.trim();

  if (!trimmedUrl) {
    return false;
  }

  try {
    const { protocol } = new URL(trimmedUrl);
    return protocol === 'http:' || protocol === 'https:';
  } catch {
    return false;
  }
}

export function parseExitTarget(param: string | null): string | null {
  const target = param?.trim();
  if (!target || !isSafeHttpUrl(target)) {
    return null;
  }

  return target;
}
