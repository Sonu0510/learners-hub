import "./Notification.css";

function Notification({ type = "success", title, message }) {
  const icons = {
    success: "✅",
    error: "❌",
    info: "ℹ️",
  };

  return (
    <div className={`notification ${type}`}>
      <div className="notification-icon">{icons[type]}</div>

      <div>
        <h4>{title}</h4>

        <p>{message}</p>
      </div>
    </div>
  );
}

export default Notification;
