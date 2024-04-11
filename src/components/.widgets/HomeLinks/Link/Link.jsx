const Link = ({ link, title, imgSrc }) => {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const capitalizedTitle = capitalizeFirstLetter(title);

  return (
    <li>
      <a href={link} target="_blank">
        <img
          className="link"
          src={imgSrc}
          alt={title}
        />
      </a>
      {capitalizedTitle}
    </li>
  );
};

export default Link;
