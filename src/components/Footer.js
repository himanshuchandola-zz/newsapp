import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <>
                <footer style={{
                    textAlign: "center",
                    backgroundColor: "#191919",
                    color: "white",
                    padding: "10px"
                }}>
                    Copyright &copy; 2021 NewsMonkey
                </footer>
            </>
        )
    }
}

export default Footer
