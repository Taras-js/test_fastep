import './App.css';
import React, {useEffect, useState} from 'react';

import {useQuery} from "@apollo/client";
import {Users} from "./components/Users"
import {GET_USERS} from "./api/query/user";
import Loader from "./components/loader";
import {AddUser, Header} from "./components/styled";
function App() {
    const {data: Clients, loading, refetch} = useQuery(GET_USERS)
    const [users, setUsers] = useState(null)
    useEffect(() => {
        if (Clients?.getUsers) {
            setUsers(Clients?.getUsers)
        }
    }, [Clients?.getUsers, setUsers])
    if (loading) {
        return <Loader/>
    }
    return (
        <div className="App">
            <Header>

                <div>List users</div>
                <AddUser>add User</AddUser>
            </Header>

            <Users users={users} setUsers={setUsers} refetch={refetch} loadUser={loading}/>
        </div>
    );
}

export default App;
