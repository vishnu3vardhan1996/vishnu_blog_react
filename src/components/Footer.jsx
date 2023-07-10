import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
// import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (

        <div>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <footer style={{ textAlign: 'center', backgroundColor: "#f1f1f1", marginTop: "auto", padding: "10px" }}>
                    <a href="https://www.facebook.com/profile.php?id=100092609045726" target="_blank">
                        <FacebookIcon color="action" fontSize="small" />
                        <style>{`a:hover > svg {color: #322E33;}`}</style>
                    </a>

                    <a href="https://twitter.com/vishnu__03__" target="_blank" style={{ marginLeft: '40px' }}>
                        <TwitterIcon color="action" fontSize="small" />
                        <style>{`a:hover > svg {color: #322E33;}`}</style>
                    </a>

                    {/* <a href="https://facebook.com" target="_blank" style={{ marginLeft: '40px' }}>
                        <GoogleIcon color="action" fontSize="small" />
                        <style>{`a:hover > svg {color: #322E33;}`}</style>
                    </a> */}

                    <a href="https://www.instagram.com/vishnu_03_/" target="_blank" style={{ marginLeft: '40px' }}>
                        <InstagramIcon color="action" fontSize="small" />
                        <style>{`a:hover > svg {color: #322E33;}`}</style>
                    </a>

                    <a href="https://www.linkedin.com/in/vishnuvardhan-chellamuthu-509424206/" target="_blank" style={{ marginLeft: '40px' }}>
                        <LinkedInIcon color="action" fontSize="small" />
                        <style>{`a:hover > svg {color: #322E33;}`}</style>
                    </a>

                    <a href="https://youtube.com/@vishnu_03_" target="_blank" style={{ marginLeft: '40px' }}>
                        <YouTubeIcon color="action" fontSize="small" />
                        <style>{`a:hover > svg {color: #322E33;}`}</style>
                    </a>

                    <a href="https://github.com/vishnu3vardhan1996" target="_blank" style={{ marginLeft: '40px' }}>
                        <GitHubIcon color="action" fontSize="small" />
                        <style>{`a:hover > svg {color: #322E33;}`}</style>
                    </a>
                </footer>
            </div>
            <footer style={{ textAlign: 'center', backgroundColor: "#595959", padding: "5px", color: "white", fontFamily: "Roboto, sans-serif" }}>©️ 2023 Techieness. Made with ❤️ by Vishnu</footer>
        </div>
    )
}

export { Footer };