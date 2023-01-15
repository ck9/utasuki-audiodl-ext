function dlFile() {
  if (document.getElementsByClassName("analysis-player__controller").length === 0 || document.getElementsByClassName("dl__btn").length > 0) {
    location.href = "https://utasuki.joysound.com/utasuki/mypage/analysis/?tabName=audio";
    return;
  }
  try {
    analysisId = location.href.split("analysisId=")[1];
    const audioURL = "https://pd.joysound.com/ass/audio?asid=" + analysisId + "&fmt=m4a";
    const musicTitle = document.getElementsByClassName("general-info-music__song")[0].innerText;
    const analysisScore = document.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[0].getElementsByTagName("td")[0].innerText;
    const fileName = musicTitle + " - " + analysisScore + "点.m4a";
    const today = new Date();
    const dirName = "utasuki-dl/" + today.getFullYear() + ("0" + (dt.getMonth()+1)).slice(-2)  + ("0" + (dt.getDate())).slice(-2);
    console.log(audioURL, fileName, dirName);
    chrome.runtime.sendMessage({
      url: audioURL,
      fileMame: fileName,
      dirName: dirName
    });
  } catch (e) {
    console.log(e);
  }
}

dlFile();