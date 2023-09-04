import React from 'react'
import {MdAlternateEmail, MdLock} from 'react-icons/md'

function ModalSignIn({modalSignIn, setModalSignIn}) {
  return (
    <div className={modalSignIn ? 'modal-sign active' : 'modal-sign'} onClick={() => setModalSignIn(false)}>
        <div className="container">
            <div className={modalSignIn ? 'content content-active' : 'content'} onClick={e => e.stopPropagation()}>
                <h4 className="title">Log In!</h4>
                <form action="">
                    <div className="field">
                        <MdAlternateEmail size='19px'/>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="field">
                        <MdLock size='19px' />
                        <input type="password" placeholder="Password" />
                    </div>
                    <button className='btn'>Login</button>
                    <a href="#" className="btn-link">Forgot your password?</a>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ModalSignIn