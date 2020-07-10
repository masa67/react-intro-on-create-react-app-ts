import React from 'react'
import './Square.css'

export interface SquareProps { value: number; }

export class Square extends React.Component<SquareProps, {}> {
    render() {
        return (
            <button className="square">
                {this.props.value}
            </button>
        )
    }
}

export default Square