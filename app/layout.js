import "./globals.css";
import './fanta.css'
import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";
import EmailInput from "@/components/Emailinput";
import ProductsProvider from "@/context/ProductContext";

export const metadata = {
  title: "MiniStore",
  description: "An awesome e-commerce store for programmers and productivity enthusiasts!",
};

export default function RootLayout({ children }) {
  return (
    <ProductsProvider>
      <html lang="en">
        <Head />
        <body>
          {/* Portal root: modals render here instead of inside Products (avoid layout & z-index issues) */}
          <div id="portal" />
          <div id="app" >
            <header>
              <div className="header-content">

                <Link href="/">
                  <h1>MiniStore</h1>
                </Link>

                <h5 className="mid-text">- Cool products for everyday use -</h5>
                <Cart />
              </div>
            </header>

            <main>
              {children}
            </main>
            <div className="hr" />

            <footer>
              <div className="email-container">
                <h5>Get a sneak peak at new additions to the store, special offers and more!</h5>
                <EmailInput />
              </div>

              <div className="links-container">
                <div>
                  <h3>Store</h3>
                  <Link href={'/'}>Home</Link>
                  <Link href={'/cart'}>Cart</Link>
                </div>
                <div>
                  <h3>Support</h3>
                  <Link href={'/faqs'}>FAQs</Link>
                </div>
              </div>

              <div className="footer-text">
                <p>© aadhuDev 2025<br />Built with NextJS 🔥</p>
              </div>
            </footer>
          </div>
        </body>
      </html>
    </ProductsProvider>
  );
}
