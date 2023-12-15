import { Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { unsetUser } from "./reducers/user/userSlice";
import { useNavigate } from "react-router-dom";

// Components
import { Index } from "./pages/Index";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

export const App = () => {
  const { totalCount } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out");
    dispatch(unsetUser());
    navigate("/");
  };

  return (
    <div className="container">
      <div className="d-flex py-4">
        {!user.fullName ? (
          <Link className="btn btn-info mx-2" to="/">
            Login
          </Link>
        ) : null}
        {user.fullName ? (
          <span>
            <Link className="btn btn-info mx-2" to="/home">
              Home
            </Link>
            <button className="btn btn-primary" onClick={handleLogout}>
              Log out
            </button>
          </span>
        ) : null}

        <div className="ms-auto">
          <Link className="btn btn-primary position-relative" to="/cart">
            Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalCount}
              <span className="visually-hidden">products in cart</span>
            </span>
          </Link>
        </div>
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};
