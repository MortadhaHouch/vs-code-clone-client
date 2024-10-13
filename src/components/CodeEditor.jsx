/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import {
  SandpackProvider,
  SandpackThemeProvider,
  SandpackPreview,
  SandpackCodeEditor,
  SandpackStack,
  SandpackLayout,
  useSandpack,
  SandpackFileExplorer,
  SandpackConsole,
} from '@codesandbox/sandpack-react';
import { nightOwl } from '@codesandbox/sandpack-themes';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const MySandpackComponent = () => {
  const [packages, setPackages] = useState(['react', 'react-dom']);
  const [newPackage, setNewPackage] = useState('');

  const handleAddPackage = () => {
    if (newPackage && !packages.includes(newPackage)) {
      setPackages([...packages, newPackage]);
      setNewPackage('');
    }
  };

  const dependencies = packages.reduce((acc, pkg) => {
    acc[pkg] = 'latest';
    return acc;
  }, {});

  const handleExportFiles = async () => {
    const zip = new JSZip();
    const { sandpack } = useSandpack();
    const files = sandpack.files;

    for (const path in files) {
      zip.file(path, files[path].code);
    }

    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, 'sandbox-files.zip');
  };
  return (
    <SandpackProvider template="vite-react-ts" customSetup={{ dependencies }} style={{width:"100vw",height:"100vh"}}>
      <SandpackThemeProvider theme={nightOwl}>
        <div style={{ padding: '1rem', backgroundColor: '#011627' }}>
          <input
            type="text"
            value={newPackage}
            onChange={(e) => setNewPackage(e.target.value)}
            placeholder="Add a package"
            style={{ marginRight: '1rem', padding: '0.5rem' }}
          />
          <button onClick={handleAddPackage} style={{ padding: '0.5rem' }}>
            Add Package
          </button>
          <button onClick={handleExportFiles} style={{ padding: '0.5rem', marginLeft: '1rem' }}>
            Export Files
          </button>
        </div>
        <SandpackStack>
          <SandpackLayout>
            <div
              style={{
                display: 'flex',
                width: '100%',
                height: '100%',
                backgroundColor: `var(--sp-colors-surface1)`,
              }}
            >
              <div
                style={{
                  minWidth: 150,
                  maxWidth: '300px',
                  overflow: 'hidden',
                  borderRight: '1px solid #444',
                }}
              >
                <SandpackFileExplorer />
              </div>
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                <SandpackCodeEditor
                  wrapContent
                  style={{
                    flex: '1',
                    overflow: 'auto',
                  }}
                  showTabs
                  closableTabs
                  showInlineErrors
                  showLineNumbers
                  showRunButton
                />
                <SandpackPreview style={{ flex: '0 0 200px', borderTop: '1px solid #444' }} />
              </div>
              <div style={{ flex: '0 0 300px', borderLeft: '1px solid #444' }}>
                <SandpackConsole />
              </div>
            </div>
          </SandpackLayout>
        </SandpackStack>
      </SandpackThemeProvider>
    </SandpackProvider>
  );
};

export default MySandpackComponent;