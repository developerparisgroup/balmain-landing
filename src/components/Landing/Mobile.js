import React from "react";
import { Header, Image } from 'semantic-ui-react';
import Stack from '@mui/material/Stack';
import Counter from "../Counter";
import bgImage from '../../assets/images/bg.jpg';
import logoImage from '../../assets/images/logo.svg';
import SubscribeForm from "../SubscriptionForm";

const MobileView = () => {
    const { bg, text1Style } = styles;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>

            <div style={{ display: 'flex', flexGrow: 1 }}>
                <Image src={logoImage} size='small' centered />
            </div>

            <div style={bg}>
                <Stack spacing={4}>
                    <Header style={{ ...text1Style }}>Arriving in...</Header>
                    <Counter />
                </Stack>
            </div>

            <div style={{ display: 'flex', flexGrow: 2 }}>
                <SubscribeForm />
            </div>
        </div>
    );
};

const styles = {
    bg: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        flexGrow: 2,
    },
    text1Style: {
        fontFamily: 'Gotham',
        fontWeight: 700,
        fontSize: '2rem',
        textAlign: "center",
        textTransform: "uppercase",
        color: 'white'
    }
};


export default MobileView;