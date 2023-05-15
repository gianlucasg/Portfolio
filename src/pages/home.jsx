// import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
const Home = () => {
    return (
        <div className='left-card-container-content'>
            <div className='home-profile-text'>
                <Avatar alt="GG" src="/profile.jpeg" sx={{marginLeft:'20px',width: 150, height: 150}}/>
                <div className='profile-text'>
                    <h1 className='text-page'>Gianlucas</h1>
                    <p className='text-page'>⚛️ Full Stack Web Developer - Ruby on Rails - React</p>
                    <p className='text-page'>💜 Coding twitch stuff or gaming proyects like a hobby</p>
                </div>
            </div>

            <h2 className='text-page'>Who am i ?</h2>
            <p className='text-page'> My name is Gianlucas, I am a 24yo Canadian programmer that lives in Argentina</p>
            <p className='text-page'>I'm very passionate about programming, I am fullstack but i prefer backend</p>
            <p className='text-page'>I really like tea ☕, gaming 🎮 and donuts 🍩</p>

        </div>
    );
};
export default Home;