import React from 'react';
import { useTimer } from 'react-timer-hook';
import { Header } from 'semantic-ui-react';

const LAUNCHING_DATE = "04/21/2023";

const Counter = () => {
    const { container, bg, text, divider } = styles;
    const { minutes, hours, days } = useTimer({ expiryTimestamp: new Date(LAUNCHING_DATE).getTime(), onExpire: () => { } });

    return (
        <div style={container}>
            <div style={bg}>
                <Header style={text}>{days}</Header>
                <div style={divider} />
                <Header style={{ ...text, fontSize: '1.5rem', fontWeight: '300', fontStyle: 'italic' }}>days</Header>
            </div>

            <div style={bg}>
                <Header style={text}>{hours}</Header>
                <div style={divider} />
                <Header style={{ ...text, fontSize: '1.5rem', fontWeight: '300', fontStyle: 'italic' }}>hrs</Header>
            </div>

            <div style={bg}>
                <Header style={text}>{minutes}</Header>
                <div style={divider} />
                <Header style={{ ...text, fontSize: '1.5rem', fontWeight: '300', fontStyle: 'italic' }}>mins</Header>
            </div>
        </div>
    );
};


const styles = {
    container: {
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2vw',
        flexDirection: 'row',
        flexGrow: 1
    },
    bg: {
        display: 'flex',
        flexGrow: 1,
        width: '10rem',
        height: '10rem',
        background: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: "blur(20px)",
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    text: {
        fontFamily: 'Gotham',
        fontWeight: "700",
        fontSize: '3.5rem',
        textAlign: "center",
        color: 'White',
        margin: 0,
        padding: 0
    },
    divider: {
        width: '90%',
        border: '1px solid #F2F2F2',
        background: '#F2F2F2',
        borderRadius: 20
    }
};

export default Counter;