$n(document).ready(function() {
    
  
    $n('#recProf').addEvent('click', function() {
        $n('#recProfOpt').toggle();
        $n(this).toggleClass('recProfHd', 'recProfHdSel');
    });
    $n('#recInbox').addEvent('click', function() {
        $n('#recInboxOpt').toggle();
        $n(this).toggleClass('recProfHd', 'recProfHdSel');
    });
    //Taken from inline js

    $n('#primaryPhone').tooltip({
        events: 'click',
        content: '#mobiletooltip',
        closeEvent: 'blur',
        dir: 'right',
        arrow: true
    });
    $n('#currjobProfile').tooltip({
        events: 'click',
        content: '#currjobProfileEditTip',
        closeEvent: 'blur',
        dir: 'right',
        arrow: true
    });
    $n('#prevjobProfile1').tooltip({
        events: 'click',
        content: '#prevjobProfile1EditTip',
        closeEvent: 'blur',
        dir: 'right',
        arrow: true
    });
    $n('#newjobProfile').tooltip({
        events: 'click',
        content: '#prevjobProfile2EditTip',
        closeEvent: 'blur',
        dir: 'right',
        arrow: true
    });
    $n('#currjobProfile').tooltip({
        events: 'click',
        content: '#newjobProfileEditTip',
        closeEvent: 'blur',
        dir: 'right',
        arrow: true
    });
    
    $n('#secondryPhone').tooltip({
        events: 'click',
        content: '#mobiletooltip',
        closeEvent: 'blur',
        dir: 'right',
        arrow: true
    });
    //mobiletooltip
    $n('#viewProfile').tooltip({
        events: 'mouseover',
        content: '#vProf',
        closeEvent: 'mouseout',
        dir: 'right',
        arrow: true
    });
    $n('#email').tooltip({
        events: 'focus',
        content: '#emailEditTip',
        closeEvent: 'blur',
        dir: 'right',
        arrow: true
    });
    $n('#emailSec').tooltip({
        events: 'focus',
        content: '#emailSecEditTip',
        closeEvent: 'blur',
        dir: 'right',
        arrow: true
    });


    $n('#SkillsAndRollsTip').tooltip({
        events: 'mouseover',
        content: '#SkillsHiringTooltip',
        closeEvent: 'mouseout',
        dir: 'right',
        arrow: true
    });
    
//    $n('#fbSharing').tooltip({
//        events: 'mouseover',
//        content: '#SocialSharingTooltip',
//        closeEvent: 'mouseout',
//        dir: 'left',
//        arrow: true
//    });    
//    $n('#twSharing').tooltip({
//        events: 'mouseover',
//        content: '#SocialSharingTooltip',
//        closeEvent: 'mouseout',
//        dir: 'left',
//        arrow: true
//    }); 
//    $n('#lnSharing').tooltip({
//        events: 'mouseover',
//        content: '#SocialSharingTooltip',
//        closeEvent: 'mouseout',
//        dir: 'right',
//        arrow: true
//    });     
    
    $n('#levelHiredNewTip').tooltip({
        events: 'mouseover',
        content: '#JobDescriptionTooltip',
        closeEvent: 'mouseout',
        dir: 'right',
        arrow: true
    });  
    
    $n('#levelHiredClosedTip').tooltip({
        events: 'mouseover',
        content: '#JobDescriptionTooltip',
        closeEvent: 'mouseout',
        dir: 'right',
        arrow: true
    });      
    //
//
//    $n('#twSharing').tooltip({
//        events: 'mouseover',
//        content: '#twSharingTip',
//        closeEvent: 'mouseout',
//        dir: 'left',
//        arrow: true
//    });
//    
//    $n('#lnSharing').tooltip({
//        events: 'mouseover',
//        content: '#lnSharingTip',
//        closeEvent: 'mouseout',
//        dir: 'right',
//        arrow: true
//    });
//    
    /*
     $n('#location').tooltip({
     events:'focus',
     content:'#locEditTip',
     closeEvent:'blur', 
     dir:'right',
     arrow:true
     });
     */
    $n('#country').tooltip({
        events: 'focus',
        content: '#cntryEditTip',
        closeEvent: 'blur',
        dir: 'right',
        arrow: true
    });
    $n('#profHead').tooltip({
        events: 'focus',
        content: '#profHdEditTip',
        closeEvent: '',
        dir: 'right',
        arrow: true
    });
  
    $n('#currEmp').tooltip({
        events: 'focus',
        content: '#currEmpEditTip',
        closeEvent: 'blur',
        dir: 'right',
        arrow: true
    });
//    $n('#currDesig').tooltip({
//        events: 'focus',
//        content: '#currDesigEditTip',
//        closeEvent: 'blur',
//        dir: 'right',
//        arrow: true
//    });
  
    $n('#newEmp').tooltip({
        events: 'focus',
        content: '#nEmpEditTip',
        closeEvent: 'blur',
        dir: 'right',
        arrow: true
    });
    $n('#prevEmp1').tooltip({
        events: 'focus',
        content: '#nEmpEditTip',
        closeEvent: 'blur',
        dir: 'right',
        arrow: true
    });    

    $n('#companyPersonalDetails').tooltip({
        events: 'focus',
        content: '#nEmpEditTip',
        closeEvent: 'blur',
        dir: 'right',
        arrow: true
    });        
    //
//    $n('#newDesig').tooltip({
//        events: 'focus',
//        content: '#nDesigEditTip',
//        closeEvent: 'blur',
//        dir: 'right',
//        arrow: true
//    });
  
    $n('#nJp').tooltip({
        events: 'focus',
        content: '#njpEditTip',
        closeEvent: 'blur',
        dir: 'right',
        arrow: true
    });
    $n('#jobProfile').tooltip({
        events: 'focus',
        content: '#jpEditTip',
        closeEvent: 'blur',
        dir: 'right',
        arrow: true
    });
    $n('#prevEmp').tooltip({
        events: 'focus',
        content: '#prevEmpEditTip',
        closeEvent: 'blur',
        dir: 'right',
        arrow: true
    });
    $n('#jobProfilePrev').tooltip({
        events: 'focus',
        content: '#jpPrevEditTip',
        closeEvent: 'blur',
        dir: 'right',
        arrow: true
    });
    $n('#prevEmpN').tooltip({
        events: 'focus',
        content: '#prevEmpNEditTip',
        closeEvent: 'blur',
        dir: 'right',
        arrow: true
    });
    $n('#jobProfilePrevN').tooltip({
        events: 'focus',
        content: '#jpPrevNEditTip',
        closeEvent: 'blur',
        dir: 'right',
        arrow: true
    });
    $n('#hireInfo').tooltip({
        events: 'focus',
        content: '#hireInfoEditTip',
        closeEvent: '',
        dir: 'right',
        arrow: true
    });
    $n('#phN').tooltip({
        events: 'focus',
        content: '#phNEditTip',
        closeEvent: 'blur',
        dir: 'right',
        arrow: true
    });
    $n('#levelHired').tooltip({
        events: 'focus',
        content: '#lvlHEditTip',
        closeEvent: 'blur',
        dir: 'right',
        arrow: true
    });
    $n('#locHired').tooltip({
        events: 'focus',
        content: '#secHEditTip',
        closeEvent: 'blur',
        dir: 'right',
        arrow: true
    });
    $n('#companyHired').tooltip({
        events: 'focus',
        content: '#compHEditTip',
        closeEvent: 'blur',
        dir: 'right',
        arrow: true
    });
    $n('#hideContactDet').tooltip({
        events: 'mouseover',
        content: '#hideContact',
        closeEvent: 'mouseout',
        dir: 'right',
        arrow: true
    });
    $n('#domExp').tooltip({
        events: 'mouseover',
        content: '#domExpTip',
        closeEvent: 'mouseout',
        dir: 'right',
        arrow: true
    });
    $n('#sectorsSkillsEditQues').tooltip({
        events: 'mouseover',
        content: '#sectorsSkillsEditQuesTip',
        closeEvent: 'mouseout',
        dir: 'right',
        arrow: true
    });
    $n('#clientsHireQuestion').tooltip({
        events: 'mouseover',
        content: '#clientsHireQuestionTip',
        closeEvent: 'mouseout',
        dir: 'right',
        arrow: true
    });
    $n('#profHed').tooltip({
        events: 'mouseover',
        content: '#profHedTip',
        closeEvent: 'mouseout',
        dir: 'right',
        arrow: true
    });
    $n('#profHedEditQues').tooltip({
        events: 'mouseover',
        content: '#profHedEditQuesTip',
        closeEvent: 'mouseout',
        dir: 'right',
        arrow: true
    });
    
//    $n('#headerRecruiter').tooltip({
//        events: 'mouseover',
//        content: '#recruiterSolutionTip',
//        closeEvent: 'mouseout',
//        dir: 'left',
//        arrow: true
//    });
   
    $n('#jobLinkQuestion_newClosed').tooltip({
        events: 'mouseover',
        content: '#jobLinkNewTip',
        closeEvent: 'mouseout',
        dir: 'right',
        arrow: true
    });
    
    $n('#jobLinkQuestion_new').tooltip({
        events: 'mouseover',
        content: '#jobLinkNewTip',
        closeEvent: 'mouseout',
        dir: 'right',
        arrow: true
    });
    $n('#vCardPrev').tooltip({
        events: 'mouseover',
        content: '#vCard',
        closeEvent: 'mouseout',
        dir: 'bottom'
    });
    $n('#secondryEmail').tooltip({
        events: 'click',
        content: '#secondryPhoneTip',
        closeEvent: 'blur',
        dir: 'right',
        arrow: true
    });
    $n('#currentlyHiringTip').tooltip({
        events: 'mouseover',
        content: '#currHiringTooltip',
        closeEvent: 'mouseout',
        dir: 'right',
        arrow: true
    });  
    $n('#pastHiringTip').tooltip({
        events: 'mouseover',
        content: '#pastHiringTooltip',
        closeEvent: 'mouseout',
        dir: 'right',
        arrow: true
    });      
    //    $n('#verifyEmail').addEvent('click',function(){
    //        lightBox({
    //            trigger:"verifyEmail1",
    //            contId:"vEmail",
    //            close:"closeVemail",
    //            contWidth:543,
    //            ecp:true,
    //            fixedLayer:true,
    //            returnFocus:false
    //        })
    //    });
    
   
    $n('#verifyPrimaryPhone').addEvent('click', function() {
        $n("#resendSmsMsg").addClass('dspN');
        lightBox({
            trigger: "verifyPrimaryPhone",
            contId: "vPhone",
            close: "closeVphone",
            contWidth: 543,
            ecp: true,
            fixedLayer: true,
            returnFocus: true
        })
        $n('#priPhoneLightBox').html($n('#primaryPhone').val());
        $n('#resendSMSType').val('primary');
        
        var postData = 'uData=' + $n('#encUData').val();
        postData += '&priamryPhone=' + $n('#priPhone').html();
        $n(this).ajaxReq({
            type: 'post',
            async: 'true',
            datatype: 'json',
            data: postData,
            url: activationActionUrl + 'resendSMS',
            success: function parseImportResponse(resendEmailResponse) {
//console.log(resendEmailResponse);
            },
            error: function() {
            }
        }); //ajax finished
    });


    $n('#verifySecondaryPhone').addEvent('click', function() {
        $n("#resendSmsMsg").addClass('dspN');
        
        lightBox({
            trigger: "verifySecondaryPhone",
            contId: "vPhone",
            close: "closeVphone",
            contWidth: 543,
            ecp: true,
            fixedLayer: true,
            returnFocus: true
        })

        $n('#priPhoneLightBox').html($n('#secondryPhone').val());
        $n('#resendSMSType').val('secondry');

        //Resend sms on verify click
        var postData = 'uData=' + $n('#encUData').val();
        postData += '&secondryPhone=' + $n('#secPhone').html();
        $n(this).ajaxReq({
            type: 'post',
            async: 'true',
            datatype: 'json',
            data: postData,
            url: activationActionUrl + 'resendSMS',
            success: function parseImportResponse(resendEmailResponse) {
//console.log(resendEmailResponse);
            },
            error: function() {
            }
        }); //ajax finished
    });

    $n('a.deleteQuickJob').addEvent('click', function() {
        var jobId = $n(this).attr('id').split('_')[1];
        $n('#deleteJobId').currObj().value = jobId;
        var heading_txt = htmlEntityConverter($n('#levelHired_' + jobId).html());
        //.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
        $n('#qjJobTitle').html(heading_txt);

        //levelHired_134
        lightBox({
            trigger: "trigQck",
            contId: "qj",
            close: "closeqj",
            contWidth: 560,
            ecp: true,
            fixedLayer: true,
            returnFocus: true
        })
        $n('#deleteJobId').currObj().value = jobId;
      
    });

    $n('a.showHideJob').addEvent('click', function() {

        var naukrijobId = $n(this).attr('id').split('_')[1];
        var jobId = $n(this).attr('id').split('_')[2];

        var trg_id = 'naukrijbHide';
        var close_id = 'closenjHide';
        var titlespanId = '#naukrijbHideTitle';

        if ($n('#JobType-' + naukrijobId).val() == "Show") {
            $n('#showNaukriJobType').val('open');
            $n('#showNaukriJobId').val(naukrijobId);
            
            trg_id = 'naukrijb';
            close_id = 'closenjShow';
            titlespanId = "#naukrijbTitle";
          

        } else {
             $n('#hideNaukriJobType').val('open');
             $n('#hideNaukriJobId').val(naukrijobId);

        }
        $n(titlespanId).html($n('#levelHired_' + jobId).html());

        lightBox({
            trigger: naukrijobId,
            contId: trg_id,
            close: close_id,
            contWidth: 543,
            ecp: true,
            fixedLayer: true,
            returnFocus: true,
            reset:false
        });
    });
    
    $n('a.showHideClosedJob').addEvent('click', function() {

        var naukrijobId = $n(this).attr('id').split('_')[1];
        var jobId = $n(this).attr('id').split('_')[2];

        var titlespanId = '#naukrijbHideTitle';
        var trg_id = 'naukrijbHide';
        var close_id = 'closenjHide';

        if ($n('#JobType-' + naukrijobId).val() == "Show") {

            $n('#showNaukriJobType').val('closed');
            $n('#showNaukriJobId').val(naukrijobId);
            $n('#showCurrNaukriStatus').val('0');

            trg_id = 'naukrijb';
            close_id = 'closenjShow';
            titlespanId = "#naukrijbTitle";


        } else {
           // console.info('QQQ')
            $n('#hideNaukriJobType').val('closed');
            $n('#hideNaukriJobId').val(naukrijobId);
            $n('#hideCurrNaukriStatus').val('2');
        }


        $n(titlespanId).html($n('#closedDesig_' + jobId).html());

        lightBox({
            trigger: naukrijobId,
            contId: trg_id,
            close: close_id,
            contWidth: 543,
            ecp: true,
            fixedLayer: true,
            returnFocus: true,
            reset:false
        });
    });
    //
    $n('a.deleteClosedQuickJob').addEvent('click', function() {
        var jobId = $n(this).attr('id').split('_')[1];
         $n('#deleteJobId').currObj().value = jobId;
        $n('#qjJobTitle').html($n('#closedDesig_' + jobId).html());
        
        lightBox({
            trigger: "trigQck",
            contId: "qj",
            close: "closeqj",
            contWidth: 560,
            ecp: true,
            fixedLayer: true,
            returnFocus: true
        })
          $n('#deleteJobId').currObj().value = jobId;
    });

    $n('a[rel="hideJob"]').addEvent('click', function() {
        lightBox({
            trigger: "trigHide",
            contId: "hideJ",
            close: "closeJ",
            contWidth: 543,
            ecp: true,
            fixedLayer: true,
            returnFocus: true
        })
    });
    $n('a[rel="showJob"]').addEvent('click', function() {
        lightBox({
            trigger: "trigShow",
            contId: "showJ",
            close: "closeSh",
            contWidth: 543,
            ecp: true,
            fixedLayer: true,
            returnFocus: true
        })
    });
    $n('a.rePost').addEvent('click', function() {
//var jobId=$n(this).prev().val();
        var jobId = $n(this).attr('id').split('_')[1];
        $n('#rePostJobId').val(jobId);
          $n('#rePostJobId').currObj().value = jobId;
        $n('#repostJobTitle').html($n('#closedDesig_' + jobId).html());
        
        lightBox({
            trigger: "trigRepost",
            contId: "repostJ",
            close: "closeRep",
            contWidth: 560,
            ecp: true,
            fixedLayer: true,
            returnFocus: true
        })
           $n('#rePostJobId').currObj().value = jobId;
    });

    $n('a.jobClosed').addEvent('click', function() {
//        console.log($n(this).attr('id').split('_')[1]);
        var jobId = $n(this).attr('id').split('_')[1];
       $n('#closeJobId').currObj().value = jobId;
      //  console.log($n('#levelHired_' + jobId).html())
//      console.log($n('#levelHired_' + jobId).html());
        var heading_txt = htmlEntityConverter($n('#levelHired_' + jobId).html());
//        console.log(heading_txt);
        $n('#closeJobTitle').html(heading_txt);
        
        lightBox({
            trigger: "trigClose",
            contId: "closeJob",
            close: "closeMark",
            contWidth: 560,
            ecp: true,
            fixedLayer: true,
            returnFocus: true
        })
          $n('#closeJobId').currObj().value = jobId;
    });

    var stTab = new tabbing({
        id: 'statTab'
    });
    stTab.init(0, 0, 'dspB', 'dspN');
  
  
    //    //show if intl country is selected
    //    if($n("#osIndiaMrp").isChecked()){
    //        $n('#locationOS').show();
    //        $n('#otherLocation').show();
    //        $n('#location').hide();
    //        $n('#otherCity').hide();
    //    }else{
    //        showOtherCity($n('#location').val());
    //    }



    //end taken from inline js

    $n('#editRegEdit input[type="radio"]').addEvent('click', function() {
        $n(this).each(function() {
            var id = $n(this).attr('id');
            if (id == 'oth') {
                $n('#otherT').css({
                    'display': 'inline-block'
                });
            } else {
                $n('#otherT').css({
                    'display': 'none'
                });
            }
        });
    });

    $n('.hiddenClosedjob').hide();

    $n('#editPhoto').addEvent('click', function() {
        $n('#recPhotoEdit').show();
        $n('#recPhoto').hide();
    });
    $n('#uploadPhotoChecklist').addEvent('click', function() {
        $n('#recPhotoEdit').show();
        $n('#recPhoto').hide();
    });
	 $n('#hidePEdit').addEvent('click', function() {
        $n('#recPhotoEdit').hide();
        $n('#recPhoto').show();
    });
	$n('#showpersDetl').addEvent('click', function() {
        $n('#editPersDetl').show();
        $n('#recPhoto').hide();
         //    //show if intl country is selected
        if ($n("#osIndiaMrp").isChecked()) {
            $n('#locationOS').show();
            $n('#otherLocation').show();
            $n('#location').hide();
            $n('#otherCity').hide();
            commonValidator.hideElement('otherCity');
            
        } else {
            showOtherCity($n('#location').val());
        }
        $n("#otherCity").removeClass('err');
        $n("#location_err").html('');        
        
    });
	$n('#discardPersonalDetails').addEvent('click', function() {
        $n('#editPersDetl').hide();
        $n('#recPhoto').show();
    });
   

    $n('#editHd').addEvent('click', function() {
        $n('#recProfHd').hide();
        $n('#recProfHdEdit').show();
    });
    $n('#hideHdEdit').addEvent('click', function() {


        //var str = heading_text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        
        //$n('#profileHeading').val($n('#profileHeadingText').html());
        $n('#profileHeading').val($n('#profileHeading').attr('origValue'));
        $n('#recProfHdEdit').hide();
        $n('#recProfHd').show();
    });

    $n('#editExp').addEvent('click', function() {
        
        $n('#dExpHd').hide();
        $n('#dExpEdit').show();
        $n('#industryArea_err').html("");
        $n('#functionalArea_err').html("");
        $n('#levelHiringFor_err').html("");
        $n('#clientsHireInput_err').html("");
         $n('#clientsHireInput').removeClass('err');
        //$n('#clientsHireInput').attr("origValue", $n('#clientsIHireForText').html());
        //$n('#clientsHireInput').attr("value", $n('#clientsIHireForText').html());
        $n('#clientsHireInput').val($n('#clientsHireInput').attr('origValue'));
//        if($n('#tagCont_hdn').length>0){
//            skillsArea = ($n("#tagCont_hdn").val()).split(',');
//        }
         var skillsArea = ($n("#domainExpertiesText").html()).split(',');
     
         $n('#tagCont').html('');
         tag2.createdTags = {};
         tagItCalling(skillsArea); 
       //  console.log(skillsArea);
    });
    $n('#hideExpEdit').addEvent('click', function() {
      //  $n('#domainExperties').val($n('#domainExpertiesText').html());

        $n('#dExpEdit').hide();
        $n('#dExpHd').show();
        $n('#industryArea_err').html("");
        $n('#functionalArea_err').html("");
        $n('#levelHiringFor_err').html("");
        //var skillsArea = ($n("#domainExpertiesText").html()).split(',');
    });

    $n('#editContact').addEvent('click', function() {
        $n('#contactLoading').addClass("dspN");
        
        $n('#recContact').hide();
        $n('#recContactEdit').show();
        if (!$n('#secondryPhone').val()) {
//            $n('#addPhone').css({
//                'display': 'inline-block'
//            });
            $n('#anotherPhone').hide();
        }
        if ($n('#secondryPhone').val()) {
//            $n('#addPhone').css({
//                'display': 'none'
//            });
//            $n('#anotherPhone').show();
        }

      
            $n('#anotherEmail').show();


        var mobiletipMsg = "Enter your 10 digit mobile number. For e.g. 9818317555";
        $n("#mobileTooltip").html(mobiletipMsg);
        $n("#changeContact_err").html('');


//        if (!$n('#secondryEmail').val()) {
//            $n('#addEmail').css({
//                'display':'inline-block'
//            });
//            $n('#anotherEmail').hide();
//        }
        //    //show if intl country is selected
//        if ($n("#osIndiaMrp").isChecked()) {
//            $n('#locationOS').show();
//            $n('#otherLocation').show();
//            $n('#location').hide();
//            $n('#otherCity').hide();
//            commonValidator.hideElement('otherCity');
//            mobiletipMsg = "Enter your mobile number along with ISD code. For e.g. 00447700044097";
//        } else {
//            showOtherCity($n('#location').val());
//        }
    
//        $n("#otherCity").removeClass('err');
//        $n("#location_err").html('');

    });
    $n('#editContactChecklist').addEvent('click', function() {
        $n('#contactLoading').addClass("dspN");
        
        $n('#recContact').hide();
        $n('#recContactEdit').show();
        if (!$n('#secondryPhone').val()) {
//            $n('#addPhone').css({
//                'display': 'inline-block'
//            });
            $n('#anotherPhone').hide();
        }
        if ($n('#secondryPhone').val()) {
//            $n('#addPhone').css({
//                'display': 'none'
//            });
//            $n('#anotherPhone').show();
        }

      
            $n('#anotherEmail').show();


        var mobiletipMsg = "Enter your 10 digit mobile number. For e.g. 9818317555";
        $n("#mobileTooltip").html(mobiletipMsg);
        $n("#changeContact_err").html('');


//        if (!$n('#secondryEmail').val()) {
//            $n('#addEmail').css({
//                'display':'inline-block'
//            });
//            $n('#anotherEmail').hide();
//        }
        //    //show if intl country is selected
//        if ($n("#osIndiaMrp").isChecked()) {
//            $n('#locationOS').show();
//            $n('#otherLocation').show();
//            $n('#location').hide();
//            $n('#otherCity').hide();
//            commonValidator.hideElement('otherCity');
//            mobiletipMsg = "Enter your mobile number along with ISD code. For e.g. 00447700044097";
//        } else {
//            showOtherCity($n('#location').val());
//        }
    
//        $n("#otherCity").removeClass('err');
//        $n("#location_err").html('');
     //   $n("#changeContacts").setFocus();
    });
    
    $n('#hideContEdit').addEvent('click', function() {

        $n('#changeContactForm :input').each(function() {
            $n(this).val($n(this).attr("origValue"));
        });
        if ($n('#osIndiaMrp').attr('origValue') == "true") {
//     alert("hi");
            $n('#osIndiaMrp').attr({
                'checked': true
            });
        }//else{
//   alert($n('#osIndiaMrp').attr('origValue'));
//$n('#osIndiaMrp').attr({'checked':false});
//}
        $n('#recContact').show();
        $n('#recContactEdit').hide();
    });

    $n('#editReg').addEvent('click', function() {
        $n('#editRegHd').hide();
        $n('#editRegEdit').show();
    });
    $n('#hideRegEdit').addEvent('click', function() {
        $n('#otherT').val($n("#otherT").attr("origValue"));

        $n('#editRegHd').show();
        $n('#editRegEdit').hide();
    });

    $n('#editCr').addEvent('click', function() {
        $n('#editCrHd').hide();
        $n('#editCrEdit').show();
    });
    $n('#hideCrEdit').addEvent('click', function() {
        $n('#frmUpdateCurrEmp :input').each(function() {
            $n(this).val($n(this).attr("origValue"));
        });

        $n('#editCrHd').show();
        $n('#editCrEdit').hide();
    });

    $n('#editPr2').addEvent('click', function() {
        $n('#othEmp2').hide();
        $n('#editPrEdit2').show();
    });

    $n('#editPr1').addEvent('click', function() {
//  alert('hi');
        $n('#othEmp').hide();
        $n('#editPrEdit1').show();
    });

    $n('#delEmp1').addEvent('click', function() {
        var postData = 'empId=' + $n("#preEmpId1").val();
        $n(this).ajaxReq({
            type: 'post',
            async: 'true',
            datatype: 'json',
            data: postData,
            url: mrpActionUrl + 'deleteEmployment',
            success: function parseImportResponse(deleteEmploymentResponse) {
                len = deleteEmploymentResponse.length;
                if (len == 0) {
                    showErrorMessage(deleteEmploymentResponse.message);
                    //alert(deleteEmploymentResponse.message);
                } else {

                    if (deleteEmploymentResponse.status == true)
                    {
                        $n('#othEmp').hide();
                        $n('#addEmpM').show();
                        showSuccessMessage(deleteEmploymentResponse.message);
                         window.scrollTo(0,0);
                    } else {
                        showErrorMessage(deleteEmploymentResponse.message);
                         window.scrollTo(0,0);
                    }
                }
            },
            error: function() {
            }
        });
  
    });

    $n('#delEmp2').addEvent('click', function() {
        var postData = 'empId=' + $n("#preEmpId2").val();
        $n(this).ajaxReq({
            type: 'post',
            async: 'true',
            datatype: 'json',
            data: postData,
            url: mrpActionUrl + 'deleteEmployment',
            success: function parseImportResponse(deleteEmploymentResponse) {
                len = deleteEmploymentResponse.length;
                if (len == 0) {
                    showErrorMessage(deleteEmploymentResponse.message);
                    //alert(deleteEmploymentResponse.message);
                } else {
//alert
                    if (deleteEmploymentResponse.status == true)
                    {
                        $n('#othEmp2').hide();
                        $n('#addEmpM').show();
                        showSuccessMessage(deleteEmploymentResponse.message);
                         window.scrollTo(0,0);
                    } else {
                        showErrorMessage(deleteEmploymentResponse.message);
                         window.scrollTo(0,0);
                    }
                }
            },
            error: function() {
            }
        });

 
    });

    $n('#hidePrEdit1').addEvent('click', function() {
        $n('#frmEditEmp1 :input').each(function() {
            $n(this).val($n(this).attr("origValue"));
        });
        $n('#othEmp').show();
        $n('#editPrEdit1').hide();
    });

    $n('#hidePrEdit2').addEvent('click', function() {
        $n('#frmEditEmp2 :input').each(function() {
            $n(this).val($n(this).attr("origValue"));
        });

        $n('#othEmp2').show();
        $n('#editPrEdit2').hide();
    });

//    $n('.jobEdit').addEvent('click', function() {
//        $n(this).parent().parent().next().show();
//        $n(this).parent().parent().hide();
//    });
    function setOrigValue(id){
        $n('#editQuickJobForm_'+id+' input , #editQuickJobForm_'+id+' textarea').each(function() {
            if($n(this).attr('type')!="hidden"){
                $n(this).val($n(this).attr("origValue"));
            }
        })
    }
 

    $n('#addEmail').addEvent('click', function() {
        $n('#anotherEmail').show();
        $n(this).hide();
    });
    $n('#addPhone').addEvent('click', function() {
//        $n('#anotherPhone').show();
//        $n(this).hide()
    });

    $n('#osIndiaMrp').addEvent('click', function() {
        var mobiletipMsg = "Enter your 10 digit mobile number. For e.g. 9818317555";

        if ($n(this).isChecked()) {
            $n('#location').hide();
            $n('#locationOS').show();
            $n(this).parent().parent().prev().html('Country <strong class="req">*</strong>');
            $n('#otherLocation').show();
            $n('#otherCity').hide();
            commonValidator.hideElement('otherCity');
            mobiletipMsg = "Enter your mobile number along with ISD code. For e.g. 00447700044097";
        }
        else {
            $n('#location').show();
            $n('#locationOS').hide();
            $n('#otherLocation').hide();
            showOtherCity($n('#location').val());
            $n(this).parent().parent().prev().html('Current Location <strong class="req">*</strong>');
            mobiletipMsg = "Enter your 10 digit mobile number. For e.g. 9818317555";
        }
        $n("#mobileTooltip").html(mobiletipMsg);
        
    });

    $n('#location').addEvent('change', function() {
        showOtherCity($n('#location').val());
        $n('#otherCity').val('');
    });

    $n('#addEmpM').addEvent('click', function() {
        $n(this).hide();
        $n('#nEmp').show();
    });
    $n('#hideNempEdit').addEvent('click', function() {
    
    document.getElementById("frmUpdateEmp").reset();
    //$n('#frmUpdateEmp').reset();
        $n('#addEmpM').show();
        $n('#nEmp').hide();
    });
  

     
    $n('#hideRegEdit').addEvent('click', function() {
        $n("#recType_err").html('');
    });
    $n('#saveRecType').addEvent('click', function() {
        var status = true;
        //employment type check
        if ($n("#oth").isChecked())
        {
            if ($n("#otherT").val().length < 5)
            {
                $n('#recT').parent().replaceClass('formRow', 'formRowErr');
                $n("#recType_err").html('Employment status should be atleast 5 characters long.');
                $n("#otherT").setFocus();
                status = false;
            }

            if ($n("#otherT").val().length == 0)
            {
                $n('#recT').parent().replaceClass('formRow', 'formRowErr');
                $n("#recType_err").html('Please select an employment status.');
                $n("#otherT").setFocus();
                status = false;
            }

            var otherValArrStr = $n("#otherT").val().replace(/\s+/g, " ").split(" ");
            for (sCntr = 0; sCntr < otherValArrStr.length; sCntr++)
            {
                if (otherValArrStr[sCntr].length > 32) {
                    $n('#recT').parent().replaceClass('formRow', 'formRowErr');
                    $n("#recType_err").html('Please insert spaces atleast after every 32 characters.');
                    $n("#otherT").setFocus();
                    status = false;
                    break;
                }
            }
        }
        else {
            if (!$n("#corp").isChecked() && !$n("#company").isChecked() &&
                    !$n("#hiringManager").isChecked())
            {
                $n('#recT').parent().replaceClass('formRow', 'formRowErr');
                $n("#recType_err").html('Please select an employment status.');
                //event.preventDefault();
                $n("#corp").setFocus();
                status = false;
            }
        }
        if (!status) {
// event.preventDefault();
            return status;
        }
        var otherVal = '';
        var emptypeVal = '';
        var postData = 'recType=';
        if ($n("#corp").isChecked()) {
            emptypeVal = $n("#corp").val();
            postData += $n("#corp").val();
        }
        if ($n("#company").isChecked()) {
            emptypeVal = $n("#company").val();
            postData += $n("#company").val();
        }
//        if ($n("#Freelancer").isChecked()) {
//            emptypeVal = $n("#Freelancer").val();
//            postData += $n("#Freelancer").val();
//        }
        if ($n("#hiringManager").isChecked()) {
            emptypeVal = $n("#hiringManager").val();
            postData += $n("#hiringManager").val();
        }
        if ($n("#oth").isChecked()) {
            otherVal = $n("#otherT").val().replace(/\s+/g, " ");
            emptypeVal = $n("#otherT").val();
            postData += otherVal;
        }

        $n(this).ajaxReq({
            type: 'post',
            async: 'true',
            datatype: 'json',
            data: postData,
            url: mrpActionUrl + 'changeRecType',
            success: function parseImportResponse(changeRecTypeResponse) {
                len = changeRecTypeResponse.length;
                if (len == 0) {
                    alert(changeRecTypeResponse.message);
                } else {
                    if (changeRecTypeResponse.status == true)
                    {
                        $n('#editRegEdit').hide();
                        $n('#empTypeSpan').html(emptypeVal);
                        //$n('#editRegHd').show();
                        $n('#editRegHd').css({
                            'display': 'block'
                        });
                        $n('#editReg').addEvent('click', function() {
                            $n('#editRegHd').hide();
                            $n('#editRegEdit').show();
                        });
                        if ($n("#oth").isChecked()) {
                            $n('#otherT').attr("origValue", otherVal);
                            $n('#recT').parent().replaceClass('formRowErr', 'formRow');
                            $n("#recType_err").html('');
                            $n('#otherT').val(otherVal);
                            
                        } else {
                            $n('#otherT').attr("origValue", '');
                            $n('#otherT').attr("value", '');
                        }
                        showSuccessMessage(changeRecTypeResponse.message);
                        window.scrollTo(0,0);
                    }
                    else {
                        showErrorMessage(changeRecTypeResponse.message);
                        window.scrollTo(0,0);
                    }
                }
            },
            error: function() {
            }
        });
    }); //end click handler

    $n('#saveCurrEmployer').addEvent('click', function() {
        $n('#frmUpdateCurrEmp :input').each(function() {
            $n(this).attr("origValue", $n(this).val());
        });

        var status = true;
        //clearing date error
        $n("#currEmpDate").replaceClass('formRowErr', 'formRow');
        $n("#currEmpDate_err").html('');
        
        var currEmpObj = $n("#currEmp");
        var currDesgObj = $n("#currDesig");
        var currProfileObj = $n("#currjobProfile");
        var currEmp = $n.trim(currEmpObj.val().replace(/\s+/g, " "));
        var currDesg = $n.trim(currDesgObj.val().replace(/\s+/g, " "));
        var currProfile = $n.trim(currProfileObj.val().replace(/\s+/g, " "));
        if (currEmp.length == 0)
        {
            currEmpObj.parent().replaceClass('formRow', 'formRowErr');
            $n("#currEmp_err").html('Please specify your current employer');
            currEmpObj.setFocus();
            status = false;
        }
        if (currEmp.length < 5  )
        {        
            currEmpObj.parent().replaceClass('formRow', 'formRowErr');
            $n("#currEmp_err").html('Employer name should have minimum '+($n('#currEmp').attr('minlength'))+' characters.');
            // currEmpObj.setFocus();
            status = false;
        }
        if (currEmp.length > 50)
        {        
            currEmpObj.parent().replaceClass('formRow', 'formRowErr');
            $n("#currEmp_err").html('Employer name should have maximum '+($n('#currEmp').attr('maxlength'))+' characters.');
            // currEmpObj.setFocus();
            status = false;
        }
               if (currDesg.length == 0)
        {
            currDesgObj.parent().replaceClass('formRow', 'formRowErr');
            $n("#currDesig_err").html('Please specify your current designation.');
            currDesgObj.setFocus();
            status = false;
        }
        if (currDesg.length > 1 && currDesg.length < 5)
        {
            currDesgObj.parent().replaceClass('formRow', 'formRowErr');
            $n("#currDesig_err").html('Too few characters entered for designation, please enter at least 5 characters.');
            //currDesgObj.setFocus();
            status = false;
        }
        if (currProfile.length > 500)
        {
            currProfileObj.parent().replaceClass('formRow', 'formRowErr');
            $n("#currjobProfile_err").html('Too many characters entered for job profile, please enter maximum 500 characters.');
            //currDesgObj.setFocus();
            status = false;
        }
        var regex_email = /([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+/;
        var arr = currProfile.split(/[\n\r]/g);

        var count = arr.length;

        for (i = 0; i < count; i++) {

            if (regex_email.test(arr[i])) {
                //console.log(regex_email.test(arr[i]));
                $n("#currjobProfile_err").html('Cannot add email in Job Profile!!');
                 status = false;
            }

        }
            
//check to stop more than 32 chars
        var text_str = currEmp.replace(/\s+/g, " ").split(" ");
        for (sCntr = 0; sCntr < text_str.length; sCntr++)
        {
            if (text_str[sCntr].length > 32) {
                $n("#currEmp_err").html('Please insert spaces atleast after every 32 characters.');
                return false;
            }
        }
        var text_str1 = currDesg.replace(/\s+/g, " ").split(" ");
        for (sCntr = 0; sCntr < text_str1.length; sCntr++)
        {
            if (text_str1[sCntr].length > 32) {
                $n("#currDesig_err").html('Please insert spaces atleast after every 32 characters.');
                return false;
            }
        }

        var result = validateDate(1, $n('#joinYr').val(), $n('#joinMonth').val(), 0, 0);
        //     var addtxt = "current employment.";
        if (!result.isValid) {
            $n('#currEmpDate').replaceClass('formRow', 'formRowErr');
            $n("#currEmpDate_err").html(result.message);
            return false;
        } else {
            var postData = "currEmp=" + encodeURIComponent($n('#currEmp').val()) + "&currDesig=" + encodeURIComponent($n('#currDesig').val()) + "&currFrmYear=" + $n('#joinYr').val() + "&currFrmMonth=" + $n('#joinMonth').val()+ "&currjobProfile=" + encodeURIComponent($n('#currjobProfile').val());
            postData += '&isCurr=1&id=' + $n('#currentEmpId').val();
        
            //Return on Validation
            if (!status) {
                return false;
            }

//    var currEmpHtml = "<span class='dspB bdrTpDash cl'></span><p style='display: block;' class='lh20' id='editCrHd'><span class='clr888'>Currently:</span> "+$n('#currDesig').val()+"<span class='clr888'>with</span> "+$n('#currEmp').val()+" <i>(Since "+$n('#joinYr').val()+"-"+$n('#joinMonth').val()+"-01)</i><br><a href='javascript:void(0)' id='editCr' class='ml10 z fr'>Edit</a><span class='clr888'>Designation:</span> "+$n('#currDesig').val()+"</p>";
            $n(this).ajaxReq({
                type: 'post',
                async: 'true',
                datatype: 'json',
                data: postData,
                url: mrpActionUrl + 'updateEmployer',
                success: function parseImportResponse(updateEmployerResponse) {
                    //console.log('test');
                    len = updateEmployerResponse.length
                    if (len == 0) {
                        alert(updateEmployerResponse.message);
                    } else {
                       
                        if (updateEmployerResponse.status == true)
                        {
                            $n('#editCrEdit').hide();
                            $n('#editCrHd').show();
                            //  $n('#currSpanEmp').html(currEmpHtml); 
                            $n('#currSpanEmp').show();
                            //              $n('#curDesigHtml').html($n('#currDesig').val());
                           // $n('#curCompanyHtml').html($n('#currEmp').val());
                            $n('#curStartHtml').html(getMonthName($n('#joinMonth').val()) + "-" + $n('#joinYr').val());
                            //$n('#curJobHtml').html($n('#currDesig').val());
                            $n('#curJobProfileHtml').html(currProfile);
                            //console.log(currProfile);
                            updateCompDesg($n('#currDesig').val(),$n('#currEmp').val());
                            showSuccessMessage(updateEmployerResponse.message);
                            window.scrollTo(0,0);
                        }
                        else {
                            showErrorMessage(updateEmployerResponse.message);
                            window.scrollTo(0,0);
                        }
                    }
                },
                error: function() {
                }
            }); //ajax finished
        }
    }); //end click

    $n('#savePreEmployer1').addEvent('click', function() {
        $n('#frmEditEmp1 :input').each(function() {
            $n(this).attr("origValue", $n(this).val());
        });

        var status = true;
        //clearing date error
        $n("#otherEmp1").replaceClass('formRowErr', 'formRow');
        $n("#otherEmp1_err").html('');
        
        var prevEmpObj = $n("#prevEmp1");
        var prevDesgObj = $n("#prevDesg1");
        var prevProfileObj = $n("#prevjobProfile1");
        var prevEmp = $n.trim(prevEmpObj.val().replace(/\s+/g, " "));
        var prevDesg = $n.trim(prevDesgObj.val().replace(/\s+/g, " "));
        var prevProfile = $n.trim(prevProfileObj.val().replace(/\s+/g, " "));
        
        if (prevEmp.length == 0)
        {
            prevEmpObj.parent().replaceClass('formRow', 'formRowErr');
            $n("#prevEmp1_err").html('Please specify your company.');
            prevEmpObj.setFocus();
            status = false;
            return false;
        }
        if (prevEmp.length < 5 )
        {
            prevEmpObj.parent().replaceClass('formRow', 'formRowErr');
            $n("#prevEmp1_err").html('Employer name should have minimum '+($n('#prevEmp1').attr('minlength'))+' characters.');
            // prevEmpObj.setFocus();
            status = false;
            return false;
        }
        if (prevEmp.length > 50)
        {
            prevEmpObj.parent().replaceClass('formRow', 'formRowErr');
            $n("#prevEmp1_err").html('Employer name should have maximum '+($n('#prevEmp1').attr('maxlength'))+' characters.');
            // prevEmpObj.setFocus();
            status = false;
            return false;
        }

        if (prevDesg.length == 0)
        {
            prevDesgObj.parent().replaceClass('formRow', 'formRowErr');
            // if(prevEmp.length>0)
            //   $n("#prevDesg1_err").html('Please mention your designation at @'+prevEmp+'.');
            // else
            $n("#prevDesg1_err").html('Please specify your designation.');
            
            prevDesgObj.setFocus();
            status = false;
            return false;
        }
        if (prevDesg.length > 1 && prevDesg.length < 5)
        {
            prevDesgObj.parent().replaceClass('formRow', 'formRowErr');
            $n("#prevDesg1_err").html('Too few characters entered for designation, please enter at least 5 characters.');
            //prevDesgObj.setFocus();
            status = false;
            return false;
        }
        if (prevProfile.length > 500)
        {
            prevProfileObj.parent().replaceClass('formRow', 'formRowErr');
            $n("#prevjobProfile1_err").html('Too many characters entered for job profile, please enter maximum 500 characters.');
            //currDesgObj.setFocus();
            status = false;
            return false;
        }
        
        if(!status)
            return status;
        
        var regex_email = /([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+/;
        var arr = prevProfile.split(/[\n\r]/g);

        var count = arr.length;

        for (i = 0; i < count; i++) {

            if (regex_email.test(arr[i])) {
                //console.log(regex_email.test(arr[i]));
                $n("#prevjobProfile1_err").html('Cannot add email in Job Profile!!');
                 return false;
            }

        }
//check to stop more than 32 chars
        var text_str = prevEmp.replace(/\s+/g, " ").split(" ");
        for (sCntr = 0; sCntr < text_str.length; sCntr++)
        {
            if (text_str[sCntr].length > 32) {
                $n("#prevEmp1_err").html('Please insert spaces atleast after every 32 characters.');
                return false;
            }
        }
        var text_str1 = prevDesg.replace(/\s+/g, " ").split(" ");
        for (sCntr = 0; sCntr < text_str1.length; sCntr++)
        {
            if (text_str1[sCntr].length > 32) {
                $n("#prevDesg1_err").html('Please insert spaces atleast after every 32 characters.');
                return false;
            }
        }

        var result = validateDate(0, $n('#frmYearEdit1').val(), $n('#frmMonthEdit1').val(), $n('#toYearEdit1').val(), $n('#toMonthEdit1').val());
        //  var addtxt = "employment at "+$n('#prevEmp1').val()+".";
        if (!result.isValid) {
            $n('#otherEmp1').replaceClass('formRow', 'formRowErr');
            $n("#otherEmp1_err").html(result.message);
            return false;
        } else {
            var postData = "newEmp=" + encodeURIComponent($n('#prevEmp1').val()) + "&newDesig=" + encodeURIComponent($n('#prevDesg1').val()) + "&fromYear=" + $n('#frmYearEdit1').val() + "&fromMonth=" + $n('#frmMonthEdit1').val() + "&toYear=" + $n('#toYearEdit1').val() + "&toMonth=" + $n('#toMonthEdit1').val()+ "&newjobProfile=" + encodeURIComponent($n('#prevjobProfile1').val());
            postData += '&isCurr=0&id=' + $n('#preEmpId1').val();
            // var currEmpHtml = "<span class='dspB bdrTpDash cl'></span><p style='display: block;' class='lh20' id='editCrHd'><span class='clr888'>Currently:</span> "+$n('#currDesig').val()+"<span class='clr888'>with</span> "+$n('#currEmp').val()+" <i>(Since "+$n('#joinYr').val()+"-"+$n('#joinMonth').val()+"-01)</i><br><a href='javascript:void(0)' id='editCr' class='ml10 z fr'>Edit</a><span class='clr888'>Designation:</span> "+$n('#currDesig').val()+"</p>";
            // var otherEmpHtml = "<span class='dspB bdrTpDash cl'></span><p class='lh20'><span class='clr888'>Other1:</span> "+$n('#prevDesg1').val()+" <span class='clr888'>with</span> "+$n('#prevEmp1').val()+" <i>("+$n('#frmYearEdit1').val()+"-"+$n('#frmMonthEdit1').val()+"-01"+" to "+ $n('#toYearEdit1').val()+"-"+$n('#toMonthEdit1').val()+"-01"+")</i><br /> <a href='javascript:void(0)' id='editPr1' class='ml10 z fr'>Edit</a><span class='clr888'>Designation:</span>"+$n('#prevDesg1').val()+"</p>";

            $n(this).ajaxReq({
                type: 'post',
                async: 'true',
                datatype: 'json',
                data: postData,
                url: mrpActionUrl + 'updateEmployer',
                success: function parseImportResponse(updateEmployerResponse) {
                    len = updateEmployerResponse.length
                    if (len == 0) {
                        alert(updateEmployerResponse.message);
                    } else {
                        if (updateEmployerResponse.status == true)
                        {
                            $n('#othEmp').show();
                            $n('#preCompHtml1').html($n('#prevEmp1').val())
                            $n('#preDurHtml1').html(getMonthName($n('#frmMonthEdit1').val()) + "-" + $n('#frmYearEdit1').val() + ' to ' + getMonthName($n('#toMonthEdit1').val()) + "-" + $n('#toYearEdit1').val());
                            $n('#preDesHtml1').html($n('#prevDesg1').val());

                            $n('#preDJPHtml1').html($n('#prevjobProfile1').val());
                                                      //  alert($n('#preDJPHtml1').html());
                            //  if (document.getElementById('othEmp').style.display == 'block') {
                            // $n('#othEmp2').html(otherEmpHtml);
                            //    $n('#othEmp2').show();
                            // } else {
                            /*  $n('#othEmp').html(otherEmpHtml);
                             $n('#othEmp').show();
                             $n('#editPr1').addEvent('click', function(){
                             $n('#othEmp').hide();
                             $n('#editPrEdit1').show();
                             });
                             }*/

                            $n('#editPrEdit1').hide();
                            showSuccessMessage(updateEmployerResponse.message);
                            window.scrollTo(0,0);
                        }
                        else {
                            showErrorMessage(updateEmployerResponse.message);
                            window.scrollTo(0,0);
                        }

                    }

                },
                error: function() {
                }
            }); //ajax finished
        }//else closed
    });

    /*Edit Emp 1 End */


    //Edit Emp 2
     $n('#savePreEmployer2').addEvent('click', function() {
        $n('#frmEditEmp2 :input').each(function() {
            $n(this).attr("origValue", $n(this).val());
        });
        var status = true;
        //clearing date error
        $n("#otherEmp1").replaceClass('formRowErr', 'formRow');
        $n("#otherEmp1_err").html('');

        var prevEmpObj = $n("#prevEmp2");
        var prevDesgObj = $n("#prevDesg2");
        var prevProfileObj = $n("#prevjobProfile2");
        var prevEmp = $n.trim(prevEmpObj.val().replace(/\s+/g, " "));
        var prevDesg = $n.trim(prevDesgObj.val().replace(/\s+/g, " "));
        var prevProfile = $n.trim(prevProfileObj.val().replace(/\s+/g, " "));

        if (prevEmp.length == 0)
        {
            prevEmpObj.parent().replaceClass('formRow', 'formRowErr');
            $n("#prevEmp2_err").html('Please mention your previous employer.');
            prevEmpObj.setFocus();
            status = false;
            return false;
        }
        if (prevEmp.length < 5)
        {
            prevEmpObj.parent().replaceClass('formRow', 'formRowErr');
            $n("#prevEmp2_err").html('Employer name should have minimum '+($n('#prevEmp2').attr('minlength'))+' characters.');
            // prevEmpObj.setFocus();
            status = false;
            return false;
        }
        if ( prevEmp.length > 50)
        {
            prevEmpObj.parent().replaceClass('formRow', 'formRowErr');
            $n("#prevEmp2_err").html('Employer name should have maximum '+($n('#prevEmp2').attr('maxlength'))+' characters.');
            // prevEmpObj.setFocus();
            status = false;
            return false;
        }

        if (prevDesg.length == 0)
        {
            prevDesgObj.parent().replaceClass('formRow', 'formRowErr');
            // if(prevEmp.length>0)
            //   $n("#prevDesg2_err").html('Please mention your designation at @'+prevEmp+'.');
            // else
            $n("#prevDesg2_err").html('Please specify your designation.');

            prevDesgObj.setFocus();
            status = false;
            return false;
        }
        if (prevDesg.length > 1 && prevDesg.length < 5)
        {
            prevDesgObj.parent().replaceClass('formRow', 'formRowErr');
            $n("#prevDesg2_err").html('Too few characters entered for designation, please enter at least 5 characters.');
            //prevDesgObj.setFocus();
            status = false;
            return false;
        }
        if (prevProfile.length > 500)
        {
            prevProfileObj.parent().replaceClass('formRow', 'formRowErr');
            $n("#prevjobProfile2_err").html('Too many characters entered for job profile, please enter maximum 500 characters.');
            //currDesgObj.setFocus();
            status = false;
            return false;
        }
        
         if(!status)
            return status;
        
         var regex_email = /([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+/;
        var arr = prevProfile.split(/[\n\r]/g);

        var count = arr.length;

        for (i = 0; i < count; i++) {

            if (regex_email.test(arr[i])) {
                //console.log(regex_email.test(arr[i]));
                $n("#prevjobProfile2_err").html('Cannot add email in Job Profile!!');
                 return false;
            }

        }
        
//check to stop more than 32 chars
        var text_str = prevEmp.replace(/\s+/g, " ").split(" ");
        for (sCntr = 0; sCntr < text_str.length; sCntr++)
        {
            if (text_str[sCntr].length > 32) {
                $n("#prevEmp2_err").html('Please insert spaces atleast after every 32 characters.');
                return false;
            }
        }
        var text_str1 = prevDesg.replace(/\s+/g, " ").split(" ");
        for (sCntr = 0; sCntr < text_str1.length; sCntr++)
        {
            if (text_str1[sCntr].length > 32) {
                $n("#prevDesg2_err").html('Please insert spaces atleast after every 32 characters.');
                return false;
            }
        }

        var result = validateDate(0, $n('#frmYearEdit2').val(), $n('#frmMonthEdit2').val(), $n('#toYearEdit2').val(), $n('#toMonthEdit2').val());
        //  var addtxt = "employment at "+$n('#prevEmp2').val()+".";
        if (!result.isValid) {
            $n('#otherEmp2').replaceClass('formRow', 'formRowErr');
            $n("#otherEmp2_err").html(result.message);
            return false;
        } else {
            var postData = "newEmp=" + encodeURIComponent($n('#prevEmp2').val()) + "&newDesig=" + encodeURIComponent($n('#prevDesg2').val()) + "&fromYear=" + $n('#frmYearEdit2').val() + "&fromMonth=" + $n('#frmMonthEdit2').val() + "&toYear=" + $n('#toYearEdit2').val() + "&toMonth=" + $n('#toMonthEdit2').val() + "&newjobProfile=" + encodeURIComponent($n('#prevjobProfile2').val());
            postData += '&isCurr=0&id=' + $n('#preEmpId2').val();

            //   var otherEmpHtml = "<span class='dspB bdrTpDash cl'></span><p class='lh20'><span class='clr888'>Other2:</span> "+$n('#prevDesg2').val()+" <span class='clr888'>with</span> "+$n('#prevEmp2').val()+" <i>("+$n('#frmYearEdit2').val()+"-"+$n('#frmMonthEdit2').val()+"-01"+" to "+ $n('#toYearEdit2').val()+"-"+$n('#toMonthEdit2').val()+"-01"+")</i><br /> <a href='javascript:void(0)' id='editPr2' class='ml10 z fr'>Edit</a><span class='clr888'>Designation:</span>"+$n('#prevDesg2').val()+"</p>";
            $n(this).ajaxReq({
                type: 'post',
                async: 'true',
                datatype: 'json',
                data: postData,
                url: mrpActionUrl + 'updateEmployer',
                success: function parseImportResponse(updateEmployerResponse) {
                    len = updateEmployerResponse.length
                    if (len == 0) {
                        alert(updateEmployerResponse.message);
                    } else {
                        if (updateEmployerResponse.status == true) {
//  if (document.getElementById('othEmp').style.display == 'block') {
                            /* $n('#othEmp2').html(otherEmpHtml);
                             $n('#othEmp2').show();
                             $n('#editPr2').addEvent('click', function(){
                             $n('#othEmp2').hide();
                             $n('#editPrEdit2').show();
                             });
                             
                             } else {
                             $n('#othEmp').html(otherEmpHtml);
                             $n('#othEmp').show();
                             }*/
                            $n('#othEmp2').show();
                            $n('#preCompHtml2').html($n('#prevEmp2').val())
                            $n('#preDurHtml2').html(getMonthName($n('#frmMonthEdit2').val()) + "-" + $n('#frmYearEdit2').val() + ' to ' + getMonthName($n('#toMonthEdit2').val()) + "-" + $n('#toYearEdit2').val());
                            $n('#preDesHtml2').html($n('#prevDesg2').val());
                            $n('#preDJPHtml2').html($n('#prevjobProfile2').val());
                            $n('#editPrEdit2').hide();
                            showSuccessMessage(updateEmployerResponse.message);
                            window.scrollTo(0,0);
                        }
                        else {
                            showErrorMessage(updateEmployerResponse.message);
                            window.scrollTo(0,0);
                            
                        }

                    }

                },
                error: function() {
                }
            }); //ajax finished
        }
    }); //end click
    //Edit emp2 end

    $n('#hideNempEdit').addEvent('click', function() {
        $n("#addEmpDate_err").html('');
        $n("#newDesig_err").html('');
        $n("#newEmp_err").html('');
        
        $n('#newDesig').removeClass('err');
        $n('#newEmp').removeClass('err');
        $n('#addEmpDate').removeClass('formRowErr');
        $n('#addEmpDate').addClass('formRow');
                
    });

    $n('#saveEmployer').addEvent('click', function() {
        var newEmpObj = $n("#newEmp");
        var newDesgObj = $n("#newDesig");
        var newProfileObj = $n("#newjobProfile");
        var newEmp = $n.trim(newEmpObj.val().replace(/\s+/g, " "));
        var newDesg = $n.trim(newDesgObj.val().replace(/\s+/g, " "));
        var newProfile = $n.trim(newProfileObj.val().replace(/\s+/g, " "));

        var status = true;
        //clearing date error
        $n("#addEmpDate").replaceClass('formRowErr', 'formRow');
        $n("#addEmpDate_err").html('');
        
        if (newEmp.length == 0)
        {
            $n('#newEmp').parent().replaceClass('formRow', 'formRowErr');
            $n("#newEmp_err").html('Please specify your company.');
            newEmpObj.setFocus();
            status = false;
        }
        if (newEmp.length <5 )
        {
            $n('#newEmp').parent().replaceClass('formRow', 'formRowErr');
            $n("#newEmp_err").html('Employer name should have minimum '+($n('#newEmp').attr('minlength'))+' characters.');
            // newEmpObj.setFocus();
            status = false;
        }
        if (newEmp.length > 50)
        {
            $n('#newEmp').parent().replaceClass('formRow', 'formRowErr');
            $n("#newEmp_err").html('Employer name should have maximum '+($n('#newEmp').attr('maxlength'))+' characters.');
            // newEmpObj.setFocus();
            status = false;
        }
        if (newDesg.length == 0)
        {
            newDesgObj.parent().replaceClass('formRow', 'formRowErr');
            // if(newEmp.length>0)
            //   $n("#newDesig_err").html('Please mention your designation at @'+newEmp+'.');
            // else
            $n("#newDesig_err").html('Please specify your designation.');
                
            newDesgObj.setFocus();
            status = false;
        }
        if (newDesg.length > 1 && newDesg.length < 5)
        {
            newDesgObj.parent().replaceClass('formRow', 'formRowErr');
            $n("#newDesig_err").html('Too few characters entered for designation, please enter at least 5 characters.');
            //newDesgObj.setFocus();
            status = false;
        }

         if (newProfile.length > 500)
        {
            newProfileObj.parent().replaceClass('formRow', 'formRowErr');
            $n("#newjobProfile_err").html('Too many characters entered for job profile, please enter maximum 500 characters.');
            //newDesgObj.setFocus();
            status = false;
        }

        var regex_email = /([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+/;
        var arr = newProfile.split(/[\n\r]/g);

        var count = arr.length;

        for (i = 0; i < count; i++) {

            if (regex_email.test(arr[i])) {
                //console.log(regex_email.test(arr[i]));
                $n("#newjobProfile_err").html('Cannot add email in Job Profile!!');
                status = false;
            }

        }
//check to stop more than 32 chars
        var text_str = newEmp.replace(/\s+/g, " ").split(" ");
        for (sCntr = 0; sCntr < text_str.length; sCntr++)
        {
            if (text_str[sCntr].length > 32) {
                $n("#newEmp_err").html('Please insert spaces atleast after every 32 characters.');
                return false;
            }
        }

        var text_str1 = newDesg.replace(/\s+/g, " ").split(" ");
        for (sCntr = 0; sCntr < text_str1.length; sCntr++)
        {
            if (text_str1[sCntr].length > 32) {
                $n("#newDesig_err").html('Please insert spaces atleast after every 32 characters.');
                return false;
            }
        }



        var result = validateDate(0, $n('#frmAddYear').val(), $n('#frmAddMonth').val(), $n('#toAddYear').val(), $n('#toAddMonth').val());
        //var addtxt = "employment at "+$n('#newEmp').val()+".";
        if (!result.isValid) {
            $n('#addEmpDate').replaceClass('formRow', 'formRowErr');
            $n("#addEmpDate_err").html(result.message);
            return false;
        } else {
            var postData = "isCurr=0&newEmp=" + encodeURIComponent($n('#newEmp').val()) + "&newDesig=" + encodeURIComponent($n('#newDesig').val()) + "&fromYear=" + $n('#frmAddYear').val() + "&fromMonth=" + $n('#frmAddMonth').val()+ "&newjobProfile=" + $n('#newjobProfile').val();
            postData += '&toYear=' + $n('#toAddYear').val() + "&toMonth=" + $n('#toAddMonth').val();
            //postData += '&sid='+$n('#sid').val();

            //Return on Validation
            if (!status) {
                return false;
            }
//  var otherEmpHtml = "<span class='dspB bdrTpDash cl'></span><p class='lh20'><span class='clr888'>Other1:</span> "+$n('#newDesig').val()+" <span class='clr888'>with</span> "+$n('#newEmp').val()+" <i>("+$n('#frmAddYear').val()+"-"+$n('#frmAddMonth').val()+"-01"+" to "+ $n('#toAddYear').val()+"-"+$n('#toAddMonth').val()+"-01"+")</i><br /> <a href='javascript:void(0)' id='editPr1' class='ml10 z fr'>Edit</a><span class='clr888'>Designation:</span>"+$n('#newDesig').val()+"</p>";
            $n(this).ajaxReq({
                type: 'post',
                async: 'true',
                datatype: 'json',
                data: postData,
                url: mrpActionUrl + 'updateEmployer',
                success: function parseImportResponse(updateEmployerResponse) {
                    len = updateEmployerResponse.length
                    if (len == 0) {
                        alert(updateEmployerResponse.message);
                    } else {
                        if (updateEmployerResponse.status == true)
                        {
                            if (document.getElementById('othEmp').style.display == 'block') {
                                $n('#preCompHtml2').html($n('#newEmp').val())
                                $n('#preDurHtml2').html(getMonthName($n('#frmAddMonth').val()) + "-" + $n('#frmAddYear').val() + ' to ' + getMonthName($n('#toAddMonth').val()) + "-" + $n('#toAddYear').val());
                                $n('#preDesHtml2').html($n('#newDesig').val());
                                $n('#preDJPHtml2').html($n('#newjobProfile').val());
                                $n('#othEmp2').show();
//                                $n('#prevEmp2').attr("value",$n('#newEmp').val());
                                $n('#prevEmp2').val($n('#newEmp').val());
                                $n('#prevEmp2').attr("origValue", $n('#newEmp').val());
                                $n('#prevDesg2').val($n('#newDesig').val());
                                $n('#prevjobProfile2').val($n('#newjobProfile').val());
                                $n('#prevDesg2').attr("origValue", $n('#newDesig').val());
                                $n('#prevjobProfile2').attr("origValue", $n('#newjobProfile').val());
                
                                $n('#frmYearEdit2').val($n('#frmAddYear').val());
                                $n('#frmYearEdit2').attr("origValue", $n('#frmAddYear').val());
                                $n('#frmMonthEdit2').val($n('#frmAddMonth').val());
                                $n('#frmMonthEdit2').attr("origValue", $n('#frmAddMonth').val());
                
                                $n('#toYearEdit2').val($n('#toAddYear').val());
                                $n('#toYearEdit2').attr("origValue", $n('#toAddYear').val());
                                $n('#toMonthEdit2').val($n('#toAddMonth').val());
                                $n('#toMonthEdit2').attr("origValue", $n('#toAddMonth').val());

                                $n('#preEmpId2').val(updateEmployerResponse.newEmpId);
                                

                            } else {
                                $n('#othEmp').show();
                                $n('#preCompHtml1').html($n('#newEmp').val())
                                $n('#preDurHtml1').html(getMonthName($n('#frmAddMonth').val()) + "-" + $n('#frmAddYear').val() + ' to ' + getMonthName($n('#toAddMonth').val()) + "-" + $n('#toAddYear').val());
                                $n('#preDesHtml1').html($n('#newDesig').val());
                                $n('#preDJPHtml1').html($n('#newjobProfile').val());
                                $n('#prevEmp1').val($n('#newEmp').val());
                                $n('#prevEmp1').attr("origValue", $n('#newEmp').val());
                                $n('#prevDesg1').val($n('#newDesig').val());
                                $n('#prevjobProfile1').val($n('#newjobProfile').val());
                                $n('#prevDesg1').attr("origValue", $n('#newDesig').val());
                                $n('#prevjobProfile1').attr("origValue", $n('#newjobProfile').val());
                
                                $n('#frmYearEdit1').val($n('#frmAddYear').val());
                                $n('#frmYearEdit1').attr("origValue", $n('#frmAddYear').val());
                                $n('#frmMonthEdit1').val($n('#frmAddMonth').val());
                                $n('#frmMonthEdit1').attr("origValue", $n('#frmAddMonth').val());

                                $n('#toYearEdit1').val($n('#toAddYear').val());
                                $n('#toYearEdit1').attr("origValue", $n('#toAddYear').val());
                                $n('#toMonthEdit1').val($n('#toAddMonth').val());
                                $n('#toMonthEdit1').attr("origValue", $n('#toAddMonth').val());
                                $n('#preEmpId1').val(updateEmployerResponse.newEmpId);
                                
                                // 
                                //  $n('#othEmp').html(otherEmpHtml); 
                                //            $n('#othEmp').show();
                            }
                            $n('#nEmp').hide();
                            $n('#addEmpM').hide();
                            if (document.getElementById('othEmp2').style.display == 'none' || document.getElementById('othEmp').style.display == 'none') {
                                $n('#addEmpM').show();
                            }
                            $n('#frmUpdateEmp :input').each(function() {
                                $n(this).attr("origValue", "");
                                $n(this).val('');
                                //    $n(this).attr("selected", 0);
                            });

                            $n('#frmAddYear').attr("value", 0);
                            $n('#frmAddMonth').attr("value", 0);
                            $n('#toAddYear').attr("value", 0);
                            $n('#toAddMonth').attr("value", 0);



                            showSuccessMessage(updateEmployerResponse.message);
                            window.scrollTo(0,0);
                        }
                        else {
                            showErrorMessage(updateEmployerResponse.message);
                            window.scrollTo(0,0);
                        }

                    }
                },
                error: function() {
                }
            }); //ajax finished
        }
    });
    
    $n('#profileHeading').addEvent('click', function() {
        $n("#profileHeading_err").html('');
    });

    $n('#hideHdEdit').addEvent('click', function() {
        $n("#profileHeading_err").html('');
    });
    
    $n('#saveHeading').addEvent('click', function() {
//var val = $n('#profileHeading').attr('value');
        var val = $n('#profileHeading').val();
        //console.log(val);
        //$n('#profileHeading').attr('origValue',val);
        var heading_text = $n("#profileHeading").val();

        var ck_heading = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+/;
        if (ck_heading.test(heading_text)) {
            $n("#profileHeading_err").html('Email id in profile heading is not allowed.');
            //    showErrorMessage('Email id in profile heading is not allowed.');
            return false;
        }

        if (heading_text.length <= 0) {
            $n("#profileHeading_err").html('Please enter valid profile headline.');
            // showErrorMessage('Please enter valid profile headline.');
            return false; 
        }

        if (heading_text.length > 300) {
            $n("#profileHeading_err").html('Profile heading should be less than 300 charaters.');
            //showErrorMessage('Profile heading should be less than 200 charaters.');
            return false;
        }

        var heading_text_str = heading_text.replace(/\s+/g, " ").split(" ");
        for (sCntr = 0; sCntr < heading_text_str.length; sCntr++)
        {
            if (heading_text_str[sCntr].length > 32) {
                $n("#profileHeading_err").html('Please insert spaces atleast after every 32 characters.');
                //   showErrorMessage('Please insert spaces atleast after every 32 characters.');
                return false;
            }
        }

        var postData = 'profileHeading=' + encodeURIComponent(heading_text);
       // console.log(postData);
        //postData += '&sid='+$n('#sid').val();
        $n(this).ajaxReq({
            type: 'post',
            async: 'true',
            datatype: 'json',
            data: postData,
            url: mrpActionUrl + 'changeHeading',
            success: function parseImportResponse(updateHeadingResponse) {
                len = updateHeadingResponse.length
                if (len == 0) {
                    alert(updateHeadingResponse.message);
                } else {
                    if (updateHeadingResponse.status == true)
                    {
//$n('#profileHeadingText').html(heading_text); 
                        var str = heading_text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                        $n('#profileHeadingText').html(str);
                        $n('#recProfHdEdit').hide();
                        $n('#recProfHd').show();
                        str = '';
                        showSuccessMessage(updateHeadingResponse.message);
                        window.scrollTo(0,0);
                    }
                    else {
                        $n("#profileHeading_err").html(updateHeadingResponse.message);
                        //   showErrorMessage(updateHeadingResponse.message);
                    }
                }
            },
            error: function() {
            }
        }); //ajax finished
    }); //click ends

    $n('#discardNew').addEvent('click', function() {
        $n("#jbLnkNew_err").html('');
        $n("#companyHiredNew_err").html('');
        $n("#locationNew_err").html('');
        $n("#levelHiredNew_err").html('');
        $n('#levelHiredNew').removeClass('err');
        $n('#companyHiredNew').removeClass('err');
        $n('#jbLnkNew').removeClass('err');
 
    });
  
    $n('#discardNewClosed').addEvent('click', function() {
        $n("#jbLnkNewClosed_err").html('');
        $n("#companyHiredNewClosed_err").html('');
        $n("#locationNewClosed_err").html('');
        $n("#levelHiredNewClosed_err").html('');
        $n('#levelHiredNewClosed').removeClass('err');
        $n('#companyHiredNewClosed').removeClass('err');
        $n('#jbLnkNewClosed').removeClass('err');
        
    });

    $n('#hideCrEdit').addEvent('click', function() {
        $n("#currEmpDate_err").html('');
        $n("#currDesig_err").html('');
        $n("#currEmp_err").html('');
        
        $n('#currEmp').removeClass('err');
        $n('#currDesig').removeClass('err');
        $n('#currEmpDate').removeClass('formRowErr');
        $n('#currEmpDate').addClass('formRow');
                
    });
    
    $n('#hidePrEdit1').addEvent('click', function() {
        $n("#otherEmp1_err").html('');
        $n("#prevDesg1_err").html('');
        $n("#prevEmp1_err").html('');
        
        $n('#prevEmp1').removeClass('err');
        $n('#prevDesg1').removeClass('err');
        $n('#otherEmp1').removeClass('formRowErr');
        $n("#otherEmp1").addClass('formRow');
         
        
    });
    
    $n('#hidePrEdit2').addEvent('click', function() {
        $n("#otherEmp2_err").html('');
        $n("#prevDesg2_err").html('');
        $n("#prevEmp2_err").html('');
        
        $n('#prevEmp2').removeClass('err');
        $n('#prevDesg2').removeClass('err');
        $n('#otherEmp2').removeClass('formRowErr');
        $n("#otherEmp2").addClass('formRow');
         
        
    });
    
    $n('#domainExperties').addEvent('click', function() {
        $n("#domainExperties_err").html('');
    });

    $n('#hideExpEdit').addEvent('click', function() {
        $n("#domainExperties_err").html('');
    });

    $n('#saveDomainExprt').addEvent('click', function() {
        var val = $n('#tagCont_hdn').attr('value');
     //   $n('#domainExperties').attr('origValue', val);
        var domain_text = $n.trim($n("#tagCont_hdn").val()),
            errElmt = $n("#tagCont_err");
//      
        if (domain_text.length <= 0) {
            if(!(errElmt.hasClass('tag2Err'))){
                errElmt.html('Please specify Skills/Roles/Sectors you hire for.');
                if (errElmt.hasClass('tag2Ok')) {
                    errElmt.replaceClass('tag2Ok', 'tag2Err');
                } else {
                    errElmt.addClass('tag2Err');
                }
            }
            //  showErrorMessage('Please enter valid domain expertise.');
            return false;
        }
        if (domain_text.length > 500) {
               if(!(errElmt.hasClass('tag2Err'))){
                    errElmt.html('Skills/Roles/Sectors you hire for can contain a maximum of 500 characters.');
                    if (errElmt.hasClass('tag2Ok')) {
                    errElmt.replaceClass('tag2Ok', 'tag2Err');
                } else {
                    errElmt.addClass('tag2Err');
                }
               }
            // showErrorMessage('Domain Expertise should be less than 250 charaters.');
            return false;
        }
        var domain_text_str = domain_text.split(",");
        for (sCntr = 0; sCntr < domain_text_str.length; sCntr++)
        {
            var domain_text_space = domain_text_str[sCntr].split(" ");
             for (sCntrSpace = 0; sCntrSpace < domain_text_space.length; sCntrSpace++)
        {
                if (domain_text_space[sCntrSpace].length > 32) {
                    if (!(errElmt.hasClass('tag2Err'))) {
                        errElmt.html('Please insert spaces after every 32 characters.');
                        if (errElmt.hasClass('tag2Ok')) {
                    errElmt.replaceClass('tag2Ok', 'tag2Err');
                } else {
                    errElmt.addClass('tag2Err');
                }

                    }
                    return false;
                }
           
                //    showErrorMessage('Please insert spaces atleast after every 32 characters.');
              
            }
        }
       
        var functionalAreaArray = eval($n('#hid_functionalArea').val());
        if(functionalAreaArray){
        if(functionalAreaArray.length>3){
             $n("#functionalArea_err").html('You can select a maximum of 3 FAs that you hire for.');
             return false;
            
        }
        }
        var industryArray = eval($n('#hid_industryArea').val());
        if(industryArray) {
        if(industryArray.length>3){
             $n("#industryArea_err").html('You can select a maximum of 3 Industries that you hire for.');
             return false;
            
        }
    }
        var levelArray = eval($n('#hid_levelHiringFor').val());
    if(levelArray){ 
    if(levelArray.length>2){
             $n("#levelHiringFor_err").html('You can select a maximum of 2 levels that you hire for.');
             return false;
            
        }
    }
        var tag_text = $n('#tagCont_inp').val();
        var error1 = $n('#tagCont_err').html();
        var error2 = $n('#tagCont_inp_err').html();
       
        if(tag_text!=null && tag_text!=""){
            if(error1!=null && error1!="")
                return false;
            else if(error2!=null && error2!="")
                return false;
        }
        
      //  console.log($n('#hid_inp_functionalArea'.split('_')[1]).val());
        var functional_area = $n('#hid_functionalArea').val();
        var array_length_fa = functional_area.length;
        functional_area = functional_area.substring(1, array_length_fa - 1);
        functional_area = functional_area.replace(/\"/g, '');
       
        //console.log(fAreaHTML);
        var industry = $n('#hid_industryArea').val();
        var array_length_industry = industry.length;
        industry = industry.substring(1, array_length_industry - 1);
        industry = industry.replace(/\"/g, '');
       
        
        var level = $n('#hid_levelHiringFor').val();
       
        var array_length_level = level.length;
        level = level.substring(1, array_length_level - 1);
        level = level.replace(/\"/g, '');
        
        var clientsHireInput = $n('#clientsHireInput').val();
        //clientsHireInput = clientsHireInput.replace(/</g, "&lt;").replace(/>/g, "&gt;");
       
        if (clientsHireInput.length > 250) {
            $n("#clientsHireInput_err").html('Clients you hire for can have maximum 250 characters.');
            return false;
        }
        var regexQuotes = /^[a-zA-Z\d\s&{}(),\[\]-]+$/;
     //  console.log(regexQuotes.test(clientsHireInput));
        if (clientsHireInput != "") {
            if (!regexQuotes.test(clientsHireInput)) {
              //  console.log(regexQuotes.test(clientsHireInput));
//              console.log($n("#clientsHireInput_err").currObj());
                $n("#clientsHireInput_err").html('Clients you hire for cannot contain special characters.');
                // alert(123);
                return false;
            }
        }
        var domainStr = domain_text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        var postData = 'domainExperties=' + encodeURIComponent(domain_text);
        postData+='&functionalArea=' + functional_area;
        postData+='&industry=' + industry;
        postData+='&level=' + level;
        postData+='&clientsHireInput=' + encodeURIComponent(clientsHireInput);
        
        //postData += '&sid='+$n('#sid').val();
        $n(this).ajaxReq({
            type: 'post',
            async: 'true',
            datatype: 'json',
            data: postData,
            url: mrpActionUrl + 'changeDomainExperties',
            success: function parseImportResponse(changeDomainResponse) {
                len = changeDomainResponse.length
                if (len == 0) {
                    alert(changeDomainResponse.message);
                } else {
                    if (changeDomainResponse.status == false)
                    {
                       // $n("#domainExperties_err").html(changeDomainResponse.message);
                        // showErrorMessage(changeDomainResponse.message);
                        $n('#dExpEdit').hide();
                        $n('#dExpHd').show();
                    }
                    else {
                        
                        $n('#domainExpertiesText').html(domainStr);
                        $n('#dExpEdit').hide();
                        $n('#dExpHd').show();
                        
                        var fAreaHTML = "";
                        if(functionalAreaArray){
                        for (var i = 0; i < functionalAreaArray.length; i++) {
                            fAreaHTML += fAreaJsonJsonArr[functionalAreaArray[i]] + ", ";
                        }
                        //fAreaHTML = trim(fAreaHTML);
                        fAreaHTML =  fAreaHTML.substring(0, fAreaHTML.length - 2);
                        $n("#currFASpan").removeClass('dspN');
                        $n('#curFunctionalHtml').html(fAreaHTML);
                        }else
                             $n("#currFASpan").addClass('dspN');
                        
                       
                        var industryHTML = "";
                        
                        if(industryArray){
                        for (var i = 0; i < industryArray.length; i++) {
                            industryHTML += industryTypeJsonArr[industryArray[i]] + ", ";
                        }
                       // industryHTML = trim(industryHTML);
                       industryHTML =  industryHTML.substring(0, industryHTML.length - 2);
                       $n("#currIndustrySpan").removeClass('dspN');
                        $n('#curIndustryHtml').html(industryHTML);
                        }else
                            $n("#currIndustrySpan").addClass('dspN');
                         
                           

                        var levelHTML = "";
                        if(levelArray){
                        for (var i = 0; i < levelArray.length; i++) {
                            levelHTML += hiringLevelJsonArr[levelArray[i]] + ", ";
                        }
                       // levelHTML = trim(levelHTML);
                        levelHTML =  levelHTML.substring(0, levelHTML.length - 2);
                         $n("#currLevelSpan").removeClass('dspN');
                        $n('#curLevelsHtml').html(levelHTML);
                        }else
                             $n("#currLevelSpan").addClass('dspN');
                        //add space after comman
                        domain_text = domain_text.replace(/,+/g ,', ');                        
                        $n('#domainExpertiesText').html(domain_text);                        
                        fAreaList =eval($n('#hid_functionalArea').val());  
                       
                        industryList = eval($n('#hid_industryArea').val());
                        levelList = eval($n('#hid_levelHiringFor').val());
                        $n('#clientsHireInput').attr("origValue", clientsHireInput);
                        clientsHireInput = clientsHireInput.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                        $n('#clientsIHireForText').html(clientsHireInput); 
                        showSuccessMessage(changeDomainResponse.message);
                        window.scrollTo(0,0);
                    }
                }
            },
            error: function() {
//error handling part
            }
        }); //ajax finished
    });

    /*
     * Change Contact
     */
    $n('#hideContEdit').addEvent('click', function() {
        $n("#location_err").html('');
        $n("#secondryPhone_err").html('');
        $n("#primaryPhone_err").html('');
        $n("#secondryEmail_err").html('');
        $n("#primaryEmail_err").html('');
        $n("#location_err").html('');
        $n('#primaryEmail').removeClass('err');
        $n('#secondryEmail').removeClass('err');
        $n('#primaryPhone').removeClass('err');
        $n('#secondryPhone').removeClass('err');
        $n('#otherCity').removeClass('err');
                 
    });
    
    $n('#changeContacts').addEvent('click', function() {
        $n('#changeContactForm :input').each(function() {
            $n(this).attr("origValue", $n(this).val());
        });
//        if ($n('#osIndiaMrp').isChecked()) {
////   alert("hi");
//            $n('#osIndiaMrp').attr('origValue', true);
//        } else {
//            $n('#osIndiaMrp').attr('origValue', false);
//        }

//       alert($n('#osIndiaMrp').val());

        if ($n("#secondryEmail").val().length > 0) {
            var ck_email = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
            if (!ck_email.test($n("#secondryEmail").val())) {
                email_msg = 'Please enter a valid email ID.';
                $n('#secondryEmail').parent().parent().parent().replaceClass('formRow', 'formRowErr')
                $n("#secondryEmail_err").addClass('err');
                $n("#secondryEmail_err").html(email_msg);
                removeNotification();
                return false;
            }

            if ($n("#secondryEmail").val() === $n("#primaryEmail").val()) {
                $n('#secondryEmail').parent().parent().parent().replaceClass('formRow', 'formRowErr')
                $n("#secondryEmail_err").addClass('err');
                $n("#secondryEmail_err").html('Secondary Email can not be same as Primary Email.');
                return false;
            }
        }

        if ($n("#primaryPhone").val().length > 0) {
            var ck_mobile = /^([0-9]){10,12}$/;
            if (!ck_mobile.test($n("#primaryPhone").val())) {
                $n('#primaryPhone').parent().parent().parent().replaceClass('formRow', 'formRowErr')
                $n("#primaryPhone_err").addClass('err');
                $n("#primaryPhone_err").html('Please enter a valid Mobile no having 10- 12 digits.');
                return false;
            }

        }
//Secondry Phone Validation
        if ($n("#secondryPhone").val().length > 0) {
            if ($n("#primaryPhone").val().length == 0) {
                showErrorMessage('Please enter primary phone first.');
                return false;
            }
            var ck_mobile = /^([0-9]){10,12}$/;
            if (!ck_mobile.test($n("#secondryPhone").val())) {
                $n('#secondryPhone').parent().parent().parent().replaceClass('formRow', 'formRowErr')
                $n("#secondryPhone_err").addClass('err');
                $n("#secondryPhone_err").html('Please enter a valid Mobile no having 10- 12 digits.');
                return false;
            }
            if ($n("#primaryPhone").val() == $n("#secondryPhone").val()) {
//  showErrorMessage('Mobile number should only contain digits from 0-9.');
                $n('#secondryPhone').parent().parent().parent().replaceClass('formRow', 'formRowErr')
                $n("#secondryPhone_err").addClass('err');
                $n("#secondryPhone_err").html('Secondary Phone can not be same as Primary phone.');
                return false;
            }

        }

//Posting Contact Details
        var postData = 'primaryEmail=' + encodeURIComponent($n('#primaryEmail').val());
        postData += '&secondryEmail=' + encodeURIComponent($n('#secondryEmail').val());
        postData += '&primaryPhone=' + encodeURIComponent($n('#primaryPhone').val());
        postData += '&secondryPhone=' + encodeURIComponent($n('#secondryPhone').val());

        if ($n('#secPhone').html().length > 0 && $n('#secondryPhone').val().length <= 0) {
            postData += '&delSecPhone=1';
        }
        if ($n('#secEmail').html().length > 0 && $n('#secondryEmail').val().length <= 0) {
            postData += '&delSecEmail=1';
        }
        if ($n('#priPhone').html().length > 0 && $n('#primaryPhone').val().length <= 0) {
            postData += '&delPriPhone=1';
        }
        
        if($n('#secondryEmail').val().length <= 0)
             var noSecEmail = true;
         var changePhone = false;
//         console.log($n.trim($n('#priPhone').html()));
//         console.log($n.trim($n('#primaryPhone').val()));
//         console.log($n.trim($n('#priPhone').html())!=$n.trim($n('#primaryPhone').val()));
         var priOld = $n.trim($n('#priPhone').html());
         var priNew = $n.trim($n('#primaryPhone').val());
        if(priOld!=priNew)
            changePhone = true;
      //  console.log(changePhone);
        //var spn=$n('#phoneVerificationSpan').childrens('span').length,
            //anc=$n('#phoneVerificationSpan').childrens('a').length;
            
//            var spn = $n('#phoneVerificationSpan').childrens('span').eq(0);          
//            if(spn.hasClass('dspN')=='dspN'){}
//            else{
//                if(!changePhone)
//                    changePhone = false;
//            }
//            else if(anc>0){}
        
        $n('#contactLoading').removeClass("dspN");

        $n(this).ajaxReq({
            type: 'post',
            async: 'true',
            datatype: 'json',
            data: postData,
            url: mrpActionUrl + 'changeContacts',
            success: function parseImportResponse(changeContactResponse) {
                len = changeContactResponse.length
                if (len == 0) {
                    alert(changeContactResponse.message);
                } else {
                    if (changeContactResponse.status == true)
                    {
                        var oldSecEmail = "";
                        if($n('#secEmail').html() != "This is yet to be added"){
                            oldSecEmail = $n.trim($n('#secEmail').html());
                        }
                            
                        var newSecEmail = $n.trim($n('#secondryEmail').val());
                        var nonVerifyContacts = changeContactResponse.verifyMobiles;
                        $n('#domainExpertiesText').html($n('#domainExperties').val());
                        $n('#recContact').show();
                        $n('#recContactEdit').hide();
                        //$n('#priEmail').html($n('#primaryEmail').val());

                        if ($n('#primaryPhone').val().length > 0) {
                            $n('#priPhoneHid').removeClass("dspN");
                            $n('#priPhone').removeClass("dspN");
                            $n('#priPhoneRow').replaceClass("dspN", "dspB");
                            if (findValueInArray(nonVerifyContacts, $n('#primaryPhone').val())) {
                                $n('#verifyPrimaryPhone').removeClass("dspN");
                            }
                        }
                        else {
                            $n('#priPhoneRow').addClass("dspN");
                        }
//console.log($n('#secondryEmail').val());
//Secondry Email Show Hide
                        if ($n('#secondryEmail').val().length > 0) {
                            $n('#secEmailHid').removeClass("dspN");
                            $n('#secEmail').removeClass("dspN");
                            $n('#secEmailRow').replaceClass("dspN", "dspB");
                            //$n('#secEmail').html($n('#secondryEmail').val() + ' (Not Verified)');
                        }
//                        else {
//                            $n('#secEmailRow').addClass("dspN");
//                        }

//Secondry Phone Show Hide
                        if ($n('#secondryPhone').val().length > 0) {
                            $n('#secPhoneHid').removeClass("dspN");
                            $n('#secPhone').removeClass("dspN");
                            $n('#secPhoneRow').replaceClass("dspN", "dspB");
                            if (findValueInArray(nonVerifyContacts, $n('#secondryPhone').val())) {
                                $n('#verifySecondaryPhone').removeClass("dspN");
                            }
                            $n('#secPhone').html($n('#secondryPhone').val());
                            
                        }
                        else {
                            $n('#secPhoneRow').addClass("dspN");
                        }

                        $n('#priPhone').html($n('#primaryPhone').val());
                        $n('#priPhoneLightBox').html($n('#primaryPhone').val());
//                        console.log(oldSecEmail+'=='+newSecEmail);
//                        console.log(newSecEmail);
//                        console.log(oldSecEmail != newSecEmail);
                        //if (oldSecEmail != newSecEmail) {
                        if (changeContactResponse.showVerifySecEmailBox) {
                            $n('#secEmail').html($n('#secondryEmail').val() + ' (Not Verified)');
                            $n('#secEmail').removeClass('clrRed');
                            $n('#currSecondaryEmailId').html($n('#secondryEmail').val());
                            
                             $n("#resendMsgSecondary").addClass('dspN');
                             lightBox({
                                        trigger: "body",
                                        contId: "verifySecondaryEmailBox",
                                        closeBtn: "closeVemai2",
                                        contWidth: 543,
                                        ecp: false,
                                        fixedLayer: true,
                                        returnFocus: true
                                    });
                        }
                         if(changePhone){
                            handelVerify('phoneVerificationSpan','a'); 
                    }
                        showSuccessMessage(changeContactResponse.message);
                        //adjust lightbox layer
                        var docheight = document.documentElement.scrollHeight+'px';
                        $n(".layer").css({'height': docheight});                        
                        //lightbox is  
                        window.scrollTo(0,0);
                    }
                    else {
                        //showErrorMessage(changeContactResponse.message);
                        $n("#changeContact_err").html(changeContactResponse.message);
                        
                        $n('#contactLoading').addClass("dspN");
                        //more detaild error handling (based on response Code)
                        //will come here 
                    }
                   
                    if(noSecEmail){
                       $n('#secEmail').addClass('clrRed');
                        $n('#secEmail').html("This is yet to be added");
                    }
                    
                   
                }
            },
            error: function() {
//error handling part
            }
        }); //ajax finished
    });
    //edit personal details:start
    $n('#savePersonalDetails').addEvent('click', function() {
        $n('#frmEditpersonalDetails :input').each(function() {
            $n(this).attr("origValue", $n(this).val());
        });
        if ($n('#osIndiaMrp').isChecked()) {

            $n('#osIndiaMrp').attr('origValue', true);
        } else {
            $n('#osIndiaMrp').attr('origValue', false);
        }


        if ($n("#namePersonalDetails").val().length == 0) {

            $n("#namePersonalDetails").addClass('err');
            $n("#namePersonalDetails_err").addClass('err');
            $n("#namePersonalDetails_err").html('Please specify your name.');
            return false;
        }
        var regex_name = /^[a-zA-Z.\s]+$/;

        if (!(regex_name.test($n("#namePersonalDetails").val()))) {
             $n("#namePersonalDetails").addClass('err');
            $n("#namePersonalDetails_err").addClass('err');
            $n("#namePersonalDetails_err").html('Name can contain only alphabets.');
            return false;
        }
         if ($n("#designationPersonalDetails").val().length == 0)
        {
             $n("#designationPersonalDetails").addClass('err');
            $n("#designationPersonalDetails_err").addClass('err');
            $n("#designationPersonalDetails_err").html('Please specify your current designation.');
            return false;
        }
         if ($n("#companyPersonalDetails").val().length == 0)
        {
             $n("#companyPersonalDetails").addClass('err');
            $n("#companyPersonalDetails_err").addClass('err');
            $n("#companyPersonalDetails_err").html('Please specify your current employer.');
            return false;
        }
      
         if ($n("#companyPersonalDetails").val().length < 5 )
        {
             $n("#companyPersonalDetails").addClass('err');
            $n("#companyPersonalDetails_err").addClass('err');
            $n("#companyPersonalDetails_err").html('Employer name should have minimum '+($n('#companyPersonalDetails').attr('minlength'))+' characters.');
            return false;
        }
         if ($n("#companyPersonalDetails").val().length > 50)
        {
             $n("#companyPersonalDetails").addClass('err');
            $n("#companyPersonalDetails_err").addClass('err');
            $n("#companyPersonalDetails_err").html('Employer name should have maximum '+($n('#companyPersonalDetails').attr('maxlength'))+' characters.');
            return false;
        }
        if ($n("#osIndiaMrp").isChecked())
        {
            if ($n("#locationOS").val() < 1)
            {
                $n('#locationOS').parent().parent().parent().replaceClass('formRow', 'formRowErr')
                $n("#location_err").addClass('err');
                $n("#location_err").html('Please select your country.');
                return false;
            }
        }
        else {
            if ($n("#location").val() <= 1)
            {
                showErrorMessage('Please select your current location.');
                return false;
            }
            if (isOtherCity($n("#location").val())) {
                var othrCountryVal = $n.trim($n("#otherCity").val());
                if (othrCountryVal.length == 0) {
                    $n("#otherCity").addClass('err');
                    $n("#location_err").addClass('err');
                    $n("#location_err").html('Special characters other than dot [.] and numbers are not allowed');
                    return false;
                }
                else {
                    var ck_other = /^[a-zA-Z .]+$/;
                    if (!ck_other.test($n("#otherCity").val())) {
                        $n("#otherCity").addClass('err');
                        $n("#location_err").addClass('err');
                        $n("#location_err").html('Special characters other than dot [.] and numbers are not allowed');
                        return false;
                    }
                }
            }
        }

        if(commonValidator.isValid('frmEditpersonalDetails') == false){
//            console.log(commonValidator.isValid('frmEditpersonalDetails'));
            return false;
        }
        
        var old_name = $n.trim($n('#nameHtml').html());
        var new_name = $n.trim($n('#namePersonalDetails').val());
//        console.log(old_name);
//        console.log(new_name);
          var name_change = '0';
        if(old_name!=new_name)
          name_change = '1';
//    console.log(name_change);    
        var old_designation = $n.trim($n('#designationHtml').html());
        var new_designation = $n.trim($n('#designationPersonalDetails').val());
//        console.log(old_designation);
//        console.log(new_designation);
          var employment_change = '0';
        if(old_designation!=new_designation)
          employment_change = '1';
        var old_company = $n.trim($n('#compLocHtml').html());
        var new_company = $n.trim($n('#companyPersonalDetails').val());
//       console.log(old_company);
//       console.log(new_company);
        if(old_company!=new_company)
          employment_change = '1';
//        console.log(employment_change);
        var postData = 'namePersonal=' + encodeURIComponent($n('#namePersonalDetails').val());
        postData += '&designationPersonal=' + encodeURIComponent($n('#designationPersonalDetails').val());
        postData += '&companyPersonal=' + encodeURIComponent($n('#companyPersonalDetails').val());
        postData += '&location=' + $n('#location').childrens(":selected").attr("value");
        postData += '&locationOS=' + $n('#locationOS').childrens(":selected").attr("value");
       // console.log($n('#location').childrens(":selected").html());
        postData += '&otherLocation=' + encodeURIComponent($n('#otherLocation').val());
        postData += '&otherCity=' + encodeURIComponent($n('#otherCity').val());
        postData += '&id=' + $n('#currentEmpIdPersonal').val();
        postData += '&nameChange=' + name_change;
        postData += '&employmentChange=' + employment_change;
       

        if ($n("#osIndiaMrp").isChecked())
            postData += '&isOSIndia=2';
        else
            postData += '&isOSIndia=1';
        $n(this).ajaxReq({
            type: 'post',
            async: 'true',
            datatype: 'json',
            data: postData,
            url: mrpActionUrl + 'updatepersonalDetails',
            
            success: function parsePersonalResponse(changePersonalResponse) {

                len = changePersonalResponse.length
                if (len == 0) {

                } else {
               if (changePersonalResponse.status == true)
                    {
                        $n('#nameHtml').html($n('#namePersonalDetails').val()); 
                        //$n('#nameHtml').html('<strong class="f18 georgia">'+$n('#namePersonalDetails').val()+'</strong>'); 
                     //   $n('#designationHtml').html($n('#designationPersonalDetails').val()); 
                     updateCompDesg($n('#designationPersonalDetails').val(),$n('#companyPersonalDetails').val());
                      //  var compState = $n('#companyPersonalDetails').val()+', ';
                        var otherLocation = $n('#otherLocation').val();
                        var otherCity = $n('#otherCity').val();
                        var state = $n('#location').childrens(":selected").html();
                        var country = $n('#locationOS').childrens(":selected").html();
                         if ($n("#osIndiaMrp").isChecked()){
                             locationValue = country;
                             if(otherLocation!="")
                                 locationValue+='-('+otherLocation+')';
                         }else{
                             locationValue=state;
                             if(otherCity!="")
                                 locationValue+='-('+otherCity+')';
                         }
                       
                        $n('#LocHtml').html(locationValue); 

                        $n('#editPersDetl').hide();
                        $n('#recPhoto').show();
                        showSuccessMessage(changePersonalResponse.message);
                        window.scrollTo(0,0);
                    }
                    else {
                        showErrorMessage(changePersonalResponse.message);
                        window.scrollTo(0, 0);
                    }
                }
             
            },
            error: function() {
//error handling part

            }
        }); //ajax finished
    });
    
    //edit personal details :end

    //Delete user photo
    $n('#deletePhoto').addEvent('click', function() {
        var confirmResponse = confirm("Do you want to delete your photo ?");
        if (confirmResponse != true)
        {
          return false;
        }
        else
        {
          
        
        var postData = ''; //'sid='+$n('#sid').val();
        $n(this).ajaxReq({
            type: 'post',
            async: 'true',
            datatype: 'json',
            data: postData,
            url: mrpActionUrl + 'deletephoto',
            success: function parseImportResponse(changeDomainResponse) {
                    if (!changeDomainResponse.status)
                    {
                    showErrorMessage(changeDomainResponse.message);
                 
                    } 
                    else {
                    $n('#recPhotoEdit').hide();
                    $n('#deletePhoto').hide();
                    $n('#recPhoto').show();
                    $n('#PhotoText').html("Add Photo");
                    $n('#editPhoto').html("Add Photo");
                   
                    
                    showSuccessMessage(changeDomainResponse.message);
                   // $n("#notificationMsg").html("<em></em>"+changeDomainResponse.message).show();
                    var srcOld = $n("#photoId").attr("src");
                    //console.log(srcOld);
                    $n("#photoId").attr({
                        'src': ""
                    });
                    $n("#currPhotoId").attr({
                        'src': ""
                    });
                }
              
            },
            error: function() {
//error handling part
            }
        }); //ajax finished
        }
    });

    $n('#changeEmailSubmit').addEvent('click', function() {

        if ($n("#newEmailId").val().length > 100) {
            $n("#resendMsg").removeClass('dspN');
            $n("#resendMsg").removeClass('pNotify');
            $n("#resendMsg").addClass('pErr');
            $n("#resendMsg").html('<em></em> Please enter a valid Email ID.');
            return;
        }

        var regex_email = /([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+/;
        if (regex_email.test($n("#newEmailId").val())==false ) {
            $n("#newEmailId_err").html('Please enter a valid email ID.');
            return;
        }

        $n('#emailVerifyFrm').submit();


//changeEmailSubmit
/*
        var postData = 'newEmail=' + encodeURIComponent($n('#newEmailId').val());
        postData += '&userName=' + $n('#currEmailId').html();
        //postData += '&sid='+$n('#sid').val();
        $n(this).ajaxReq({
            type: 'post',
            async: 'true',
            datatype: 'json',
            data: postData,
            url: activationActionUrl + 'changeEmail',
            success: function parseImportResponse(changeEmailResponse) {

                if (changeEmailResponse.length == 0) {
                    alert(changeEmailResponse.message);
                } else {
                    $n("#resendMsg").removeClass('dspN');
                    if (!changeEmailResponse.status)
                    {
                        $n("#resendMsg").removeClass('pNotify');
                        $n("#resendMsg").addClass('pErr');
                        $n("#resendMsg").html('<em></em> ' + changeEmailResponse.message);
                    }
                    else {
                        $n('#currEmailId').html($n('#newEmailId').val());
                        $n('#editEmail').hide();
                        $n('#currEmail').show();
                        $n("#resendMsg").addClass('pNotify');
                        $n("#resendMsg").removeClass('pErr');
                        $n("#resendMsg").html('<em></em> ' + changeEmailResponse.message);
                        $n("#loggedInUserName").html($n('#newEmailId').val());
                        
                    }
                }
            },
            error: function() {
//error handling part
            }
        }); //ajax finished
        */
       
       
    });
    
    //change secondary email
    $n('#changeSecondaryEmailSubmit').addEvent('click', function() {

        if ($n("#newSecondaryEmailId").val().length > 100) {
            $n("#resendMsgSecondary").removeClass('dspN');
            $n("#resendMsgSecondary").removeClass('pNotify');
            $n("#resendMsgSecondary").addClass('pErr');
            $n("#resendMsgSecondary").html('<em></em> Please enter a valid Email ID.');
            return;
        }

//changeSecondaryEmailSubmit
        var postData = 'newSecondaryEmail=' + encodeURIComponent($n('#newSecondaryEmailId').val());
        postData+='&oldSecondaryEmail='+encodeURIComponent($n('#currSecondaryEmailId').html());
        
        //postData += '&sid='+$n('#sid').val();
        $n(this).ajaxReq({
            type: 'post',
            async: 'true',
            datatype: 'json',
            data: postData,
            url: mrpActionUrl + 'updateSecondaryEmail',
            success: function parseChangeEmailResponse(changeEmailResponse) {

                if (changeEmailResponse.length == 0) {
                    alert(changeEmailResponse.message);
                } else {
                    $n("#resendMsgSecondary").removeClass('dspN');
                    if (!changeEmailResponse.status)
                    {
                        $n("#resendMsgSecondary").removeClass('pNotify');
                        $n("#resendMsgSecondary").addClass('pErr');
                        $n("#resendMsgSecondary").html('<em></em> ' + changeEmailResponse.message);
                    }
                    else {
                        $n('#currSecondaryEmailId').html($n('#newSecondaryEmailId').val());
                        $n('#editSecondaryEmail').hide();
                        $n('#currSecondaryEmail').show();
                        $n("#resendMsgSecondary").addClass('pNotify');
                        $n("#resendMsgSecondary").removeClass('pErr');
                        $n("#resendMsgSecondary").html('<em></em> ' + changeEmailResponse.message);
                    }
                }
            },
            error: function() {
//error handling part
            }
        }); //ajax finished
    });
    $n('#dontSetSE').addEvent('click', function() {
   
 var postData="";
 
        $n(this).ajaxReq({
            type: 'post',
            async: 'true',
            datatype: 'json',
            data: postData,
            url: mrpActionUrl + 'resetSecondaryEmail',
            success: function resetSEResponse(resetSEmailResponse) {

                if (resetSEmailResponse.length == 0) {
                    alert(resetSEmailResponse.message);
                } else {
                 $n("#resendMsgSecondary").removeClass('dspN');
                    if (!resetSEmailResponse.status)
                    {
                        $n("#resendMsgSecondary").removeClass('pNotify');
                        $n("#resendMsgSecondary").addClass('pErr');
                        $n("#resendMsgSecondary").html('<em></em> ' + resetSEmailResponse.message);
                    }
                    else {
//                        $n('#currEmailId').html($n('#newEmailId').val());
                        
                        $n('#verifySecondaryEmailBox').hide();
                        hideLayer();
                        $n('#secondryEmail').val("");
                           $n('#secondryEmail').attr("origValue", '');
                         $n('#secEmail').addClass('clrRed');
                        $n('#secEmail').html("This is yet to be added");
                       // alert($n('#secondryEmail').val().length);
                      //  $n('#secEmailRow').addClass('dspN');
                        
                    }
                }
            },
            error: function() {
//error handling part
            }
        }); //ajax finished
    });

    $n('#resendEmailSubmit').addEvent('click', function() {
         $n("#resendPrimaryLoader").removeClass('dspN');
        var postData = 'uData=' + $n('#encUData').val();
        //postData += '&sid='+$n('#sid').val();
        $n(this).ajaxReq({
            type: 'post',
            async: 'true',
            datatype: 'json',
            data: postData,
            url: activationActionUrl + 'resendMail',
            success: function parseImportResponse(resendEmailResponse) {
                len = resendEmailResponse.length
                if (len == 0) {
                    alert(resendEmailResponse.status);
                } else {
                    $n("#resendMsg").removeClass('dspN');
                    if (!resendEmailResponse.status)
                    {
                        $n("#resendMsg").removeClass('pNotify');
                        $n("#resendMsg").addClass('pErr');
                        $n("#resendMsg").html('<em></em> ' + resendEmailResponse.message);
                    }
                    else {
                        $n("#resendMsg").addClass('pNotify');
                        $n("#resendMsg").removeClass('pErr');
                        $n("#resendMsg").html('<em></em> ' + resendEmailResponse.message);
                    }
                }
                 $n("#resendPrimaryLoader").addClass('dspN');
            },
            error: function() {
            }
        }); //ajax finished
    });
    $n('#resendSeconadryEmailSubmit').addEvent('click', function() {
         $n("#resendSecondaryLoader").removeClass('dspN');
        var postData = 'uData=' + $n('#encUDataSec').val();
        //postData += '&sid='+$n('#sid').val();
        $n(this).ajaxReq({
            type: 'post',
            async: 'true',
            datatype: 'json',
            data: postData,
            url: activationActionUrl + 'resendSecondaryMail',
            success: function parseImportResponse(resendEmailResponse) {
                len = resendEmailResponse.length
                if (len == 0) {
                    alert(resendEmailResponse.status);
                } else {
                    $n("#resendMsgSecondary").removeClass('dspN');
                    if (!resendEmailResponse.status)
                    {
                        $n("#resendMsgSecondary").removeClass('pNotify');
                        $n("#resendMsgSecondary").addClass('pErr');
                        $n("#resendMsgSecondary").html('<em></em> ' + resendEmailResponse.message);
                    }
                    else {
                        $n("#resendMsgSecondary").addClass('pNotify');
                        $n("#resendMsgSecondary").removeClass('pErr');
                        $n("#resendMsgSecondary").html('<em></em> ' + resendEmailResponse.message);
                    }
                }
                 $n("#resendSecondaryLoader").addClass('dspN');
            },
            error: function() {
            }
        }); //ajax finished
    });

    //Re Send SMS
    $n('#resendSMSSubmit').addEvent('click', function() {
        var postData = 'uData=' + $n('#encUData').val();
        //postData += '&sid='+$n('#sid').val();
        if ($n("#resendSMSType").val() == "primary")
            postData += '&priamryPhone=' + $n('#priPhone').html();
        else
            postData += '&secondryPhone=' + $n('#secPhone').html();
            
        $n(this).ajaxReq({
            type: 'post',
            async: 'true',
            datatype: 'json',
            data: postData,
            url: activationActionUrl + 'resendSMS',
            success: function parseImportResponse(resendEmailResponse) {
                len = resendEmailResponse.length
                if (len == 0) {
                    alert(resendEmailResponse.status);
                } else {
                    $n("#resendSmsMsg").removeClass('dspN');
                    if (!resendEmailResponse.status)
                    {
                        $n("#resendSmsMsg").removeClass('pNotify');
                        $n("#resendSmsMsg").addClass('pErr');
                        $n("#resendSmsMsg").html('<em></em> ' + resendEmailResponse.message);
                    }
                    else {
                        $n("#resendSmsMsg").addClass('pNotify');
                        $n("#resendSmsMsg").removeClass('pErr');
                        $n("#resendSmsMsg").html('<em></em> ' + resendEmailResponse.message);
                    }
                }
            },
            error: function() {
            }
        }); //ajax finished
    });

    //Activate Phone SMS
    $n('#verifySMSSubmit').addEvent('click', function() {

        var phone_code = $n.trim($n("#verifyCodePh").val());
        if (phone_code.length <= 0) {
            $n("#resendSmsMsg").removeClass('dspN');
            $n("#resendSmsMsg").removeClass('pNotify');
            $n("#resendSmsMsg").addClass('pErr');
            $n("#resendSmsMsg").html('<em></em> Please enter valid phone verification code.');
            return false;
        }
        var postData = 'verifyPhoneCode=' + encodeURIComponent(phone_code);
        //postData += '&sid='+$n('#sid').val();
        //postData += '&priamryPhone='+$n('#priPhone').val();
        $n(this).ajaxReq({
            type: 'post',
            async: 'true',
            datatype: 'json',
            data: postData,
            url: activationActionUrl + 'verifyPhone',
            success: function parseImportResponse(resendEmailResponse) {
                len = resendEmailResponse.length
                if (len == 0) {
                    alert(resendEmailResponse.status);
                } else {
                    $n("#resendSmsMsg").removeClass('dspN');
                    if (!resendEmailResponse.status)
                    {
                        $n("#resendSmsMsg").removeClass('pNotify');
                        $n("#resendSmsMsg").addClass('pErr');
                        $n("#resendSmsMsg").html('<em></em> ' + resendEmailResponse.message);
                    }
                    else {
                        $n("#resendSmsMsg").addClass('pNotify');
                        $n("#resendSmsMsg").removeClass('pErr');
                        handelVerify('phoneVerificationSpan','s');
                        //var spanVal = $n('<span>').addClass('clrGrn ml10').html('Verified');
                        //$n('#phoneVerificationSpan').html('').append(spanVal);
//                        $n("#verifiedPhoneNumber").html('Verified');
                        $n("#resendSmsMsg").html('<em></em> ' + resendEmailResponse.message);
                       
                        if ($n("#resendSMSType").val() == "primary") {
                            $n('#verifyPrimaryPhone').addClass("dspN");
                        } else {
                            $n('#verifySecondaryPhone').addClass("dspN");
                        }
                    }
                }
               
            },
            error: function() {
            }
        }); //ajax finished
    });


    $n('#naukriJobShowButton').addEvent('click', function() {
//$n(this).
        document.getElementById('showNaukriJobFrm').submit();
    });
    
    $n('#naukriJobHideButton').addEvent('click', function() {
        document.getElementById('hideNaukriJobFrm').submit();
    });
    
    $n('#showMoreJob').addEvent('click', function() {
        document.getElementById('moreJobsFrm').submit();
    });
    $n('#showMoreClosedJob').addEvent('click', function() {
        document.getElementById('moreClosedJobsFrm').submit();
    });
    /*resend Email field validation*/
    if ($n("#emailVerifyFrm").length > 0) {
        /*  validate({
         formName : 'emailVerifyFrm',
         errorMsgs : {
         required : 'This field can not be left blank.',
         alpha : 'Only Alphabets are allowed',
         numeric : 'Mobile number should only contain digits from 0-9.',
         email : 'Please enter a valid Email ID.',
         specialChar : 'Special characters not allowed',
         range : 'The field should be between ',
         checked : 'Must be checked',
         selected : 'Select an option'
         }
         });*/

        commonValidator.validate({
            formNames: 'emailVerifyFrm',
            errors: commonErrList        
        });
    }

    if ($n("#changeContactForm").length > 0) {
        /* validate({
         formName : 'changeContactForm',
         errorMsgs : {
         required : 'This field can not be left blank.',
         alpha : 'Only Alphabets are allowed',
         numeric : 'Mobile number should only contain digits from 0-9.',
         email : 'Please enter a valid Email ID.',
         specialChar : 'Special characters not allowed',
         range : 'The field should be between ',
         checked : 'Must be checked',
         selected : 'Select an option'
         }
         });*/

        commonValidator.validate({
            formNames: 'changeContactForm'
        });
        
        commonValidator.hideElement('otherCity');
    }

    if ($n("#frmUpdateCurrEmp").length > 0) {
        /*  validate({
         formName : 'frmUpdateCurrEmp',
         errorMsgs : {
         required : 'This field can not be left blank.',
         range : 'The field should be between '
         }
         });
         */
        commonValidator.validate({
            formNames: 'frmUpdateCurrEmp'
        });
    }


    if ($n("#frmEditEmp1").length > 0) {
        /*   validate({
         formName : 'frmEditEmp1',
         errorMsgs : {
         required : 'This field can not be left blank.',
         range : 'The field should be between '
         }
         });*/

        commonValidator.validate({
            formNames: 'frmEditEmp1'
        });

    }
    if ($n("#frmEditpersonalDetails").length > 0) {
        /*   validate({
         formName : 'frmEditpersonalDetails',
         errorMsgs : {
         required : 'This field can not be left blank.',
         range : 'The field should be between '
         }
         });*/

        commonValidator.validate({
            formNames: 'frmEditpersonalDetails'
           
        });

    }
   
       if ($n("#frmChangeDomain").length > 0) {
       function ddCall(){           
           var obj1 = {
                id: {"functionalArea": [fAreaJsonJsonArr,fAreaList]},
                checkBox: true,
                maxHeight: 200,
                placeHolderText: 'Select maximum 3 Functional Areas you hire for',
                tagInSepContainer: 'functionalArea_Contr',
                
                clearAllInside:{'Text':'Clear All Selection'},
		onTagClick:function(obj,len){
                    hideContainer(len,obj.tagInSepContainer,4);                    
                }
            };
            var t1 = new DD(obj1); 
			var obj2 = {
                id: {"industryArea": [industryTypeJsonArr,industryList]},
                checkBox: true,
                maxHeight: 200,
                placeHolderText: 'Select maximum 3 Industries you hire for',
                tagInSepContainer: 'industryArea_Contr',
                clearAllInside:{'Text':'Clear All Selection'},
                onTagClick:function(obj,len){
                    hideContainer(len,obj.tagInSepContainer,4);                    
                }
				
            };
            var t2 = new DD(obj2);  
	   var obj3 = {
                id: {"levelHiringFor": [hiringLevelJsonArr,levelList]},
                checkBox: true,
                maxHeight: 200,
                placeHolderText: 'Select maximum 2 levels you hire for',
                tagInSepContainer: 'levelHiringFor_Contr',
                clearAllInside:{'Text':'Clear All Selection'},
                onTagClick:function(obj,len){
                    hideContainer(len,obj.tagInSepContainer,3);                    
                },
                clearTagId:{
             "clrAll_industryArea":{
                                                    id:['industryArea'],
                                                    clrCalbackfun:function(obj,len){
                                                                    hideContainer(len,'industryArea_Contr')
                                                                  }
                                                  },
                            "clrAll_functionalArea": {id:['functionalArea'],
                                                      clrCalbackfun:function(obj,len){
                                                                        hideContainer(len,'functionalArea_Contr')
                                                                    }                                                    
                                                     },
                           
                            "clrAll_levelHiringFor":{id:['levelHiringFor'],
                                                     clrCalbackfun:function(obj,len){
                                                                    hideContainer(len,'levelHiringFor_Contr')
                                                                   }                                                        
                                                     }
                           }
		
            };
            var t3 = new DD(obj3);  
          
        }
//        ddCall()
        $n('#editExp').addEvent('click',function(){            
            ddCall()   ;     
        })
        


        commonValidator.validate({
            formNames: 'frmChangeDomain',
            submitButton: 'saveDomainExprt'
        });

        
                                   
    }
    $n("#rem_locationNewClosed").addEvent('click', function() {
        removeLocationMessage('inp_locationNewClosed',true);
    })

    $n("#rem_locationNew").addEvent('click', function() {
        removeLocationMessage('inp_locationNew',true);
    })
    
    

    if ($n("#frmEditEmp2").length > 0) {
        /*   validate({
         formName : 'frmEditEmp2',
         errorMsgs : {
         required : 'This field can not be left blank.',
         range : 'The field should be between '
         }
         });*/

        commonValidator.validate({
            formNames: 'frmEditEmp2'
        });

    }

    if ($n("#frmUpdateEmp").length > 0) {
        /*  validate({
         formName : 'frmUpdateEmp',
         errorMsgs : {
         required : 'This field can not be left blank.',
         range : 'The field should be between '
         }
         });
         */
        commonValidator.validate({
            formNames: 'frmUpdateEmp'
        });
 
    }


    $n('#takeATour').addEvent('click', function() {
        showTourLightBox();
    });
   
   
    $n('.share').addEvent('click', function() {
        var jobId = $n(this).attr('id').split('_')[1];
        $n('#social_'+jobId).toggle();
       
    })
    if($n.browser().name=="msie"){
       $n('.share span').addEvent('click', function() {
            var jobId = $n(this).parent().attr('id').split('_')[1];
            $n('#social_'+jobId).toggle();
       })
    }

   
     
  //  var latestMails = setTimeout(loadLatestMails, 100);

}); //document.ready ends here

function hideContainer(len,id,limit){
//    console.log(len,id,limit)
   if(len==0){
     $n('#'+id).hide();
   }       
   var ID= id.split('_')[0]              
    if(len<limit){           
        $n('#'+ID+'_err').html('').removeClass('err')
    }
}
   // add experience field in Quick Job
  
    
    
function deleteMail(mailId)
{
    
    var postData = 'mailIdEnc=' + mailId +'&convThread='+true;
   
    $n('.deleteMailMrp').ajaxReq({
        type: 'post',
        async: 'true',
        datatype: 'text',
        data: postData,
        url: inboxActionUrl + 'latestMail',
        success: function latestMail(MailResponse) {

            $n("#maildiv").html(MailResponse);
        },
        error: function() {
            alert("failure");
        }
    })
}

function loadLatestMails() {
    //console.log('calling JS');
//    console.log($n('#jobSeekerSnippet').length);

    var postData = "";
    $n("#maildiv").ajaxReq({
        type: 'post',
        async: 'true',
        datatype: 'text',
        data: postData,
        url: inboxActionUrl + 'latestMail',
        success: function latestMail(MailResponse) {

            // alert(MailResponse);
            $n("#maildiv").html(MailResponse);

        },
        error: function() {
            alert("failure");
        }
    }); //ajax finished

}

function validateDate(isCurr, startYear, startMonth, endYear, endMonth) {
    var resultArr = {
        isValid: 1,
        message: "ok"
    };
    if (startYear == 0) {
        resultArr.isValid = 0;
        resultArr.message = "Please enter the year for start date of employment.";
        return resultArr;
    }

    if (startMonth == 0) {
        resultArr.isValid = 0;
        resultArr.message = "Please enter the month for start date of employment.";
        return resultArr;
    }
    var startDate = new Date(startYear, startMonth - 1, 1);
    var today = new Date();
    if (startDate > today) {
        resultArr.isValid = 0;
        resultArr.message = "Please specify a valid start date of employment.";
        return resultArr;
    }

    if (isCurr) {
        return resultArr;
    }

    if (endYear == 0) {
        resultArr.isValid = 0;
        resultArr.message = "Please enter the year for end date of employment.";
        return resultArr;
    }

    if (endMonth == 0) {
        resultArr.isValid = 0;
        resultArr.message = "Please enter the month for end date of employment.";
        return resultArr;
    }

    var endDate = new Date(endYear, endMonth - 1, 1);
    // alert(endDate);
    var today = new Date();
    if (startDate > endDate) {
        resultArr.isValid = 0;
        resultArr.message = "Start date of employment cannot be later than end date.";
        return resultArr;
    }
    if (endDate > today) {
        resultArr.isValid = 0;
        resultArr.message = "Please specify a valid end date of employment.";
        return resultArr;
    }
    return resultArr;
}

function removeNotification() {
    $n("#notificationMsg").removeClass('dspN');
    $n("#notificationMsg").removeClass('pErr');
    $n("#notificationMsg").removeClass('pNotify');
    $n("#notificationMsg").val("");
}

function showSuccessMessage(message)
{
    $n("#notificationMsg").removeClass('dspN');
    $n("#notificationMsg").removeClass('pErr');
    $n("#notificationMsg").addClass('pNotify');
    $n("#notificationMsg").html('<em></em> ' + message);
}

function showErrorMessage(message)
{
 
    $n("#notificationMsg").removeClass('dspN');
    $n("#notificationMsg").removeClass('pNotify');
    $n("#notificationMsg").addClass('pErr');
    $n("#notificationMsg").html('<em></em> ' + message);
}

function findValueInArray(arr, val) {
    var i = arr.length;
    while (i--) {
        if (arr[i] === val) {
            return true;
        }
    }
    return false;
}

function showOtherCity(otherCity) {
//      var otherCityArr = new Array('28','31','35','39','44','49','68','79','85','89','95','107','121','128','141','144','147','150','153','160','170','178','181','197','200','222','226','234','235','9999');

    otherCity = parseInt(otherCity);
    //#####Required for IE<9 (indexOf method not available)
    if (!Array.prototype.indexOf)
    {
        Array.prototype.indexOf = function(elt /*, from*/) {
            var len = this.length;
            var from = Number(arguments[1]) || 0;
            from = (from < 0) ? Math.ceil(from) : Math.floor(from);
            if (from < 0)
                from += len;
            for (; from < len; from++) {
                if (from in this && this[from] === elt)
                    return from;
            }
            return -1;
        };
    }

    if (otherCityArr.indexOf(otherCity) != -1) {
        $n('#otherCity').show();
        commonValidator.showElement('otherCity');
    } else {
        $n('#otherCity').hide();
        commonValidator.hideElement('otherCity');
    }
}

function htmlEntityConverter(str) {

    return str.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
    
}

function isOtherCity(otherCity) {

    otherCity = parseInt(otherCity);
    //#####Required for IE<9 (indexOf method not available)
    if (!Array.prototype.indexOf)
    {
        Array.prototype.indexOf = function(elt /*, from*/) {
            var len = this.length;
            var from = Number(arguments[1]) || 0;
            from = (from < 0) ? Math.ceil(from) : Math.floor(from);
            if (from < 0)
                from += len;
            for (; from < len; from++) {
                if (from in this && this[from] === elt)
                    return from;
            }
            return -1;
        };
    }

    if (otherCityArr.indexOf(otherCity) != -1) {
        return true;
    }
    return false;
}

function updateCompDesg(designation,company){
    $n('#designationHtml').html(designation.replace(/>/g, "&gt;").replace(/</g, "&lt;"));
    $n('#compLocHtml').html(company.replace(/>/g, "&gt;").replace(/</g, "&lt;"));

    $n('#curJobHtml').html(designation.replace(/>/g, "&gt;").replace(/</g, "&lt;"));
    $n('#curCompanyHtml').html(company.replace(/>/g, "&gt;").replace(/</g, "&lt;"));

    $n('#currDesig').val(designation);
    $n('#currDesig').attr("origValue", designation);
    $n('#currEmp').val(company);
    $n('#currEmp').attr("origValue", company);
    $n('#designationPersonalDetails').val(designation);
    $n('#designationPersonalDetails').attr("origValue", designation);
    $n('#companyPersonalDetails').val(company);
    $n('#companyPersonalDetails').attr("origValue", company);
     
     
}

function showTourLightBox(){
 
    lightBox({
        trigger: "takeATour",
        contId: "tourLightbox",
        closeBtn: "crossPhoto2",
        contWidth: 1024,
        ecp: true,
        fixedLayer: false,
        returnFocus: false
        
    });
    //        window.onresize();
  resizeLightBox();  
    
}
function resizeLightBox(){
    if (window.onresize) {
        $n(".ifrm").hide();
        $n(".layer").hide();
        window.onresize();
        $n(".layer").show();
        $n(".ifrm").show();
    }
}


function getMonthName(monthNum)
{
    var month=new Array();
    month['01']="Jan";
    month['02']="Feb";
    month['03']="Mar";
    month['04']="Apr";
    month['05']="May";
    month['06']="Jun";
    month['07']="Jul";
    month['08']="Aug";
    month['09']="Sep";
    month['10']="Oct";
    month['11']="Nov";
    month['12']="Dec";  
    return month[monthNum];
    
}

function uploadUserPhoto(){
    var upath = document.getElementById('browsePic').value;
    if (upath == ""){
        return;
    }    
//    extn = "";
//    if ((idx=upath.lastIndexOf(".")) != -1)
//        extn = upath.substr(idx+1).toLowerCase();
//    if (extn == "jpg" || extn == "jpeg" || extn == "gif"|| extn == "png") {
//
//    }
    $n('#uploadPicLoading').removeClass("dspN"); 
    document.getElementById('uploadFrm').submit();
    document.getElementById('browsePic').disabled = true;
}

function tagItCalling(preTags){
     tag2.init({
        id: ['tagCont'],
        prefill: {'tagCont': preTags},
        validate:{regEx : /^[^~`@"'<>!\^@$%&\\]+$/ ,msg : "Please enter a valid value. Only following special characters are allowed [ #  - + / .] ",custom:function(){return maxLength()}},
        tagLimits: {max: [15, 'You can enter a maximum of 15 Skills/Roles you hire for.']},
       // wordsPerTag: {min: [1, 'Each tag must contain atleast one word'], max: [10, 'Maximum 10 words are allowed per tag']},
        charactersPerWord: {max: [32, 'Please insert spaces after every 32 characters.']},
        onCreate: function() {
            //if(tag2.createdTags['tagCont'])console.log(tag2.createdTags['tagCont']);
            //if(tag2.createdTags['tagCont1'])console.log(tag2.createdTags['tagCont1']);
            $n('#tagCont_inp_err').removeClass('err');
        },
        onDelete: function() {
//          console.log('deleted');
            $n('#tagCont_inp_err').removeClass('err');
        } ,
        placeholder: 'Please enter Skills/Roles'

    });
}

function handelVerify(id,elm) {
    if(elm=='s'){
        $n('#' + id).childrens('span').eq(0).removeClass('dspN');
        $n('#' + id).childrens('a').eq(0).addClass('dspN');
    }
    else if(elm=='a'){
       $n('#' + id).childrens('span').eq(0).addClass('dspN');
        $n('#' + id).childrens('a').eq(0).removeClass('dspN');
    }
}

function maxLength() {
    var o = $n('#tagCont_inp');
    var id = ((o.attr('id').split('_')[0]) + '_hdn'), val = o.val() + $n('#' + id).val(), rtn = false;
    if (val.length > 500) {
        rtn = 'Skills/Roles/Sectors you hire for can contain a maximum of 500 characters.'
    }
    return rtn;
}
//function disableSaveButton(buttonId,formId){
////    console.log(buttonId);
////    console.log(formId);
//    if( commonValidator.isValid(formId)){
//        $n('#'+formId).currObj().submit();
//       $n('#'+buttonId).attr('disabled','disabled')
//    }
// 
//}

       
