$(document).ready(function(){
    $resultMessage = $('#resultMessage');
    $name = $('#name');
    $email = $('#email');
    $comments = $('#comments');

    $('#contactForm').submit(function(e){
        console.log("form submit");
        event.preventDefault();
        //clear errors
        $resultMessage.html('');
        
        //get the form values
        var name = $name.val();
        var email = $email.val();
        var comments = $comments.val();
        
        //flag for error state
        var hasErrors = false;
        
        // error message(s)
        var errorMessages = [];

        // is the name blank?
        if(name == ''){
            hasErrors = true;
            errorMessages.push("Name is required");
        }

        // if email not blank, then validate
        if(email != '' && email.indexOf("@") <= 0){
            hasErrors = true;
            errorMessages.push("if an email is specified, it must be a properly formatted email address");
        }

        // are comments blank?
        if(comments === ''){
            hasErrors = true;
            errorMessages.push("You must leave a comment");
        }

        // check for errors
        if(hasErrors){
            console.log(errorMessages);
            var strErrors = '<div class="alert alert-danger" role="alert"><strong>Please correct the following errors:</strong><ul>';
            
            for(var i=0; i < errorMessages.length; i++){
                strErrors += '<li>' + errorMessages[i] + '</li>';
            }

            strErrors += '</ul></div>';

            $resultMessage.html(strErrors);
            return false;
        } else{
            var strErrors = 'Form Completed Successfully! \n';
            strErrors += 'Name: ' + name + '\n';
            strErrors += 'Email: ' + email + '\n';
            strErrors += 'Comments: ' + comments;
            alert(strErrors);
            return true;
        }
    }); 
});