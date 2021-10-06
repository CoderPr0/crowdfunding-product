// Onload function to uncheck all inputs
window.onload = uncheckInput = () => {
    const inputs = document.getElementsByTagName('input');
    
    for (let i=0; i<inputs.length; i++)  {
        if (inputs[i].type == 'checkbox')   {
            inputs[i].checked = false;
        }
    }
}


// For scrolling
window.addEventListener('scroll', function () {
    const nav = this.document.querySelector('nav')
    let windowPosition = window.scrollY > 0

    nav.classList.toggle('scrolling-active', windowPosition)
})


// Bookmark
const bookmark = document.querySelector("#bookmark")
const bookmarkText = document.querySelector('.bookmark>p')
const bookmarkButton = document.querySelector('.bookmark')

bookmark.onclick = function () {
    if (this.checked) {
        bookmarkText.innerHTML = 'Bookmarked'
    } else {
        bookmarkText.innerHTML = 'Bookmark'
    }
}


// For out of stock items
const leftover = document.querySelectorAll('.number')

leftover.forEach((remaining) => {
    if (remaining.innerHTML == '0') {
        let pledgeBox = remaining.closest(".pledge-box")
        pledgeBox.classList.add('no-stocks')
        pledgeBox.children[1].removeAttribute('onclick')
    }
})


// Modal variables
const section4 = document.querySelector('.section4')
const pledgeInput = document.querySelectorAll('.pledge-input')
const noReward = document.querySelector('#no-reward-check')
const bambooStand = document.querySelector('#bamboo-check')
const blackStand = document.querySelector('#black-check')
const mahoganyEdition = document.querySelector('#mahogany-check')

const noRewardPledge = document.querySelector('.pledge1>.enter-pledge')
const bambooPledge = document.querySelector('.pledge2>.enter-pledge')
const blackPledge = document.querySelector('.pledge3>.enter-pledge')
const mahoganyPledge = document.querySelector('.pledge4>.enter-pledge')

const section5 = document.querySelector('.section5')

// Modal functions
modal = () => {
    section4.setAttribute('style', 'display: inline')
}

closeModal = () => {
    section4.setAttribute('style', 'display: none')
}

check = (pledgeCheck) => {
    pledgeCheck.checked = true
}

uncheckAll = () => {
    pledgeInput.forEach((input) => {
        input.checked = false
    })
}

enterPledge = () => {
    if (noReward.checked == true) {
        noRewardPledge.setAttribute('style', 'display: flex')
    } else {
        noRewardPledge.setAttribute('style', 'display: none')
    }
    if (bambooStand.checked == true) {
        bambooPledge.setAttribute('style', 'display: flex')
    } else {
        bambooPledge.setAttribute('style', 'display: none')
    }
    if (blackStand.checked == true) {
        blackPledge.setAttribute('style', 'display: flex')
    } else {
        blackPledge.setAttribute('style', 'display: none')
    }
    if (mahoganyEdition.checked == true) {
        mahoganyPledge.setAttribute('style', 'display: flex')
    } else {
        mahoganyPledge.setAttribute('style', 'display: none')
    }
}

thankYou = () => {
    section5.setAttribute('style', 'display: inline')
}

closeThankYou = () => {
    section5.setAttribute('style', 'display: none')
}

// modal close button
closeIcon = () => {
    closeModal()
    uncheckAll()
    enterPledge()
}

// Modal buttons
noRewardCheck = () => {
    modal()
    uncheckAll()
    check(noReward)
    enterPledge()
}

bambooCheck = () => {
    modal()
    uncheckAll()
    check(bambooStand)
    enterPledge()
}

blackCheck = () => {
    modal()
    uncheckAll()
    check(blackStand)
    enterPledge()
}

mahoganyCheck = () => {
    modal()
    uncheckAll()
    check(mahoganyEdition)
    enterPledge()
}
