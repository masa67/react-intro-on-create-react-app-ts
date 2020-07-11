import React from 'react'
import './Square.css'

export interface SquareProps {
    value: string | null,
    onClick: () => void
}

export class Square extends React.Component<SquareProps, {}> {
    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        )
    }
}

export default Square