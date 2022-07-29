import axios from "axios";
import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import MainScreen from "../../components/MainScreen";

const RegisterScreen = () => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [pic, setpic] = useState(
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885__480.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&tbnid=DH7p1w2o_fIU8M&vet=12ahUKEwi31tHnjo_5AhVI44UKHYCsAJkQMygBegUIARDeAQ..i&docid=Ba_eiczVaD9-zM&w=771&h=480&q=images&ved=2ahUKEwi31tHnjo_5AhVI44UKHYCsAJkQMygBegUIARDeAQ"
  );
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [message, setmessage] = useState(null);
  const [picMessage, setpicMessage] = useState(null);
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setmessage("Passwords do not match");
    } else {
      setmessage("");
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        setloading(true);
        const { data } = await axios.post(
          "/api/users",
          {
            name,
            pic,
            email,
            password,
          },
          config
        );
        localStorage.setItem("userInfo", JSON.stringify(data));
        setloading(false);
      } catch (error) {
        seterror(error.response.data.message);
        setloading(false);
      }
    }
    console.log(email);
  };
  const postDetails = (pics) => {
    if (!pics) {
      return setpicMessage("Please select an Image");
    }
    setpicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "notezipper");
      data.append("cloud_name", "slydev");
      fetch("https://api.cloudinary.com/v1_1/slydev/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setpic(data.url.toString());
        })
        .catch((err) => console.log(err));
    } else {
      return setpicMessage("pls select an image");
    }
  };

  return (
    <MainScreen title="Register">
      <form method="post" onSubmit={submitHandler}>
        <div className="login-container">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {loading && <Loading />}
          {message && <ErrorMessage>{message}</ErrorMessage>}
          <div className="name-login">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="email-login">
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="pass-login">
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="password"
              name="password"
            />
          </div>
          <div className="confirm-pass-login">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
              placeholder="password"
              name="password"
            />
          </div>
          {picMessage && <ErrorMessage>{picMessage}</ErrorMessage>}
          <div className="picture-upload">
            <input
              type="file"
              onChange={(e) => postDetails(e.target.files[0])}
            />
          </div>
          <button type="submit">Register</button>
          <div className="already-registered">
            Already have an Account? <a href="/login">Login</a>
          </div>
        </div>
      </form>
    </MainScreen>
  );
};

export default RegisterScreen;
