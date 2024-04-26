import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Pets } from './pages/Pets/Pets'
import { PetDetails } from './pages/PetDetails'
import { Shelter } from './pages/Admin/Shelter'
import { PetList } from './service/pets'
import { AuthHOC } from './components/common/AuthHOC.tsx/AuthHOC'
import { PetForm } from './pages/Admin/PetForm/PetForm'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/pets',
        children: [
            {
                index: true,
                element: <Pets />
            },
            {
                path: '/pets/:id',
                element: <PetDetails />,
            }
        ],
    },
    {
        path: '/admin',
        children: [
            {
                index: true,
                element: <Shelter />,
            },
            {
            path: '/admin/pets',
            element: <AuthHOC/>,
            children: [
                 {
                    index: true,
                    element: <PetList />,
                 },
                ],
            },
        ]
    },
    {
        path: '/admin/pets/new',
        element: <PetForm />,
      },
      {
        path: '/admin/pets/:id',
        element: <PetForm />,
      },

])

export default router