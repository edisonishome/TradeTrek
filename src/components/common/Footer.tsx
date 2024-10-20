const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 py-4 relative" data-testid="page-footer">
      <div className="contaoned mx-auto px-4 text-center text-gray-200">
        Trọng Nhân &copy;{new Date().getFullYear()}
        <span> | </span>
        <a
          href="https://www.facebook.com/edisonnothome"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-300 hover:underline transition-all duration-150"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
