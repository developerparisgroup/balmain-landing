import React from "react";
import { Grid, GridColumn, Header, Segment, Image } from 'semantic-ui-react';
import Stack from '@mui/material/Stack';
import Counter from "../Counter";
import bgImage from '../../assets/images/bg.jpg';
import logoImage from '../../assets/images/logo.svg';
import SubscribeForm from "../SubscriptionForm";

const ComputerView = () => {
    const { noSpaces, bg, text1Style } = styles;

    return (
        <Segment basic style={noSpaces}>
            <Grid columns={2} style={noSpaces} stretched>
                <GridColumn width={5} style={noSpaces}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', flex: 1 }}>
                            <Image src={logoImage} size='small' centered />
                        </div>
                        <div style={{ display: 'flex', flex: 5 }}>
                            <SubscribeForm />
                        </div>
                    </div>
                </GridColumn>
                <GridColumn width={11} style={{ ...noSpaces }}>
                    <div style={bg}>
                        <Stack spacing={4}>
                            <Header style={{ ...text1Style, marginTop: '40vh' }}>Arriving in...</Header>
                            <Counter />
                        </Stack>
                    </div>
                </GridColumn>
            </Grid>
        </Segment>
    );
};

const styles = {
    noSpaces: {
        padding: 0,
        margin: 0
    },
    bg: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top'
    },
    text1Style: {
        fontFamily: 'Gotham',
        fontWeight: 700,
        fontSize: '4.8rem',
        textAlign: "center",
        textTransform: "uppercase",
        color: 'white'
    }
};


export default ComputerView;