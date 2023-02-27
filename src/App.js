import logo from './logo.svg';
import './App.css';
import {UsersList} from "./components/UsersList";
import {people} from "./data/people";

export const App = () => {
    const users = [...people];
    users.sort(function (a, b) {
        if (a.last_name < b.last_name) {
            return -1;
        }
        if (a.last_name > b.last_name) {
            return 1;
        }
        return 0;
    });

    return <div className="App">
        <UsersList users={users}/>
    </div>
};
