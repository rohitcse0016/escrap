import React from 'react';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div style={{flex:1,flexDirection:'row',backgroundColor:'blue'}}>
      HomePage
      <div style={{flex:1,backgroundColor:'red'}}>
        <img src="https://reactjs.org/logo-og.png" style={{height:100,width:100}} alt="React example" />
      </div>
      <div style={{flex:1,backgroundColor:'yellow'}}>Top 10 Lightest Vehicle</div>
    </div>
  );
};

export default HomePage;