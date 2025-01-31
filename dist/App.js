import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from './components/Navbar';
import Body from './components/Body';
import './styles/App.css'; // Include any CSS styles
const App = () => {
    return (_jsxs("div", Object.assign({ className: "App" }, { children: [_jsx(Navbar, {}), _jsx(Body, {})] })));
};
export default App;
