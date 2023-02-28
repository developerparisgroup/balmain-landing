import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import MuiPhoneInput from 'material-ui-phone-number';
import { Button, Header, List } from 'semantic-ui-react';

const SubscribeForm = () => {
    const { header1, container, section1, section2, section3, section4, button } = styles;

    return (
        <div style={container}>
            <div style={section1}>
                <Header style={{ ...header1 }}>special sales are coming online</Header>
            </div>

            <div style={section2}>
                <List>
                    <List.Item icon='star outline' content='Unique discounts on your favorites items' style={{ ...header1, fontSize: '1.25rem', fontWeight: '400' }} />
                    <List.Item icon='star outline' content='Obtain POINTS to collect amazing rewards' style={{ ...header1, fontSize: '1.25rem', fontWeight: '400' }} />
                </List>
            </div>

            <div style={section3}>
                <Header style={{ ...header1, fontStyle: 'italic', fontSize: '1.5rem', fontWeight: '500' }}>Get notified when we get live!</Header>

                <Stack spacing={2}>

                    <Stack spacing={2} direction="row">
                        <TextField fullWidth placeholder='First Name' variant="outlined" size='small' />
                        <TextField fullWidth placeholder='Last Name' variant="outlined" size='small' />
                    </Stack>

                    <TextField fullWidth type='date' placeholder='Birthday' variant="outlined" size='small' />
                    <MuiPhoneInput
                        defaultCountry='ae'
                        fullWidth
                        size='small'
                        variant="outlined"
                        placeholder='Phone Number'
                        regions={['north-america', 'south-america', 'central-america', 'carribean', 'european-union', 'ex-ussr', 'middle-east', 'north-africa']}
                    />

                    <TextField fullWidth type="email" placeholder='Email' variant="outlined" size='small' />
                </Stack>

                <Button style={button} content={"Subscribe"} />
            </div>

            <div style={section4}>
                <Header textAlign='center' style={{ ...header1, fontSize: '.8rem', fontWeight: '700' }}>© Copyrights paris group | All Rights Reserved</Header>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        margin: '3vh 5vw 3vh 5vw'
    },
    section1: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        flexGrow: 1,
    },
    section2: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        flexGrow: 1,
    },
    section3: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        flexGrow: 3,
    },
    section4: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "flex-end",
        flexGrow: 1,
        alignItems: 'center',
    },
    header1: {
        fontFamily: 'Gotham',
        fontWeight: "700",
        fontSize: '3rem',
        textTransform: "uppercase",
        color: 'black',
    },
    button: {
        marginTop: '3vh',
        background: "#EAEAEA",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        borderRadius: 30,
        fontWeight: '700',
        height: '5vh',
        width: '50%',
        alignSelf:'center'
    }
};

export default SubscribeForm;