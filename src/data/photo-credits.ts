/**
 * Credits for photos that are not your own. They are listed at the bottom of
 * the "Things to do" page, as the photo licences require.
 * If you replace one of these photos with your own, delete its entry here.
 */
export interface PhotoCredit { file: string; subject: string; author: string; license: string; licenseUrl: string; page: string; changes?: string; }

export const credits: PhotoCredit[] = [];
