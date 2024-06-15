import {
  History,
  Home,
  Products,
  YourCart,
  Login,
  Register,
  Auth,
  ForgotPassword,
} from "./pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import {
  Coffee,
  Iced,
  Foods,
  Addons,
  FavPromo,
  ProductsDetails,
} from "./pages/products";
import {
  FetchCoffee as coffee,
  FetchFav as fav,
  FetchIced as iced,
  FetchFood as food,
} from "./pages/products/mapping/Api";
import { ErrorComponent } from "./components";
import { LoggedInProtectedRoute, ProtectedRoute } from "./pages/auth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorComponent />}>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />

        <Route path="/products" element={<Products />}>
          <Route index element={<FavPromo />} loader={fav} />
          <Route path="/products/1" element={<Coffee />} loader={coffee} />
          <Route path="/products/2" element={<Iced />} loader={iced} />
          <Route path="/products/3" element={<Foods />} loader={food} />
          <Route path="/products/4" element={<Addons />} />
        </Route>

        <Route
          path="/products/details/:id"
          element={<ProductsDetails />}
          loader={fav}
        />
        <Route
          path="/products/1/:id"
          element={<ProductsDetails />}
          loader={coffee}
        />
        <Route
          path="/products/2/:id"
          element={<ProductsDetails />}
          loader={iced}
        />
        <Route
          path="/products/3/:id"
          element={<ProductsDetails />}
          loader={food}
        />
        <Route path="yourCart" element={<YourCart />} />
        <Route
          path="history"
          element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route
        path="auth"
        element={
          <LoggedInProtectedRoute>
            <Auth />
          </LoggedInProtectedRoute>
        }
      >
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
      </Route>
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
