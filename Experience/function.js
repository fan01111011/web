var class_list = JSON.parse(classes);
var course_detail = document.getElementsByClassName("course_detail");
var course_content_status = new Array(class_list.length).fill(false); 

var full_description_on_html = ''; 


for (var i = class_list.length - 1; i > -1; i--) {

  let change_line_01 = document.createElement('br');
  let change_line_02 = document.createElement('br');

  let course_background = document.createElement('div');
  course_background.className = 'course_back_ground';

  let class_content_part_1 = document.createElement('p');
  class_content_part_1.className = 'class_title_bold';

  let text = document.createTextNode(class_list[i].class_name);
  class_content_part_1.appendChild(text);
  class_content_part_1.appendChild(change_line_01);

  text = document.createTextNode('School: ');
  class_content_part_1.appendChild(text);
  text = document.createTextNode(class_list[i].school);
  class_content_part_1.appendChild(text);
  class_content_part_1.appendChild(change_line_02);


  let detail_button = document.createElement('button');
  detail_button.id = 'detail_button' + String(i);
  text = document.createTextNode('Show/Hide Details');
  detail_button.appendChild(text);
  class_content_part_1.appendChild(detail_button);

  course_background.appendChild(class_content_part_1);

  let description = document.createElement('p');
  description.id = 'description' + String(i);
  course_background.appendChild(description);
  


  var main_container = document.getElementById('class_list_div');
  
  main_container.appendChild(course_background);

}


for (let i = class_list.length - 1; i > -1; i--){
  console.log(class_list[i].detail);
  document.getElementById('detail_button' + String(i)).addEventListener('click', function(){
    course_content_status[i] = !course_content_status[i];
    if (course_content_status[i] == false){
      document.getElementById('description' + String(i)).innerHTML = '';
    }
    else{
      document.getElementById('description' + String(i)).innerHTML = String(class_list[i].detail);
    }
  });
}


