// "use client";

// import React, { useState } from "react";
// import {  useRouter } from "next/navigation";

// import { Container, Card, Form, Button, Alert,Row,Col } from "react-bootstrap";
// import { supabase } from "/lib/supabaseClient";
// export default function SignInPage() {
//   //  const params = useParams();
//     const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const { error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       });

//       if (error) throw error;

//   const prevPage = sessionStorage.getItem("prevPage");
//         sessionStorage.removeItem("prevPage");
//         window.location.href = prevPage;
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container className="py-5">
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <Card>
//             <Card.Body>
//               <h2 className="text-center mb-4">تسجيل الدخول</h2>
              
//               {error && <Alert variant="danger">{error}</Alert>}
              
//               <Form onSubmit={handleSignIn}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>البريد الإلكتروني</Form.Label>
//                   <Form.Control
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>كلمة المرور</Form.Label>
//                   <Form.Control
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                 </Form.Group>

//                 <Button 
//                   variant="primary" 
//                   type="submit" 
//                   className="w-100" 
//                   disabled={loading}
//                 >
//                   {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
//                 </Button>
//                   <Button 
//                   className="w-100 mt-2" 
//                   variant="outline-primary" 
//                   size="lg"
//                   onClick={() => router.push("/registration")}
//                 >
//                    📝 إنشاء حساب جديد
//                   </Button>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }



// // /app/auth/signin/page.js
// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useAuth } from '@/contexts/AuthContext';
// import { 
//   Container, 
//   Card, 
//   Form, 
//   Button, 
//   Alert, 
//   Row, 
//   Col,
//   Spinner
// } from "react-bootstrap";
// import { supabase } from "/lib/supabaseClient";
// import { FaSignInAlt, FaUserPlus, FaLock, FaEnvelope } from "react-icons/fa";

// export default function SignInPage() {
//   const router = useRouter();
//   const { isAuthenticated } = useAuth();
  
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // إذا كان المستخدم مسجل بالفعل، توجيهه
//   useEffect(() => {
//     if (isAuthenticated) {
//       const prevPage = localStorage.getItem("prevPage") || "/";
//       localStorage.removeItem("prevPage");
//       router.push(prevPage);
//     }
//   }, [isAuthenticated, router]);

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess("");

//     try {
//       const { error } = await supabase.auth.signInWithPassword({
//         email: email.trim(),
//         password,
//       });

//       if (error) throw error;

//       setSuccess("✅ تم تسجيل الدخول بنجاح!");
      
//       // سيتم التوجيه تلقائياً عبر useEffect
      
//     } catch (error) {
//       console.error("Sign in error:", error);
      
//       if (error.message.includes("Invalid login credentials")) {
//         setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
//       } else if (error.message.includes("Email not confirmed")) {
//         setError("الرجاء تأكيد بريدك الإلكتروني أولاً");
//       } else {
//         setError("حدث خطأ أثناء تسجيل الدخول: " + error.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container className="py-5">
//       <Row className="justify-content-center">
//         <Col md={6} lg={5}>
//           <div className="text-center mb-5">
//             <h1 className="text-primary mb-3">مرحباً بعودتك! 👋</h1>
//             <p className="text-muted">سجل دخولك لمتابعة طلباتك وتجربة تسوق أفضل</p>
//           </div>
          
//           <Card className="shadow border-0">
//             <Card.Body className="p-4">
//               <div className="text-center mb-4">
//                 <div className="bg-primary rounded-circle d-inline-flex p-3 mb-3">
//                   <FaSignInAlt size={30} color="white" />
//                 </div>
//                 <h3>تسجيل الدخول</h3>
//               </div>
              
//               {error && (
//                 <Alert variant="danger" className="text-center">
//                   {error}
//                 </Alert>
//               )}
              
//               {success && (
//                 <Alert variant="success" className="text-center">
//                   {success}
//                 </Alert>
//               )}
              
