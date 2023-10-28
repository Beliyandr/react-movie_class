import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer className="page-footer green">
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">
              Repositories
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
