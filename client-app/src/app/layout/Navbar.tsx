import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import './styles.css';

interface Props{
    openForm: () => void;
}

export default function Navbar({openForm}: Props) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='/assets/logo.png' alt='logo' style={{marginRight: '10px'}}/>
                    Reactivities
                    <Menu.Item name='Activities' />
                    <Menu.Item>
                        <Button onClick={openForm} positive content='Create Activity' />
                    </Menu.Item>
                </Menu.Item>
            </Container>
        </Menu>
    )
}