import './preloader.css'
import gif from '../images/preloader.gif'

const PreLoader = () => {
    return(
        <div className="preloader-container">
            <img src={gif} alt="pre-loader"/>
        </div>
    )
}


export default PreLoader 