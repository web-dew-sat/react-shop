import './Footer.scss'

function Footer() {
    return <footer className="page-footer green lighten-4">
        <div className="footer-copyright green lighten-4">
            <div className="container">
                © {new Date().getFullYear()} Copyright Text
                <a className="grey-text text-lighten-4 right" target='_blank'
                   href="https://github.com/web-dew-sat/react-shop" rel="noreferrer"
                >Repo</a>
            </div>
        </div>
    </footer>
}

export default Footer;
