//components
import { Dialog, Box, styled} from "@mui/material";
import Header from "./header";
import Search from "./Search";
import Conversations from "./Conversation";
import { useState } from "react";

const Menu = () =>{
  const [text,setText] = useState('');
    return (
        <Box>
          <Header/>
          <Search setText={setText}/>
          <Conversations text={text}/>
        </Box>
    )
}

export default Menu;