$(document).ready(function(e){


function listVideos(){
  $.ajax({
      type: 'GET',
      url: '/videos',
      dataType: 'json'
  }).done(function(data){
    $.each(data,function(index, value){
    listv.append('<li id="video" data-id="' + value.id + '">' + value.title + '</li>')  
    })
  })
}

function watchVideo(){
  
  var videoId = $(this).data('id');
  console.log($(this))
  console.log(videoId)
  $.ajax({
      type: 'GET',
      url: '/videos/ ' ,
      dataType: 'json'
  }).done(function(data){
    console.log (data)
    $.each(data,function(index, value){
    console.log(index, value);
    listv.empty()
    film.append('<iframe src=" ' + value.url + '"</iframe>')
    })
  })
}
 
  function addFilm(e) {
    e.preventDefault();
    $.ajax({
      type: 'GET',
      url: '/videos',
      dataType: 'json'
  }).done(function(data){
    listv.empty()
    film.empty()
    var formVideo = '<form action="/videos" method="POST">';
        formVideo += '<input type="text" name="title" placeholder="enter a title" >' 
        formVideo += '<input type="text" name="description" placeholder="enter a descriotion">'
        formVideo += '<input type="text" name="url" placeholder="enter a url" >'
        formVideo += '<input type="text" name="genre" placeholder="enter a genre" >'
        formVideo += ' <button id="create">ADD VIDEO</button>'
        formVideo += '</form>'
    $('#add_video').prepend(formVideo)
   })
  }

function submitFilm(){
  var videoData = $('#add_video').val();
  $.ajax({
    type: 'POST',
    url: '/items',
    dataType: 'json',
    data: {video: videoData}
  }).done(function(data){
    console.log('created');
  })
}



  //variable
var listv = $("#list-videos");
var film = $("#video_page")
   //eventlisterners, //event delegation 
 $('.title').on('click', listVideos)
 $('#list-videos').on('click', '#video', watchVideo)
 $('.add').on('click', addFilm)
 $('#add_video').on('click', '#create', submitFilm)
  
});