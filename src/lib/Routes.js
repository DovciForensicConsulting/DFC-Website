import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import PublicLayout from "../comps/layouts/PublicLayout"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Services from "../pages/Services"
import PageNotFound from "../pages/PageNotFound"

//-----------------PUBLIC ROUTES------------------------//
export const ROOT = "/"
export const CONTACT = "/contact"
export const SERVICES = "/services"
export const PAGENOTFOUND = "*"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={ROOT}>
            <Route element={<PublicLayout/>}>
                <Route index element={<Home/>}/>
                <Route path={CONTACT} element={<Contact/>}/>
                <Route path={SERVICES} element={<Services/>}/>
                <Route path={PAGENOTFOUND} element={<PageNotFound/>}/>
            </Route>
        </Route>
    )
)