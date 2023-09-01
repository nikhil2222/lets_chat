import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./components/context/AccountProvider";

function App() {
  const clientId ='750673435854-mpk24hf3l7jc18mr9n7or6lkpipfqfdf.apps.googleusercontent.com'
  return (
   
    <GoogleOAuthProvider clientId={clientId}>
     <AccountProvider>
      <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
    
  );
}

export default App;