//               <Form onSubmit={handleSignIn}>
//                 <Form.Group className="mb-4">
//                   <Form.Label className="fw-bold">
//                     <FaEnvelope className="me-2" />
//                     البريد الإلكتروني
//                   </Form.Label>
//                   <Form.Control
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     placeholder="example@email.com"
//                     dir="ltr"
//                     className="py-2"
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-4">
//                   <Form.Label className="fw-bold">
//                     <FaLock className="me-2" />
//                     كلمة المرور
//                   </Form.Label>
//                   <Form.Control
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     placeholder="أدخل كلمة المرور"
//                     className="py-2"
//                   />
//                 </Form.Group>

//                 <div className="d-grid gap-2 mb-3">
//                   <Button 
//                     variant="primary" 
//                     type="submit" 
//                     size="lg"
//                     disabled={loading}
//                     className="py-2"
//                   >
//                     {loading ? (
//                       <>
//                         <Spinner size="sm" className="me-2" />
//                         جاري تسجيل الدخول...
//                       </>
//                     ) : (
//                       <>
//                         <FaSignInAlt className="me-2" />
//                         تسجيل الدخول
//                       </>
//                     )}
//                   </Button>
//                 </div>

//                 <div className="text-center mt-4">
//                   <p className="text-muted mb-3">أو</p>
                  
//                   <Button 
//                     variant="outline-primary" 
//                     size="lg"
//                     className="w-100 py-2 mb-3"
//                     onClick={() => router.push("/auth/registration")}
//                   >
//                     <FaUserPlus className="me-2" />
//                     إنشاء حساب جديد
//                   </Button>
                  
//                   <Button 
//                     variant="link" 
//                     className="text-decoration-none"
//                     onClick={() => router.push("/auth/forgot-password")}
//                   >
//                     نسيت كلمة المرور؟
//                   </Button>
//                 </div>
//               </Form>
//             </Card.Body>
//           </Card>

//           <div className="text-center mt-4">
//             <p className="text-muted">
//               بالاستمرار، أنت توافق على 
//               <a href="/terms" className="text-decoration-none ms-1">الشروط والأحكام</a>
//             </p>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }


// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useAuth,refreshAuth } from '@/contexts/AuthContext';
// import { 
//   Container, 
//   Card, 
//   Form, 
//   Button, 
//   Alert, 
//   Row, 
//   Col,
//   Spinner
// } from "react-bootstrap";
// import { supabase } from "/lib/supabaseClient";
// import { FaSignInAlt, FaUserPlus, FaLock, FaEnvelope } from "react-icons/fa";

// export default function SignInPage() {
//   const router = useRouter();
//   const { isAuthenticated, refresh: refreshAuth } = useAuth(); // أضف refresh هنا
  
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // إذا كان المستخدم مسجل بالفعل، توجيهه
//   useEffect(() => {
//     if (isAuthenticated) {
//       const prevPage = localStorage.getItem("prevPage") || "/";
//       localStorage.removeItem("prevPage");
//       router.push(prevPage);
//     }
//   }, [isAuthenticated, router]);

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess("");

//     try {
//       const { error } = await supabase.auth.signInWithPassword({
//         email: email.trim(),
//         password,
//       });

//       if (error) throw error;

//       setSuccess("✅ تم تسجيل الدخول بنجاح!");
      
//       // تحديث حالة المصادقة أولاً
//       await refreshAuth(); // تحديث حالة AuthContext
      
//       // الانتظار قليلاً لإظهار رسالة النجاح
//       setTimeout(() => {
//         // توجيه إلى الصفحة السابقة أو الرئيسية
//         const prevPage = localStorage.getItem("prevPage") || "/";
//         localStorage.removeItem("prevPage");
        
//         // اختيار واحد من الحلين:
        
//         // الحل 1: استخدام router.refresh() لتحديث مكونات الخادم
//         router.refresh();
//         router.push(prevPage);
        
//         // أو الحل 2: إعادة تحميل الصفحة بالكامل (أكثر ضماناً)
//         // window.location.href = prevPage;
//       }, 1000);
      
