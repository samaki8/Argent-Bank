// src/components/UserInfo.js

import { useSelector, useDispatch } from 'react-redux';
import { setUser } from './features/userSlice';

function UserInfo() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleSetUser = () => {
        dispatch(setUser({ name: 'John Doe', email: 'john@example.com' }));
    };

    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <button onClick={handleSetUser}>Set User</button>
        </div>
    );
}

export default UserInfo;
