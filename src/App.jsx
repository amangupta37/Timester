import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./router";

const App = () => {
    return (
        <Suspense fallback={<h1>Loading....</h1>}>
            <Router>
                <Routes>
                    {routes?.map((route) => (
                        <Route
                            key={route?.key}
                            path={route?.path}
                            element={route?.component}
                        />
                    ))}
                </Routes>
            </Router>
        </Suspense>
    );
};

export default App;
