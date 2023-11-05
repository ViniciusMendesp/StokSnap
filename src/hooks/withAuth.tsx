// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// /* eslint-disable react/display-name */
// export const withAuth = (WrappedComponent: React.ElementType) => {
//   return (props: any) => {
//     const Router = useRouter();
//     const isAuthenticated = Boolean(localStorage.getItem("authToken"));

//     useEffect(() => {
//       if (!isAuthenticated) {
//         Router.push("/");
//       }
//     }, [isAuthenticated, Router]);

//     return <WrappedComponent {...props} />;
//   };
// };
