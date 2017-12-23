
export const load = (callback) => {
  var url = new URL(window.location.href);
  var showId = url.searchParams.get("show");
  if(showId != null){
    axios.post('/show/play/', {showId: showId})
    .then(response => {
      callback(response.data);
    })
    .catch(e =>{
      callback();
    });
  }
}

export const convertSize = (asset) => {
    let assetItem = JSON.parse(JSON.stringify(asset));
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let editorHeight = 620;
    let editorWidth = 1080;
    let perX = windowWidth / editorWidth;
    let perY = windowHeight / editorHeight;
    if(asset.type!=assetTypes.TYPE_CUSTOM){
      assetItem.height = perY*parseInt(asset.height)+'px';
      assetItem.width = perX*parseInt(asset.width)+'px';
      assetItem.y = perY*parseInt(asset.y)+'px';
      assetItem.x = perX*parseInt(asset.x)+'px';
    }else{
      let halfHeight = parseInt(assetItem.height) / 2;
      let halfWidth = parseInt(assetItem.width) / 2;
      assetItem.y = perY*(parseInt(assetItem.y)+halfHeight) - halfHeight+'px';
      assetItem.x = perX*(parseInt(assetItem.x)+halfWidth) - halfWidth+'px';
    }
    return assetItem;
}
