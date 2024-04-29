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
    'Environmental Planning',
    'Interior Design',
    'Landscape Architecture',
    'Agribusiness Management (BS Agribusiness Management)',
    'Agricultural Engineering (BS AgriEng)',
    'Animal Science (BS Animal Science)',
    'Crop Science (BS Crop Science)',
    'Food Technology (BS Food Tech)',
    'Agricultural Biotechnology (BS Agri Biotech)',
    'Horticulture (BS Horticulture)',
    'Soil Science (BS Soil Science)',
    'Agricultural Economics (BS Agri Econ)',
    'Agroforestry (BS Agroforestry)',
    'Environmental Science (BS Environmental Science)',
    'Fisheries (BS Fisheries)',
    'Forestry (BS Forestry)',
    'Landscape Architecture (BS Landscape Architecture)',
    'Veterinary Medicine (BS Veterinary Medicine)',
    'Business Administration (BBA)',
    'Business Administration (BSBA)',
    'Commerce (B.Com)',
    'Business Management (BBM)',
    'Business Economics',
    'Economics and Finance',
    'Economics and Management',
    'Business Communication',
    'Entrepreneurship',
    'Marketing',
    'Finance',
    'Accounting',
    'Management Information Systems',
    'Operations Management',
    'Human Resource Management',
    'Arts in Education (BAEd)',
    'Elementary Education (BEEd)',
    'Secondary Education (BSEd)',
    'Early Childhood Education (BECED)',
    'Special Education (BSPED)',
    'Mechanical Engineering (BSME)',
    'Civil Engineering (BSCE)',
    'Electrical Engineering (BSEE)',
    'Computer Engineering (BSCpE)',
    'Chemical Engineering (BSCHE)',
    'Aerospace Engineering (BSAE)',
    'Biomedical Engineering (BSBE)',
    'Environmental Engineering (BSEnvE)',
    'Industrial Engineering (BSIE)',
    'Materials Engineering (BSMatE)',
    'Mathematics',
    'Computer Science',
    'Statistics',
    'Physics',
    'Applied Mathematics',
    'Data Science',
    'Computational Science',
    'Actuarial Science',
    'Nursing (BSN)',
    'Public Health (BPH)',
    'Medical Laboratory Science (BMLS)',
    'Nutrition and Dietetics (BND)',
    'Health Sciences (BHS)',
    'Health Administration (BHA)',
    'Health Informatics (BHI)',
    'Physical Therapy (BPT)',
    'Occupational Therapy (BOT)',
    'Speech-Language Pathology (BSLP)',
    'English',
    'Bachelor of Arts in English',
    'Bachelor of Arts in History',
    'Bachelor of Arts in Philosophy',
    'Bachelor of Arts in Linguistics',
    'Bachelor of Arts in Comparative Literature',
    'Bachelor of Arts in Cultural Studies',
    'Bachelor of Arts in Religious Studies',
    'Bachelor of Arts in Anthropology',
    'Bachelor of Arts in Archaeology',
    'Bachelor of Arts in Classics',
    'Communication',
    'Journalism',
    'Broadcasting',
    'Multimedia Arts',
    'Advertising',
    'Public Relations',
    'Film and Media Studies',
    'Digital Media',
    'Communication Research',
    'Development Communication',
    'Nutrition and Dietetics',
    'Public Health Nutrition',
    'Food Technology with a Specialization in Nutrition',
    'Community Nutrition',
    'Clinical Nutrition',
    'Sociology',
    'Political Science',
    'Anthropology',
    'Economics',
    'Psychology',
    'Development Studies',
    'International Studies',
    'Social Work',
    'Geography',
    'Communication Arts',
    'Civil Engineering with a Specialization in Transportation Engineering',
    'Transportation Management',
    'Aeronautical Engineering',
    'Maritime Transportation',
    'Logistics Management',
    'Aviation Management',
    'Automotive Engineering',
    'Railroad Engineering',

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
    else if (selectedKeyword === 'Architecture'||selectedKeyword === 'Environmental Planning'||selectedKeyword === 'Interior Design'||selectedKeyword === 'Landscape Architecture') {
        window.location.href = '../html/page_3_course.html?course=c1';   
    }
    else if (selectedKeyword === 'Agriculture'||selectedKeyword === ' Agribusiness Management (BS Agribusiness Management)'||selectedKeyword === ' Agricultural Engineering (BS AgriEng)'||selectedKeyword === 'Animal Science (BS Animal Science)'||selectedKeyword === 'Crop Science (BS Crop Science)'||selectedKeyword === 'Food Technology (BS Food Tech)'||selectedKeyword === 'Agricultural Biotechnology (BS Agri Biotech)'||selectedKeyword === 'Horticulture (BS Horticulture)'||selectedKeyword === 'Soil Science (BS Soil Science)'||selectedKeyword === 'Agricultural Economics (BS Agri Econ)'||selectedKeyword === 'Agroforestry (BS Agroforestry)'||selectedKeyword === 'Environmental Science (BS Environmental Science)'||selectedKeyword === 'Fisheries (BS Fisheries)'||selectedKeyword === 'Forestry (BS Forestry)'||selectedKeyword === 'Landscape Architecture (BS Landscape Architecture)'||selectedKeyword === 'Veterinary Medicine (BS Veterinary Medicine)') {
        window.location.href = '../html/page_3_course.html?course=c2';   
    }
    else if (selectedKeyword === 'Business' || selectedKeyword === 'Business Administration (BBA)'||selectedKeyword === 'Business Administration (BSBA)'||selectedKeyword === 'Commerce (B.Com)'||selectedKeyword === 'Business Management (BBM)'||selectedKeyword === 'Business Economics'||selectedKeyword === ' Economics'||selectedKeyword === 'Economics and Finance'||selectedKeyword === 'Economics and Management'||selectedKeyword === 'Business Communication'||selectedKeyword === 'Entrepreneurship'||selectedKeyword === 'Marketing'||selectedKeyword === 'Finance'||selectedKeyword === 'Accounting'||selectedKeyword === 'Management Information Systems'||selectedKeyword === 'Operations Management'||selectedKeyword === 'Human Resource Management   ') {
        window.location.href = '../html/page_3_course.html?course=c3';   
    }
    else if (selectedKeyword === 'Education'||selectedKeyword === 'Arts in Education (BAEd) '||selectedKeyword === 'Elementary Education (BEEd)'||selectedKeyword === 'Secondary Education (BSEd)'||selectedKeyword === 'Early Childhood Education (BECED)'||selectedKeyword === 'Special Education (BSPED)') {
        window.location.href = '../html/page_3_course.html?course=c4';   
    }
    else if (selectedKeyword === 'Engineering' || selectedKeyword === 'Mechanical Engineering (BSME)'|| selectedKeyword === 'Civil Engineering (BSCE)'|| selectedKeyword === 'Electrical Engineering (BSEE)'|| selectedKeyword === 'Computer Engineering (BSCpE)'|| selectedKeyword === 'Chemical Engineering (BSCHE)'|| selectedKeyword === 'Aerospace Engineering (BSAE)'|| selectedKeyword === 'Biomedical Engineering (BSBE)'|| selectedKeyword === 'Environmental Engineering (BSEnvE)'|| selectedKeyword === 'Industrial Engineering (BSIE)'|| selectedKeyword === 'Materials Engineering (BSMatE)') {
        window.location.href = '../html/page_3_course.html?course=c5';   
    }
    else if (selectedKeyword === 'Formal Sciences'||selectedKeyword === 'Mathematics'||selectedKeyword === 'Computer Science'||selectedKeyword === 'Statistics'||selectedKeyword === 'Physics'||selectedKeyword === 'Applied Mathematics'||selectedKeyword === 'Data Science'||selectedKeyword === 'Computational Science'||selectedKeyword === ' Actuarial Science') {
        window.location.href = '../html/page_3_course.html?course=c6';   
    }
    else if (selectedKeyword === 'Health Sciences'||selectedKeyword === 'Science in Nursing (BSN)'||selectedKeyword === ' Public Health (BPH)'||selectedKeyword === 'Medical Laboratory Science (BMLS)'||selectedKeyword === 'Nutrition and Dietetics (BND)'||selectedKeyword === 'Health Sciences (BHS)'||selectedKeyword === 'Health Administration (BHA)'||selectedKeyword === 'Health Informatics (BHI)'||selectedKeyword === 'Physical Therapy (BPT)'||selectedKeyword === 'Occupational Therapy (BOT)'||selectedKeyword === 'Speech-Language Pathology (BSLP)') {
        window.location.href = '../html/page_3_course.html?course=c7';   
    }
    else if (selectedKeyword === 'Humanities'||selectedKeyword === 'Bachelor of Arts in English'||selectedKeyword === 'Bachelor of Arts in History'||selectedKeyword === 'Bachelor of Arts in Philosophy'||selectedKeyword === 'Bachelor of Arts in Linguistics'||selectedKeyword === 'Bachelor of Arts in Comparative Literature'||selectedKeyword === 'Bachelor of Arts in Cultural Studies'||selectedKeyword === 'Bachelor of Arts in Religious Studies'||selectedKeyword === ''||selectedKeyword === 'Bachelor of Arts in Anthropology'||selectedKeyword === 'Bachelor of Arts in Archaeology'|| selectedKeyword === 'Bachelor of Arts in Classics') {
        window.location.href = '../html/page_3_course.html?course=c8';   
    }
    else if (selectedKeyword === 'Media and Communication' ||selectedKeyword === 'Communication'||selectedKeyword === 'Journalism'||selectedKeyword === 'Broadcasting'||selectedKeyword === 'Multimedia Arts'||selectedKeyword === 'Advertising'||selectedKeyword === 'Public Relations'||selectedKeyword === 'Film and Media Studies'||selectedKeyword === 'Digital Media'||selectedKeyword === 'Communication Research'||selectedKeyword === 'Development Communication') {
        window.location.href = '../html/page_3_course.html?course=c9';   
    }
    else if (selectedKeyword === 'Nutrition'||selectedKeyword === 'Nutrition and Dietetics'||selectedKeyword === 'Public Health Nutrition'||selectedKeyword === ' Food Technology with a Specialization in Nutrition'||selectedKeyword === 'Community Nutrition'||selectedKeyword === 'Clinical Nutrition'){
        window.location.href = '../html/page_3_course.html?course=c10';   
    }
    else if (selectedKeyword === 'Social Sciences'||selectedKeyword === 'Sociology'||selectedKeyword === 'Political Science'||selectedKeyword === 'Anthropology'||selectedKeyword === 'Economics'||selectedKeyword === 'Psychology'||selectedKeyword === 'Development Studies'||selectedKeyword === 'International Studies'||selectedKeyword === 'Social Work'||selectedKeyword === 'Geography'||selectedKeyword === 'Communication Arts') {
        window.location.href = '../html/page_3_course.html?course=c11';   
    }
    else if (selectedKeyword === 'Transportation'||selectedKeyword === 'Civil Engineering with a Specialization in Transportation Engineering'||selectedKeyword === 'Transportation Management'||selectedKeyword === 'Aeronautical Engineering'||selectedKeyword === 'Maritime Transportation'||selectedKeyword === ' Logistics Management'||selectedKeyword === 'Aviation Management'||selectedKeyword === 'Automotive Engineering'||selectedKeyword === 'Railroad Engineering') {
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
