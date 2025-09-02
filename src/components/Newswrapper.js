import React from 'react'
import { useParams } from 'react-router-dom'
import News from './News';

export default function Newswrapper(props) {
  const { code } = useParams();

  return (
    <News
      country={code}
      setprogress={props.setprogress}
      key={`${props.category}-${code}`} //  unique key per country/category
      apikey={props.apikey}
      pagesize={props.pagesize}
      category={props.category}
    />
  );
}
