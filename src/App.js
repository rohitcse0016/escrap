import React from 'react'

// import component ?
import Drawer from 'react-modern-drawer'

//import styles ?
import 'react-modern-drawer/dist/index.css'
import Dashboard from './screens/Dashboard/Dashboard.tsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import appRoutes from './routes/appRoutes.js'


const App = () => {
  const [isOpen, setIsOpen] = React.useState(true)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <Drawer open={isOpen} onClose={toggleDrawer} direction='left'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard onClick={()=>setIsOpen(true)} />}>
          {appRoutes}
        </Route>
      </Routes>
    </BrowserRouter>
    </Drawer>
    // <>
    //   <Dashboard onClick={()=>setIsOpen(true)}/>

      // <Drawer open={isOpen} onClose={toggleDrawer} direction='left'>
      //   <div>Hello World</div>
      // </Drawer>
    // </>
  )
}

export default App