import logo from "../../../assets/icons/logo_footer.png";

const Footer = () => {
    return (
        <div className="pt-10 bg-[#1E1E1F] text-white">
        <footer className="footer">
          <aside className="md:ml-2 lg:ml-4 ml-5">
            <img src={logo} alt="" />
            <p className="text-sm lg:text-sm mt-5">
              Welcome to the best Tech Products site. <br /> We are a team of designers and developers that <br />create high quality Magento, Prestashop, Opencart.
            </p>
          </aside>
          <nav className="md:ml-0 lg:ml-0 ml-5">
            <header className="footer-title">Services</header>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Producs</a>
            <a className="link link-hover">About Clima</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav className="md:ml-0 lg:ml-0 ml-5">
            <header className="footer-title">Information</header>
            <a className="link link-hover">1800-121-3637 <br />+91-7052-101-786</a>
            <a className="link link-hover">info@example.com</a>
            <a className="link link-hover">1247/Plot No. 39, 15th Phase, <br /> London, UK</a>
          </nav>
          <nav className="md:ml-0 lg:ml-0 ml-5">
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
        <p className="text-white text-xs  text-center pt-8 md:pt-10 pb-1">© Copyrights 2023 Clima All rights reserved.</p>
      </div>
    );
  };
export default Footer;