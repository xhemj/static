function querystring(qs) {
	var s=location.href;
		s=s.replace ("?", "?&").split("&");
	var re="";
	for(i=1;i<s. length;i++) {
		if(s[i].indexOf(qs+"=")==0) {
			re=s[i].replace(qs+"=","") ;
			}
		}
	return re;
}
