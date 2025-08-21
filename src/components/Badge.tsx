import { cn } from "../utils/cn";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'secondary' | 'accent';
  size?: 'default' | 'sm' | 'lg';
  children: React.ReactNode;
}

export function Badge({ 
  className, 
  variant = 'default',
  size = 'default',
  children,
  ...props 
}: BadgeProps) {
  return (
    <div
      className={cn(
        // Base styles
        "inline-flex items-center rounded-full font-medium transition-all duration-300",
        // Variant styles
        {
          'default': "bg-primary text-white shadow-lg shadow-primary/20",
          'outline': "border-2 border-primary text-primary hover:bg-primary hover:text-white",
          'secondary': "bg-secondary text-white shadow-lg shadow-secondary/20",
          'accent': "bg-accent text-primary hover:bg-secondary"
        }[variant],
        // Size styles
        {
          'default': "px-2.5 py-0.5 text-xs",
          'sm': "px-2 py-0.5 text-xs",
          'lg': "px-3 py-1 text-sm"
        }[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Badge;