'use strict'

// let p = document.getElementById('intro1');
// console.log(p);

//manipulating DOM element
 //p.textContent = 'This is a demo paragraph explaining the use of getElementById'; 
// console.log(p.textContent); //accesing

// let p = document.querySelector('#intro');
// console.log(p);

let h2 = document.querySelector('h2')
h2.textContent = 'Welcome to our Bank';

let h1 = document.querySelector('h1');
h1.innerHTML = `<b>WE HAVE THE BEST LOAN OFFERS FOR YOU.</b>`;

// let input = document.querySelector('#fname');
// input.value = 'Mark';

//let bannerDiv = document.querySelector('.home-page-banner');
// bannerDiv.style.backgroundColor = '#FDEBD0';
// bannerDiv.style.color = '#28282B';

// bannerDiv.classList.remove('home-page-banner');
// bannerDiv.classList.add('home-page-banner');

let mainSectionArea = document.querySelector('.main-section-area');
//let selectedTab = 'home-page';

let homeContent = document.querySelector('.home-page');
let emiCalcContent = document.querySelector('.emi-calculator-page');
let loanContent = document.querySelector('.apply-loan-page');
const modalDiv = document.getElementById('calculate-emi-modal');

function calculateEMI(){
    let principal = document.getElementById('amount').value;
    let duration = document.getElementById('duration').value;
    let rate = document.getElementById('roi').value / 100 / 12;

    //calculate emi
    const emi = ((principal * rate * Math.pow(1 + rate, duration)) / (Math.pow(1 + rate, duration) - 1)).toFixed(2);

    //Total payable amount
    const paybleAmount = (emi * duration).toFixed(2);

    //alert('EMI: ' + emi + '. Total payable amount: ' + paybleAmount);

    showModal(emi,paybleAmount);
}

function showModal(emi, payableAmount){
    document.getElementById('calculated-emi-cell')
    .textContent = "$" + emi;

    document.getElementById('calculated-payable-amount-cell')
    .textContent = "$" + payableAmount;
    modalDiv.classList.remove('hide');
}

function hideModal(){
    modalDiv.classList.add('hide');
}
document.querySelector('.close-modal-btn').addEventListener('click', hideModal)

//document.querySelector('.calculate-emi-button').onclick = calculateEMI;


function renderSelectedSection(selectedTab){
    mainSectionArea.innerHTML = '';

    switch(selectedTab){
        case 'home-page':
            mainSectionArea.innerHTML = homeContent.outerHTML;
            break;
        case 'emi-calculator-page':
            mainSectionArea.innerHTML = emiCalcContent.outerHTML;
            break;
        case 'apply-loan-page':
            mainSectionArea.innerHTML = loanContent.outerHTML;
            break;
    }
}

renderSelectedSection('home-page');

//EVENT HANDLER PROPERTIES
let applyButton = document.querySelector('.apply-now-button');
applyButton.onclick = function(){
    alert('Thank you for applying!')
}

applyButton.onmouseover = function(){
    applyButton.style.backgroundColor = 'transparent';
    applyButton.style.border = "#F39C12 2px solid";
}

applyButton.onmouseout = function(){
    applyButton.style.backgroundColor = '#F39C12';
    applyButton.style.border = "none";
}



//The addEventListener() Method
let header = document.querySelector('header');
header.addEventListener('mouseover', function(){
    header.style.color = 'black';
})
header.addEventListener('mouseout', function(){
    header.style.color = 'white';
})



function ApplyForLoan(event){
    event.preventDefault();

    //Reading Input Type=text element value
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;

    //Reading Select List Selected value
    const occupation = document.getElementById('occupation').value;

    //Reading Input Type=date element value
    const dob = document.getElementById('dob').value;

    //Reading Radio button selected element value
    const gender = document.querySelector('input[name="gender"]:checked').value;

    //console.log(fname, lname, email, occupation, dob, gender);

    //Reading value of selected Checkboxes
    const contacts = [];
    const contactEl = document.getElementsByName('contact');

    for(let i = 0; i < contactEl.length; i++){
        if(contactEl[i].checked){
            contacts.push(contactEl[i].value);
        }
    }

    showMessage(fname);
}


/*<div class="modal-overlay">
            <div class="modal-wrapper">
                <div class="modal-header">
                    <h2>Loan Request Received</h2>
                </div>            
                <div class="modal-content">
                    <h3>Hello, John</h3>
                    <p style="margin-top: 30px;">
                        We have received your loan request and we 
                        will contact you through your provided contact
                    </p>
                </div>
                <div class="modal-footer">
                    <button class="close-modal-btn">OK</button>
                </div>
            </div>
        </div>*/

function showMessage(name){
    const overlayDiv = document.createElement('div');
    overlayDiv.classList.add('modal-overlay');

    const modalWrapper = document.createElement('div');
    modalWrapper.classList.add('modal-wrapper');

    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    const header2 = document.createElement('h2');
    header2.textContent = 'Loan Request Received';
    modalHeader.appendChild(header2)

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    const heading3 = document.createElement('h3');
    const textNode = document.createTextNode('Hello, ' + name);
    heading3.appendChild(textNode)
    modalContent.insertAdjacentElement('afterbegin', heading3);

    const p = document.createElement('p');
    p.style.marginTop = '30px';
    p.textContent = 'We have received your loan request and we will contact you through your provided contact.';
    modalContent.insertAdjacentElement('beforeend', p);

    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');
    const closeBtn = document.createElement('div');
    closeBtn.classList.add('close-modal-btn');
    closeBtn.textContent = 'OK';
    closeBtn.onclick = function(){
        overlayDiv.remove();
    }
    modalFooter.insertAdjacentElement('beforeend', closeBtn);

    modalWrapper.appendChild(modalHeader);
    modalWrapper.appendChild(modalContent);
    modalWrapper.appendChild(modalFooter);

    overlayDiv.appendChild(modalWrapper);

    document.querySelector('.main-content-area')
    .insertAdjacentElement('beforeend', overlayDiv);
}


document.addEventListener('keydown', function(event){
    console.log(event.key);
    if(event.keyCode === 13 && !modalDiv.classList.contains('hide')){
        hideModal();
    }
})

function showClickAlert(e){
    e.stopPropagation();
    alert('Button Clicked');
}