import { useState, useEffect, useRef } from 'react';

export const useTypingEffect = (words: string[], typeSpeed = 100, eraseSpeed = 50, delay = 1500) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState('');
    const [isErasing, setIsErasing] = useState(false);
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[wordIndex];
            if (isErasing) {
                if (text.length > 0) {
                    setText(prev => prev.substring(0, prev.length - 1));
                    timeoutRef.current = window.setTimeout(handleTyping, eraseSpeed);
                } else {
                    setIsErasing(false);
                    setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                }
            } else {
                if (text.length < currentWord.length) {
                    setText(prev => currentWord.substring(0, prev.length + 1));
                    timeoutRef.current = window.setTimeout(handleTyping, typeSpeed);
                } else {
                    timeoutRef.current = window.setTimeout(() => setIsErasing(true), delay);
                }
            }
        };

        timeoutRef.current = window.setTimeout(handleTyping, typeSpeed);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [text, isErasing, wordIndex, words, typeSpeed, eraseSpeed, delay]);

    return text;
};
