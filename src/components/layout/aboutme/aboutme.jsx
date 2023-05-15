import Typography from '@mui/material/Typography';

function Section({label,data}){
    return(
        <Typography component={'span'} sx={{display:'flex',flexDirection:'row',justifyContent:"center",marginLeft:"10px",marginRight:"10px"}}>   
            <p className='text-page'>{label}:</p>
            <p className='text-page'>{data}</p>
        </Typography>
    )
}
const Navbar = () => {
    return (
            <div>  
                <Typography className='text-page' variant="h4" style={{display:'flex',justifyContent:"center"}}>🍁 About Me</Typography>
                <Section label={"Age"} data={"24"}/>
                <Section label={"Birthday"} data={"Oct,11"}/>
                <Section label={"Nationality"} data={"Canadian"}/>
                <Section label={"Country"} data={"Argentina"}/>
                <Section label={"State"} data={"Buenos Aires"}/>
            </div>

    );
};
export default Navbar;