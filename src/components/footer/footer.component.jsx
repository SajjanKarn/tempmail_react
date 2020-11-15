import "./footer.styles.css";

const Footer = () => {
  return (
    <div className="footer bg-primary text-white">
      <h6>
        An open source project by
        <a
          href="https://instagram.com/sajjan_karn_404"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          Sajjan
        </a>
      </h6>
      <p>
        {new Date().getFullYear()} - {new Date().getFullYear() + 1}
      </p>
      <a
        href="https://github.com/sajjankarn"
        target="_blank"
        rel="noreferrer"
        className="text-white"
      >
        Github
      </a>
    </div>
  );
};

export default Footer;
