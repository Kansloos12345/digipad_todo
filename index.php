<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Erik Hutinks To-Do List</title>
    <link rel="stylesheet" href="./css/index.css">
    <link rel="icon" type="image/x-icon" href="./img/pad.png">
</head>
<body>

    <div class="paper">
        <h1>
            To-Do list
        </h1>

        <!-- for the foreach loop in app.js -->
        <div id="activitiesContainer"></div>

        <div>
            <p class="copyright-text">Alle rechten voorbehouden door DIGIPAD™ inc.</p>
        </div>

        <div class="extras" id="add-activity">
            <h2 class="title">Create Activity</h2>
            <form id="form">
                <div>
                    <input type="text" id="task" class="username" name="task" placeholder="Task"/>
                    <input type="text" id="created_at" name="created_at" value="" style="display:none;"/>
                </div>
                <button id="submit" type="submit">Post</button>
            </form>
        </div>

<!--        <div class="extras" id="log-in">-->
<!--            <h2 class="title">Log in</h2>-->
<!--            <form id="login">-->
<!--                <div>-->
<!--                    <input type="text" class="username" id="name" />-->
<!--                </div>-->
<!--                <button id="submit" type="submit">Ok</button>-->
<!--            </form>-->
<!--        </div>-->
        
    </div>
    <script src="js/form.js"></script>
    <script src="js/app.js"></script>
    <script src="js/index.js"></script>
</body>
</html>