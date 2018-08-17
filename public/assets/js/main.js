$(document).on('click', '.new-user', function(e) {
    e.preventDefault();
    var username = $('#username').val();
    $.ajax({
        url:'/api/' + username.replace(/\s+/g, "").toLowerCase(),
        method: 'post',
        data: { name: username },
        success: function(res) {
         console.log(res);
         $('.users').append(
            `<li class="user${res.name} list-group-item">${res.name}
                    <button class="user btn btn-success" data-name=${res.name} data-id=${res.uuid}>></button>
            </li>`
         )
        }
    })
})

$(document).on('click', '.user', function(e) {
   e.preventDefault();
   var username = $(this).data('name');
   var uuid = $(this).data('id');
   var query = '/' + username + '/' + uuid;
   $.get(query, function(data) {
      console.log(data);
   })
});

$(document).on('click', '.new-todo', function(e) {
    e.preventDefault();
    var todo_desc = $('#todo-desc').val();
    $.ajax({
        url: '/',
        method: 'post',
        data: { todo_desc: todo_desc },
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
    $.ajax({
        url: '/update/' + id,
        method: 'put',
        data: { id: id },
        success: function(res) {
            var completed = $(`.todo${id}`);
            completed.remove();
            completed.children().remove();
            completed.append(
                `<button class="btn btn-danger delete" data-id=${this.id}>x</button>`
            )
            $('.completed').append(completed);                
        }
    });
});

$(document).on('click', '.delete', function(e) {
    e.preventDefault();
    var id = $(this).data('id');
    $.ajax({
        url: '/delete/' + id,
        method: 'delete',
        data: { id: id },
        success: function(res) {
            $(`.todo${id}`).remove();
        }
    });
});

// $(document).ready(function() {
//    function getUsers() {
//       $.get('/api/users', function(data) {
         
//       })
//    }
// })
