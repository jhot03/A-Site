import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

type StatusVariant = 'success' | 'error';

export interface StatusModalProps {
  variant: StatusVariant;
  messages: string[];
  onClose: () => void;
}

const StatusModal: React.FC<StatusModalProps> = ({ variant, messages, onClose }) => {
    const isSuccess = variant === 'success';
    const accent = isSuccess ? 'from-emerald-500 to-teal-400' : 'from-rose-500 to-orange-400';
    const iconBg = isSuccess ? 'bg-emerald-500/20' : 'bg-rose-500/20';
    const iconRing = isSuccess ? 'ring-emerald-400/40' : 'ring-rose-400/40';

    useEffect(() => {
        const timeout = setTimeout(() => {
        onClose();
        }, 3000);

        return () => clearTimeout(timeout); // Cleanup timeout on unmount
    }, [onClose]);

    return (
        <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

            {/* Panel */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
                <motion.div
                    className="w-full max-w-md"
                    initial={{ y: 24, opacity: 0, scale: 0.96 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 16, opacity: 0, scale: 0.96 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                >
                    {/* Gradient border card */}
                    <div className={`p-px rounded-2xl bg-linear-to-br ${accent} shadow-[0_0_40px_rgba(0,0,0,0.35)]`}>
                        <div className="rounded-2xl bg-[#0B0B12] border border-white/10 p-6 relative">
                            <button
                                onClick={onClose}
                                aria-label="Close"
                                className="absolute top-3 right-3 text-white/60 hover:text-white transition"
                            >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            </button>

                            <div className="flex items-center gap-4">
                                <div className={`h-12 w-12 ${iconBg} rounded-full flex items-center justify-center ring-1 ${iconRing}`}>
                                    {isSuccess ? (
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-emerald-400">
                                        <path d="M20 7L9 18l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-rose-400">
                                        <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </div>
                                <div className="min-w-0">
                                    <h3 className="text-lg font-semibold text-white">
                                        {isSuccess ? 'Message sent' : 'Submission failed'}
                                    </h3>
                                    <div className="mt-1 text-sm text-[#CFCFD8] space-y-1">
                                        {messages.map((m: string, i: number) => (
                                        <p key={i} className="truncate">{m}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex justify-end">
                                <button
                                    onClick={onClose}
                                    className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/10 transition"
                                >
                                Dismiss
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default StatusModal;