import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class Navbar extends Component {
    render() {
        return (
            <div className="bg-gray-800">
                <ul className="flex p-4">
                    <li className="mr-6 text-base">
                        <a className="text-blue-500 hover:text-blue-800" href={this.props.link} target="_blank">{this.props.title}</a>
                    </li>
                </ul>
            </div>
        )
    }
}

Navbar.defaultProps = {
    link: 'www.example.com'
}

Navbar.propTypes = { 
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default Navbar
