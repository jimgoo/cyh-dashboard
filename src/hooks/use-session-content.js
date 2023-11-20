import React from "react";
import {sessions} from "@/utils/constants/session-data";

const useSessionContent=()=>{

    const singleSession = (sessionId) => sessions.find(el => el?.id === sessionId)
    return [sessions,singleSession];

}

export default useSessionContent;
