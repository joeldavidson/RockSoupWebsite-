var gal_par = ["gal_par1","gal_par2","gal_par3","gal_par4","gal_par5","gal_par6"];
var gal_img = ["gal_img1","gal_img2","gal_img3","gal_img4","gal_img5","gal_img6"];

function text(ind){
	document.getElementById(gal_par[ind]).style.display = "block";
	document.getElementById(gal_img[ind]).style.display = "none";
}
function image(ind){
	document.getElementById(gal_par[ind]).style.display = "none";
	document.getElementById(gal_img[ind]).style.display = "block";
}