import '../styles/globals.css'
import Navbar from '../components/Navbar.js'
import Footer from '../components/footer.js'

function MyApp({ Component, pageProps }) {
  return <><Navbar /><Component {...pageProps} /><Footer /></>
}

export default MyApp
