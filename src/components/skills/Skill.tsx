import { Box, Grid } from "@mui/material";
import ResponsiveTypography from "../ResponsiveText";
import { SkillTypes } from "./SkillList";

const Skill: React.FC<{ label: string, color: string, type: SkillTypes[], icon: any }> = ({ 
    label, 
    color, 
    type, 
    icon, 
}) => {
    return (
        <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
            <Box
                sx={{
                    border: ` 1px solid ${color}`,
                    display: 'flex',
                    textAlign: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '2rem',
                }}
            >
                {icon(color)}
                <ResponsiveTypography 
                    variant='body1'
                    sx={{ marginTop: '1rem' }}
                >{label}</ResponsiveTypography>
            </Box>
        </Grid>
    );
}

export default Skill;