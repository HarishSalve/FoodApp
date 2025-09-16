import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const err = useRouteError();
  console.error(err);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold font-serif">Page Not Found</h1>
      <h2  className="font-serif">{err?.error?.message}</h2>
    </div>
  );
};

export default ErrorPage;
