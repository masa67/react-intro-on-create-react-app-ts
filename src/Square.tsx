import React from 'react'
import './Square.css'

export interface SquareProps { value: number; }

export interface SquareState { value: string | null; }

export class Square extends React.Component<SquareProps, SquareState> {
    constructor(props: SquareProps) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button className="square" onClick={() => this.setState({value: 'X'})}>
                {this.state.value}
            </button>
        )
    }
}

export default Square