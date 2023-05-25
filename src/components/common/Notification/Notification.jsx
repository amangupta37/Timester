import "./Notification.css";
const Notification = (props) => {
    const { children, counts } = props;
    return (
        <div className="Notification" {...props}>
            <div className="Notification__Counts">{counts}</div>
            {children}
        </div>
    );
};

export default Notification;
