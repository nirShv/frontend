import React from 'react'
import { Container, Grow, Grid } from '@material-ui/core'

import Navbar from './components/navbar/navbar'
import { Routes, Route } from 'react-router'

import Home from './components/home/home'
import Auth from './components/auth/auth'

const App = () => {

    return (

        <Container maxidth='lg'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/auth' element={<Auth />} />
            </Routes>
        </Container>

    )
}

export default App