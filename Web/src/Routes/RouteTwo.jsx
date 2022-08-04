import MenuTwo from '../components/MenuTwo'
import Details from '../components/Details'
import Contact from '../components/Contact'
import ScrollToTop from '../components/ScrollToTop';
import useLocalStorage from 'use-local-storage'

function RouteTwo() {

    const [darkMode, setDarkMode] = useLocalStorage('theme' ? 'dark-mode' : 'light-mode');

    return (
        <>
            <div className={darkMode ? "dark-mode" : "light-mode"}>
                <div id="menu" onClick={() => setDarkMode(!darkMode)}><i style={{color: "#fff"}} className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i></div>
                <MenuTwo />
                <div className="curved-div upper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill={darkMode ? "#fff" : "#000"} d="M0,224L26.7,240C53.3,256,107,288,160,298.7C213.3,309,267,299,320,250.7C373.3,203,427,117,480,74.7C533.3,32,587,32,640,58.7C693.3,85,747,139,800,154.7C853.3,171,907,149,960,165.3C1013.3,181,1067,235,1120,245.3C1173.3,256,1227,224,1280,224C1333.3,224,1387,256,1413,272L1440,288L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
                    </svg>
                </div>
                <div className="curved-div upper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill={darkMode ? "#fff" : "#000"} d="M0,224L26.7,240C53.3,256,107,288,160,298.7C213.3,309,267,299,320,250.7C373.3,203,427,117,480,74.7C533.3,32,587,32,640,58.7C693.3,85,747,139,800,154.7C853.3,171,907,149,960,165.3C1013.3,181,1067,235,1120,245.3C1173.3,256,1227,224,1280,224C1333.3,224,1387,256,1413,272L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
                    </svg>
                </div>
            </div>
        </>
    );
}

export default RouteTwo;