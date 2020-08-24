import React,{useState,useEffect} from 'react';
import Rocket from "../../image/rocket.png";
import '../../style/Preloader.css';
function PreLoading() {
    const [isLoading, setStateLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setStateLoading(false); // Set lai isLoading sau 2s
    }, 1000);
    return () => clearTimeout(timer);
  },[]);
  function changePreLoader(value) {
    if (value === false) {
      return "preloader opacity-0";
    } else return "preloader";
  }
    return (
        <div className={changePreLoader(isLoading)}>
            <div className="loader">
                <img src={Rocket} alt="RocketLoading" width="70px" />
            </div>
        </div>
    )
}
export default PreLoading;