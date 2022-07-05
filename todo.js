function listTodos() {
    console.log("Ajax Call intiaited");
    var request = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/todos";
    var c = 0;
    request.open("GET", url, false);
    request.onreadystatechange = function () {
        console.log("output");
        if (request.readyState == 4 && request.status == 200) {
            var listcard = document.getElementById("listcard");
            listcard.innerHTML = "";
            var response = JSON.parse(this.responseText);
            for (let i = 0; i < 20; i++) {
                let check = "";
                if (response[i].completed == true) {
                    check = "checked";
                    c++;
                }
                if (response[i].userId == 1) {
                    listcard.innerHTML = listcard.innerHTML + `<li` + `${response[i].completed ? ' class="striked todo"' : " class='todo'"}> ${response[i].title} <input type="checkbox" onclick="handleClick(${i})" ${check} ></input></li>`
                }
            }

        }
    }
    request.send();
    return 0;

}