import type { CSSProperties, ImgHTMLAttributes } from 'react';

interface ImageWithSEOProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string; // Make alt required for SEO
  width?: number;
  height?: number;
  style?: CSSProperties;
  className?: string;
  loading?: 'lazy' | 'eager';
}

const ImageWithSEO = ({
  src,
  alt,
  width,
  height,
  style,
  className,
  loading = 'lazy', // Default to lazy loading for better performance
  ...rest
}: ImageWithSEOProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={style}
      className={className}
      loading={loading}
      {...rest}
    />
  );
};

export default ImageWithSEO;
