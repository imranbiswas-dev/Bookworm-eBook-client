import { NavLink } from "react-router";

const Footer = () => {
    const links = (
    <>
      <NavLink className="hover:underline" to="/dashboard">
        Dashboard
      </NavLink>
      <NavLink className="hover:underline" to="/library">
        Library
      </NavLink>
      <NavLink className="hover:underline" to="/blog">
        Blog
      </NavLink>
      <NavLink className="hover:underline" to="/contact">
        Contact
      </NavLink>
    </>
  );


  return (
    <div className="mt-10">
      
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">E-book</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    {links}
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="w-80">
      <label>Enter your email address</label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn bg-orange-600 text-white join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
    </div>
  );
};

export default Footer;
