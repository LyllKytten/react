import React from 'react';

class DoubleButton extends React.Component {
    cbPressed = (num) => {
        this.props.cbPressed(num);
    }

    render() {
        const { caption1, caption2 } = this.props;
        return (
            <div>
                <input type="button" value={caption1} onClick={() => this.cbPressed(1)} />
                {this.props.children}
                <input type="button" value={caption2} onClick={() => this.cbPressed(2)} />
            </div>
        );
    }
}

export default DoubleButton;
