function start(){
  ReactDOM.render(<NewProductComponent/>,document.getElementById('react'));
}

$(function(){
  loadData();  
  start();
  checkCookie();
  uploadFile();
});