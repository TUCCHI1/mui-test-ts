import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PopoverExample from './components/SelectMenu';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const menuItemsData = [
  {
    groupLabel: "1",
    groupItems: [
      {
        subLabel: "1-1",
        subItems: [
          {
            label: "1-1-1",
          },
        ],
      },
      {
        subLabel: "1-2",
        subItems: [
          {
            label: "1-2-1",
          },
          {
            label: "1-2-2",
          },
        ],
      },
    ],
  },
  {
    groupLabel: "2",
    groupItems: [
      {
        subLabel: "2-1",
        subItems: [
          {
            label: "2-1-1",
          },
          {
            label: "2-1-2",
          },
        ],
      },
      
    ],
  },
];

root.render(
  <React.StrictMode>
    <PopoverExample />
    {/* <RecursiveMenu menuItemsData={menuItemsData} /> */}
    {/* <Selected3 /> */}
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
