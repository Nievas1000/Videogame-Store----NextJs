import { useEffect, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";
import AuthContext from "../context/AuthContext"

export const useAuthUser =  () => {
  const router = useRouter();

  const { setisLogged } = useContext(AuthContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        try {
          setisLogged(true);
        } catch (error) {
          console.log(error)
        }
        if (router.pathname === "/signin" || router.pathname === "/signup") {
          router.push("/")
        }
      } else {
        try {
          setisLogged(false);
        } catch (error) {
          console.log(error)
        }
      }
    });
  }, []);
};