document.addEventListener("DOMContentLoaded",
    function(e){
        let configID = document.querySelector("#id i")
        let idText = document.querySelector("#id span")

        configID.addEventListener("click",
            function(e){
                idText.textContent = prompt("새로운 아이디를 입력하세요")
            }
        )
        let profileEditbutton = document.querySelector("#profile_info button")
        let userinfo = document.querySelector("#userinfo")
        let summary = document.querySelector("#summary")
        let profileDetail = document.querySelector("#profileDetail")
        let changing = false

        profileEditbutton.addEventListener("click",
            function(e) {
                if (changing) {
                    let _userinfo = userinfo .querySelector("input").value
                    let _summary = summary .querySelector("input").value
                    let _profileDetail = profileDetail .querySelector("input").value

                    userinfo.innerHTML = _userinfo
                    summary.innerHTML = _summary

                    if(_profileDetail.startsWith("http")){
                        _profileDetail = "<a href="+ _profileDetail +">"+ _profileDetail +"</a>"
                    }
                    profileDetail.innerHTML = _profileDetail

                    e.target.textContent = "프로필 편집"
                    changing = false

                }   else{
                    let _userinfo = userinfo.textContent
                    let _summary = summary.textContent
                    let _profileDetail = profileDetail.textContent

                    userinfo.innerHTML ="<input = value" + _userinfo + "></input>"
                    summary.innerHTML ="<input = value" + _summary + "></input>"
                    profileDetail.innerHTML ="<input = value" + _profileDetail + "></input>"

                    e.target.textContent = "프로필 편집 완료"
                    changing = true

                }
            }
        )

        let profile_pic = document.querySelector("#profile_pic .circle_pic")
        profile_pic.addEventListener("mouseover",
            function(e){
                e.target.style.filter = "grayscale(50%)"
            }      
        )
        profile_pic.addEventListener("mouseleave",
            function(e){
                e.target.style.filter = "grayscale(0%)"
            }      
        )
        profile_pic.addEventListener("click",
            function(e){
                profile_pic.setAttribute("src", prompt("이미지 url을 입력해주세요!"))    
            }      
        )
    }
)