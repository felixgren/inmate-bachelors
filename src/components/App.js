import React, { useState, useEffect } from 'react';
import Test from './Test';
import Header from './Header';
import TestProfile2 from './TestProfile2';
import Footer from './Footer';

// async function fetchBachelors() {
//     const response = await fetch('http://www.JailBase.com/api/1/recent/?source_id=az-mcso', {
//         method: 'GET',
//         mode: 'no-cors',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//     })
//     // .then(response => response.json())
//     // .then((result) => {
//     //     console.log(result);
//     //     setBachelors(result);
//     //     setLoaded(true);
//     // },
//     // (error) => setLoaded(false))
//     let test = response.json();
//     console.log(test)

//     return test;

// }

const App = () => {
  const [bachelors, setBachelors] = useState(['']);
  const [isLoaded, setLoaded] = useState(false);
  
  const fetchBachelors = async () => {
    // const data = await fetch("https://www.breakingbadapi.com/api/characters?name=walter")
    const data = await fetch("http://www.JailBase.com/api/1/recent/?source_id=az-mcso", {
      headers: {'Access-Control-Allow-Origin': '*'}
    })
    // const data = await fetch("https://www.jailbase.com/api/1/search/?source_id=az-mcso&last_name=smith")
    // .then(response => console.log(response))
    .then(response => response.json())
    .then(response => {
      console.log(response.records);
    },
    (error) => console.log(error))

  };

  // fetchBachelors();




  useEffect(() => {

    console.log('hej')
    fetchBachelors();

    // const fetchBachelors = async () => {
    //   const testing = await fetch('http://www.JailBase.com/api/1/recent/?source_id=az-mcso', {
    //       method: 'GET',
    //       mode: 'no-cors',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //   })
    //   .then(response => response.json())
    //   .then((result) => {
    //       console.log('hej');
    //       console.log(result);
    //       setBachelors(result);
    //       setLoaded(true);
    //   },
    //   (error) => console.log(error))
    // };

    // fetchBachelors();

  }, []);

  return (

    <div>
      <Header />
      <TestProfile2 />
      {/* <Test /> */}
      <Footer />
    </div>

  );
}

export default App;
