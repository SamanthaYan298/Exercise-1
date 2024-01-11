import styles from './Form.module.css'
import Image from 'next/image'

export default function Form() {
    return(
        <>
            <div className={styles.formContainer}>
                    <fieldset className={styles.fieldSet}>
                    <div className={styles.images}>
                    <Image src={'/images/instagram.png'} alt="instagram logo" width={180} height={100} priority/>
                    </div>
                        <form className={styles.form}>
                            <input
                                id="username"
                                className={styles.usernameInput}
                                type="text"
                                placeholder="Phone number, username or email"
                            />
                            
                            <input
                                id="password"
                                className={styles.passwordInput}
                                type="password"
                                placeholder="Password"
                            />
                        <button>Log in</button>
                        <p className={styles.line}>———————— OR ————————</p>
                        <h1 className={styles.facebook}>
                        <Image src='/images/facebook.png' alt="facebook logo" width={18} height={21} className={styles.logo}/> Log in with Facebook</h1>
                        <p className={styles.forgot}>Forgot password?</p>
                        </form>
                    </fieldset>
                    <div>
                    <fieldest className={styles.fieldSet2}>
                        <p>Don't have an account? <a href="link">Sign up</a></p>
                    </fieldest>
                    <p className={styles.app}>Get the app.</p>
                    </div>
                    <div className={styles.apps}>
                    <Image src={'/images/google-play.png'} alt="google-play logo" width={145} height={45}/>
                    <Image src={'/images/microsoft.png'} alt="microsoft logo" width={130} height={45} className={styles.microsoft}/>
                    </div>
                </div>
        </>
    )
}