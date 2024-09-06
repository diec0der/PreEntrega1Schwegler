import { Outlet } from "react-router-dom";
import Footer from "../Footer/footer";

function Index({ onSearch }) {
    return (
        <div>
            <Outlet context={{ onSearch }} />
            <Footer />
        </div>
    );
}

export default Index;