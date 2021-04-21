import React, { Fragment, useState } from 'react';
import { Button, Field, Label, Control, Input, Column, Section, Help } from "rbx";
import { Redirect } from "react-router-dom";


function ProfRegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [error, setError] = useState(false);

    if(redirectToLogin == true)
    return <Redirect to={{pathname: "/prof_users/login"}}/>

    return (
        <Fragment>
            <Column.Group centered>
                <form>
                    <Column size={12}>
                        <Field>
                            <Label size="small">Nome:</Label>
                            <Control>
                            <Input 
                                type="name" 
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                                name="name"
                            />
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small">Email:</Label>
                            <Control>
                            <Input 
                                type="email" 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                name="email"
                            />
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small">Password:</Label>
                            <Control>
                            <Input 
                                type="password" 
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                                name="password"
                            />
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                            <Column.Group breakpoint="mobile">
                                <Column>
                                    <a onClick={e => setRedirectToLogin(true)} className="button is-white has-text-custom-blue">Faça o login</a>
                                </Column>
                                <Column>
                                    <Button color="info" outlined>Registrar</Button>
                                </Column>
                            </Column.Group>
                            </Control>
                        </Field>
                        { error && <Help color="danger">Email ou Password inválido</Help> }
                    </Column>
                </form>
            </Column.Group>
        </Fragment>
  )
}

export default ProfRegisterForm;