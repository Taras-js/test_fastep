import './App.css';
import {useMutation, useQuery} from "@apollo/client";

import {GET_USERS} from "./api/query/user";
function App() {
    const {data: Users, loading} = useQuery(GET_USERS)
        console.log('Users?.getUsers:', Users)
    return (
    <div className="App">
      <div>Start</div>
    </div>
  );
}

export default App;
