 
//   "use client"; // مهم جدًا
 
// import LoginForm from "@/components/Loginform/LoginForm";

//  export default function Login
//  (){
//     return<div className=" flex flex-col gap-3  justify-center items-center h-[60vh]">
     
//     <LoginForm/>
//     </div>
//  } 








 "use client" // <--- هذه السطر ضروري جداً وفي أول الملف

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import LoginForm from "@/components/Loginform/LoginForm";


// 1. نفصل المنطق الذي يستخدم useSearchParams في مكون فرعي
function LoginContent() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl')
  
  return (
   //  <div className="login-container">
   //    <h1>تسجيل الدخول</h1>
   //    <p>الوجهة التالية: {callbackUrl || 'الصفحة الرئيسية'}</p>
   //    {/* هنا تضع نموذج تسجيل الدخول (Form) الخاص بك */}
   //    <form>
   //      <input type="email" placeholder="البريد الإلكتروني" />
   //      <input type="password" placeholder="كلمة المرور" />
   //      <button type="submit">دخول</button>
   //    </form>
   //  </div>



    <div className=" flex flex-col gap-3  justify-center items-center h-[60vh]">
     
    <LoginForm/>
    </div>
  )
}

// 2. المكون الرئيسي للصفحة يجب أن يغلف المحتوى بـ Suspense
export default function LoginPage() {
  return (
    <Suspense fallback={<div>جاري التحميل...</div>}>
      <LoginContent />
    </Suspense>
  )
}