import { useEffect, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useRouter } from "next/router";
import AuthContext from "../context/AuthContext"

export const useAuthUser = async () => {
  const { push, pathname } = useRouter();

  const { setisLogged } = useContext(AuthContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setisLogged(true);
        if (pathname === "/SingIn" || pathname === "/SingUp") {
          push("/");
        }
      } else {
        setisLogged(false);
      }
    });
  }, []);
};