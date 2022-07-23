import {navbar, footer} from '../dependency/navbar.js'

document.querySelector('#body').innerHTML = navbar()
document.querySelector('footer').innerHTML = footer()

document.querySelector('.smartbuilder').addEventListener('click',function(){
    window.location.href = `smartbuilder.html`
})




document.querySelector('.classicbuilder').addEventListener('click',function(){
    window.location.href = `classicbuilder.html`
})

// Solutions page
document.querySelector('.ecommerce').addEventListener('click',function(){
    window.location.href = `ecommerce.html`
})

document.querySelector('.professional').addEventListener('click',function(){
    window.location.href = `professional.html`
})

document.querySelector('.leadgeneration').addEventListener('click',function(){
    window.location.href = `leadgeneration.html`
})

document.querySelector('.emailmarketing').addEventListener('click',function(){
    window.location.href = `emailmarketing.html`
})

// Pricing page links


document.querySelector('#pricing').addEventListener('click',function(){
    window.location.href = `pricing.html`
})


// Learn page links


document.querySelector('#whatconintel').addEventListener('click',function(){
    window.location.href = `whatconintel.html`
})

document.querySelector('.ultoptguide').addEventListener('click',function(){
    window.location.href = `ultoptguide.html`
})

document.querySelector('.whatlandingpage').addEventListener('click',function(){
    window.location.href = `whatlandingpage.html`
})

// Contact page

document.querySelector('#contact').addEventListener('click',function(){
    window.location.href = `contact.html`
})

document.querySelector('#login').addEventListener('click',function(){
    window.location.href = `login.html`
})

document.querySelector('.h_free-trial-btn').addEventListener('click',function(){
    window.location.href = `pricing.html`
})