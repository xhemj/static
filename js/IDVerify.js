function IDVerify(number) {
	var name = "IDVerify"
	var oid1 = number.slice(0,1)*7;
	var oid2 = number.slice(1,2)*9;
	var oid3 = number.slice(2,3)*10;
	var oid4 = number.slice(3,4)*5;
	var oid5 = number.slice(4,5)*8;
	var oid6 = number.slice(5,6)*4;
	var oid7 = number.slice(6,7)*2;
	var oid8 = number.slice(7,8)*1;
	var oid9 = number.slice(8,9)*6;
	var oid10 = number.slice(9,10)*3;
	var oid11 = number.slice(10,11)*7;
	var oid12 = number.slice(11,12)*9;
	var oid13 = number.slice(12,13)*10;
	var oid14 = number.slice(13,14)*5;
	var oid15 = number.slice(14,15)*8;
	var oid16 = number.slice(15,16)*4;
	var oid17 = number.slice(16,17)*2;
	var oidplus = oid1*1+oid2*1+oid3*1+oid4*1+oid5*1+oid6*1+oid7*1+oid8*1+oid9*1+oid10*1+oid11*1+oid12*1+oid13*1+oid14*1+oid15*1+oid16*1+oid17*1;
	var oiddivision = oidplus%11
	if (oiddivision == 0) {
		var code = 1
	};
	if (oiddivision == 1) {
		var code = 0
	};
	if (oiddivision == 2) {
		var code = "X"
	};
	if (oiddivision == 3) {
		var code = 9
	};
	if (oiddivision == 4) {
		var code = 8
	};
	if (oiddivision == 5) {
		var code = 7
	};
	if (oiddivision == 6) {
		var code = 6
	};
	if (oiddivision == 7) {
		var code = 5
	};
	if (oiddivision == 8) {
		var code = 4
	};
	if (oiddivision == 9) {
		var code = 3
	};
	if (oiddivision == 10) {
		var code = 2
	};
	if (number.length == 18){
		if (number.slice(17,18).toUpperCase() == code) {
			return "true";
		}else {
			return "false";
		};
	}
	if (number.length == 17){
		return code;
	}
	if (number.length != 17) {
		if (number.length != 18) {
			console.error(name+":"+"身份证格式或位数不符合规定。ID card format or digits do not meet the requirements.");
		}
	}
};
