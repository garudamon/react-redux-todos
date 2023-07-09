import { useRouteError } from "react-router-dom";
import CenterLayout from "../layouts/CenterContent";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <CenterLayout>
      <div id="error-page">
        <h1 className="text-3xl">Oops!</h1>
        <p className="py-5">Sorry, an unexpected error has occurred.</p>
        <p className="italic text-orange-500">
          {error.statusText || error.message}
        </p>
      </div>
    </CenterLayout>
  );
}
