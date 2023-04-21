import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config/ApiUrl";
import { setToken, getToken } from "../../utils/CookiesHooks";
import FloatInputText from "../../components/Forms/Input/FloatInputText";
import FloatInputPassword from "../../components/Forms/Input/FloatInputPassword";
import BeatLoader from "react-spinners/BeatLoader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const redirectLogin = useNavigate();

  const togglePassword = () => {
    if (isShowPassword) {
      setIsShowPassword(false);
    } else {
      setIsShowPassword(true);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      email: email,
      password: password,
    };

    await axios.get(`${API_URL}/sanctum/csrf-cookie`, {
      withCredentials: true,
    });

    axios
      .post(`${API_URL}/api/auth/login`, data, {
        withCredentials: true,
      })
      .then((response) => {
        redirectLogin("/");
        const token = response.data.token;
        setToken(token);
      })
      .catch(() => {
        setIsLoading(false);
        setHasError(true);
      });
  };

  const validator = () => {
    if (email && password) return true;
    else return false;
  };

  if (getToken()) {
    return <Navigate to={"/"} />;
  }

  return (
    <div
      className={`flex flex-col justify-center min-h-screen bg-nhask-bg-primary ${
        isLoading && "cursor-progress"
      }`}>
      <div className="w-full max-w-[520px] mx-auto px-[30px]">
        <div className="mb-6 text-center text-nhask-text">
          <h1 className="mb-6 text-2xl font-medium">
            Welcome to <span className="text-nhask-primary"> Nhask</span>
          </h1>
          <p className="text-lg sm:text-xl">
            Now you can easily manage, organize and plan on task with our To-Do
            web app
          </p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <FloatInputText
              label={"Email"}
              value={email}
              setValue={setEmail}
              isLoading={isLoading}
            />
          </div>
          <div className={`${hasError ? "mb-6" : "mb-[52px]"} flex-col`}>
            <div className="mb-1">
              <FloatInputPassword
                label={"Password"}
                isShowPassword={isShowPassword}
                togglePassword={togglePassword}
                password={password}
                setPassword={setPassword}
                isLoading={isLoading}
              />
            </div>
            {hasError && (
              <p className="text-nhask-danger text-base font-light">
                Please enter the correct Email and Password
              </p>
            )}
          </div>
          {validator() ? (
            <button
              type="submit"
              className={`bg-nhask-primary w-full py-4 rounded-[15px] text-nhask-text text-xl ${
                isLoading ? "cursor-progress" : "cursor-pointer"
              }`}>
              {isLoading ? <BeatLoader color="#E4EADF" size={7} /> : "Login"}
            </button>
          ) : (
            <button
              disabled
              className="bg-nhask-muted w-full py-4 rounded-[15px] text-nhask-text text-xl cursor-not-allowed">
              Login
            </button>
          )}
        </form>
        <p className="mt-3 text-base text-center text-nhask-text">
          Don't have an account?{" "}
          <a href="/register" className="text-nhask-primary">
            Register now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
