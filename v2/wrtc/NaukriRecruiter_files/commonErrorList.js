var myFunc = function (obj){var rtn=false;if(obj.val()<10){rtn='Value can not be less than 10 "[currVal]"'}return {msg:rtn,id:'cst2IErrId'}};
var myFunc1 = function (obj){
    var rtn=false;if(commonValidator.validators.numChk(obj)){
        rtn='"[currVal]" is not a numeric value'
    }
    return {msg:rtn,id:'cst2IErrId'}
};

var otherEmp = function (obj){
    var rtn=false;
    var recTypeRadioArr = $n('#recT input[type=radio]');
    var isAnyChked = false;
    for(var len=0; len<recTypeRadioArr.length;len++){
        if(recTypeRadioArr.eq(len).isChecked()){
            isAnyChked = true;
            break;        
        }
    }
    
    if(isAnyChked){
        if($n("#oth").isChecked()){
        objOth = $n("#otherT");
        if(objOth.val().length < 5){rtn='Employment status should be atleast 5 characters long.'}
        if(objOth.val().length == 0){rtn='Please specify your Role in Hiring/Recruitment'}
        else{
            //console.log(objOth.val());
            var reg='^[a-zA-Z .-]+$';
            if(!objOth.val().match(reg)){
                rtn = 'Special characters other than - . are not supported for Recruiter type description.';
            } 
        }
        var otherValArrStr = objOth.val().replace(/\s+/g," ").split(" ");
        for(sCntr=0;sCntr<otherValArrStr.length;sCntr++){
            if(otherValArrStr[sCntr].length > 32) {
                rtn =  'Please insert spaces atleast after every 32 characters.';
                //console.log(rtn);
                break;
            }
        }
    }
    }
    else{
        rtn = 'Please specify your Role in Hiring/Recruitment';
    }

    return {msg:rtn,id:'recTypeErr'}
};

var charLenCheck = function (obj){
//    alert(obj.val());
    var rtn=false;
    var otherValArrStr = obj.val().replace(/\s+/g," ").split(" ");
    for(sCntr=0;sCntr<otherValArrStr.length;sCntr++){
        if(otherValArrStr[sCntr].length > 32) {
            rtn =  'Please insert spaces after every 32 characters.';
            break;
        }
    }
    var id = obj.attr('id');
    return {msg:rtn,id:id+'_err'}
};

var checkNewJobUrl = function (obj) {
   
    var rtn=false;
    if(obj.val().length){
        var regexp = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        var regurl1 = /.*naukrirecruiter\.naukri.com.*/;
        var regurl2 = /.*recruiters\.naukri\.com.*/;
        if( !regexp.test(obj.val())){
            rtn =  'A valid URL should start with http or https.';            
        }else if(regurl1.test(obj.val())){
              rtn =  'Please enter a URL other than your public profile URL.';       
        }else if(regurl2.test(obj.val())){
              rtn =  'Please enter a URL other than your public profile URL.';       
        }
    }
    var jId = obj.attr('id');    
    return {msg:rtn,id:jId+'_err'}  
   // return {msg:rtn,id:'jbLnkNew_err'}    
}

