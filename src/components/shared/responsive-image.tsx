import Image from "next/image";

import { cn } from "@/lib/utils/cn";

type ResponsiveImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function ResponsiveImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "100vw"
}: ResponsiveImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        alt={alt}
        className={cn("object-cover", imageClassName)}
        fill
        priority={priority}
        sizes={sizes}
        src={src}
      />
    </div>
  );
}
