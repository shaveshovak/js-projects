import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';

const InfoBox = () => {
    const api_url = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${import.meta.env.VITE_API_KEY}`;
    
    const [address, setAddress] = useState(null);
    // const [ipAddress, setIpAddress] = useState("");

    // useEffect(() => {   
    //     try {
    //         const getInitialInfo = async () => {
    //             const res = await fetch(api_url);
    //             const data = await res.json();
    //             setAddress(data)
    //         }

    //         getInitialInfo();
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }, []);

    console.log(address)
    return (
        <Card style={{
            minWidth: 'calc(100% - 200px)',
            margin: 'auto',
            padding: '2em'
        }}>
            {/* {address && 
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div" textAlign={'center'}>
                            What Is My IP?
                        </Typography>
                        <Typography gutterBottom variant="p" component="div" spacing={2}>
                            <FontAwesomeIcon icon={faArrowAltCircleRight} size='sm' style={{
                                marginRight: '0.5em'
                            }} />
                            My Public IPv4 is: {address.ip}
                        </Typography>
                        <Typography gutterBottom variant="p" component="div" spacing={2}>
                            <FontAwesomeIcon icon={faArrowAltCircleRight} size='sm' style={{
                                marginRight: '0.5em'
                            }} />
                            Country: {address.location.country}
                        </Typography>
                        <Typography gutterBottom variant="p" component="div" spacing={2}>
                            <FontAwesomeIcon icon={faArrowAltCircleRight} size='sm' style={{
                                marginRight: '0.5em'
                            }} />
                            Region: {address.location.region}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            } */}
            text
        </Card>
    );
}

export default InfoBox;