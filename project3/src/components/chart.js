import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';


export default (props) => {
  return (
    <Sparklines height={120} width={180} data={temps}>
      <SparklinesLine color='red'/>
    </Sparklines>
  )
}
