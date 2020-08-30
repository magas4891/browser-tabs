import React, {useState} from 'react';

export default function Tab({children}) {
    const [highlightStyles, setHighlightStyles] = useState({left: 0, opacity: 0})

    function moveHighlight(e) {
        setHighlightStyles({
            left: e.nativeEvent.layerX - 150
        })
    }
    function hideHighlight(e) {
        setHighlightStyles({
            left: e.nativeEvent.layerX - 150,
            opacity: 0
        })
    }

    return(
        <div className="tab"
             onMouseMove={moveHighlight}
             onMouseOut={hideHighlight}>
            <div className="highlight" style={highlightStyles}/>
            {children}
        </div>
    )
}