
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './core/LandingPage';
import MainPage from './core/MainPage';
import { About } from './core/About';
import { ContactForm } from './core/Contact';
export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/portfoliov2/inicio" element={<LandingPage />} />
                <Route path="/portfoliov2/projects" element={<MainPage />} />
                <Route path="/portfoliov2/about" element={<About />} />
                <Route path="/portfoliov2/contact" element={<ContactForm />} />
            </Routes>
        </BrowserRouter>
    );
}