//     } catch (error) {
//       console.error("Sign in error:", error);
      
//       if (error.message.includes("Invalid login credentials")) {
//         setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
//       } else if (error.message.includes("Email not confirmed")) {
//         setError("الرجاء تأكيد بريدك الإلكتروني أولاً");
//       } else {
//         setError("حدث خطأ أثناء تسجيل الدخول: " + error.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container className="py-5">
//       <Row className="justify-content-center">
//         <Col md={6} lg={5}>
//           <div className="text-center mb-5">
//             <h1 className="text-primary mb-3">مرحباً بعودتك! 👋</h1>
//             <p className="text-muted">سجل دخولك لمتابعة طلباتك وتجربة تسوق أفضل</p>
//           </div>
          
//           <Card className="shadow border-0">
//             <Card.Body className="p-4">
//               <div className="text-center mb-4">
//                 <div className="bg-primary rounded-circle d-inline-flex p-3 mb-3">
//                   <FaSignInAlt size={30} color="white" />
//                 </div>
//                 <h3>تسجيل الدخول</h3>
//               </div>
              
//               {error && (
//                 <Alert variant="danger" className="text-center">
//                   {error}
//                 </Alert>
//               )}
              
//               {success && (
//                 <Alert variant="success" className="text-center">
//                   {success}
//                   <div className="mt-2">
//                     <Spinner size="sm" className="me-2" />
//                     جاري إعادة التوجيه...
//                   </div>
//                 </Alert>
//               )}
              
//               <Form onSubmit={handleSignIn}>
//                 <Form.Group className="mb-4">
//                   <Form.Label className="fw-bold">
//                     <FaEnvelope className="me-2" />
//                     البريد الإلكتروني
//                   </Form.Label>
//                   <Form.Control
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     placeholder="example@email.com"
//                     dir="ltr"
//                     className="py-2"
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-4">
//                   <Form.Label className="fw-bold">
//                     <FaLock className="me-2" />
//                     كلمة المرور
//                   </Form.Label>
//                   <Form.Control
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     placeholder="أدخل كلمة المرور"
//                     className="py-2"
//                   />
//                 </Form.Group>

//                 <div className="d-grid gap-2 mb-3">
//                   <Button 
//                     variant="primary" 
//                     type="submit" 
//                     size="lg"
//                     disabled={loading}
//                     className="py-2"
//                   >
//                     {loading ? (
//                       <>
//                         <Spinner size="sm" className="me-2" />
//                         جاري تسجيل الدخول...
//                       </>
//                     ) : (
//                       <>
//                         <FaSignInAlt className="me-2" />
//                         تسجيل الدخول
//                       </>
//                     )}
//                   </Button>
//                 </div>

//                 <div className="text-center mt-4">
//                   <p className="text-muted mb-3">أو</p>
                  
//                   <Button 
//                     variant="outline-primary" 
//                     size="lg"
//                     className="w-100 py-2 mb-3"
//                     onClick={() => router.push("/auth/registration")}
//                   >
//                     <FaUserPlus className="me-2" />
//                     إنشاء حساب جديد
//                   </Button>
                  
//                   <Button 
//                     variant="link" 
//                     className="text-decoration-none"
//                     onClick={() => router.push("/auth/forgot-password")}
//                   >
//                     نسيت كلمة المرور؟
//                   </Button>
//                 </div>
//               </Form>
//             </Card.Body>
//           </Card>

//           <div className="text-center mt-4">
//             <p className="text-muted">
//               بالاستمرار، أنت توافق على 
//               <a href="/terms" className="text-decoration-none ms-1">الشروط والأحكام</a>
//             </p>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from '@/contexts/AuthContext';
import { 
  Container, 
  Card, 
  Form, 
  Button, 
  Alert, 
  Row, 
  Col,
  Spinner
} from "react-bootstrap";
import { supabase } from "/lib/supabaseClient";
import { FaSignInAlt, FaUserPlus, FaLock, FaEnvelope } from "react-icons/fa";

