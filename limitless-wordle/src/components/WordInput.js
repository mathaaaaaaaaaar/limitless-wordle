import React from 'react';

const WordInput = React.forwardRef(({className, active, value, onChange, onKeyDown}, ref) => {
    return (
        <div>
            <input type="text" className={className} ref={ref} disabled={!active} maxLength="1" size="1" value={value} onChange={onChange} onKeyDown={onKeyDown} />
        </div>
    );
});

export default WordInput;
