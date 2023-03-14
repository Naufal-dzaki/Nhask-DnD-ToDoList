import FloatInputText from "../../components/Forms/Input/FloatInputText";
import FloatInputPassword from "../../components/Forms/Input/FloatInputPassword";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  const togglePassword = () => {
    if (isShowPassword) {
      setIsShowPassword(false);
    } else {
      setIsShowPassword(true);
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-screen bg-nhask-bg-primary">
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
        <div className="mb-6">
          <FloatInputText label={"Email"} value={email} setValue={setEmail} />
        </div>
        <div className="mb-6">
          <FloatInputPassword
            label={"Password"}
            isShowPassword={isShowPassword}
            togglePassword={togglePassword}
            password={password}
            setPassword={setPassword}
          />
        </div>
        <button className="bg-nhask-primary w-full py-4 rounded-[15px] text-nhask-text text-xl">
          Login
        </button>
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
