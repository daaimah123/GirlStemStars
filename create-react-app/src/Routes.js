import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { CssAccordion } from "./components/CssAccordion";
import { HtmlAccordion } from "./components/HtmlAccordion";


export default class Routes extends Component {
    render() {
        return (
            <Router>
                {/* <Switch> */}
                <Route path="/" exact component={HomePage} />
                <Route path="/css" component={CssAccordion} />
                <Route path="/html" component={HtmlAccordion} />
                {/* </Switch> */}
            </Router>
        )
    }
}
