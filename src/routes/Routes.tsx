import { Switch, Route } from "react-router-dom";

// Pages
import { 
    Home,
    Contact,
    Login,
    Register,
    Section,
} from '../pages'

export default function Routes() {
    return (
        <Switch>
            <Route path="/section">
                <Section />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}