require('./bootstrap');

window.addEventListener('DOMContentLoaded',function(event){
    let deleteButtons = this.document.querySelectorAll('.delete-quiz');

    deleteButtons.forEach(deleteButton=>{
        deleteButton.addEventListener('click',function(event){
            let quizId =this.dataset.id;

            if(!confirm('id:' + quizId + 'を削除します\nよろしいですか？')){
                return;
            }
            axios.delete('/quizzes/' + quizId)
                .then(function(response){
                    let row =event.target.closest("tr");
                    row.parentNode.removeChild(row);

                    alert('削除したよ')
                    console.log(response);
            })
            .catch(function(error){
                alert(error)
                console.log(error);
            })
        })
    })
});