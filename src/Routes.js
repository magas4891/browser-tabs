import React from "react";
import {Route, Switch} from "react-router-dom";
import {About, Features, Home} from "./pages";

export default function Routes() {
    return(
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/features">
                <Features />
            </Route>
            <Route path="/" exaxt={true}>
                <Home />
            </Route>
        </Switch>
    );
}
