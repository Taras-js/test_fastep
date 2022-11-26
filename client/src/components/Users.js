import React, {useState} from 'react';
import {Input, MainButton} from "./styled";
import Image from "./../assets/driver.svg";
import {v4 as uuidv4} from 'uuid';
import {useMutation} from "@apollo/client";
import {UPDATE_USER, REMOVE_USER} from "../api/mutation/user";
import Loader from "./Loader";
import Modal from "./Modal";

export const Users = ({users, setUsers, refetch, loadUser}) => {
    const [removeUser, {loading}] = useMutation(REMOVE_USER)
    const [updateUser, {loading: loadingUpdateUser}] = useMutation(UPDATE_USER)
    const [active, setActive] = useState(false)
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [error, setError] = useState(false)
    const [userId, setUserId] = useState(null)

    async function saveUser() {
        if (name === '' || role === '' || phone === '') {
            setError(true)
        } else {
            setActive(false)
            setError(false)
            await updateUser({
                variables: {
                    id: userId,
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
            setUserId(null)
        }
    }

    function readUser(data) {
        setError(false)
        setName(data.first_name)
        setPhone(data.phone)
        setRole(data.role)
        setUserId(data.id)
        setActive(true)
        console.log('id:', userId);
    }

    async function deleteUser(id) {
        await removeUser({
            variables: {
                id: id,
            }
        }).then(({data}) => {
            console.log(`user ${id} removed!`)
            refetch()

        })
    }

    if (loading || loadUser || loadingUpdateUser) {
        return <Loader/>
    }

    return (
        <div className='wrapper__carts'>
            <Modal active={active} setActive={setActive}>
                <div className='wrapper__cart'>
                    <img className='image__user' src={Image} alt={'user'}/>
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
                        <MainButton onClick={saveUser}>
                            Save
                        </MainButton>
                        <MainButton onClick={() => {
                            setActive(false)
                        }}>Close
                        </MainButton>
                    </div>
                </div>
            </Modal>
            {users && users.map(user => {
                return (
                    <div className='wrapper__cart' key={uuidv4()}>

                        <img className='image__user' src={Image} alt={'user'}/>
                        <div>Name: <b>{user?.first_name ? user?.first_name : 'No name'}</b></div>
                        <div>Phone: <b>{user?.phone ? user?.phone : 'No phone'}</b></div>
                        <div>Role: <b>{user?.role ? user?.role : 'No role'}</b></div>
                        <div className='wrapper__button'>
                            <MainButton onClick={() => {
                                readUser({
                                    id: user.id,
                                    first_name: user.first_name,
                                    phone: user.phone,
                                    role: user.role
                                })
                            }}>
                                Edit
                            </MainButton>
                            <MainButton onClick={async () => {
                                await deleteUser(user?.id)
                            }}>
                                Remove
                            </MainButton>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}