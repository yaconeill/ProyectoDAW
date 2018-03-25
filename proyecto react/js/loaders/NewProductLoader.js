function start(){
  ReactDOM.render(<NewProductComponent/>,document.getElementById('react'));
}

$(function(){
  start();
  checkCookie();
  uploadFile();
});