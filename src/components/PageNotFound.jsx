import { useRouteError } from "react-router-dom";

const PageNotFound = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>The page you are looking for does not exist!</h1>
      <h2>Error message: {err.status} {err.statusText} {err.error.message}</h2>
      <h3>Err.status: {err.status}</h3>
      <h3>Err.statusText: {err.statusText}</h3>
      <h3>Err.error.message: {err.error.message}</h3>
    </div>
  )
};

export default PageNotFound;