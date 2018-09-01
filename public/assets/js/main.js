$(document).ready(function() {
   
$(document).on('click', '.new-user', function(e) {
  e.preventDefault();
  var username = $('#username').val();
  var pw = $('#password').val();
  $.ajax({
    url:'/api/' + username.replace(/\s+/g, "").toLowerCase(),
    method: 'post',
    data: { name: username, password: pw },
    success: function(res) {
      $('.users').append(
        `<li class="user${res.username} list-group-item">${res.username}
            <button class="user btn btn-success" data-name=${res.username} data-id=${res.id}>></button>
          </li>`
        )
      }
  })
})

$(document).on('click', '.user', function(e) {
   e.preventDefault();
   var username = $(this).data('name').replace(/\s+/g, "").toLowerCase();
   var userId = $(this).data('id');
   var query = '/' + username + '/' + userId;
   $.get(query, function(data) {
      window.location.replace(query);
   });
});

$(document).on('click', '.new-todo', function(e) {
    e.preventDefault();
    var username = $(this).data('name');
    var todo_desc = $('#todo-desc').val();
    var id = $(this).data('id');
    $.ajax({
      url: '/api/' + username + '/todos',
      method: 'post',
      data: { todo_desc: todo_desc, uid: id },
      success: function(res) {
        $('.todo').append(
          `<li class="todo${res.id} list-group-item" data-id=${res.id}>${res.todo_desc}
              <button class="btn done btn-success" data-id=${res.id}>✓</button>
            </li>`
          );
      }
    });
    $('#todo-desc').val('');
});

$(document).on('click', '.done', function(e) {
    e.preventDefault();
    var id = $(this).data('id');
    var username = $('#user-name').data('name');
    $.ajax({
        url: '/' + username,
        method: 'put',
        data: { id: id, completed: 1 },
        success: function(res) {
            var completed = $(`.todo${id}`);
            completed.remove();
            completed.children().remove();
            completed.append(
                  `<button class="btn btn-danger delete" data-id=${id}>x</button>`
            )
            $('.completed').append(completed);                
        }
    });
});

$(document).on('click', '.delete', function(e) {
    e.preventDefault();
    var username = $('#username').val();
    var id = $(this).data('id');
    $.ajax({
        url: '/' + username + '/' + id,
        method: 'delete',
        data: { id: id },
        success: function(res) {
            $(`.todo${id}`).remove();
        }
    });
});


});
