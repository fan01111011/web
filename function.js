var project_list = JSON.parse(projects);

var project_content_status = new Array(project_list.length).fill(false); // if the content is hided


for (var i = 0; i < project_list.length; i++) {

  let change_line = document.createElement('br'); 

  let project_background = document.createElement('div');
  project_background.className = 'project_back_ground';

  let project_name_container = document.createElement('p');
  project_name_container.className = 'project_title_bold';

  let project_name = document.createTextNode(project_list[i].project_name);
  project_name_container.appendChild(project_name);

  project_background.appendChild(project_name_container);
  project_background.appendChild(change_line);

  let keywords_container = document.createElement('p');
  keywords_container.className = 'keyword_italic';

  let text = document.createTextNode('Keywords: ');
  keywords_container.appendChild(text);

  let keywords = document.createTextNode(project_list[i].key_words);
  keywords_container.appendChild(keywords);
  keywords_container.appendChild(change_line);

  project_background.appendChild(keywords_container);


  let button_container = document.createElement('p');
  let detail_button = document.createElement('button');
  detail_button.id = 'detail_button' + String(i);
  text = document.createTextNode('Show/Hide Details');
  detail_button.appendChild(text);
  button_container.appendChild(detail_button);

  project_background.appendChild(button_container);


  let description = document.createElement('p');
  description.id = 'description' + String(i);
  project_background.appendChild(description);


  var main_container = document.getElementById('projects_list_div');
  
  main_container.appendChild(project_background);

}


for (let i = project_list.length - 1; i > -1; i--){
  console.log(project_list[i].detail);
  document.getElementById('detail_button' + String(i)).addEventListener('click', function(){
    project_content_status[i] = !project_content_status[i];
    if (project_content_status[i] == false){
      document.getElementById('description' + String(i)).innerHTML = '';
    }
    else{
      document.getElementById('description' + String(i)).innerHTML = String(project_list[i].detail);
    }
  });
}


