import './App.css';
import React, {useEffect, useState} from 'react';

import {useMutation, useQuery} from "@apollo/client";
import {Users} from "./components/Users"
import {GET_USERS} from "./api/query/user";
import Loader from "./components/Loader";
import {AddUser, Header, MainButton, Input} from "./components/styled";
import Image from "./assets/driver.svg";
import Modal from "./components/Modal";
import {CREATE_USER} from "./api/mutation/user";

function App() {
    const [active, setActive] = useState(false)
    const {data: Clients, loading, refetch} = useQuery(GET_USERS)
    const [createUser, {loading: loadingCreateUser}] = useMutation(CREATE_USER)

    const [users, setUsers] = useState(null)
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [error, setError] = useState(false)
    useEffect(() => {
        if (Clients?.getUsers) {
            setUsers(Clients?.getUsers)
        }
    }, [Clients?.getUsers, setUsers])


    async function addUser() {
        if(name === '' || role === '' || phone === ''){
            setError(true)
        } else {
            setActive(false)
            setError(false)
            await createUser({
                variables: {
                    name,
                    phone,
                    role
                }
            }).then(({data}) => {
                console.log(`user ${phone} created!`)
                refetch()
            })
            setName('')
            setPhone('')
            setRole('')
        }
    }
    if (loading || loadingCreateUser) {
        return <Loader/>
    }
    return (
        <div className="App">
            <Header>
                <div>List users</div>
                <AddUser onClick={() => {
                    setActive(true)
                    setError(false)
                }}>add User</AddUser>
            </Header>
            <Modal active={active} setActive={setActive}>
                <div className='wrapper__cart'>
                    <img className='image__user' src={Image} alt='user'/>
                    {error
                        ? <div className={'error'}>All fields are required</div>
                        : <div/>
                    }
                    <div className={'wrapper__input'}>
                        <div>Name:</div>
                        <Input required type="text" value={name}
                                      placeholder={'enter name'}
                                      onChange={(e) => setName(e.target.value)}
                                      autoFocus
                    />
                    </div>
                    <div className={'wrapper__input'}>
                        <div>Phone:</div>
                        <Input required type="tel" value={phone} pattern="/+[0-9]{3}-[0-9]{3}/"
                                       placeholder={'X XXX XXX XX XX'}
                                       onChange={(e) => setPhone(e.target.value.replace(/[a-zа-яё]/g, ""))}
                    />
                    </div>
                    <div className={'wrapper__input'}>
                        <div>Role:</div>
                        <Input required type="text" value={role}
                                      placeholder={'enter role'}
                                      onChange={(e) => setRole(e.target.value)}
                    /></div>
                    <div className={'wrapper__button'}>
                        <MainButton onClick={() => {
                            addUser()
                        }}>Save
                        </MainButton>
                        <MainButton onClick={() => {
                            setActive(false)
                        }}>Close
                        </MainButton>
                    </div>
                </div>
            </Modal>
            <Users users={users} setUsers={setUsers} refetch={refetch} loadUser={loading}/>
        </div>
    );
}

export default App;
