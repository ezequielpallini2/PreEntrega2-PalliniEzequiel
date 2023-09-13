import Navbar from './components/Navbar.jsx';
import Container from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
function App() {

  return (
    <>
      <Navbar />
     
      <ItemDetailContainer itemID={2}/> 
      </>
  )
}

export default App

