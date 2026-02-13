import Footer from "./footer";
import Navbar from "./navbar";

function Layout({ children }: { children: React.ReactNode }) {
    return <div className="mx-auto relative w-screen maw-w-365 lg:w-full">
        <Navbar />
        { children }
        <Footer />    
    </div>;
}

export default Layout;
