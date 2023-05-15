import Typography from '@mui/material/Typography';
const Hireme = () => {
    return (
        <div className='left-card-container-content'>
            <h1 className='text-page'>Hire Me</h1>
            <p className='text-page'>Do you want to hire my services as a freelancer? I can make you a website. Contact me on Discord or Twitter with a brief summary of the project followed by a 
            list of key details to consider in a word document (docx) or pdf. For example:</p>
            <h2 className='text-project-hireme'>Project Name</h2>
            <p className='text-project-hireme'>Hello, I want a __________ software that allows me to do __________. This must be customizable, configurable and translatable. This is a list of features that the project needs to have:
                Feature #1
                Feature #2
                Feature #3
                Feature #4
                Feature #5
                This should be completed by __________ date. The project is inspired by _________ which you can use to get references.
            </p>
            <p className='text-page'>With all the details explained I can calculate a price estimate and a delivery date.</p>
        </div>
    );
};
export default Hireme;