let availableKeywords = [
    'Courses',
    'Universities',
    'About',
    'Contacts',
    'Architecture',
    'Agriculture',
    'Business',
    'Education',
    'Engineering',
    'Formal Sciences',
    'Health Sciences',
    'Humanities',
    'Media and Communication',
    'Nutrition',
    'Social Sciences',
    'Transportation',
    'Adamson University',
    'Ateneo de Manila University',
    'De lasalle University',
    'Far Eastern University',
    'Lyceum of the Philippines University',
    'Mapua University',
    'National University',
    'Polytechnic University of the Philippines',
    'San beda University',
    'University of the East',
    'University of the Philippines',
    'University of Santo Tomas',
];

const resultBox =  document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup=function(){
    let result = []
    let input = inputBox.value;
    if (input.length)
    {
        result = availableKeywords.filter((keyword) =>
        {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list) =>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });
    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
     inputBox.value = list.innerHTML;
     resultBox.innerHTML = '';
}
function selectInput(list) {
    const selectedKeyword = list.innerHTML;
    // Check if the selected keyword matches any specific keyword for redirection
    if (selectedKeyword === 'Courses') {
        window.location.href = '../html/page_3_course.html'; // Redirect to courses page
    }
    else if (selectedKeyword === 'Architecture') {
        window.location.href = '../html/page_3_course.html?course=c1';   
    }
    else if (selectedKeyword === 'Agriculture') {
        window.location.href = '../html/page_3_course.html?course=c2';   
    }
    else if (selectedKeyword === 'Business') {
        window.location.href = '../html/page_3_course.html?course=c3';   
    }
    else if (selectedKeyword === 'Education') {
        window.location.href = '../html/page_3_course.html?course=c4';   
    }
    else if (selectedKeyword === 'Engineering') {
        window.location.href = '../html/page_3_course.html?course=c5';   
    }
    else if (selectedKeyword === 'Formal Sciences') {
        window.location.href = '../html/page_3_course.html?course=c6';   
    }
    else if (selectedKeyword === 'Health Sciences') {
        window.location.href = '../html/page_3_course.html?course=c7';   
    }
    else if (selectedKeyword === 'Humanities') {
        window.location.href = '../html/page_3_course.html?course=c8';   
    }
    else if (selectedKeyword === 'Media and Communication') {
        window.location.href = '../html/page_3_course.html?course=c9';   
    }
    else if (selectedKeyword === 'Nutrition') {
        window.location.href = '../html/page_3_course.html?course=c10';   
    }
    else if (selectedKeyword === 'Social Sciences') {
        window.location.href = '../html/page_3_course.html?course=c11';   
    }
    else if (selectedKeyword === 'Transportation') {
        window.location.href = '../html/page_3_course.html?course=c12';   
    }
    else {
        // Redirect to a generic search results page or handle other keywords
        // Redirect to a page based on the selected keyword
        window.location.href = '/search-results.html?keyword=' + encodeURIComponent(selectedKeyword);
    }
}
