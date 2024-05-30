import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export default function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'rounded transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f]',
        className,
      )}
    >
      {children}
    </div>
  );
}
