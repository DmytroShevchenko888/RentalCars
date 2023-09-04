

function ModalBook({modal, setModal, carType}) {

  

  return (
    <div className={modal ? 'modal-book active' : 'modal-book'} onClick={() => setModal(false)}>
        <div className="container">
            <div className={modal ? 'content content-active' : 'content'} onClick={e => e.stopPropagation()}>
            
            </div>
        </div>
    </div>
  )
}

export default ModalBook