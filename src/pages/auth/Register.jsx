import FloatInputText from "../../components/Forms/Input/FloatInputText";
import FloatInputPassword from "../../components/Forms/Input/FloatInputPassword";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
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
          <h1 className="w-full mb-6 text-2xl font-medium grow">
            Create New Account
          </h1>
        </div>
        <div className="mb-6">
          <FloatInputText
            label={"Username"}
            value={username}
            setValue={setUsername}
          />
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
        <button className="bg-nhask-primary w-full py-4 rounded-[15px] text-nhask-text text-2xl">
          Register
        </button>
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
