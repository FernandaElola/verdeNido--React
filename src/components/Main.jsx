import './Main.css';
import { Banner } from './Banner';
import { Nav } from './Nav';
import { Footer } from './Footer';
import FloatingButton from './FloatingButton';
import AlojamientoList from './AlojamientoList';
import IntroMain from './IntroMain';


export const Main = () => {


    return (
        <>   
            <main>
                <Banner />
                <Nav />
                <IntroMain />
                <AlojamientoList />
                <Footer />
            </main>
        </>
    );
}
