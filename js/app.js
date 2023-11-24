let activities = [];

async function getActivities() {
    try {
        const response = await fetch("http://localhost/digipad_todo/api/index.php?cmd=all", {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        activities = await response.json();
        activities.sort((a, b) => a.id - b.id); // Sort activities by id
        generateActivityHTML();

        console.log('Activities:', activities);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function generateActivityHTML(activity) {
    const imgSrc = activity.done === '1' ? 'img/krul.png' : 'img/cross.png';
    const finishedAtInfo = activity.finished_at ? `Afgemaakt op: ${activity.finished_at}` : '';
    const deleteButtonStyle = activity.done === '1' ? '' : 'style="display:none;"';
    const deleteButton = `<button id="${activity.id}" ondblclick="deleteActivity(this.id)" class="delete" ${deleteButtonStyle} style="background-image: url('img/trash.png'); border:none; background-repeat:no-repeat;background-size:100% 100%;"></button>`;

    return `
        <div class="activity">
            ${deleteButton}
            <h2 class="number">${activity.id}</h2>
            <h2 class="content">${activity.task}
                <h6 class="dates">Toegevoegd op: ${activity.created_at}. ${finishedAtInfo}</h6>
            </h2>
            <button id="${activity.id}" onclick="joinedButtonClick(${activity.id}, this)" class="icon" style="border:none; background-image: url('${imgSrc}'); background-repeat:no-repeat; background-size:contain; background-position:center;"></button>
        </div>
    `;
}

function joinedButtonClick(id, imgElement) {
    activityDone(id);
    changeImage(imgElement);
    toggleDeleteButton(imgElement);
}

// Function to display activities in the container
function displayActivities(activities) {
    const container = document.getElementById('activitiesContainer');

    // Clear existing content in the container
    container.innerHTML = '';

    // Iterate through activities and append HTML to the container
    activities.forEach(activity => {
        const activityHTML = generateActivityHTML(activity);
        container.innerHTML += activityHTML;
    });
}

// Fetch activities and display them
getActivities().then(() => {
    displayActivities(activities);
});