import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LifecycleClass } from './Lifecycle-learning/LifecycleClass'
import { FunctionalLifeCycle } from './Lifecycle-learning/FunctionalLifeCycle'
import { ResultMark } from './Lifecycle-learning/ResultMark'
import { EmployeeListIndex } from './EmployeeTable/EmployeeListIndex'
import { FetchApiGet } from './API-learning/FetchApiGet'
import { FetchApiGet2 } from './API-learning/FetchApiGet2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmployeeListIndex />
  </StrictMode>,
)
