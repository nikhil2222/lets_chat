//components
import { Dialog, Box, styled} from "@mui/material";
import Header from "./header";
import Search from "./Search";
import Conversations from "./Conversation";

const Menu = () =>{
    return (
        <Box>
          <Header/>
          <Search/>
          <Conversations/>
        </Box>
    )
}

export default Menu;