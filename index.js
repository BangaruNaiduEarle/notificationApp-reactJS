const Notification = (props) => {
  //  Write your code here.
  const { className, containerText, icon, image } = props;
  return (
    <div className={className}>
      <img src={icon} className={image} />
      <p className={className}>{containerText} message</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="main-bg">
    <h1 className="heading">Notifications</h1>
    <Notification
      className="containerStyle1"
      containerText="Information"
      icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      image="image"
    />
    <Notification
      className="containerStyle2"
      containerText="Success"
      icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      image="image"
    />
    <Notification
      className="containerStyle3"
      containerText="Warning"
      icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      image="image"
    />
    <Notification
      className="containerStyle4"
      containerText="Error"
      icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      image="image"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
