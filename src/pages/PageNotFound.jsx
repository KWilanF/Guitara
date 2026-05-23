import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#FDFBD4]">
      <h1 className="text-6xl font-bold text-green-800">404</h1>
      <p className="text-xl text-red-500 mt-4">Page Not Found</p>

      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-green-800 text-white rounded"
      >
        Go Home
      </Link>
    </div>
  );
}

export default PageNotFound;