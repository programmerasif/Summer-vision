import logo from '../../assets/summervision.png'

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-[#FFBF23] text-base-content">
                <div className="items-center grid-col">
                    <img src={logo} alt=""  className='w-24'/>
                    <p>Summer-vision. <br />Providing reliable Traning since 2020</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <div></div>
            <footer className="footer px-10 py-4 border-t bg-[#FFBF23] text-base-content border-gray-300">

                <div className="md:place-self-center md:justify-self-center">
                    <div>
                        <p>Copyright © 2023 - All right reserved by Asif Khan</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;