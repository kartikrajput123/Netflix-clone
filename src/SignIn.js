import React from 'react'
import './SignIn.css'

function SignIn() {
  return (
    <div className='SignIn'>
        <div className='login__background'>
          <img class="background__image" src="https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/bffa76da-b175-43bc-b7ef-e47a5095b535/IN-en-20220613-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/bffa76da-b175-43bc-b7ef-e47a5095b535/IN-en-20220613-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/bffa76da-b175-43bc-b7ef-e47a5095b535/IN-en-20220613-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/bffa76da-b175-43bc-b7ef-e47a5095b535/IN-en-20220613-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt=""/>
        </div>
        <div className='login__header'>
              <img className='nf__logo'src='https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png' alt=''>
              </img>
        </div>
        <div className='login__body'>
            <div className='above'></div>
            <div className='login__box'>
                <div className='login__content__body'>
                    <h1>Sign In</h1>
                    <label for="Email">Enter Email</label>  
                    <input id ="Email" type= "text" />
                    <label for="pass">Enter password</label>
                    <input id ="pass" type='password'/>
                    <a href="/landing" class="signin__button">Sign In</a>   
                </div>
                <div className="help__area">
                      <div className='help__area__checkbox'>
                        <input type="checkbox" id="remember__me"/>
                        <label for="remember__me">Remember me</label>
                      </div>
                      <label>Need help?</label>
                </div>
                <div className='login__content__footer'>
                  <div className='signup__now'>
                    New to Netflix?
                    <button><h4>Sign Up</h4></button>
                  </div>
                  <div className='recaptcha__terms'>
                    <p>
                      <span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
                      <button className='recaptcha__terms__btn'>Learn more.</button>
                    </p>
                  </div>
                </div>
            </div>
            <div className='below'></div>
        </div>
    </div>
  )
}

export default SignIn