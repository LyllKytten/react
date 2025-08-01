import React from 'react';

class DoubleButton extends React.Component {
    afterClick = (num) => {
        this.props.afterClick(num);
    }

    render() {
        const { caption1, caption2 } = this.props;
        return (
            <div>
                <input type="button" value={caption1} onClick={() => this.afterClick(1)} />
                {this.props.children}
                <input type="button" value={caption2} onClick={() => this.afterClick(2)} />
            </div>
        );
    }
}

export default DoubleButton;
