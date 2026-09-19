import React, { useRef, useEffect } from 'react';

const CustomCursor = () => {
    const ringRef = useRef(null);

    useEffect(() => {
        const ring = ringRef.current;
        if (!ring) return;

        let mouseX = -100, mouseY = -100;
        let ringX = -100, ringY = -100;
        let animId;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const onMouseEnter = () => {
            ring.classList.add('hovered');
        };
        const onMouseLeave = () => {
            ring.classList.remove('hovered');
        };

        const interactiveEls = document.querySelectorAll('a, button, [data-cursor]');
        interactiveEls.forEach(el => {
            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mouseleave', onMouseLeave);
        });

        window.addEventListener('mousemove', onMouseMove);

        const loop = () => {
            // Fast, crisp tracking with no heavy lag
            ringX += (mouseX - ringX) * 0.45;
            ringY += (mouseY - ringY) * 0.45;
            ring.style.left = ringX + 'px';
            ring.style.top = ringY + 'px';

            animId = requestAnimationFrame(loop);
        };
        animId = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('mousemove', onMouseMove);
            interactiveEls.forEach(el => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, []);

    return (
        <div ref={ringRef} className="cursor-ring" />
    );
};

export default CustomCursor;
