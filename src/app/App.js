import React from "react";
import {PostsScreen} from "../posts-screen/posts-screen";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {PostDetails} from "../post-details/post-details";

export const App = () => {
    return(
<BrowserRouter>
<Switch>
    <Route exact path="/" component={PostsScreen} />
    <Route exact path="/:id" component={PostDetails} />
</Switch>
</BrowserRouter>
    )
};
