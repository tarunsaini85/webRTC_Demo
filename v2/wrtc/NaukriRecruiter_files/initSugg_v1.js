function initSuggest(obj,suggName){
//	var ctyArr=["Agra","Ahmedabad","Andhra Pradesh","Bangalore","Baroda","Bengaluru","Bhopal","Bhubaneswar","Bombay","Calcutta","Chandigarh","Chennai","Chhattisgarh","Cochin","Coimbatore","Dehradun","Delhi","Delhi / NCR","Gujarat","Gurgaon","Haryana","Hyderabad","Indore","Jaipur","Karnataka","Kerala","Kochi","Kolkata","Lucknow","Madhya Pradesh","Madras","Maharashtra","Mumbai","Nagpur","Nasik","Noida","New Delhi","Orissa","Pune","Raipur","Rajasthan","Rajkot","Surat","Tamil Nadu","Thane","Uttar Pradesh","Uttarakhand","Vadodara","West Bengal","Daman & Diu"];
  window.alreadyHaveArray = new suggester(
								{
									id:['#'+obj.attr('id')], //pass more than one id
									objNew:'alreadyHaveArray', //pass object name
									countSugg:'10', //pass how many values display at the time of suggestion display
									arry:'',//ctyArr, //pass json array if you have;
									url:'http://ps02.infoedge.com/CommonSuggestor/search.php', //pass url if you wants the values from server
									domain:false, //pass true in case of email suggestor
									client:'server', //pass "server" if you want to load the values on request
									startVal:1, //after how many charactor you wants to show the suggstor
									app_id:7, // requirement from the php developer side;
									suggestorName:suggName, //type of the suggestor, its a "keyword" suggestor or designation suggestor or any other.
									keywordCountInOneRequest:100 //how many keywords do you want to download in one request.
								}
							);
}
