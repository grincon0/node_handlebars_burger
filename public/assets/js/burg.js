$(document).ready(function(){
        $('.checkbox').on('click', function (){
        const d = $(this).attr('isEaten');
        const id = $(this).attr('id');
        $.ajax({
            method:'PUT',
            url: `/burger/${d}`,
            data: {
                devour: id
            },
        }).then((res)=>{
            location.reload();
        })
    });
})



