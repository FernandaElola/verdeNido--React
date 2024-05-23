import './Main.css';
import { Banner } from './Banner';
import { Nav } from './Nav';
import { Footer } from './Footer';
import FloatingButton from './FloatingButton';
import AlojamientoList from './AlojamientoList';


export const Main = () => {


    return (
        <>   
            <main>
                <Banner />
                <FloatingButton />
                <Nav />
                <AlojamientoList />
                <div class="alojamientos">
                    <h1>Alojamientos</h1>
                </div>
                <Footer />
            </main>
        </>
    );
}
