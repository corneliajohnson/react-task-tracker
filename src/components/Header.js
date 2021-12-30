import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
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

CSS in JS;

// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
