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
                    NewsApp - React Based Web App Open Source.
                </footer>
            </>
        )
    }
}

export default Footer
