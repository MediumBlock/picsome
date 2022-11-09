import React, { useState, useRef, useEffect } from 'react'

function useHover() {
    const [isHovered, setIsHovered] = useState(false)
    const inputRef = useRef(null)

    function enter() {
        setIsHovered(true)
    }

    function leave() {
        setIsHovered(false)
    }

    useEffect(() => {
        const node = inputRef.current;
        if (node) {
          node.addEventListener("mouseenter", enter);
          node.addEventListener("mouseleave", leave);
          return () => {
            node.removeEventListener("mouseenter", enter);
            node.removeEventListener("mouseleave", leave);
          };
        }
    }, [])

    return [isHovered, inputRef]
}

export default useHover