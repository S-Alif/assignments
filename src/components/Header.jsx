

const Header = ({ title }) => {
  return (
    <>
      <header>
        <h1 className="text-center mt-5 fw-bold text-uppercase" key={title}>{title}</h1>
      </header>
    </>
  );
};

export default Header;