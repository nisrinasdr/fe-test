import { useGlobalContext } from "./Context"
import axios from "axios"
import logo from '../img/logo-technopartner.png'
import { useEffect, useState } from "react"
import Modal from './Modal'
import BottomBar from './BottomBar'

const Home = () => {
    const {token, data, setData,isModalOpen, setIsModalOpen} = useGlobalContext()
    const [index, setIndex] = useState(0)
    const pages = []

    // button banner list
    for(let i=0 ; i<3 ; i++) {
        pages.push(i)
    }

    // fetch data
    useEffect(() => {
        axios({
            method: 'get', 
            url: 'https://soal.staging.id/api/home',
            headers: {
              'Authorization' : `${token.token_type} ${token.access_token}`
              }, 
          }).then((response) =>{
              const info = response.data.result
            setData({
                greeting: info.greeting,
                name: info.name,
                saldo: info.saldo,
                point: info.point,
                qrcode: info.qrcode,
                banner: info.banner,
            })
          }).catch((error) =>{
              console.log(error)
          })
    },[setData, token])

    // set interval for banner
    useEffect(() => {
        let banner = setInterval(() => {
            if(index > 1) {
                setIndex(0)
            } else {
                setIndex(index+1)
            }
          
        }, 2000)
        return () => clearInterval(banner)
      }, [index, data])

    const handleModal = () => {
        setIsModalOpen(true)
        console.log(isModalOpen)
    }

    return(
        <div className="container">
            <div className="home">
                {/* shows modal */}
                {
                     isModalOpen? <Modal/> :null
                }
                <div className="header">
                    <img src={logo} alt="logo" />
                </div>
                <div className="card-container">
                { data != null && (
                    <div className="card">
                        <div className="user">
                            <p>{data.greeting},</p>
                            <p><strong>{data.name}</strong></p>
                        </div>
                        <div className="saldo">
                            <div className="qrcode" onClick={handleModal}>
                                <img src={data.qrcode} alt="qr code" />
                            </div>
                            <div className="saldo-info">
                                <p>Saldo</p>
                                <p>Points</p>
                            </div>
                            <div className="saldo-value">
                                <p><strong>Rp {data.saldo.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</strong></p>
                                <p style={{color: "#8fd6bd"}}><strong>{data.point.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</strong></p>
                            </div>
                        </div> {/* end of saldo */}
                    </div> /* end of card */
                    )
                }
                </div> {/* end of card container */}
                {/* start banner */}
                {
                    data != null && (
                    <div className="banner">
                         <img src={data.banner[index]} alt="" />
                         <div className="button-container">
                             <div className="button">
                                {pages.map(number => { return (
                                    <button key={number} 
                                            id={number}
                                            className={number === index? 'active banner-btn' : 'banner-btn'}
                                            onClick={() => setIndex(Number(number))}></button> )
                                })}
                             </div> {/* end of button */}
                             <div className="view">
                                 <p>View all</p>
                             </div>
                         </div>  {/* end of button container */}
                    </div>)
                }
                {/* end of banner */}
                <BottomBar/>
            </div> {/* end of home */}
        </div>
    )
}

export default Home