import React from 'react';

function Colors(color) {
    return function(Comp) {
        return props => (
            <div style={{border:`solid ${color} 1px`}}>
                <Comp {...props} />
            </div>
        );
    };
}

// let withColorBackground = color => Comp => props =>
//     <div style={{backgroundColor:color,border:"solid red 1px"}}>
//       <Comp {...props} />
//     </div>
// ;

export default Colors;