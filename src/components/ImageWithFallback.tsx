import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Image as ImageIcon } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackClassName?: string;
}

const ImageWithFallback = ({ src, alt, className, fallbackClassName, ...props }: ImageWithFallbackProps) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  if (error || !src) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-secondary text-muted-foreground',
          className,
          fallbackClassName
        )}
      >
        <ImageIcon className="w-1/4 h-1/4" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};

export default ImageWithFallback;