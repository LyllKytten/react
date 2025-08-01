import React from 'react';

import './Work.css';
import DoubleButton from './DoubleButton';

class Work extends React.Component {

    afterClickParent = (obj) => {
        alert(obj);
    }

    render() {
        return(
            <div>
                <DoubleButton caption1="однажды" caption2="пору" afterClick={this.afterClickParent}> в студеную зимнюю </DoubleButton>
                <DoubleButton caption1="я из лесу" caption2="мороз" afterClick={this.afterClickParent}> вышел, был сильный </DoubleButton>
            </div>
        )
    }
}

export default Work;