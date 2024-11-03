import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h1>
        {" "}
        Page Not Found ! return to <Link to="/">Home</Link>
      </h1>
    </div>
  );
};
