const startButton = document.querySelector(".start_btn");
// 상수 startButton 선언 
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const loading = document.querySelector(".result_loading");

function calculator() {
// 함수 calculator 선언
    const fieldValue = document.querySelector("#field_value");
    // 상수 fieldValue 선언
    let timeValue = document.querySelector("#time_value");
    // 변수 timevalue 선언
    let timeValue_int = Number(timeValue.value);
	// 변수 timevalue_int 선언

    const fieldResult = document.querySelector(".field_result");
    // 상수 fieldResult 선언
    const timeResult = document.querySelector(".time_result");
	// 상주 timeResult 선언

    if(fieldValue.value == "") {
    // if문 선언
        alert('입력되지 않았습니다.');
        // 경고문 입력되지 않았습니다. 띄우기
        fieldValue.focus();
        // 
        return false;
        // 함수의 결과로 false 값을 리턴
    } else if (timeValue.value== "") {
    // else if 문 선언 timeValue 값이 공백일때 괄호안에 문장 실행
        alert('입력되지 않았습니다.');
        // 경고문 입력되지 않았습니다 출력
        timeValue.focus();
        // 객채 timeValue의 속성값 focus 출력
        return false;
        // false 값 리턴
    } else if (timeValue_int > 24) {
    // else if문 선언 timeValue_int 값이 24 초과일때 괄호안의 문장 선언 
        alert('잘못된 값입니다. 24이하의 값을 입력해 주세요.');
        // 경고문으로 잘못된 값입니다. 24이하의 값을 입력해 주세요. 출력
        return false;
        // false 값 리턴
    }

    result.style.display = "none";
    // 객체 result의 속성값 style의 속성 display 값에 none 저장
    loading.style.display = "flex";
    // 객체 loading의 속성값 style의 속성 display 값에 flex 저장

    setTimeout(function() {
    // 
        loading.style.display = "none";
        result.style.display = "flex";
        fieldResult.innerText = fieldValue.value;
        timeResult.innerText = parseInt((10000/timeValue_int), 10);
    }, 1800);   
}

function openModal() {
// 함수 openModal 선언
    modal.style.display = "flex";
    // modal 객체의 속성 style의 속성 display에 flex 저장
}

function closeModal() {
// 함수 closeModal 선언
    modal.style.display = "none";
    // modal 객체의 속성 style의 속성 display에 none 저장
}

window.onclick = function (event) {
    if(event.target == modal) {
    // if문 선언, event.target 값이 modal과 같을 때 괄호 안의 문장 실행 
        closeModal();
        // 함수 closeModal(); 호출
    }
};

function copyUrl() {
    const url = window.location.href;

    navigator.clipboard.writeText(url).then(() => {
        alert("URL이 복사되었습니다"); 
    });
}

shareButton.addEventListener('click', copyUrl);
// 함수 addEventListener 호출
openButton.addEventListener("click", openModal);
// 함수 addEventListener 호출
closeButton.addEventListener("click", closeModal);
// 함수 addEventListener 호출
startButton.addEventListener("click", calculator);
// 함수 addEventListener 호출