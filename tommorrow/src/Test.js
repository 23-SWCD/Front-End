//rfce-> tap
import React, { useState } from 'react'

function Test() {
  const [Temp, setTemp] = useState(0);
  return (
    <div>
      <h1 className='test'> 김다빈 branch2입니다.  </h1>
      {Temp}
      <button onClick={function () { setTemp(Temp + 3) }}>증가</button>
    </div>
  );
}

export default Test;
