import Footer from "./footer";
import Navbar from "./navbar";

function Layout({ children }: { children: React.ReactNode }) {
    return <div>
        <Navbar />
        { children }
        <Footer />    
    </div>;
}

export default Layout;
