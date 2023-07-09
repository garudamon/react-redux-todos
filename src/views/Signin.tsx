import { useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../utils/api";
import useLocalStorage from "../hooks/useLocalStorage";
import { VITE_KEY_PROFILE, VITE_KEY_TOKEN } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../store/authSlice";
import TextInput from "../components/control/TextInputControl";
import ButtonControl from "../components/control/ButtonControl";

const Auth = () => {
  const [helperText, setHelperText] = useState({ error: null, text: null });
  const emailRef = useRef();
  const passwordRef = useRef();
  const [token, setToken] = useLocalStorage(VITE_KEY_TOKEN, "");
  const [account, setAccount] = useLocalStorage(VITE_KEY_PROFILE, "");
  const dispatch = useDispatch();

  const authInfo = useSelector((state) => state.auth.info);

  if (authInfo.token) {
    return <Navigate to="/" />;
  }

  const handleLogin = async () => {
    // const email = "nilson@email.com"; //emailRef.current?.value;
    // const password = "nilson"; //passwordRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      const { data, status } = await api.post("/auth/login", {
        email,
        password,
      });
      if (data && status === 200) {
        const token = data.access_token;
        const account = { email };
        setAccount(account);
        setToken(token);
        dispatch(setAuth({ token, account }));
        console.log({token, account})
        return <Navigate to="/" />;
      } else {
        setHelperText({ error: true, text: data.message });
      }
    } catch (error) {
      setHelperText({ error: true, text: error.message });
    }
  };

  return (
    <div
      className={
        "w-full h-full sm:h-auto sm:w-2/5 max-w-sm bg-white shadow-md flex flex-col text-base rounded-md overflow-hidden"
      }
    >
      <h1 className="p-5 bg-teal-700 text-white text-3xl font-serif">
        Sign-in
      </h1>

      <div className="px-5 py-3 flex flex-col gap-3">
        <TextInput ref={emailRef} label="Email" />
        <TextInput ref={passwordRef} label="Password" type="password" />
        {!!helperText.text && (
          <div
            className={`border px-1 py-2 my-2 text-center text-sm ${
              helperText.error
                ? "bg-red-100 border-red-300 text-red-400"
                : "bg-green-100 border-green-300 text-green-500"
            }`}
          >
            {helperText.text}
          </div>
        )}

        <ButtonControl
          onClick={() => handleLogin()}
          type="button"
          className="mt-3 px-3 py-2 rounded hover:bg-teal-500 text-white bg-teal-700 w-full"
        >
          Sign In
        </ButtonControl>
      </div>
    </div>
  );
};

export default Auth;
