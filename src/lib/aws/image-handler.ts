import { imageHandlerUrl, s3BucketPrefix, s3BucketName } from './constants';

export interface Edits {
  resize?: {
    width?: number;
    height?: number;
    fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
  };
}

export function getImageUrl(filename: string, edits: Edits = {}): string {
  const request = {
    bucket: s3BucketName,
    key: `${s3BucketPrefix}${filename}`,
    edits,
  };

  const str: string = JSON.stringify(request);
  const enc = Buffer.from(str).toString('base64');
  return `${imageHandlerUrl}${enc}`;
}
