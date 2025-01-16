import { useEffect, useRef } from 'react'
import './App.css'
import WebViewer from '@pdftron/webviewer';

function App() {
  const viewer = useRef(null);

  useEffect(() => {
    if (viewer.current) {
      WebViewer(
        {
          // path: `${import.meta.env.VITE_BASE_URL}webviewer/lib`,
          path: `/webviewer/lib`,
          licenseKey: import.meta.env.VITE_PDFTRON_LICENSE_KEY,
          initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
        },
        viewer.current,
      ).then(() => {
        // const { documentViewer } = instance.Core;
        // you can now call WebViewer APIs here...
      });
    }
  }, []);

  return (
    <div className="MyComponent">
      <div className="header">React sample</div>
      <div className="webviewer" ref={viewer} style={{ width: '800px', height: '100vh' }}></div>
    </div>
  );
}

export default App
