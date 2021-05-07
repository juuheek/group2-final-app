import React, {useState} from 'react';

const data = {
  content1:{
    title:"Fruits",
    main:"Main 1",
    sub:"Sub 1",
    subcontents:["Apple","Orange","Banana"]
  },
  content2:{
    title:"Coins",
    main:"Main 2",
    sub:"Sub 2",
    subcontents:["Nickel", "Loonie"]
  }

}
export default function ComplexUI () {
  // const [title, setTitle] = useState("Title Default");
  // const [main, setMain] = useState("Main Default");
  // const [sub, setSub] = useState("Sub Default");
  const [key, setKey] = useState("content1");
  const [sub_ind, setSubInd] = useState(0);

  const ChangeContent = (k) => {
      // setTitle(data[key].title);
      // setMain(data[key].main);
      // setSub(data[key].sub);
      setKey(k);
  }
  const ChangeSubContent = (ind) => {
    if(ind < 0){
      ind=0;
    }  
    if(ind > 2){
      ind = 2;
    }
    setSubInd(ind)
  }
  return <div>
  <div>
    <button onClick={()=>{
      ChangeContent("content1")
    }}>fruits</button>
    <button onClick={()=>{
      ChangeContent("content2")
    }}>coins</button>
  </div>
  <h1>{data[key].title}</h1>
  <div>
    {data[key].main}
  </div>
  <div>

  {data[key].subcontents[sub_ind]}
  <button onClick={()=>ChangeSubContent(sub_ind-1)}>previous</button>
  <button onClick={()=>ChangeSubContent(sub_ind+1)}>next</button>
  </div>
  </div>
}