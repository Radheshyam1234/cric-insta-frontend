import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import loadable from '@loadable/component'
import TopBarProgress from 'react-topbar-progress-indicator'

// Lazy Loading Components
const Login = loadable(() => import('routes/login/login'), {
  fallback: <TopBarProgress />,
})

const App = () => {
  return (
    <div>
      <Suspense fallback={<TopBarProgress />}>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
