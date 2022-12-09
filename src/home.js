import './App.css';
import scrollicon from './assets/scroll.png';
import React from "react";

import {useState, useEffect} from "react";
import { useQuery } from 'react-query';

import NewPara from './components/newpara/newpara';
import ItemCard from './components/itemcard/itemcard';
import MediaModal from './components/modals/mediaModal';
import HomePageLoader from './components/loader/homePageloader';
import ItemCardLoader from './components/loader/itemloader';

import useFetchData from './useFetchData';

const HomePage = () => {

  let [modalDisplay,setModalDisplay] = useState(false)
  let [firstLoad,setFirstLoad] = useState(true)
  let [queryDate,setQueryDate] = useState({start_date:"2022-11-08",end_date:"2022-12-08"})

  const getDateInYYYYMMDD = (d) => {
    var mm = d.getMonth() + 1; // getMonth() is zero-based
    var dd = d.getDate();

    return [d.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
        ].join('-');
};


  const {
    loading,
    error,
    data,
    firstFetch
  } = useFetchData(queryDate)


  const getNewDate = () => {

    let start_date = new Date(Date.parse(queryDate.start_date))
    start_date.setMonth(start_date.getMonth() - 1)
    let new_start_date = getDateInYYYYMMDD(new Date(start_date))
    return {
      start_date:new_start_date,
      end_date:queryDate.start_date
    }
  }

  useEffect(()=>{
    const onScroll = async (event) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;
      if (scrollHeight - scrollTop <= clientHeight * 1.5) {
          setQueryDate(() => getNewDate());
      }
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  },[])

  if (loading && firstFetch.current) {
    return (
      <React.Fragment>
        <HomePageLoader />
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <div className="spotlight_section">
        <div className="spotlight_1">
          <h2>{data[0]?.title}</h2>
          <NewPara text={data[0]?.explanation} />
          <div className="spotlight_scroll">
            <img src={scrollicon} />
            <p>
            Scroll Down
            <span>to discover more</span>
            </p>
          </div>
        </div>
        <div className="spotlight_2" onClick={() => setModalDisplay(true)}>
          {data[0]?.media_type == 'image' && <img src={data[0]?.url} />}
        </div>
      </div>

      <h3>Previous Items</h3>
      <div className="previous_items_container item_container">
        <div className="previous_items">
        {data?.slice(1,8).map((ins,key) => <ItemCard key={key} data={ins}/>)}
        </div>
      </div>

      <h3>Older Items</h3>
      <div className="old_items_container item_container">
        {data?.map((ins,key) => <ItemCard key={key} data={ins}/>)}
        {loading && (
          <>
          <ItemCardLoader />
          </>
        )}
      </div>

      {modalDisplay && <MediaModal type={data[0].media_type} source={data[0].url} onClose={() => setModalDisplay(false)}/>}

    </React.Fragment>
  )

}


export default HomePage;
