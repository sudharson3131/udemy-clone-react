// Component Imports
import Navbar from "./components/Navbar";
import Catgory from "./components/Catgory";
import Recomended from "./components/Recomended";
import Topic from "./components/Topic";
import Popular from "./components/Popular";
import Footer from "./components/Footer";

// Styles


function App() {
    return (
        <>
            <Navbar />
            <Catgory></Catgory>
            <Recomended />
            <Topic />
            <Popular />
            <Footer />
        </>
    );
}

export default App;
