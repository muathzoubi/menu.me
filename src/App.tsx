import './App.css';
import Hex from './Hex';
import {
  list1,
  list10,
  list12,
  list13,
  list14,
  list15,
  list2,
} from './config';

function App() {

  return (
    <>
      
      <video autoPlay muted loop id="myVideo">
  <source src="https://cdn.jsdelivr.net/gh/alvarotrigo/fullpage-assets/videos/waterfall.webm" type="video/mp4"/>
</video>
    <div
      className="main"
    >
      <div className="cardinfo" style={{}}>
      
      <img src='./applogo.png' width={150}/>
      <h3>SGS Gird</h3>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {list1.map((i, key) => (
          <Hex
          className=''
            key={key}
            imglink={i.imglink}
            action={i.name}
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
          className='bg'

            imglink={i.imglink}
            action={i.name}
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
          className='bg'

            key={key}
            imglink={i.imglink}
            action={i.name}
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
          className='bg'

            key={key}
            imglink={i.imglink}
            action={i.name}
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
          className='bg'
          imglink={i.imglink}
            action={i.name}
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
          className='bg'
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
          className='bg'

          />
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
