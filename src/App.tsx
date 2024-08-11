import { useState } from 'react';
import './App.css';
import Hex from './Hex';
import Swipera from './Swiper';
import {
  list1,
  list10,
  list12,
  list13,
  list14,
  list15,
  list2,
  list3,
  list6,
} from './config';

function App() {
  const [actionName, setActionName] = useState('');
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <div
      className=""
      onMouseMove={(e) => {
        setY(e.clientY);
        setX(e.clientX);
      }}
    >
      <Swipera />
      <div className="cardinfo" style={{}}>
        Action Name : {actionName}
        <br />
        x:{x} y:{y}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {list1.map((i, key) => (
          <Hex
            key={key}
            imglink={i.imglink}
            action={i.name}
            setActionName={setActionName}
          />
        ))}
      </div>{' '}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {list2.map((i, key) => (
          <Hex
            key={key}
            imglink={i.imglink}
            action={i.name}
            setActionName={setActionName}
          />
        ))}
      </div>{' '}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {list13.map((i, key) => (
          <Hex
            key={key}
            imglink={i.imglink}
            action={i.name}
            setActionName={setActionName}
          />
        ))}
      </div>{' '}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {list14.map((i, key) => (
          <Hex
            key={key}
            imglink={i.imglink}
            action={i.name}
            setActionName={setActionName}
          />
        ))}
      </div>{' '}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {list12.map((i, key) => (
          <Hex
            key={key}
            imglink={i.imglink}
            action={i.name}
            setActionName={setActionName}
          />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {list10.map((i, key) => (
          <Hex
            key={key}
            imglink={i.imglink}
            action={i.name}
            setActionName={setActionName}
          />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {list15.map((i, key) => (
          <Hex
            key={key}
            imglink={i.imglink}
            action={i.name}
            setActionName={setActionName}
          />
        ))}
      </div>{' '}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {list2.map((i, key) => (
          <Hex
            key={key}
            imglink={i.imglink}
            action={i.name}
            setActionName={setActionName}
          />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {list13.map((i, key) => (
          <Hex
            key={key}
            imglink={i.imglink}
            action={i.name}
            setActionName={setActionName}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
