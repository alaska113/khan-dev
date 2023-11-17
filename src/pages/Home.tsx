import { Typography } from "@mui/material";
import Page from "../components/Page";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const fadeInTimer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(fadeInTimer);
    }, []);
    
    return (
        <Page>
            <div className={`home ${isVisible ? 'fade-in' : 'fade-out'}`}>
                <div>
                    <Typography variant="h3">Hey there, I'm Khan.</Typography>
                    <Typography variant="h5">A Full-Stack Engineer.</Typography>
                    <Typography variant="h5" style={{marginTop: '10px'}}>Download my <a href='/Resume110823.pdf' download='khan-howe-resume.pdf'>resume</a> or learn more about me <span className='about-link' onClick={() => {navigate('/about')}}>here</span>.</Typography>
                </div>
            </div>
        </Page>
    );
}

export default Home;