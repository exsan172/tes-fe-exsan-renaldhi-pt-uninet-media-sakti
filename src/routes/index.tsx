import { BrowserRouter, Route, Routes } from 'react-router'
import Page from '../pages'

const RouteApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Page.Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp