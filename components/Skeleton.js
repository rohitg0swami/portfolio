import { motion } from 'framer-motion';

const Skeleton = ({ className = '', variant = 'default' }) => {
    const baseClasses = 'animate-pulse bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 dark:from-neutral-700 dark:via-neutral-600 dark:to-neutral-700';

    const variants = {
        default: 'rounded-lg',
        circle: 'rounded-full',
        text: 'h-4 rounded',
        card: 'h-48 rounded-xl',
        avatar: 'w-12 h-12 rounded-full',
        button: 'h-10 rounded-lg',
    };

    return (
        <motion.div
            className={`${baseClasses} ${variants[variant]} ${className}`}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <div className="bg-shimmer bg-[length:200%_100%] animate-shimmer"></div>
        </motion.div>
    );
};

// Skeleton card for projects
export const ProjectSkeleton = () => (
    <div className="modern-card overflow-hidden">
        <Skeleton variant="card" className="w-full mb-4" />
        <div className="p-6">
            <Skeleton variant="text" className="h-6 w-3/4 mb-2" />
            <Skeleton variant="text" className="h-4 w-full mb-1" />
            <Skeleton variant="text" className="h-4 w-2/3 mb-4" />
            <div className="flex gap-2 mb-4">
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-14 rounded-full" />
            </div>
            <Skeleton variant="button" className="w-32" />
        </div>
    </div>
);

// Skeleton for skill cards
export const SkillSkeleton = () => (
    <div className="modern-card p-8 h-full">
        <div className="text-center mb-8">
            <Skeleton variant="text" className="h-8 w-32 mx-auto mb-2" />
            <Skeleton className="h-1 w-16 mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-2 gap-4">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                    <Skeleton variant="circle" className="w-12 h-12 mb-3" />
                    <Skeleton variant="text" className="h-4 w-16 mb-2" />
                    <Skeleton className="h-2 w-12 rounded-full" />
                </div>
            ))}
        </div>
    </div>
);

export default Skeleton;
