function App() {
  return(
  <div>
     <div className="text-right font-bold">Gmail 이미지</div>
     <div className="m-16 text-8xl text-center font-bold">Google</div>
     <div className="h-10 m-14 rounded-full bg-slate-100 text-center shadow-2xl text-xl text-slate-900">Google 검색 또는 URL 입력</div>
     
     
     <div className="flex space-x-32 mx-5 text-center">
        <div>
          <img 
            src="https://littledeep.com/wp-content/uploads/2020/09/youtube-icon-style.png" 
            alt="" 
            className="w-16 h-16 object-cover rounded-full"
          />
          <div className="font-bold">유튜브</div>
        </div>  

        <div>
          <img 
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/3393f738210507.575900b317fb4.png" 
            alt="" 
            className="w-16 h-16 object-cover rounded-full"
          />
          <div className="font-bold">네이버</div>
        </div>

        <div>
          <img 
            src="https://blog.kakaocdn.net/dn/Ffssf/btq0Olcdif3/51NJdzq52ojzXFjOrlgv30/daum-%EB%B0%94%EB%A1%9C%EA%B0%80%EA%B8%B0.ico?attach=1&knm=tfile.ico" 
            alt="" 
            className="w-16 h-16 object-cover rounded-full"
          />
          <div className="font-bold">다음</div>
        </div>  
     </div>
     
     <div className="flex space-x-32 mx-3 text-center my-10">
        <div>
          <img 
            src="https://kr.seaicons.com/wp-content/uploads/2016/03/facebook-icon-26.png"
            alt="" 
            className="w-16 h-16 object-cover rounded-full"
          />
          <div className="font-bold">FaceBook</div>
        </div>  

        <div>
          <img 
            src="https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338393_960_720.png" 
            alt="" 
            className="w-16 h-16 object-cover rounded-full"
          />
          <div className="font-bold">Instargram</div>
        </div>

        <div>
          <img 
            src="data:image/png;base64,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" 
            alt="" 
            className="w-16 h-16 object-cover rounded-full"
          />
          <div className="font-bold">트위터</div>
        </div>  
     </div>
  </div>
  );

}


export default App;