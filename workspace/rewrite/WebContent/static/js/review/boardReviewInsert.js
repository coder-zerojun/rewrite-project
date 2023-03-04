/**
 *  boardReviewInsert.jsp
 */

const file = document.querySelector('input[type=file]');
const imgDiv = document.querySelector('div.fileContainer');
const closeButton = document.querySelector('button.file-Container-Btn ');
const input = document.querySelector('#attach');
const fileT = document.querySelector('.fileTest');
const $inputButton = $('.file-btn-lable');

closeButton.addEventListener('click', function (e) {
    imgDiv.style.display = 'none';
    $inputButton.show();
});

file.addEventListener('change', function (e) {
    // closeSpan(x 버튼)을 보이게 하기
    imgDiv.style.display = 'block';
    // 기존의 이미지 숨김 처리
    this.style.display = 'none';
    let reader = new FileReader();
    // 이벤트 타겟의 url을 불러와서
    reader.readAsDataURL(e.target.files[0]);
    // 올리기
    // onload - file이 로드된 후 발생하는 이벤트
    reader.onload = function (e) {
        // 이벤트가 발생된 타겟의 url을 출력해서 result에 담아줌
        let result = e.target.result;
        // result가 이미지라면 result에 담긴 이미지로 설정
        if (result.includes('image')) {
            fileT.style.backgroundImage = `url('${result}')`;
            $inputButton.hide();
            // 이미지가 아니라면 no_image.png를 이미지로 설정
        } else {
            imgDiv.style.display = 'none';
        }
    };
});

const $textArea = $('.massage-content');
const AreaBox = document.querySelector('.massage-content-wrap');

$textArea.on('focus', function () {
    AreaBox.style.border = '1px solid';
});

$textArea.on('blur', function () {
    AreaBox.style.border = '';
});
