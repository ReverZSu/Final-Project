let availableKeywords = [
    'Home',
    'Courses',
    'Universities',
    'About',
    'About Courses',
    'About Universities',
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
    else if (selectedKeyword === 'Home') {
        window.location.href = '../html/page_2_home.html';   
    }
    else if (selectedKeyword === 'Universities') {
        window.location.href = '../html/page_4_university.html';   
    }
    else if (selectedKeyword === 'About') {
        window.location.href = '../html/page_5_about.html';   
    }
    else if (selectedKeyword === 'About Courses') {
        window.location.href = '../html/page_5_about.html#C';   
    }
    else if (selectedKeyword === 'About Universities') {
        window.location.href = '../html/page_5_about.html#U';   
    }
    else if (selectedKeyword === 'Contacts') {
        window.location.href = '../html/page_6_contact.html';   
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
    else if (selectedKeyword === 'Adamson University') {
        window.location.href = '../html/page_4_university.html?universityy=uni1';   
    }
    else if (selectedKeyword === 'Ateneo de Manila University') {
        window.location.href = '../html/page_4_university.html?universityy=uni2';   
    }
    else if (selectedKeyword === 'De lasalle University') {
        window.location.href = '../html/page_4_university.html?universityy=uni3';   
    }
    else if (selectedKeyword === 'Far Eastern University') {
        window.location.href = '../html/page_4_university.html?universityy=uni4';   
    }
    else if (selectedKeyword === 'Lyceum of the Philippines University') {
        window.location.href = '../html/page_4_university.html?universityy=uni5';   
    }
    else if (selectedKeyword === 'Mapua University') {
        window.location.href = '../html/page_4_university.html?universityy=uni6';   
    }
    else if (selectedKeyword === 'National University') {
        window.location.href = '../html/page_4_university.html?universityy=uni7';   
    }
    else if (selectedKeyword === 'Polytechnic University of the Philippines') {
        window.location.href = '../html/page_4_university.html?universityy=uni8';   
    }
    else if (selectedKeyword === 'San beda University') {
        window.location.href = '../html/page_4_university.html?universityy=uni9';   
    }
    else if (selectedKeyword === 'University of the East') {
        window.location.href = '../html/page_4_university.html?universityy=uni10';   
    }
    else if (selectedKeyword === 'University of the Philippines') {
        window.location.href = '../html/page_4_university.html?universityy=uni11';   
    }
    else if (selectedKeyword === 'University of Santo Tomas') {
        window.location.href = '../html/page_4_university.html?universityy=uni12';   
    }

    else {
        // Redirect to a generic search results page or handle other keywords
        // Redirect to a page based on the selected keyword
        window.location.href = '/search-results.html?keyword=' + encodeURIComponent(selectedKeyword);
    }
}
