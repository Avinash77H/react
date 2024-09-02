import defaultImg from '../assets/california.jfif'
const obj  = {
    name:'defaultname',
    height:100,
    width:100
}

export default function Card({props=obj,imgId=defaultImg,value=77}){
    
    // const {name,height,width} = props.obj;
    return(
        <div className='border-2 border-black p-4 w-[300px] flex flex-col text-center gap-4'>
            <img src={imgId} alt="image1" height={props.height} width={props.width} className='ml-8'/>
            <h1 className='font-extrabold text-center text-xl '>this is {props.name}</h1>
            <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, incidunt?</p>
            <p>{value}</p>
        </div>
    )
}