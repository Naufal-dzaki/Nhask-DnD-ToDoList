import FloatInputText from "../../components/Forms/Input/FloatInputText";
import FloatInputPassword from "../../components/Forms/Input/FloatInputPassword";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../config/ApiUrl";
import { useNavigate, Navigate } from "react-router-dom";
import { getToken } from "../../utils/CookiesHooks";
import BeatLoader from "react-spinners/BeatLoader";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [hasError, setHasError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const redirectRegister = useNavigate();

  const togglePassword = () => {
    if (isShowPassword) {
      setIsShowPassword(false);
    } else {
      setIsShowPassword(true);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      name: username,
      email: email,
      password: password,
    };

    await axios.get(`${API_URL}/sanctum/csrf-cookie`, {
      withCredentials: true,
    });

    axios
      .post(`${API_URL}/api/auth/register`, data, { withCredentials: true })
      .then(() => {
        setIsLoading(false);
        redirectRegister("/login");
      })
      .catch((response) => {
        setHasError(response.response.data.errors);
        console.log(response.response.data.errors);
        setIsLoading(false);
      });
  };

  const validator = () => {
    if (username && email && password) return true;
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
          <h1 className="w-full mb-6 text-2xl font-medium grow">
            Create New Account
          </h1>
        </div>
        <form onSubmit={handleRegister}>
          <div className="mb-8">
            <FloatInputText
              label={"Username"}
              value={username}
              setValue={setUsername}
              isLoading={isLoading}
            />
          </div>
          <div className={`${hasError.email ? "mb-4" : "mb-8"} flex-col`}>
            <div className="mb-1">
              <FloatInputText
                label={"Email"}
                value={email}
                setValue={setEmail}
                isError={hasError.email}
                isLoading={isLoading}
              />
            </div>
            {hasError.email && (
              <p className="text-nhask-danger text-sm font-light">
                {hasError.email[0]}
              </p>
            )}
          </div>
          <div
            className={`${hasError.password ? "mb-4" : "mb-8"} flex flex-col`}>
            <div className="mb-1">
              <FloatInputPassword
                label={"Password"}
                isShowPassword={isShowPassword}
                togglePassword={togglePassword}
                password={password}
                setPassword={setPassword}
                isError={hasError.password}
                isLoading={isLoading}
              />
            </div>
            {hasError.password && (
              <p className="text-sm text-nhask-danger font-light">
                {hasError.password[0]}
              </p>
            )}
          </div>
          {validator() ? (
            <button
              type="submit"
              className={`bg-nhask-primary w-full py-4 rounded-[15px] text-nhask-text text-2xl ${
                isLoading ? "cursor-progress" : "cursor-pointer"
              }`}>
              {isLoading ? <BeatLoader color="#E4EADF" size={7} /> : "Register"}
            </button>
          ) : (
            <button
              disabled
              className="bg-nhask-muted w-full py-4 rounded-[15px] text-nhask-text text-2xl cursor-not-allowed">
              Register
            </button>
          )}
        </form>
        <p className="mt-3 text-base text-center text-nhask-text">
          Have an account?{" "}
          <a href="/login" className="text-nhask-primary">
            Login now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
