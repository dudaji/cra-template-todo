import PropTypes from "prop-types";

function PageTitle(props) {
  const { title } = props;
  return <h1>{title}</h1>;
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
