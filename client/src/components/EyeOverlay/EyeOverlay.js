import React, { useRef, useEffect } from 'react';
import './EyeOverlay.css';
import monalisa from './monalisa.jpg';

function EyeOverlay(props) {
    const svgRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const svgs = svgRef.current.querySelectorAll('.eyeSVG');

            svgs.forEach((svg) => {
                const rect = svg.getBoundingClientRect();
                const iris = svg.querySelector('.iris');
                const pupil = svg.querySelector('.pupil');

                const scleraCenterX = 7.5, scleraCenterY = 7.5;
                const scleraRadius = 6;
                const irisRadius = parseFloat(iris.getAttribute('r'));
                const maxMovement = scleraRadius - irisRadius;

                const dx = e.clientX - (rect.left + scleraCenterX);
                const dy = e.clientY - (rect.top + scleraCenterY);

                const angle = Math.atan2(dy, dx);
                const distanceFromCenter = Math.min(maxMovement, Math.hypot(dx, dy));

                const irisX = distanceFromCenter * Math.cos(angle) + scleraCenterX;
                const irisY = distanceFromCenter * Math.sin(angle) + scleraCenterY;

                iris.setAttribute('cx', irisX);
                iris.setAttribute('cy', irisY);
                pupil.setAttribute('cx', irisX);
                pupil.setAttribute('cy', irisY);
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const position1 = { x: 494, y: 238 };
    const position2 = { x: 465, y: 220 };


    return (
        <div className="image-container">
            <img src={monalisa} alt="Mona Lisa"/>
            <div className="svg-overlay" ref={svgRef}>
                <div className="eye-group" style={{ 
                    transform: `translate(${position1.x}px, ${position1.y}px)` 
                }}>
                    <svg className="eyeSVG" height="15" width="15">
                        <circle className="sclera" cx="7.5" cy="7.5" r="6" fill="white" />
                        <circle className="iris" cx="7.5" cy="7.5" r="3" fill="olive" />
                        <circle className="pupil" cx="7.5" cy="7.5" r="1.5" fill="black" />
                    </svg>
                </div>
                <div className="eye-group" style={{ 
                    transform: `translate(${position2.x}px, ${position2.y}px)` 
                }}>
                    <svg className="eyeSVG" height="15" width="15">
                        <circle className="sclera" cx="7.5" cy="7.5" r="6" fill="white" />
                        <circle className="iris" cx="7.5" cy="7.5" r="3" fill="olive" />
                        <circle className="pupil" cx="7.5" cy="7.5" r="1.5" fill="black" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default EyeOverlay;
