import React, { useEffect, useState } from 'react';
import './front.css';
import axios from 'axios';
import 'simplebar/dist/simplebar.min.css';
import Spinner from 'react-bootstrap/Spinner';
import User from './User'
import SimpleBar from 'simplebar-react';
import SearchBar from './SearchBarFront'

const Front = (props) => {
    const [userList, setUserList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [keyword, setKeyword] = useState("");

    //API address
    const link = 'https://randomuser.me/api/?results=25';

    //Fetch Data from API
    const [isDirty, setDirty] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);

    useEffect(() => {
        async function fetchData(link) {
            setLoading(true);
            setError(false);
            try {
                console.debug("Success ");
                const response = await axios.get(link);
                setUserList(response.data.results);
            } catch (error) {
                console.error(`Request Failed: ${error}`);
                setError(true);
            } finally {
                setLoading(false);


            }
        };
        fetchData(link);
    }, [isDirty]);

    useEffect(() => {
        const handleSearch = (keyword) => {
            //Split into tokens and ignore whitespace
            let tokens = keyword
                .toLocaleLowerCase()
                .split(" ")
                .filter((token) => token.trim() !== "")

            //check if tokens is not empty
            if (tokens.length) {

                //Define regex term , gim Global Ignore-case Multiline
                let searchTermRegex = new RegExp(tokens.join("|", "gim"));
                let filteredList = userList.filter((user) => {

                    //Stringify the user object
                    let userString = "";
                    let properties = [
                        user.name.first,
                        user.name.last,
                        user.location.country,
                        user.location.city,
                        user.location.street.number,
                        user.location.street.name,
                        user.email,
                    ];
                    properties.forEach(val => userString += `${val} `);
                    console.log(tokens);
                    console.log(userString.toLocaleLowerCase());

                    //Perform match and return 
                    return userString.toLocaleLowerCase().match(searchTermRegex);
                });
                setFilteredList(filteredList);
            }
        }
        handleSearch(keyword);
    }, [keyword, userList]);

    //Display list of users
    const displayUserList = () => userList.map(displayUser);

    const displayFilteredList = () => {
        if (filteredList.length === 0) {
            return <p>Sorry, no results =(</p>;
        }
        return filteredList.map(displayUser);
    }

    //Display user component
    function displayUser(user) {
        return (
            <User
                user={user}
                deleteHandler={handleDelete}
                key={user.login.uuid}
            />
        )
    }

    const handleDelete = (e) => {
        //get user uuid
        const userId = e.login.uuid;
        //filter by uuid
        let filteredUsers = userList.filter((user) => {
            return (user.login.uuid !== userId);
        });
        //update list
        setUserList(filteredUsers);
    }

    //reset filtered list and set data as dirty
    const handleRefresh = () => {
        setFilteredList([]);
        setDirty(!isDirty);
    };

    //Render
    return (
        <div className="front">
            <section className={`mx-2 border ${isError? "border-danger" :"border-success"}`}>
                <div className="px-5 py-3">
                    <p className="text-sm-left"> This is a small Frontend, with API fetching and data sorting.
                    Under the hood, it uses axios for fetching and React hooks.
                The full source code can be seen <a href="https://github.com/Zenb0t/userlist-frontend" target="_blank" rel="noopener noreferrer" ><strong>here</strong></a></p>
                    <p className="text-sm-left"> Since it uses a public API, there might be occasional network errors,
                    just refresh until the api responds.</p>
                </div>
            </section>
            <hr></hr>

            <main className="mdc-card bg-light card-position px-1">
                <SearchBar
                    keyword={keyword}
                    setKeyword={setKeyword}
                    //handleSearch={handleSearch}
                    handleRefresh={handleRefresh}>
                </SearchBar>
                <SimpleBar style={{ maxHeight: 500 }}>
                    <div className="list-unstyled container">
                        <div className="row justify-content-center">
                            {isLoading
                                ? <span>Loading...
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        role="status">
                                    </Spinner>
                                </span>
                                : keyword.length
                                    ? displayFilteredList()
                                    : isError
                                        ? "An error occured, please refresh"
                                        : displayUserList()}
                        </div>
                    </div>
                </SimpleBar>

            </main>

        </div >
    );
}

export default Front;