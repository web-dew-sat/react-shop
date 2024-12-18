import './Footer.scss'

function Footer() {
    return <footer className="page-footer green lighten-4">
        <div className="footer-copyright green lighten-4">
            <div className="container">
                © {new Date().getFullYear()} Copyright Text
                <a className="grey-text text-lighten-4 right" href="https://github.com/web-dew-sat/react-shop"
                   target='_blank'>Repo</a>
            </div>
        </div>
    </footer>
}

export default Footer;
