import './Main.css';
import { Banner } from './Banner';
import { Nav } from './Nav';
import { Footer } from './Footer';

export const Main = () => {
    const date = new Date();

    return (
        <>   
            <main>
            <Banner />
            <Nav />
            <div class="alojamientos">
                <h1>Alojamientos</h1>
            </div>
            <Footer />
            </main>
        </>
    );
}
