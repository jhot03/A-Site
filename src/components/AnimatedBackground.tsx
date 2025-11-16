import "../styles/AnimatedBackground.css";

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-[#0A0A0F]">
            {/* Blob 1 - Indigo/Cyan gradient */}
            <div 
                className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full opacity-30 blur-[120px] animate-float-slow"
                style={{
                    background: 'radial-gradient(circle, #4F46E5 0%, #6366F1 40%, #0EA5E9 100%)',
                }}
            />
            
            {/* Blob 2 - Purple/Teal gradient */}
            <div 
                className="absolute bottom-[15%] right-[15%] w-[600px] h-[600px] rounded-full opacity-25 blur-[130px] animate-float-slow-delayed"
                style={{
                    background: 'radial-gradient(circle, #9333EA 0%, #14B8A6 100%)',
                }}
            />
            
            {/* Blob 3 - Soft indigo accent */}
            <div 
                className="absolute top-[60%] left-[40%] w-[400px] h-[400px] rounded-full opacity-20 blur-[100px] animate-float-gentle"
                style={{
                    background: 'radial-gradient(circle, #6366F1 0%, #4F46E5 100%)',
                }}
            />
        </div>
    );
}

export default AnimatedBackground;