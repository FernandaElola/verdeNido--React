import './Main.css';
import { Banner } from './Banner';
import { Nav } from './Nav';
import { Footer } from './Footer';
import FloatingButton from './FloatingButton';

export const Main = () => {
    const date = new Date();

    return (
        <>   
            <main>
            <Banner />
            <FloatingButton />
            <Nav />
            <div class="alojamientos">
                <h1>Alojamientos</h1>
            </div>
            <Footer />
            </main>
        </>
    );
}
