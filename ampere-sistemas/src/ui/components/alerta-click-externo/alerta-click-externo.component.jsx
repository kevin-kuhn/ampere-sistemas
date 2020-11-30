import React, { useRef, useEffect } from "react";

export const AlertaClickExterno = ({ children, isMenuAberto, esconderMenu }) => {
    const ref = useRef(null)

    useEffect(() => {
        if(!!isMenuAberto){
            const lidarClick = (evento) => {
                if (ref.current && !ref.current.contains(evento.target)) {
                    esconderMenu()
                }
            }
            document.addEventListener("mousedown", lidarClick)
            return () => {
                document.removeEventListener("mousedown", lidarClick)
            }
        }
    }, [ref]);

    return (
        <div ref={ref}>
            {children}
        </div>
    )
}