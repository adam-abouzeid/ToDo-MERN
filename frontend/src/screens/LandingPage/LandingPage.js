import "./landingPage.css";

const LandingPage = () => {
  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");
  //   if (userInfo) {
  //     history.push("/mynotes");
  //   }
  // }, [history]);

  return (
    <div className="main">
      <div className="content">
        <div className="welcome">
          <h1 className="title">Welcom to Note Zipper</h1>
          <p className="subtitle">One safe place for all your notes.</p>
        </div>
        <div className="buttonContainer">
          <a className="button-landing" href="/login">
            Login
          </a>
          <a className="button-landing" href="/register">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
