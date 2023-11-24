window.onload = function () {
    getActivities();

    form = document.querySelector("form");
    form.addEventListener("submit", handleFormSubmit);
};

function handleFormSubmit(event)
{
    event.preventDefault();

    createNewActivity();
}

async function createNewActivity()
{

    // get form data
    const task = document.getElementById("task").value;

    const created_at = new Date().toISOString(); // ISO format as in YYYY/MM/DD

    document.getElementById("created_at").value = created_at;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("task", task);
    urlencoded.append("created_at", created_at);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    await fetch("http://localhost/digipad_todo/api/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    // refresh page
    window.location.href = "index.php";
}

async function deleteActivity(id) {
    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    await fetch("http://localhost/digipad_todo/api/?id=" + id, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

async function activityDone(id) {
    var requestOptions = {
        method: 'PATCH',
        redirect: 'follow'
    };

    await fetch("http://localhost/digipad_todo/api/?id=" + id, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}