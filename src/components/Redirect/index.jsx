import "./style.css";

const Redirect = ({ text, url }) => {
  return (
    <a className="redirectContent" href={url} target="_blank">
      {text}
    </a>
  );
};

export default Redirect;
