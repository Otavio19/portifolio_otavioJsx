import "./style.css";

const Redirect = ({ text, url, event }) => {
  return (
    <>
      {!event ? (
        <a
          onclick={event}
          className="redirectContent"
          href={url}
          target="_blank"
        >
          {text}
        </a>
      ) : (
        <button
          onClick={event}
          className="redirectContent"
          href={url}
          target="_blank"
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Redirect;
