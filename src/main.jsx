import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import uploadProvider from './components/context/UploadProvider.jsx'

import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/aos/aos.css'
import './assets/vendor/glightbox/css/glightbox.min.css'
import './assets/vendor/swiper/swiper-bundle.min.css'
import './assets/vendor/remixicon/remixicon.css'
import './assets/css/main.css'

// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <uploadProvider>
    <App />
  </uploadProvider>
  </React.StrictMode>,
)
