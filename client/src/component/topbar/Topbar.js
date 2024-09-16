import TrendingUpIcon from '@mui/icons-material/TrendingUp';


import "./Topbar.css"



const Topbar=()=>{



return (
<>
<div className="topbar">
<div className="logo">   <span><TrendingUpIcon className='logoo'/> </span>    </div>

<div className="divsearch">
    
<input type='text' placeholder='Enter what you need' className='search' ></input>
    
    </div>  


<div className="routes">
<a href='/'>home</a>   
<a href='/createtrender'>create_trender</a>
</div>
</div>

</>

)

 
}


export default Topbar;