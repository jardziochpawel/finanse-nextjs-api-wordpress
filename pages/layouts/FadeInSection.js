import {useEffect, useRef, useState} from "react";

export function FadeInSection(props) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);

    return (
        <div
            className={props.className+` fade-in-section ${isVisible ? 'is-visible' : ''}`}
            style={props.style}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}
