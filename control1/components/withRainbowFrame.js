import React from 'react';

function WithRainbowFrame(color) {
    return function(Comp) {
        return function(props) {
            let code = <Comp {...props} />;
            for (let key of color) {
                code = <div style={{border: `solid ${key} 3px`}}>{code}</div>
            }
            return code;
        }
    };
}

// let withColorBackground = color => Comp => props =>
//     <div style={{backgroundColor:color,border:"solid red 1px"}}>
//       <Comp {...props} />
//     </div>
// ;

export default WithRainbowFrame;