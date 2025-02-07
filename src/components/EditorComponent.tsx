import { MathfieldElement } from 'mathlive';
import { useEffect, useMemo, useRef } from "react";

const EditorComponent = () => {
    // Add explicit typing for the containerRef
    const containerRef = useRef<HTMLDivElement | null>(null);
    const mfe = useMemo(() => new MathfieldElement(), []);

    useEffect(() => {
        if (containerRef.current && mfe) {
            mfe.value = 'EXAMPLE';
            containerRef.current.appendChild(mfe);
        }
    }, [mfe]); 

    return (
        <div ref={containerRef}></div>
    );
};

export default EditorComponent;
