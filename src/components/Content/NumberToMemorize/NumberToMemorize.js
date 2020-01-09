import React, { useRef, useEffect } from 'react'
import classes from './NumberToMemorize.module.scss';

// class NumberToMemorize extends React.Component {
//   componentDidMount(){
//     setTimeout( this.props.timeIsUp, this.props.time* 1000 );
//   }
//   render() {
//     return <p 
//       className={classes["number-to-memorize"]}>
//       {this.props.Number}
//     </p>;
//   }
// }

const NumberToMemorize = ({timeIsUp, time, number}) => {
  const refTimeout = useRef(null);
  useEffect(() => {
        refTimeout.current = setTimeout( timeIsUp, time* 1000 );
    return () => {
      clearTimeout(refTimeout.current);
    };
  }, [timeIsUp, time]); 
/*
możesz sobie cofnąć zmiany
nie zostawie sobie tak. :D 
może czegoś się dowiem jak przeanalizuje 
i moze do czegoś będize mi potrzebne grejt
nie wiem co robi ten time Up
ale ogólnie jak się woła jakieś timeouty to powinno się je czyścić przez unmountem komponenta, żeby się nie wykonały jak się komponent wczesniej zunmountuje

time is up ustawia state( ustawia nową cyfre i dodaje element do histori)
spoko coś tam kiedyś manu mówił o tym hook albo gdzieśo tym czytałem ale w ciul zapomniałem 

 // pytanie czy to musi być tu czy nie możesz tego wołać tam gdzie masz ta funkcje?

 hmmm w sumie chyba moge dodać time out w app.js
 nom to jak tam już chcesz
 pytanie też czy nie chcesz, aby zawsze się ten timeout wykonał
 jesli jest on niezależny od tego komponenta
 bo jak dodajesz tam do historii to może nie chcesz aby cos sie nie dodało


 
 yy troche nie rozumiem, ale chodzi o to że zawsze jak się pokaże ten komponent powinien się wykonać ten timeout. Chyba że wprowadze pauze. ale to jeszcze nie przemyslałem jak ten przycisk ma działać

 -- ok to możesz wywalić ten return i ref

 follo me please
 
 */
  return (<p 
      className={classes["number-to-memorize"]}>
      {number}
    </p>);
}

export default NumberToMemorize;