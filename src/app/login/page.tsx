git add .
git commit -m "fix: make login page dynamic"
git push
 "use client"; // مهم جدًا

import LoginForm from "@/components/Loginform/LoginForm";

 export default function Login
 (){
    return<div className=" flex flex-col gap-3  justify-center items-center h-[60vh]">
    {/* <h2>Login</h2> */}
    <LoginForm/>
    </div>
 }



//  "use client"; // مهم جدًا

// import LoginForm from "@/components/Loginform/LoginForm";

// export const dynamic = "force-dynamic";

// export default function Login() {
//   return (
//     <div className="flex flex-col gap-3 justify-center items-center h-[60vh]">
//       <LoginForm />
//     </div>
//   );
// }

