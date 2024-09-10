import React, { useRef, useState } from "react";
import LoginHeader from "./LoginHeader";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { checkValidate } from "../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { updateProfile } from "firebase/auth";
import { addUser } from "@/store/userSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUpForm, setIsSignUpForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSignUpNow = () => {
    setIsSignUpForm(!isSignUpForm);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;
    if (!isSignUpForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/146910995?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");

          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };
  return (
    <>
      <LoginHeader />
      <div className="relative">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_large.jpg"
          alt="background-image"
          className="w-full h-[100vh] object-cover filter brightness-50"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <form
          className=" bg-[rgba(0,0,0,0.7)] p-12 rounded-lg z-10 flex flex-col items-center w-[90%] sm:w-[30%] md:w-[50%] lg:w-[30%] mt-20"
          onSubmit={(e) => e.preventDefault()}
        >
          <header>
            <h1 className="text-white mb-3 text-2xl font-semibold">
              {isSignUpForm ? "Sign In" : "Sign Up"}
            </h1>
          </header>
          {!isSignUpForm && (
            <input
              type="text"
              ref={name}
              placeholder="Full Name"
              className="p-3 my-3 w-full rounded-sm bg-gray-700 text-white"
            />
          )}
          <input
            type="text"
            autoComplete="off"
            ref={email}
            placeholder="Email Address"
            className="p-3 my-3 w-full rounded-sm bg-gray-700 text-white"
          />
          <input
            type="password"
            ref={password}
            autoComplete="off"
            placeholder="Password"
            className="p-3 my-3 w-full rounded-sm bg-gray-700 text-white"
          />
          {<p className=" text-red-600 font-semibold ">{errorMessage}</p>}
          <button
            className="p-3 my-4 w-full bg-red-600 text-white rounded-sm"
            onClick={handleButtonClick}
          >
            {isSignUpForm ? (
              <>
                <Link>Sign In</Link>
              </>
            ) : (
              <>
                <Link>Sign Up</Link>
              </>
            )}
          </button>
          <p className="text-white">
            {isSignUpForm ? (
              <>
                New to Netflix..?{" "}
                <Link onClick={toggleSignUpNow} className="pointer">
                  Sign up now
                </Link>
              </>
            ) : (
              <>
                Already a member..?{" "}
                <Link onClick={toggleSignUpNow} className="pointer">
                  Sign in
                </Link>
              </>
            )}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
