import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log("clicked");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

//default prop
Header.defaultProps = {
  title: "Task Tracker",
};

//ensures that the prop type is a string
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS in JS;
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
