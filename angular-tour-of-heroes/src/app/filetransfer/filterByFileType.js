const DOCS = [
	'doc',
	'docx',
	'txt',
    'odt',
	'pdf',
    'xls',
    'xlsx',
    'pdf',
	'pptx'
]
const IMAGES = [
	'bmp',
    'gif',
	'jpg',
	'jpeg',
    'tiff',
    'svg',
	'png',
	'url'
]
const AUDIO = [
	'au',
    'midi',
	'mp3',
	'm4a',
	'ogg',
	'ra',
	'ram',
	'wav'
]
const VIDEO = [
	'avi',
	'mpeg',
	'mp4',
	'mov',
	'wmv'	
]
export function buildFileListByFilter(filterName, masterFileList ) {
	console.log(" masterFileList is " + masterFileList);
	let newFilterName = filterName.toUpperCase();
		let holdSelectedFiles = []

		if(newFilterName === "IMAGES"){
			console.log("inside Images")
			let definedIT = '';
		for (let index = 0; index < IMAGES.length; index++) {
		    definedIT += masterFileList.filter(data => {
				return data.indexOf(IMAGES[index]) !== -1 && data != null && data != "" && data != ",";
			});		
		}
		holdSelectedFiles.push(definedIT);
	   }
	   if(newFilterName === "DOCUMENTS"){
		console.log("inside docs")
		let definedDC = '';
       	for (let index = 0; index < DOCS.length; index++) {
	   definedDC += masterFileList.filter(data => {
			return data.indexOf(DOCS[index]) !== -1 && data != null && data != "" && data != ",";
		});		
	}
	 holdSelectedFiles.push(definedDC);
	}
    if(newFilterName === "VIDEOS"){
	console.log("inside video")
	let definedVD = '';
	for (let index = 0; index < VIDEO.length; index++) {
		definedVD += masterFileList.filter(data => {
			return data.indexOf(VIDEO[index]) !== -1 && data != null && data != "" && data != ",";
		});		
	}
       holdSelectedFiles.push(definedVD);
    }
	if(newFilterName === "AUDIO"){
		console.log("inside Audio")
		let definedAU = '';
	for (let index = 0; index < AUDIO.length; index++) {
		definedAU += masterFileList.filter(data => {
			return data.indexOf(AUDIO[index]) !== -1 && data != null && data != "" && data != ",";
		});		
	}
	holdSelectedFiles.push(definedAU);
	}
	  console.log("images are " + holdSelectedFiles + " " + holdSelectedFiles.length);
	  
		let splitItems = '';
        splitItems = holdSelectedFiles[0];
		//console.log("allDotedFiles is " + allDotedFiles + " " +  allDotedFiles.length);
        console.log("holdSelectedFiles[0] is " + splitItems.toString());
		console.log("splitItems is " +  (splitItems.toString().split(',')).length);
		return (splitItems.toString().split(','));
	}
export function CheckCategories(filter) {
	if(DOCS.includes(filter))
		return true;
	if(IMAGES.includes(filter))
		return true;
	if(AUDIO.includes(filter))
		return true;
	if(VIDEO.includes(filter))
		return true;
	else return false;
}