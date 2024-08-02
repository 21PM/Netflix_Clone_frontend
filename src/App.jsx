import Body from "./components/Body"
import { Toaster } from 'react-hot-toast';
import FullScreenDialog from "./components/MovieDialog";
function App() {


  return (
      <>
        <Body/>
        <Toaster/>
        <FullScreenDialog/>
      </>
  )
}

export default App
