function getmark(ch) {
	if (ch == 'O')
		return 10;
	else if (ch == 'A+')
		return 9;
	else if (ch == 'A')
		return 8;
	else if (ch == 'B+')
		return 7;
	else if (ch == 'B')
		return 6;
	else if (ch == 'C')
		return 5;
	else
		return 0;
}
function gpa() {
	let ds_obj = document.getElementById('ds');
	let dbms_obj = document.getElementById('dbms');
	let ca_obj = document.getElementById('ca');
	let oops_obj = document.getElementById('oops');
	let maths_obj = document.getElementById('maths');
	let dslb_obj = document.getElementById('ds_lab');
	let dbms_lb_obj = document.getElementById('dbms_lab');

	let ds = ds_obj.value;
	let dbms = dbms_obj.value;
	let ca = ca_obj.value;
	let oops = oops_obj.value;
	let maths = maths_obj.value;
	let dslb = dslb_obj.value;
	let dbms_lb = dbms_lb_obj.value;

	const tot_cdt = 19;

	const a = getmark(ds);
	const b = getmark(dbms);
	const c = getmark(ca);
	const d = getmark(oops);
	const e = getmark(maths);
	const f = getmark(dslb);
	const g = getmark(dbms_lb);

	const result = ((3 * (a + b + c + d + e)) + (2 * (f + g))) / tot_cdt;
	document.getElementById("result").innerHTML = "GPA: " + result.toPrecision(4);
}

