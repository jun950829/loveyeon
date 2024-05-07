"use client";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/firebaseConfig";

const LoginPage = () => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // 이후 사용자 정보 사용 가능
      const credential = await GoogleAuthProvider.credentialFromResult(result);
      if (credential === null) {
        throw new Error("credential이 null입니다.");
      }
      const token = credential.accessToken;
      const user = result.user;

      console.log(token, user);
      // 사용자 정보를 활용한 코드
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleGoogleSignIn}>Google로 로그인</button>
    </div>
  );
};

export default LoginPage;
