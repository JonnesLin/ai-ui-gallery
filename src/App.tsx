import { GalleryLayout } from './gallery'
import { ErrorBoundary } from './components/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <GalleryLayout />
    </ErrorBoundary>
  )
}

export default App
