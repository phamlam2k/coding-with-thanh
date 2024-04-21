const listMenu = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about-us",
    label: "About Us",
  },
];

const Header = () => {
  return (
    <header>
      <div
        style={{
          display: "flex",
          padding: "10px 20px",
          backgroundColor: "#f1f1f1",
          gap: "10px",
        }}
      >
        {listMenu.map((item, index) => {
          return (
            <a key={index} href={item.path}>
              {item.label}
            </a>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
