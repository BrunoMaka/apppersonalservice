import React, { Fragment } from 'react';
import MainRegisterForm from "../../../../components/auth/register/main_register_form"
import { Column, Section, Title, Button, Container, Card } from "rbx";
import LogoImage from '../../../../assets/images/logo.png'; 
import "../../../../styles/start.scss";

const MainUserRegisterScreen = () => (
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
                                          <MainRegisterForm/>
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

export default MainUserRegisterScreen;