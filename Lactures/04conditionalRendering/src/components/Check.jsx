
export function List({name,isStock}){
   
   
      
            // if(isStock){
            //   return  <li>{name}</li>
            // }
            // else{
            //    return <li><del>{name}</del></li>
            // }

     return isStock? <li>{name}</li> :<li><del>{name}</del></li>
   
}

function Check(){
    return(
        <> 
            <h1>All Lists</h1>
            <List name='apple' isStock={true}/>
            <List name='badaApple' isStock={true}/>
            <List name='chotaApple' isStock={false}/>
        </>
    )
}


export default Check 
