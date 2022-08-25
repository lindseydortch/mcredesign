'use strict'

// LINKS 
const openWWUForm = document.querySelector('.openWWUForm')
const openWFUForm = document.querySelector('.openWFUForm')

// NAVBAR JS
let menuBtn = document.querySelector('.menu')
let closeMenuIcon = document.querySelector('.plus-close-icon')
let menuContainer = document.querySelector('.menu__container')
let l1MenuItem = document.querySelectorAll('.l1-item a')
let l1MenuItemsPlusIcon = document.querySelectorAll('.l1-item span')
let l2MenuItems = document.querySelectorAll('.l2__container')

menuBtn.addEventListener('click', () => {
  menuContainer.classList.toggle('d-none')
  menuBtn.classList.toggle('menu-active')
})

l1MenuItem.forEach(l1Item => {
  l1Item.addEventListener('click', () => {
      menuContainer.classList.add('d-none')
      menuBtn.classList.remove('menu-active')
  })
})

l2MenuItems.forEach(l2Item => {
  l2Item.addEventListener('click', () => {
      menuContainer.classList.add('d-none')
      menuBtn.classList.remove('menu-active')
  })
})


l1MenuItemsPlusIcon.forEach(li1Item => {
  li1Item.addEventListener('click', (e) => {

    console.log(l2MenuItems)

    console.log(e.target.parentNode)

    if(e.target.parentNode.classList.contains('fyb')) {
      console.log('l1 item with fyb')
      e.target.parentNode.classList.toggle('bg-bt')

      l2MenuItems.forEach(l2Item => {
        if(l2Item.classList.contains('l2__container--fyb')) {
          l2Item.classList.toggle('d-none')
        }
      })
    }

    if(e.target.parentNode.classList.contains('cb')) {
      console.log('l1 item with cb')
      e.target.parentNode.classList.toggle('bg-bt')

      l2MenuItems.forEach(l2Item => {
        if(l2Item.classList.contains('l2__container--cb')) {
          l2Item.classList.toggle('d-none')
        }
      })
    }

    if(e.target.parentNode.classList.contains('mtm')) {
      console.log('l1 item with mtm')
      e.target.parentNode.classList.toggle('bg-bt')

      l2MenuItems.forEach(l2Item => {
        if(l2Item.classList.contains('l2__container--mtm')) {
          l2Item.classList.toggle('d-none')
        }
      })
    }

    if(e.target.parentNode.classList.contains('formsLink')) {
      console.log('l1 item with fyb')
      e.target.parentNode.classList.toggle('bg-bt')

      l2MenuItems.forEach(l2Item => {
        if(l2Item.classList.contains('l2__container--forms')) {
          l2Item.classList.toggle('d-none')
        }
      })
    }
  })
  
})

// Diagonal Hover Effect 
let box1 = document.querySelectorAll('.box-1--hasEffect')
let box2 = document.querySelectorAll('.box-2--hasEffect')
let box1SectionHeading = document.querySelectorAll('.hasEffect .box-1 .section__heading')
let box2SectionHeading = document.querySelectorAll('.hasEffect .box-2 .section__heading')
let sectionLine = document.querySelectorAll('.hasEffect .section-line__pos50')

box1.forEach(b1 => {
  b1.addEventListener('mouseover', () => {
    sectionLine.forEach(sLine => {
      sLine.style.left = '75%'
      sLine.style.transition = 'all 0.3s ease-in'
    })
    box2.forEach(b2 => {
      b2.style.width = 'calc(25% + 10rem)'
      // console.log(b2)
    })
    box2SectionHeading.forEach(b2SH => {
      b2SH.style.display = 'none'
    })
    box1SectionHeading.forEach(b1SH => {
      // b1SH.style.width = '100%'
      // b1SH.style.transition = 'all 0.3s ease-in'
    })
    b1.style.width = 'calc(75% + 10rem)'
    b1.style.transition = 'all 0.3s ease-in'
  })

  b1.addEventListener('mouseout', () => {
    sectionLine.forEach(sLine => {
      sLine.style.left = '50%'
      sLine.style.transition = 'all 0.3s ease-in'
    })
    box2.forEach(b2 => {
      b2.style.width = 'calc(50% + 10rem)'
      // console.log(b2)
    })
    box2SectionHeading.forEach(b2SH => {
      b2SH.style.display = 'block'
    })
    box1SectionHeading.forEach(b1SH => {
      // b1SH.style.width = 'min-content'
      // b1SH.style.transition = 'all 0.3s ease-in'
    })
    b1.style.width = 'calc(50% + 10rem)'
    b1.style.transition = 'all 0.3s ease-in'
  })
})

