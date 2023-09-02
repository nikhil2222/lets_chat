import { useEffect, useState, useContext } from "react";
import { getUsers } from "../../../service/api";
import { Box, styled, Divider } from "@mui/material";
import { AccountContext } from "../../context/AccountProvider";
// components
import Conversation from "./Conversatations.jsx";
const Components = styled(Box)`
   height:81vh;
   overflow:overlay;
`

const StyledDivider = styled(Divider)
`  
    margin: 0 0 0 70px; 
    background-color:#e9edef;
    opacity: 0.6;
`
const Conversations = ({text}) => {
    const [users, setUsers] = useState([]);
    const { account } = useContext(AccountContext);
    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredData);
         
        }
        fetchData();
    }, [text]);
    return (
        <Components>
            {
                users.map(user => (
                    user.sub !== account.sub &&
                    <>
                        <Conversation user={user} />
                        <StyledDivider />
                    </>
                ))
            }
        </Components>
    )
}

export default Conversations;