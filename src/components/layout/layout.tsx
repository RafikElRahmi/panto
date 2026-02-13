import Footer from "./footer";
import Navbar from "./navbar";

function Layout({ children }: { children: React.ReactNode }) {
    return <div className="mx-auto relative w-screen max-w-365 lg:w-full">
        <Navbar />
        <main id="main-content">
            { children }
        </main>
        <Footer />    
    </div>;
}

export default Layout;
