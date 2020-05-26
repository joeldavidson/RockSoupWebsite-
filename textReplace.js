var gal_par = ["tt_par1","tt_par2","tt_par3","tt_par4","tt_par5","tt_par6","tt_par7","tt_par8","tt_par9"];
var gal_img = ["tt_img1","tt_img2","tt_img3","tt_img4","tt_img5","tt_img6","tt_img7","tt_img8","tt_img9"];

function text(page,ind){
	document.getElementById(tt_par[ind]).style.display = "block";
	document.getElementById(tt_par[ind]).innerHTML = tt_captions[ind];
	document.getElementById(tt_img[ind]).style.display = "none";
}
function image(page, ind){
	document.getElementById(tt_par[ind]).style.display = "none";
	document.getElementById(tt_par[ind]).innerHTML = "";
	document.getElementById(tt_img[ind]).style.display = "block";
}