
import { useLocation } from "react-router-dom";
import Cursor from "../components/Cursor";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-badminner mb-4">404</h1>
        <p className="text-2xl font-medium mb-8">Oops! Page not found</p>
        <p className="text-foreground/70 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <a href="/" className="btn-primary inline-block hover-effect">
          Return to Home
        </a>
      </div>
      <Cursor />
    </div>
  );
};

export default NotFound;
