
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
import Username from "components/Username";
import PageNotFound from "components/PageNotFound";
import Password from "components/Password";
import Profile from "components/Profile";
import Recovery from "components/Recovery";
import Register from "components/Register";
import Reset from "components/Reset";


function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element= { <Layout />}>
              <Route path="/" element= { <Navigate to = "/dashboard" replace /> }/>
              <Route path="/dashboard" element= { <Dashboard /> }/>
              <Route path="/products" element= { <Products /> }/>
              <Route path="/customers" element= { <Customers /> }/>
              <Route path="/transactions" element= { <Transactions /> }/>
              <Route path="/carte" element= { <Geography /> }/>
              <Route path="/overview" element={ <Overview />} />
              <Route path="/journaliers" element={ <Daily />} />
              <Route path="/mensuels" element={ <Monthly />} />
              <Route path="/breakdown" element={ <Breakdown />} />
              <Route path="/admin" element={ <Admin />} />
              <Route path="/performances" element={ <Performance />} />
              <Route path="/username" element={ <Username />} />
              <Route path="/profile" element={ <Profile />} />
              <Route path="/register" element={ <Register />} />
              <Route path="/recovery" element={ <Recovery />} />
              <Route path="/password" element={ <Password />} />
              <Route path="*" element={ <PageNotFound />} />
              <Route path="/reset" element={ <Reset />} />







            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
