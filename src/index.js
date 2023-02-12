import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import AuthLayout from "layouts/auth";
import AdminLayout from "layouts/admin";
import RtlLayout from "layouts/rtl";
import CompanyLayout from "layouts/company";
import Landing from "views/main/Landing";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import SignIn from "views/auth/signIn"
import SignUp from "views/auth/signUp"

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ThemeEditorProvider>
        <HashRouter>
          <Switch>
            {/* <Route path={`/auth`} component={AuthLayout} /> */}
            <Route path={`/user`} component={AdminLayout} />
            <Route path={`/auth/sign-in/default`} component={SignIn} />
            <Route path={`/auth/sign-up/default`} component={SignUp} />
            <Route path={`/rtl`} component={RtlLayout} />
            <Route path={`/company`} component={CompanyLayout} />
            {/* <Route path={`/company/jobDetails/:id`} component={CompanyLayout} /> */}
            <Route from='/' component={Landing} />
          </Switch>
        </HashRouter>
      </ThemeEditorProvider>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
