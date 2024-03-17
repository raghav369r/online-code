import {useSelector } from "react-redux";

function useNight() {
    
    const night=useSelector(store=>store.user.night_mode);
    // const setNight=()=>{
    //     dispatch(modeChange());
    // };
    // return [night, setNight];  
    return night;
}

export default useNight;