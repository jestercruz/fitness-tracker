import "../stylesheets/Messages.css";

const Messages = ({ className, message }) => {
  return <div className={className}>{message}</div>;
};

export default Messages;
