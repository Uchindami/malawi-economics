export function WaveBottom({ className }: { className?: string }) {
    return (
        <div className={`${className} h-16 relative`}>
            <svg
                className="absolute bottom-0 left-0 w-[200%] h-full animate-wave"
                viewBox="0 0 2880 100"
                preserveAspectRatio="none"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M0 50C480 20 960 80 1440 80C1920 80 2400 20 2880 50V100H0V50Z" />
            </svg>
            <svg
                className="absolute bottom-0 left-0 w-[200%] h-full animate-wave-reverse opacity-50"
                viewBox="0 0 2880 100"
                preserveAspectRatio="none"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M2880 50C2400 80 1920 20 1440 20C960 20 480 80 0 50V100H2880V50Z" />
            </svg>
        </div>
    )
}