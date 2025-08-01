import React from 'react';

// import './Work.css';
import DoubleButton from './DoubleButton';
import WithRainbowFrame from "./withRainbowFrame";

const colors=['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
const FramedDoubleButton=WithRainbowFrame(colors)(DoubleButton);

class Work extends React.Component {

    Pressed = (obj) => {
        alert(obj);
    }

    render() {


        return(
            <div>
                <DoubleButton caption1="однажды" caption2="пору" cbPressed={this.Pressed}> в студеную зимнюю </DoubleButton>
                <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={this.Pressed}> вышел, был сильный </FramedDoubleButton>
            </div>
        )
    }
}

export default Work;