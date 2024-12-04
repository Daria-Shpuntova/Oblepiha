import React, { useEffect, useRef, useState } from 'react';
import './FadeInText.css'; // Импортируйте CSS файл для стилей

const FadeInText = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Отключаем наблюдатель после появления
                }
            },
            { threshold: 0.1 } // Настройте порог видимости
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={textRef}
            className={`fade-in-text ${isVisible ? 'visible' : ''}`}
        >
            {children}
        </div>
    );
};

export default FadeInText;
