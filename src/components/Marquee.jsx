import React from 'react';

const Marquee = ({ text = 'ARCHI DEE SIGNS — DESIGNING THE UNSEEN — SPATIAL POETRY — DEFINING THE FUTURE — ', speed = 'normal', color = '#D4AF37' }) => {
    const trackClass = speed === 'fast' ? 'marquee-track-fast' : 'marquee-track';
    // Duplicate text 8 times so there's more than enough to fill the viewport
    const repeatedText = Array(8).fill(text).join('');

    return (
        <div className="overflow-hidden w-full" style={{ color }}>
            <div className={trackClass} aria-hidden>
                <span className="uppercase tracking-[0.3em] text-sm font-sans font-medium pr-8" style={{ color }}>
                    {repeatedText}
                </span>
                <span className="uppercase tracking-[0.3em] text-sm font-sans font-medium pr-8" style={{ color }}>
                    {repeatedText}
                </span>
            </div>
        </div>
    );
};

export default Marquee;
