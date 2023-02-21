import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "view/layout";
import Dashboard from "view/dashboard";
import Products from "view/products";
import Customers from "view/customers";
import Transactions from "view/transactions";
import Geography from "view/geography";
import Overview from "view/overview";
import Daily from "view/daily";
import Monthly from "view/monthly";
import Breakdown from "view/breakdown";
import Admin from "view/admin";
import Performance from "view/performance";
import LoginPage from "view/loginPage";
import HomePage from "view/homePage";
import ProfilePage from "view/profilePage";
/* import Username from "view/username";
import PageNotFound from "view/pagenotfound";
import Password from "view/password";
import Profile from "view/profile";
import Recovery from "view/recovery";
import Register from "view/register";
import Reset from "view/reset";
import { AuthorizeUser } from "middlware/auth";
import { ProtectRoute } from "middlware/auth"; */

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            
              <Route path="/auth/login" element={<LoginPage />} />
              <Route path="/auth/register" element={<LoginPage />} />
              <Route
                path="/home"
                element={isAuth ? <HomePage /> : <Navigate to="/" />}
              />
              <Route
                path="/profile/:userId"
                element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
              />
              {/* <Route path="/username" element={ <Username />} />
              <Route path="/profile" element={ <AuthorizeUser><Profile /></AuthorizeUser>} />
              <Route path="/register" element={ <Register />} />
              <Route path="/recovery" element={ <Recovery />} />
              <Route path="/password" element={ <ProtectRoute><Password /></ProtectRoute>} />
              <Route path="*" element={ <PageNotFound />} />
              <Route path="/reset" element={ <Reset />} /> */}
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/offres" element={<Products />} />
              <Route path="/investisseurs" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/carte" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/journaliers" element={<Daily />} />
              <Route path="/mensuels" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performances" element={<Performance />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
