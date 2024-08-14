const contactform = document.getElementById('contactform');
const username = document.getElementById('username');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message')

const username_error = document.getElementById('username_error');
const email_error = document.getElementById('email_error');
const subject_error = document.getElementById('subject_error');
const message_error = document.getElementById('message_error');;

contactform.addEventListener('submit',(e)=>
{

    e.preventDefault();

    const email_check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(username.value === '' || username.value == null)
    {
        username_error.innerHTML = "\*Name is required";
        return username_error
    }        

    if(!email.value.match(email_check))
    {
        email_error.innerHTML = "\*Enter valid email";
        return email_error
    }

    if(subject.value === '' || subject.value == null)
    {
        subject_error.innerHTML = "\*This field is required";
        return subject_error
    }
    
    contactform.submit()
    contactform.reset()

})

