import raw from './categories.json';
import { parseLinkData, flattenSites } from '@/lib/link-data';

export const LINK_CATEGORIES = parseLinkData(raw);
export const ALL_SITES = flattenSites(LINK_CATEGORIES);