box2.forEach(b2 => {
  b2.addEventListener('mouseover', () => {
    sectionLine.forEach(sLine => {
      sLine.style.left = '25%'
      sLine.style.transition = 'all 0.3s ease-in'
    })
    box1.forEach(b1 => {
      b1.style.width = 'calc(25% + 30rem)'
      // b2.style.left = 0
      // console.log(b1)
    })
    box1SectionHeading.forEach(b1SH => {
      b1SH.style.display = 'none'
    })
    box2SectionHeading.forEach(b2SH => {
      // b2SH.style.width = '100%'
      // b2SH.style.transition = 'all 0.5s'
    })
    b2.style.width = 'calc(75% + 10rem)'
    b2.style.transition = 'all 0.3s ease-in'
  })

  b2.addEventListener('mouseout', () => {
    sectionLine.forEach(sLine => {
      sLine.style.left = '50%'
      sLine.style.transition = 'all 0.3s ease-in'
    })
    box1.forEach(b1 => {
      b1.style.width = 'calc(50% + 10rem)'
      // console.log(b2)
    })
    box1SectionHeading.forEach(b1SH => {
      b1SH.style.display = 'block'
    })
    box2SectionHeading.forEach(b2SH => {
      // b2SH.style.width = 'min-content'
      // b2SH.style.transition = 'all 0.1s ease-in'
    })
    b2.style.width = 'calc(50% + 10rem)'
    b2.style.transition = 'all 0.3s ease-in'
  })
})

// How Do We Create Balance? 
let hdwcbSection = document.querySelector('.how-to-create-balance')
let step1 = document.querySelector('.step1')
let step2 = document.querySelector('.step2')
let step3 = document.querySelector('.step3')
let cbPlusIcon = document.querySelector('.plus-step-icon')
let cbEqualIcon = document.querySelector('.equal-step-icon')

const observer = new IntersectionObserver(entries => {
  step1.classList.toggle('cbInView', entries[0].isIntersecting)
  cbPlusIcon.classList.toggle('cbInView2', entries[0].isIntersecting)
  step2.classList.toggle('cbInView3', entries[0].isIntersecting)
  cbEqualIcon.classList.toggle('cbInView4', entries[0].isIntersecting)
  step3.classList.toggle('cbInView5', entries[0].isIntersecting)
})

observer.observe(hdwcbSection)

// CREATING BALANCE HEADLINE 
const creatingBalanceSection = document.querySelector('#creatingBalance')
const an1 = document.querySelector('.an1')
const an2 = document.querySelector('.an2')
const an3 = document.querySelector('.an3')
const an4 = document.querySelector('.an4')

const cbObserver = new IntersectionObserver(entries => {
  an1.classList.toggle('fadeInHeader', entries[0].isIntersecting)
  an2.classList.toggle('fadeInHeader1', entries[0].isIntersecting)
  an3.classList.toggle('fadeInHeader2', entries[0].isIntersecting)
  an4.classList.toggle('fadeInHeader3', entries[0].isIntersecting)
})

cbObserver.observe(creatingBalanceSection)

// OUR COLLECTIVE 
// const storytellingLink = document.querySelector('.storytellingLink')
// const contentLink = document.querySelector('.contentLink')
// const digitalLink = document.querySelector('.digitalLink')
// const ampLink = document.querySelector('.ampLink')
// const ocHeadline = document.querySelector('.ocHeadline')
// const ocStorytelling = document.querySelector('.ocStorytelling')
// const ocContent = document.querySelector('.ocContent')
// const ocDigital = document.querySelector('.ocDigital')
// const ocAmp = document.querySelector('.ocAmp')

// const keepLinkBackgroundColor = (link) => {
//   link.style.backgroundColor = '#232E56'
// }

// storytellingLink.addEventListener('click', () => {
//   ocHeadline.classList.add('d-none')
//   ocContent.classList.add('d-none')
//   ocDigital.classList.add('d-none')
//   ocAmp.classList.add('d-none')
//   ocStorytelling.classList.remove('d-none')
//   keepLinkBackgroundColor(contentLink)
//   keepLinkBackgroundColor(digitalLink)
//   keepLinkBackgroundColor(ampLink)
//   storytellingLink.style.backgroundColor = '#008acf'
// })

