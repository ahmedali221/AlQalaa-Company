import { cn } from "../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'secondary';
  size?: 'default' | 'sm' | 'lg' | 'xl';
  children: React.ReactNode;
}

export function Button({ 
  className, 
  variant = 'default', 
  size = 'default',
  children,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 hover:scale-105 active:scale-95",
        // Variant styles
        {
          'default': "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20",
          'outline': "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white",
          'ghost': "text-primary hover:bg-primary/10",
          'secondary': "bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/20"
        }[variant],
        // Size styles
        {
          'default': "h-10 px-4 py-2 text-sm",
          'sm': "h-8 px-3 py-1 text-xs",
          'lg': "h-12 px-6 py-3 text-base",
          'xl': "h-14 px-8 py-4 text-lg"
        }[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;