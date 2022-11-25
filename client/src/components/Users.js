import React from 'react';
import {MainButton} from "./styled";
import Image from "./../assets/driver.svg";
import {useMutation} from "@apollo/client";
import {REMOVE_USER} from "../api/mutation/user";
import Loader from "./loader";
export const Users = ({users, setUsers, refetch, loadUser}) => {
    const [removeUser, {loading}] = useMutation(REMOVE_USER)
    function readUser(id) {
        return console.log('id:', id);
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
    if (loading || loadUser) {
        return <Loader/>
    }
    return (
        <div className='wrapper__carts'>
            {users && users.map(user => {
                return (
                    <div className='wrapper__cart' key={user.id}>

                        <img className='image__user' src={Image} alt={'no image'}/>
                        <div>Name: <b>{user?.first_name ? user?.first_name : 'No name'}</b></div>
                        <div>Phone: <b>{user?.phone ? user?.phone : 'No phone'}</b></div>
                        <div>Role: <b>{user?.role ? user?.role : 'No role'}</b></div>
                        <div className='wrapper__button'>
                            <MainButton onClick={() => {
                                readUser(user?.id)

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