// contentLink.addEventListener('click', () => {
//   ocHeadline.classList.add('d-none')
//   ocStorytelling.classList.add('d-none')
//   ocDigital.classList.add('d-none')
//   ocAmp.classList.add('d-none')
//   ocContent.classList.remove('d-none')
//   keepLinkBackgroundColor(storytellingLink)
//   keepLinkBackgroundColor(digitalLink)
//   keepLinkBackgroundColor(ampLink)
//   contentLink.style.backgroundColor = '#008acf'
// })

// digitalLink.addEventListener('click', () => {
//   ocHeadline.classList.add('d-none')
//   ocContent.classList.add('d-none')
//   ocStorytelling.classList.add('d-none')
//   ocAmp.classList.add('d-none')
//   ocDigital.classList.remove('d-none')
//   keepLinkBackgroundColor(contentLink)
//   keepLinkBackgroundColor(storytellingLink)
//   keepLinkBackgroundColor(ampLink)
//   digitalLink.style.backgroundColor = '#008acf'
// })

// ampLink.addEventListener('click', () => {
//   ocHeadline.classList.add('d-none')
//   ocContent.classList.add('d-none')
//   ocDigital.classList.add('d-none')
//   ocStorytelling.classList.add('d-none')
//   ocAmp.classList.remove('d-none')
//   keepLinkBackgroundColor(contentLink)
//   keepLinkBackgroundColor(digitalLink)
//   keepLinkBackgroundColor(storytellingLink)
//   ampLink.style.backgroundColor = '#008acf'
// })

// Opening Forms from Form Section 
const wwuForm = document.querySelector('.work-with-us-form')
const wfuForm = document.querySelector('.work-for-us-form')
const closeWWUForm = document.querySelector('#closeWWUForm')
const closeWFUForm = document.querySelector('#closeWFUForm')
const btnWWUSubmit = document.querySelector('#btnWWUSubmit')
const btnWFUSubmit = document.querySelector('#btnWFUSubmit')

const openWWUModalBtn = document.querySelectorAll('.openWWUModalBtn')

const closeModal = (classAdd) => {
  classAdd.classList.add('d-none')
}

const openModal = (classRemove) => {
  classRemove.classList.remove('d-none')
}

openWWUModalBtn.forEach(btn => {
  btn.addEventListener('click', () => openModal(wwuForm))
})

// WORK WITH US FORM 
openWWUForm.addEventListener('click', () => openModal(wwuForm))
closeWWUForm.addEventListener('click', () => closeModal(wwuForm))
btnWWUSubmit.addEventListener('click', () => closeModal(wwuForm))
// WORK FOR US FORM 
openWFUForm.addEventListener('click', () => openModal(wfuForm))
closeWFUForm.addEventListener('click', () => closeModal(wfuForm))
btnWFUSubmit.addEventListener('click', () => closeModal(wfuForm))

// CAROUSEL - FIND YOUR BALANCE
const containers = document.querySelectorAll('.slide-wrapper .container')
const nextBtn = document.querySelector('.plus__right')
const prevBtn = document.querySelector('.plus__left')

let curSlide = 0 
let maxSlide = containers.length - 1

containers.forEach((container, index) => {
  container.style.transform = `translateX(${index * 120}%)`
})

nextBtn.addEventListener('click', () => {
  // console.log(curSlide)
  // console.log(maxSlide)
  if (curSlide === maxSlide) {
    curSlide = 0
    prevBtn.classList.add('plus-disabled')
    console.log(curSlide)
  } else {
    prevBtn.classList.remove('plus-disabled')
    curSlide++
    console.log(curSlide)
  }

  containers.forEach((container, index) => {
    container.style.transform = `translateX(${120 * (index - curSlide)}%)`
  })
})

prevBtn.addEventListener('click', () => {
  console.log(curSlide)
  console.log(maxSlide)
  
  if (curSlide === maxSlide) {
    curSlide = 0
    console.log(curSlide)
    prevBtn.classList.add('plus-disabled')
  } else if (curSlide === 0) {
    prevBtn.classList.add('plus-disabled')
  } else if (curSlide > 0 ) {
    curSlide--
    console.log(curSlide)
  } 

  containers.forEach((container, index) => {
    container.style.transform = `translateX(${120 * (index - curSlide)}%)`
  })
})