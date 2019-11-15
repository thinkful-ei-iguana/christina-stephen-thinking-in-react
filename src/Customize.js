import React from 'react'
import Features from './Features'


export default function Customize() {
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <Features
            features={this.props.features}
            />
          </form>
    )
}