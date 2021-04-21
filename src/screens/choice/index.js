import React, { Fragment } from 'react';
import { Column, Section, Title, Button, Container, Card } from "rbx";
import LogoImage from '../../assets/images/logo.png'; 
import "../../styles/start.scss";



const ChoiceScreen = () => (
    <Fragment>
        <Section size="large" className="start">
            <Container>
                <Column.Group>
                    <Column>
                        <Card>
                            <Card.Content>
                                <Section>
                                    <Column.Group>
                                        <Column size={12}>
                                            <img src={LogoImage}></img>
                                        </Column>
                                    </Column.Group>

                                    <Column.Group >
                                        <Column size={12}>
                                            <Button.Group>
                                                <Button outlined color="black" fullwidth size="large" as="a">Usuário</Button>
                                                <Button outlined color="black" fullwidth size="large" as="a">Profisional</Button>
                                                <Button outlined color="black" fullwidth size="large"  as="a">Local</Button>
                                            </Button.Group>
                                        </Column>
                                    </Column.Group>
                                </Section>

                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
);

export default ChoiceScreen;