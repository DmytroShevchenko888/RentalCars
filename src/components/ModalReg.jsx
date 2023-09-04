import {MdAlternateEmail, MdLock} from 'react-icons/md'
import {BiSolidUser} from 'react-icons/bi'

function ModalReg({modalReg, setModalReg}) {
  return (
    <div className={modalReg ? 'modal-reg active' : 'modal-reg'} onClick={() => setModalReg(false)}>
        <div className="container">
            <div className={modalReg ? 'content content-active' : 'content'} onClick={e => e.stopPropagation()}>
              <h4 className="title">Register</h4>
                  <form action="">
                      <div className="field">
                          <BiSolidUser size='19px'/>
                          <input type="text" placeholder="First Name" />
                      </div>
                      <div className="field">
                          <BiSolidUser size='19px'/>
                          <input type="text" placeholder="Last Name" />
                      </div>
                      <div className="field">
                          <MdAlternateEmail size='19px'/>
                          <input type="email" placeholder="Email" />
                      </div>
                      <div className="field">
                          <MdLock size='19px' />
                          <input type="password" placeholder="Password" />
                      </div>
                      <div className="field">
                          <MdLock size='19px' />
                          <input type="password" placeholder="Confirm Password" />
                      </div>
                      <label>
                        <input type="checkbox" />
                        I accept <b>Terms of Use</b>
                      </label>
                      
                      <button className='btn'>Register Now</button>
                  </form>
            </div>
        </div>
    </div>
  )
}

export default ModalReg