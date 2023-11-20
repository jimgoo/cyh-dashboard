const getSessions=(status)=>{

    if(status==='mid'){
        return 4;
    }

    if(status==='intro'){
        return 2;
    }

    if(status==='experienced'){
        return 6;
    }
    if(status==='empowered'){
        return 8;
    }

}

export default getSessions;
