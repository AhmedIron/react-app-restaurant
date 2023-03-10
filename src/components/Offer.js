import { Container } from "react-bootstrap"
import { useState } from "react"

const Offer = () => {
    const [view , setView] = useState(false)
    const [img, setImg] = useState([])
    return(
        <Container style={{maxWidth: "1800px", textAlign: "-webkit-center"}}>
            <p style={{marginTop:"40px"}} className="title1">TOP OFFERS</p>
            <div className="wrapper" style={{border:"none"}}>


            <div className="offers" onClick={ () => {
                setView(!view)
                setImg("1.png")
            }}>
                <img className="offer" alt="..." src="1.png">
            </img>
            </div>
            

            <div className="offers" onClick={ () => {
                setView(!view)
                setImg("2.png")
            }}>
            <img className="offer" alt="..." src="2.png">
            </img>
            </div>

            <div className="offers" onClick={ () => {
                setView(!view)
                setImg("3.png")
            }}>
            <img className="offer" alt="..." src="3.png">
            </img>
            </div>

            <div className="offers" onClick={ () => {
                setView(!view)
                setImg("4.png")
            }}>
            <img className="offer" alt="..." src="4.png">
            </img>
            </div>

            <div className="offers" onClick={ () => {
                setView(!view)
                setImg("1.png")
            }}>
            <img className="offer" alt="..." src="1.png">
            </img>
            </div>

            <div className="offers" onClick={ () => {
                setView(!view)
                setImg("2.png")
            }}>
            <img className="offer" alt="..." src="2.png">
            </img>
            </div>

            <div className="offers" onClick={ () => {
                setView(!view)
                setImg("3.png")
            }}>
            <img className="offer" alt="..." src="3.png">
            </img>
            </div>

            <div className={view ? "viewProduct" : "hideViewProduct"}>
                    <div onClick={() => {
                        setView(false)
                        }} style={{cursor:"pointer", fontSize:"40px", top:"0"}}>
                            <div>
                                <p style={{color:"red"}}>X</p>
                                <div>
                                    <img style={{width:"100%", height:"100%"}} src={img} alt="" />
                                </div>
                            </div>
                    </div>
            </div>
            
            </div>
        </Container>
    )
}
export default Offer