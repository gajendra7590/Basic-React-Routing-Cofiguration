import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer id="sticky-footer" className="py-3 bg-dark text-white fixed-bottom">
                <div className="container text-center">
                  <small>Copyright &copy; Router Demo</small>
                </div>
            </footer>
        )
    }
}

export default Footer;
