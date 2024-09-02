function Cup({number}){
    return(
        <>
            <h2>tea of cup for guest#{number}</h2>
        </>
    )
}

export default function Tea(){
    const arr=[];
    
    for(let i = 1 ; i <= 10; i++){
        arr.push(<Cup number={i}></Cup>)
    }
    return arr;
}