var checkupdatedJobUrl = function (obj) {
    var rtn=false;
    if(obj.val().length){
        var regexp = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        var regurl1 = /.*naukrirecruiter\.naukri.com.*/;
        var regurl2 = /.*recruiters\.naukri\.com.*/;
        if( !regexp.test(obj.val())){
            rtn =  'A valid URL should start with http or https.';            
        }else if(regurl1.test(obj.val())){
              rtn =  'Please enter a URL other than your public profile URL.';       
        }else if(regurl2.test(obj.val())){
              rtn =  'Please enter a URL other than your public profile URL.';       
        }
    }
    var jId = obj.attr('id');    
    return {msg:rtn,id:jId+'_err'}    
}
//var  = function (obj){var rtn=false;if(obj.val()<5){}}
var commonErrList = {
	J001 : 'Please specify your email ID.',
	J002 : 'Please enter a valid email ID.',
    J003 : function(){if($n('#emailRa').val()!=$n('#emailR').val()){return 'Email IDs entered do not match.'}else{return false}},
    J004 : {msg:'Password should contain at least one alphabet and one digit, and should be 8-20 characters long',regEx:/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/},
    J005 : 'Please enter your password.',
    J006 : 'Please specify your name.',
    J007 : 'Please enter a valid mobile number.',
    J008 : 'Please enter a valid mobile number having [MinL]-[MaxL] digits.',
    /*J009 : function(){
                if($n('#osIndia').isChecked()){
                    return false
                }else{
                    return {msg:'Please select your current location.',id:'location_err'}
                }
            },*/

    J009 : function(){
                var rtn=false;
                if($n('#osIndia').isChecked()){
                    if($n('#locationOS').currObj().selectedIndex<1){
                        rtn='Please select your country.';
                    }
                }
                else{
                    if($n('#location').currObj().selectedIndex<1){
                    rtn='Please select your current location.';
                    }
                }
                return {msg:rtn,id:'location_err'}
            },
    J010 : 'Name can contain only alphabets.',
  //  J010 : function(){if($n('#osIndia').isChecked()){return {msg:'Please select your country.',id:'location_err'}}else{return false}},
    J011 : {msg:'Please specify your Role in Hiring/Recruitment',id:'recTypeErr'},
    J012 : 'Please specify your employer.',
    J013 : 'Please specify your designation.',
    J014 : 'Too few characters entered for company, please enter at least [MinL] characters.',
    J015 : 'Too few characters entered for designation, please enter at least [MinL] characters.',
    J016 : function(){if($n('#retype').val()!=$n('#newpass').val()){return 'The passwords entered do not match. Please try again.'}else{return false}},
    J017 : otherEmp,
    J018 : 'Please mention your previous employer.',
    J019 : 'Name of previous employer should have minimum [MinL] characters.',
    J020 : 'Previous designation should have minimum [MinL] characters.',
    J021 : function(){if($n('#prevDesg1').val()==''){return 'Please specify your designation.'}else{return false}},
    J022 : function(){if($n('#prevDesg2').val()==''){return 'Please specify your designation.'}else{return false}},
    J023 : function(){if($n('#newDesig').val()==''){return 'Please specify your designation.'}else{return false}},
//    J022 : function(){if($n('#prevDesg2').val()==''){if($n('#prevEmp2').val()!=''){return 'Please specify your designation.'}else{return 'Please mention your previous designation.'}}else{return false}},
//    J023 : function(){if($n('#newDesig').val()==''){if($n('#newEmp').val()!=''){return 'Please specify your designation.'}else{return 'Please mention your designation.'}}else{return false}},
    J024 : 'Please specify your employer.',
    J025 : 'Too few characters entered for company, please enter at least [MinL] characters.',
    J026 : 'Too few characters entered for designation, please enter at least [MinL] characters.',
    J027 : 'Please enter your Username/Email.',
    J028 : 'Please enter the job description.',
    J029 : 'Password field cannot be left blank.',
    J030 : 'Please re-enter the password to confirm.',
  //  J031 : {msg:'Password should be [MinL]-[MaxL] characters long.',regEx:/^.*(?=.{6,})(@_-?=.*[a-zA-Z])(@_-?=.*\d).*$/},
    J031 : function(obj){
                var rtn=false;
                var regEx = /^([a-zA-Z0-9@._-]){6,40}$/;
                if(!regEx.test(obj.val())){
                    rtn='Password should be [MinL]-[MaxL] characters long.';
                }
                return rtn;
            },
  //  J020 : function(){if($n())
    J032 : 'Please enter the name of the company you are hiring for.',
    J033 : 'Please enter the job location.',
    J034 : 'Too few characters entered for designation, please enter at least [MinL] characters.',
    J035 : 'Too few characters entered for company, please enter at least [MinL] characters.',
    J036 : {msg:'Special characters other than dot [.] and numbers are not allowed',id:'location_err'},
    J037 : {msg:'Special characters other than dot [.] and numbers are not allowed',id:'location_err'},
    J038 : {msg:'Name can contain only alphabets.',regEx:'^[a-zA-Z ]+$'},
    J039 : {msg:'Please enter your own URL',id:'urlsuggestion_err'},
    J040 : {msg:'Invalid URL entered; special characters other than - . are not allowed.',regEx:'^[A-Za-z0-9.-]*$',id:'urlsuggestion_err'},
    J041 : 'Please enter a URL to claim.',

    J042 : function(){
                var rtn=false;
                $n("#otherCity").removeClass('err');
                $n("#location_err").removeClass('err');
                if($n('#osIndiaMrp').isChecked()){
                    if($n('#locationOS').currObj().selectedIndex<1){
                        rtn='Please select your country.';
                    }
                }
               /* else{
//                    if($n('#location').currObj().selectedIndex<1){
//                    rtn='Please select your current location.';
//                    }
                        if(isOtherCity($n("#location").val())){
                            if($n("#otherCity").val().length<=3){
                               rtn ='Please enter a valid other city.';
                            }
                        }
                }*/
                return {msg:rtn,id:'location_err'}
            },
    J043 : 'Please enter a primary email ID',
    J044 : function(){if($n('#reTypeNewPassword').val()!=$n('#newPassword').val()){return 'Value entered in New password and \'Confirmed New Password\' do not match.'}else{return false}},
    J045 : 'Special characters others than - . are not allowed as the reason to delete profile.', 
    J046 : function(){if($n('#oldPassword').val()=='' && $n('#newPassword').val()!=''){return 'Please specify your current password.'} else{return false}},
    J047 : charLenCheck,
    J048 : function(obj){
        rtn = "";
        //    console.log('in side J048');
        var rtn = false;
        var err_id = obj.attr('id').split('_')[1] + '_err';
       // var array_length = $n('#hid_' + obj.attr('id').split('_')[1]).val().length;
        var array_select_value = eval($n('#hid_' + obj.attr('id').split('_')[1]).val());
      //  select_values = select_values.substring(1, array_length - 1);
        //select_values = select_values.replace(/\"/g,'');
      // console.log(select_values);
       // var array_select_value = select_values.split(",")
      //  console.log(array_select_value[0]);
       // console.log(array_select_value.length);
       // console.log($n('#hid_' + obj.attr('id').split('_')[1]).val().length);
        // console.log($n('#hid_functionalArea').val());
        if (array_select_value !=null && array_select_value.length > 3) {
            rtn = "You can select a maximum of 3 Industries that you hire for.";
        }
        return {msg: rtn, id: err_id}
			},
    J049: function(){
        if ($n('#currjobProfile').val().length > 500) {
            return 'Too many characters entered for job profile, please enter maximum 500 characters.'
        } else {
            return false
        }
    },
     J050: function(){
        if ($n('#prevjobProfile1').val().length > 500) {
            return 'Too many characters entered for job profile, please enter maximum 500 characters.'
        } else {
            return false
        }
    },
     J051: function(){
        if ($n('#prevjobProfile2').val().length > 500) {
            return 'Too many characters entered for job profile, please enter maximum 500 characters.'
        } else {
            return false
        }
    },
     J052: function(){
        if ($n('#newjobProfile').val().length > 500) {
            return 'Too many characters entered for job profile, please enter maximum 500 characters.'
        } else {
            return false
        }
    },
     J053: function(obj){
            
         var regex_email = /([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+/;
            var arr = obj.val().split(/[\n\r]/g);
           
            var count = arr.length;
            for (i=0;i<count;i++){
              
              if(regex_email.test(arr[i])){
                  //console.log(regex_email.test(arr[i]));
                   return 'Cannot add email in Job Profile!!';
              } 
             
            }
             return false;
//        var regex_email = /([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+/;
//        console.log(regex_email.test($n('#currjobProfile').val()));
//        if(regex_email.test($n('#currjobProfile').val())){
//            return 'Cannot add email in Job Profile!!';
//        }else{
//            return false;
//        } 
    },
             J054: function(obj) {
        rtn = "";
        //    console.log('in side J048');
        var rtn = false;
        var err_id = obj.attr('id').split('_')[1] + '_err';
      //  var array_length = $n('#hid_' + obj.attr('id').split('_')[1]).val().length;
       // var select_values = $n('#hid_' + obj.attr('id').split('_')[1]).val();
        var array_select_value = eval($n('#hid_' + obj.attr('id').split('_')[1]).val());
      //  select_values = select_values.substring(1, array_length - 1);
        //select_values = select_values.replace(/\"/g,'');
        // console.log(select_values);
       // var array_select_value = select_values.split(",")
        //  console.log(array_select_value[0]);
        // console.log(array_select_value.length);
        // console.log($n('#hid_' + obj.attr('id').split('_')[1]).val().length);
        // console.log($n('#hid_functionalArea').val());
        if (array_select_value !=null && array_select_value.length > 3) {
            rtn = "You can select a maximum of 3 FAs that you hire for.";
        }
        return {msg: rtn, id: err_id}
    },
    J055: function(obj) {
        rtn = "";
        //    console.log('in side J048');
        var rtn = false;
        var err_id = obj.attr('id').split('_')[1] + '_err';
        var array_select_value = eval($n('#hid_' + obj.attr('id').split('_')[1]).val());
       // var array_length = $n('#hid_' + obj.attr('id').split('_')[1]).val().length;
      //  var select_values = $n('#hid_' + obj.attr('id').split('_')[1]).val();
      //  select_values = select_values.substring(1, array_length - 1);
        //select_values = select_values.replace(/\"/g,'');
        // console.log(select_values);
      //  var array_select_value = select_values.split(",")
        //  console.log(array_select_value[0]);
        // console.log(array_select_value.length);
        // console.log($n('#hid_' + obj.attr('id').split('_')[1]).val().length);
        // console.log($n('#hid_functionalArea').val());
        if (array_select_value !=null && array_select_value.length > 2) {
            rtn = "You can select a maximum of 2 levels that you hire for.";
        }
        return {msg: rtn, id: err_id}
    },
        J056 : "Please specify skills you hired for.",    
        J057: function() {
        if ($n('#domainExperties').val().length > 250) {
            return 'Skills/Roles you hire for entered too long, please enter less than 250 characters.'
        } else {
            return false
        }
    },
        J058:checkNewJobUrl,
        J059:checkupdatedJobUrl,
        J060 : 'Please specify your current employer.',
        J061 : 'Please specify your current designation.',
        J062 : 'Please accept terms and conditions to proceed.',      
        J063 : function(o){
			var id=((o.attr('id').split('_')[0])+'_hdn'),val = $n('#'+id).val(),rtn=false;
//			if(val=='' || val.split(',').length<=0){
//				rtn = 'Please specify Skills/Roles/Sectors you hire for.'
//			}else 
                            if(val.length>500){
                            rtn = 'Skills/Roles/Sectors you hire for can contain a maximum of 500 characters.'; 
                        }
			return rtn;
		},
        J064 : 'Clients you hire for can have maximum 250 characters.',
        J065 : function(obj){
        
        var objId = obj.attr('id');
       
        if ($n('#'+objId).val().length <  obj.attr('minlength')) {
            return 'Employer name should have minimum '+obj.attr('minlength')+' characters.'
        } else {
            return false
        }
    },
        J066 : function(obj){
       var objId = obj.attr('id');
      
        if ($n('#'+objId).val().length > obj.attr('maxlength')) {
              return 'Employer name should have maximum '+obj.attr('maxlength')+' characters.'
        } else {
            return false
        }
    },
        J067 : function(obj){
        
        var objId = obj.attr('id');
       
        if ($n('#'+objId).val().length < obj.attr('minlength')) {
            return 'Company hiring for should have minimum '+obj.attr('minlength')+' characters.'
        } else {
            return false
        }
    },
        J068 : function(obj){
       var objId = obj.attr('id');
      
        if ($n('#'+objId).val().length > obj.attr('maxlength')) {
              return 'Company hiring for should have maximum '+obj.attr('maxlength')+' characters.'
        } else {
            return false
        }
    },
        J069 : function(obj){
        
        var objId = obj.attr('id');
       
        if ($n('#'+objId).val().length < obj.attr('minlength')) {
           return 'Too few characters entered for Job Description, please enter at least '+obj.attr('minlength')+' characters.'
        } else {
            return false
        }
    },
        J070 : function(obj){
       var objId = obj.attr('id');
      
        if ($n('#'+objId).val().length > obj.attr('maxlength')) {
            return 'Too many characters entered for Job Description, please enter maximum '+obj.attr('maxlength')+' characters.'
        } else {
            return false
        }
    },
        J071 :{msg:'Clients you hire for cannot contain special characters.',regEx:/^[a-zA-Z\d\s&{}(),\[\]-]+$/},
        J072: function(obj) {
        //console.log($n('#otherCity').getCss('display'));
        var rtn = false;
        if ($n('#osIndia').isChecked()) {
            if ($n('#locationOS').currObj().selectedIndex < 1) {
                rtn = 'Please select your country.';
            } else if (commonValidator.checkValids('alphaDS', $n('#otherF'))) {
                rtn = "Special characters other than dot [.] and numbers are not allowed";
            }
        } else {
            if ($n('#otherCity').getCss('display') == 'none') {
                //console.log(commonValidator.checkValids('selected',$n('#location')));
                if (commonValidator.checkValids('selected', $n('#location'))) {
                    rtn = "Please select your current location.";
                }
            }
            else {
                //console.log(commonValidator.checkValids('required',$n('#otherCity')),commonValidator.checkValids('alphaDS',$n('#otherCity')))
                if (commonValidator.checkValids('required', $n('#otherCity'))) {
                    rtn = "Please select your current location.";
                }
                else if (commonValidator.checkValids('alphaDS', $n('#otherCity'))) {
                    rtn = "Special characters other than dot [.] and numbers are not allowed";
                }
                (rtn) ? $n('#otherCity').removeClass('err').addClass('err') : $n('#otherCity').removeClass('err');
            }
        }
        return {msg: rtn, id: "location_err"}
        //            if(commonValidator.checkValids('required',$n('#otherCity'))){
        //                var msg = 'Special characters other than dot [.] and numbers are not allowed';
        //            }else if()

    },
        J073 : function(obj){
    
            var rtn=false ,  errId = 'experience_err';
            if ($n('#hid_minimumExperience').val() == "" || $n('#hid_maximumExperience').val() == "") {
                if ($n('#hid_minimumExperience').val() == "" && $n('#hid_maximumExperience').val() == "")
                    rtn = "Please specify the experience range for this job.";
                else if ($n('#hid_minimumExperience').val() == "")
                    rtn = "Please specify the experience range for this job.";
                else if ($n('#hid_maximumExperience').val() == "")
                    rtn = "Please specify the experience range for this job.";
                ($n('#inp_minimumExperience').hasClass('err') == 'err') ? '' : $n('#inp_minimumExperience').addClass('err');
                ($n('#inp_minimumExperience').hasClass('err') == 'err') ? '' : $n('#inp_minimumExperience').addClass('err');
            }
            else {
                $n('#inp_minimumExperience').removeClass('err');
                $n('#inp_maximumExperience').removeClass('err');
            }

            return {msg: rtn, id:errId}
        },
         J074 : function(obj){
        rtn = "";
     
        var rtn = false;
        var err_id = obj.attr('id').split('_')[1] + '_err';
    
        var array_select_value = eval($n('#hid_' + obj.attr('id').split('_')[1]).val());
       
         if (!array_select_value) {
           
            rtn = "Please enter the job location.";
        }else if (array_select_value !=null && array_select_value.length > 3) {
                     //    console.log('more than 10');
            rtn = "You can only select a maximum of 3 locations for your job posting.";
        }
        
        if(!rtn){
            $n("#"+err_id).html("");
         //   var select_box = "inp_"+obj.attr('id').split('_')[0];
           
          //  console.log(obj.attr('id'));
             $n("#"+obj.attr('id')).removeClass('err');
        }
        return {msg: rtn, id: err_id}
	},     
        J075 : 'Please enter a Job Title / Designation.',  
        J076 : function(obj){
        
        var objId = obj.attr('id');
       
        if ($n('#'+objId).val().length < obj.attr('minlength')) {
            return 'Too few characters entered for Job Title, please enter at least '+obj.attr('minlength')+' characters.'
        } else {
            return false
        }
    },
        J077 : function(obj){
       var objId = obj.attr('id');
      
        if ($n('#'+objId).val().length > obj.attr('maxlength')) {
              return 'Job Title can have maximum '+obj.attr('maxlength')+' characters.'
        } else {
            return false
        }
    },
        J078 : function(obj){
        var objId = obj.attr('id');
        var jobTitle = $n.trim($n('#' + objId).val());
        var reg = '^[a-zA-Z \.].*';
     //   console.log(jobTitle.match(reg));
        if (!jobTitle.match(reg)) {
            return 'Job Title can begin with a letter or a dot(.).'
        } else {
            return false
        }
      
    },
	1003 : '"[currVal]" is not valid. Only numbers aire allowed in Numeric Field',
	1004 : 'Only alphanumerics are allowed in Alphanumeric Field',
	1005 : 'Only alphabets, dots and spaces are allowed. Must start with an alphabet',
	1006 : 'Please enter a valid Email Address',
	1007 : {msg:'Special characters are not allowed',regEx:/^[a-zA-Z\d\s@#]+$/},
	1008 : 'Characters in input field must be between [MinL] &amp; [MaxL]',
	1009 : 'Minimum [MinL] and Maximum [MaxL] characters are allowed in this Textarea',
	1010 : 'Please select an option',
	1011 : 'Please select a radio button',
	1012 : 'Please select the chechbox',
	1013 : 'Custom Field can not be left blank',
	1014 : 'Please enter numeric values only',
	1015 : 'This is a soft mandatory field',
	1016 : {msg:'Custom Numeric Only',id:'cst2IErrId'},
	1017 : {msg:'Custom Field can not be left blank',id:'cst2IErrId'},
	1018 : 'This is a soft mandatory field - 2',
	1019 : 'Integer and Float allowed',
	1020 : 'The value can not be less than [MinV] &amp; greater than [MaxV]',
	2001 : function(){if($n('#cst1I').val()<10){return 'Value can not be less than 10'}else{return false}},
	2002 : function(){if($n('#cst1I').val()>100){return 'Value can not be greater than 100'}else{return false}},
	2003 : function(){if($n('#opt1I').currObj().selectedIndex==1){return 'Please select option other than this'}else{return false}},
	2004 : function(){if($n('#cst2I').val()<10){return 'Value can not be less than 10'}else{return false}},
	2005 : function(){if($n('#cst2I').val()>100){return 'Value  can not be greater than 100'}else{return false}},
	//2006 : function(){if($n('#opt2I').currObj().selectedIndex==1){return 'Please select option other than this','cstErrId'}else{return false}},
	2007 : function(){var rtn = false;if($n('#opt2I').currObj().selectedIndex==1){rtn='Please select option other than this'}return {msg:rtn,id:'cstErrId'}},
	2008 : myFunc1,
	2010 : {regEx:/^[a-zA-Z\d\s]+$/}
        
};
