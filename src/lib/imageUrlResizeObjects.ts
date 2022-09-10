import type { Edits } from '$lib/aws/image-handler';
interface ResizeObjects {
  [k: string]: Edits;
}

const resizeObjects: ResizeObjects = {
  thumbnail: {
    resize: {
      width: 250,
      height: 250,
      fit: 'cover',
    },
  },
  fullsize: {
    resize: {
      width: 1200,
      height: 1200,
      fit: 'inside',
    },
  },
  adminThumbnail: {
    resize: {
      width: 50,
      height: 50,
      fit: 'cover',
    },
  },
};

export default resizeObjects;
