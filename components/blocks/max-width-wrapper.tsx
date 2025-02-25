import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
    className?: string;
    children: React.ReactNode;
}
export default function MaxWidthWrapper({ children, className }: MaxWidthWrapperProps) {
    return (
        <div className={cn("max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
            {children}
        </div>
    )
}