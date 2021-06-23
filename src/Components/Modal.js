import { useGlobalContext } from "./Context"

const Modal = () => {
    const {data, setIsModalOpen} = useGlobalContext()
    return(
        // reference: https://www.w3schools.com/howto/howto_css_modals.asp
        <div id="myModal" class="modal">
            <span class="close" onClick={() => setIsModalOpen(false)}>&times;</span>
            <div class="modal-content">
                <p style={{fontSize: "12px", paddingBottom:"2em"}}>Show the QR code below to the cashier</p>
                <img src={data.qrcode} alt="" style={{width: "70%"}}/>
            </div>
    </div>
    )
}

export default Modal