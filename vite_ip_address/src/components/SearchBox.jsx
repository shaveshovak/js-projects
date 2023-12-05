import { Stack } from "@mui/material";
import bgImg from '../assets/bg.jpg';
import { Typography, TextField, FormControl }from '@mui/material';

const SearcBox = () => {
    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            height={'40vh'}
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: 'cover'
            }}
        >
            <Typography gutterBottom variant="h5" component="div" color={'#fff'}>
                IP Address Tracking
            </Typography>
        </Stack>
    )
}

export default SearcBox;
