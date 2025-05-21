const Menu = ({ text }) => {
  return (
    <li>
      <a
        href={`#${text}`}
        className="block py-5 text-2xl font-medium text-white capitalize opacity-70 transition-opacity duration-150 ease-in hover:opacity-100 md:py-0 md:text-lg"
      >
        {text}
      </a>
    </li>
  );
};

export default Menu;