export default function SignInPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [redirecting, setRedirecting] = useState(false);

  // إذا كان المستخدم مسجل بالفعل، توجيهه
  useEffect(() => {
    if (isAuthenticated) {
      const prevPage = localStorage.getItem("prevPage") || "/";
      localStorage.removeItem("prevPage");
      router.push(prevPage);
    }
  }, [isAuthenticated, router]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const { error, data } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) throw error;

      setSuccess("✅ تم تسجيل الدخول بنجاح!");
      setRedirecting(true);
      
      // تحديث حالة المصادقة بشكل مباشر
      setTimeout(async () => {
        // الحل 1: إعادة تحميل الصفحة بالكامل (الأكثر ضماناً)
        const prevPage = localStorage.getItem("prevPage") || "/";
        localStorage.removeItem("prevPage");
        
        // إعادة تحميل الصفحة لتحديث جميع المكونات
        window.location.href = prevPage;
        
        // أو الحل 2: استخدام router.refresh() + push
        // await router.refresh();
        // router.push(prevPage);
      }, 1500);
      
    } catch (error) {
      console.error("Sign in error:", error);
      
      if (error.message.includes("Invalid login credentials")) {
        setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
      } else if (error.message.includes("Email not confirmed")) {
        setError("الرجاء تأكيد بريدك الإلكتروني أولاً");
      } else {
        setError("حدث خطأ أثناء تسجيل الدخول: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <div className="text-center mb-5">
            <h1 className="text-primary mb-3">مرحباً بعودتك! 👋</h1>
            <p className="text-muted">سجل دخولك لمتابعة طلباتك وتجربة تسوق أفضل</p>
          </div>
          
          <Card className="shadow border-0">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <div className="bg-primary rounded-circle d-inline-flex p-3 mb-3">
                  <FaSignInAlt size={30} color="white" />
                </div>
                <h3>تسجيل الدخول</h3>
              </div>
              
              {error && (
                <Alert variant="danger" className="text-center">
                  {error}
                </Alert>
              )}
              
              {success && (
                <Alert variant="success" className="text-center">
                  {success}
                  {redirecting && (
                    <div className="mt-2">
                      <Spinner size="sm" animation="border" className="me-2" />
                      جاري إعادة التوجيه...
                    </div>
                  )}
                </Alert>
              )}
              
              <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold">
                    <FaEnvelope className="me-2" />
                    البريد الإلكتروني
                  </Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="example@email.com"
                    dir="ltr"
                    className="py-2"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold">
                    <FaLock className="me-2" />
                    كلمة المرور
                  </Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="أدخل كلمة المرور"
                    className="py-2"
                  />
                </Form.Group>

                <div className="d-grid gap-2 mb-3">
                  <Button 
                    variant="primary" 
                    type="submit" 
                    size="lg"
                    disabled={loading}
                    className="py-2"
                  >
                    {loading ? (
                      <>
                        <Spinner size="sm" animation="border" className="me-2" />
                        جاري تسجيل الدخول...
                      </>
                    ) : (
                      <>
                        <FaSignInAlt className="me-2" />
                        تسجيل الدخول
                      </>
                    )}
                  </Button>
                </div>

                <div className="text-center mt-4">
                  <p className="text-muted mb-3">أو</p>
                  
                  <Button 
                    variant="outline-primary" 
                    size="lg"
                    className="w-100 py-2 mb-3"
                    onClick={() => router.push("/auth/registration")}
                  >
                    <FaUserPlus className="me-2" />
                    إنشاء حساب جديد
                  </Button>
                  
                  <Button 
                    variant="link" 
                    className="text-decoration-none"
                    onClick={() => router.push("/auth/forgot-password")}
                  >
                    نسيت كلمة المرور؟
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>

          <div className="text-center mt-4">
            <p className="text-muted">
              بالاستمرار، أنت توافق على 
              <a href="/terms" className="text-decoration-none ms-1">الشروط والأحكام</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}